const ALLOWED_TAGS = new Set(["a", "b", "br", "em", "i", "li", "ol", "p", "span", "strong", "ul"]);

const GLOBAL_ATTRIBUTES = new Set(["class"]);
const TAG_ATTRIBUTES: Record<string, Set<string>> = {
  a: new Set(["href", "rel", "target", "title"]),
};

const DANGEROUS_BLOCK_RE =
  /<\s*(script|style|iframe|object|embed|svg|math|template)[\s\S]*?<\s*\/\s*\1\s*>/gi;
const COMMENT_RE = /<!--[\s\S]*?-->/g;
const TAG_RE = /<\/?([a-z][a-z0-9:-]*)(\s[^<>]*)?>/gi;
const ATTR_RE = /([a-zA-Z_:][\w:.-]*)(?:\s*=\s*("[^"]*"|'[^']*'|[^\s"'=<>`]+))?/g;

const isSafeUrl = (value: string) => {
  const trimmed = value.trim().replace(/[\u0000-\u001f\u007f\s]+/g, "");

  return (
    trimmed.startsWith("/") ||
    trimmed.startsWith("#") ||
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("mailto:")
  );
};

const escapeAttribute = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const stripAttributeQuotes = (value: string) =>
  value.startsWith('"') || value.startsWith("'") ? value.slice(1, -1) : value;

const sanitizeAttributes = (tagName: string, rawAttributes = "") => {
  const allowedForTag = TAG_ATTRIBUTES[tagName] ?? new Set<string>();
  const attributes: string[] = [];

  for (const match of rawAttributes.matchAll(ATTR_RE)) {
    const name = match[1].toLowerCase();
    const rawValue = match[2] ? stripAttributeQuotes(match[2]) : "";

    if (name.startsWith("on") || name === "style" || name === "srcdoc") {
      continue;
    }

    if (!GLOBAL_ATTRIBUTES.has(name) && !allowedForTag.has(name)) {
      continue;
    }

    if ((name === "href" || name === "src") && !isSafeUrl(rawValue)) {
      continue;
    }

    if (name === "target" && rawValue !== "_blank") {
      continue;
    }

    attributes.push(`${name}="${escapeAttribute(rawValue)}"`);
  }

  if (tagName === "a" && attributes.some((attribute) => attribute === 'target="_blank"')) {
    const hasRel = attributes.some((attribute) => attribute.startsWith("rel="));

    if (!hasRel) {
      attributes.push('rel="noopener noreferrer"');
    }
  }

  return attributes.length ? ` ${attributes.join(" ")}` : "";
};

export const sanitizeHtmlFragment = (value: unknown) => {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .replace(DANGEROUS_BLOCK_RE, "")
    .replace(COMMENT_RE, "")
    .replace(TAG_RE, (match, rawTagName: string, rawAttributes: string | undefined) => {
      const tagName = rawTagName.toLowerCase();

      if (!ALLOWED_TAGS.has(tagName)) {
        return "";
      }

      if (match.startsWith("</")) {
        return tagName === "br" ? "" : `</${tagName}>`;
      }

      const attributes = sanitizeAttributes(tagName, rawAttributes);

      return tagName === "br" ? "<br />" : `<${tagName}${attributes}>`;
    });
};
