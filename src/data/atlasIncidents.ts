import { atlasEnrichment } from "./atlasEnrichment";

export type AtlasIncidentGroupKey =
  | "routing"
  | "naming"
  | "front_door"
  | "cloud"
  | "platform"
  | "physical";

export type HomePlacement = "timeline" | "archive" | null;

export type AtlasScope = "global" | "regional" | "local";

export type AtlasGeoPoint = {
  lat: number;
  lng: number;
  label: string;
};

export type AtlasAffectedService = {
  name: string;
  providerSlug?: string;
};

export type AtlasSource = {
  label: string;
  url: string;
};

// Cause, blast radius, and recovery time drawn from the operator's own
// post-incident report. Only filled in where a primary postmortem exists.
export type AtlasCaseFindings = {
  cause: string;
  blastRadius: string;
  recovery: string;
  primarySource: AtlasSource;
};

export type AtlasIncident = {
  slug: string;
  sortDate: string;
  dateLabel: string;
  year: string;
  title: string;
  category: string;
  severity: string;
  summary: string;
  lesson: string;
  duration?: string;
  groupKey: AtlasIncidentGroupKey;
  homePlacement: HomePlacement;
  scope?: AtlasScope;
  geo?: AtlasGeoPoint[];
  originRegion?: AtlasGeoPoint;
  affectedServices?: AtlasAffectedService[];
  provider?: string;
  durationMinutes?: number;
  severityRank?: 1 | 2 | 3;
  sources?: AtlasSource[];
  findings?: AtlasCaseFindings;
};

type AtlasIncidentGroup = {
  key: AtlasIncidentGroupKey;
  label: string;
  heading: string;
  intro: string;
};

export type AtlasIncidentArchiveGroup = AtlasIncidentGroup & {
  items: AtlasIncident[];
};

export const atlasPrimarySourceLabel = "Internet Outage Atlas · Full Merged Research Report";
export const atlasNarrativeSourceLabel = "The Days the Internet Died";

const atlasNarrativeIncidentSlugs = new Set<string>([
  "pakistan-youtube-route-hijack",
  "dyn-dns-ddos-attack",
  "aws-s3-us-east-1-outage",
  "centurylink-911-outage",
  "verizon-route-leak-2019",
  "google-cloud-networking-outage-2019",
  "centurylink-level3-backbone-outage",
  "google-auth-outage-2020",
  "azure-dns-outage",
  "azure-ad-key-rotation-outage",
  "fastly-global-content-delivery-outage",
  "akamai-prolexic-outage",
  "akamai-dns-outage-2021",
  "facebook-global-blackout",
  "crowdstrike-falcon-global-outage",
]);

const incidentGroups: AtlasIncidentGroup[] = [
  {
    key: "routing",
    label: "Routing failures",
    heading: "When bad maps become public reality",
    intro:
      "The service may still exist. The route to it is what disappears, leaks, or gets replaced by something false.",
  },
  {
    key: "naming",
    label: "Naming, identity, and trust",
    heading: "When the service still exists but users cannot reach or trust it",
    intro:
      "Some failures do not knock servers offline. They break naming, authentication, or certificate trust, which is enough to make healthy systems feel dead.",
  },
  {
    key: "front_door",
    label: "Shared platforms and front doors",
    heading: "When unrelated services fail together",
    intro:
      "These incidents mattered because one shared provider or shared operational layer sat in front of many different products at once.",
  },
  {
    key: "cloud",
    label: "Cloud and control planes",
    heading: "When recovery tools and platform internals start failing too",
    intro:
      "The hardest cloud outages are not just service failures. They are outages where the systems needed to understand or recover the outage are also under stress.",
  },
  {
    key: "platform",
    label: "Platform and software cascades",
    heading: "When one release or one internal dependency spreads everywhere",
    intro:
      "These failures travel through shared software, internal coordination systems, or platform dependencies that turn one change into widespread operational loss.",
  },
  {
    key: "physical",
    label: "Physical and public infrastructure",
    heading: "When geography and public systems stop being abstract",
    intro:
      "The cloud still depends on buildings, cables, power, carrier paths, and public-safety infrastructure that can fail in the same event.",
  },
];

const rawAtlasIncidents: AtlasIncident[] = [
  {
    slug: "as7007-route-leak",
    sortDate: "1997-04-25",
    dateLabel: "April 1997",
    year: "1997",
    title: "AS7007 Route Leak",
    category: "BGP leak",
    severity: "High Severity",
    summary:
      "A misconfigured router at MAI Network Services originated a massive set of more-specific routes and polluted routing tables across the internet. The event became an early proof that one broken routing announcement could destabilize far more than the network that sent it.",
    lesson: "Lesson: BGP accepts bad claims quickly unless filters stop them first.",
    groupKey: "routing",
    homePlacement: null,
  },
  {
    slug: "hurricane-katrina-telecom-failures",
    sortDate: "2005-08-29",
    dateLabel: "August 2005",
    year: "2005",
    title: "Hurricane Katrina Telecom Failures",
    category: "Telecom infrastructure",
    severity: "Critical",
    summary:
      "Katrina destroyed fiber paths, towers, power, and fuel logistics together, collapsing multiple redundant systems at once. It remains one of the clearest examples of geography overpowering abstract redundancy claims.",
    lesson: "Lesson: Redundancy fails when the same event wipes out every redundant path.",
    groupKey: "physical",
    homePlacement: null,
  },
  {
    slug: "pakistan-youtube-route-hijack",
    sortDate: "2008-02-24",
    dateLabel: "February 2008",
    year: "2008",
    title: "Pakistan Telecom Blacks Out YouTube for the World",
    category: "BGP Route Hijack",
    severity: "Critical",
    summary:
      "Pakistan tried to block YouTube at home. The route escaped, spread, and briefly blacked out YouTube for everyone else. A local censorship action became a global routing fact.",
    lesson: "Lesson: BGP spreads bad routes fast. Filters are mandatory.",
    groupKey: "routing",
    homePlacement: "archive",
  },
  {
    slug: "the-planet-houston-outage",
    sortDate: "2008-05-31",
    dateLabel: "May 2008",
    year: "2008",
    title: "The Planet Houston Outage",
    category: "Datacenter power",
    severity: "High Severity",
    summary:
      "A power failure at The Planet's Houston datacenter exposed how fragile backup systems can be when they are tested under real pressure. Thousands of hosted servers went dark and recovery stretched across days.",
    lesson: "Lesson: Backup power is not resilience unless failover actually survives the event.",
    groupKey: "physical",
    homePlacement: null,
  },
  {
    slug: "aws-ec2-ebs-2011",
    sortDate: "2011-04-21",
    dateLabel: "April 2011",
    year: "2011",
    title: "AWS EC2 Failure Exposes Limits of Availability Zone Isolation",
    category: "Cloud Infrastructure",
    severity: "Critical",
    summary:
      "A network upgrade misrouted EBS traffic and took volumes offline in us-east-1. Reddit, Quora, Foursquare, and other services built too tightly around one zone lost their cushion fast.",
    lesson: "Lesson: Single-region comfort disappears during a real outage.",
    groupKey: "cloud",
    homePlacement: "archive",
  },
  {
    slug: "indosat-bgp-hijack",
    sortDate: "2014-04-02",
    dateLabel: "April 2014",
    year: "2014",
    title: "Indosat BGP Hijack",
    category: "Route hijack",
    severity: "High Severity",
    summary:
      "An Indonesian provider briefly announced routes for large portions of the internet, diverting traffic that had nothing to do with it. The incident showed how an operational mistake in one network can distort global reachability in minutes.",
    lesson: "Lesson: A local route leak becomes global if upstream trust is too loose.",
    groupKey: "routing",
    homePlacement: null,
  },
  {
    slug: "azure-storage-outage-2014",
    sortDate: "2014-11-18",
    dateLabel: "November 2014",
    year: "2014",
    title: "Azure Storage Outage",
    category: "Cloud deploy failure",
    severity: "Critical",
    summary:
      "Human error during a storage-system deployment led to a broad Azure outage and became one of the clearer early examples of control-plane mistakes causing large customer impact. The trigger was routine. The spread was not.",
    lesson: "Lesson: Ordinary maintenance becomes infrastructure risk at cloud scale.",
    groupKey: "cloud",
    homePlacement: null,
  },
  {
    slug: "axcelx-aws-route-leak",
    sortDate: "2015-07-01",
    dateLabel: "July 2015",
    year: "2015",
    title: "AxcelX and AWS Route Leak",
    category: "Route leak",
    severity: "High Severity",
    summary:
      "Routes connected to AWS address space leaked outward and disrupted access to major sites and services. The fault was not in application code. It was in the routing layer that decides where traffic goes at all.",
    lesson: "Lesson: Cloud scale does not protect against bad routing inputs.",
    groupKey: "routing",
    homePlacement: null,
  },
  {
    slug: "dyn-dns-ddos-attack",
    sortDate: "2016-10-21",
    dateLabel: "October 2016",
    year: "2016",
    title: "Dyn DNS DDoS Attack",
    category: "DNS / DDoS",
    severity: "Critical",
    summary:
      "Mirai used hacked cameras, routers, DVRs, and other junk devices to hammer Dyn's DNS infrastructure. Twitter, Spotify, GitHub, Reddit, and much of the East Coast web started failing together. The point was not only the attack. It was how much of the visible web depended on one naming layer.",
    lesson:
      "Lesson: Shared naming layers can fail harder than the applications that depend on them.",
    duration: "Duration: approximately 8 hours · October 21, 2016",
    groupKey: "naming",
    homePlacement: "timeline",
    findings: {
      cause:
        "Mirai-infected consumer devices, mostly cameras, DVRs, and home routers, aimed masked TCP and UDP traffic at port 53 on Dyn's Managed DNS platform. Dyn's own analysis named Mirai as the primary source and estimated up to 100,000 malicious endpoints. Recursive retry traffic from legitimate resolvers piled on top of the attack and made the load worse.",
      blastRadius:
        "Dyn ran authoritative DNS for a long list of large sites, so the failure surfaced everywhere at once. Twitter, Spotify, Reddit, GitHub, Netflix, Amazon, PayPal, Pinterest, Etsy, Shopify, Airbnb, Slack, and The New York Times became unreachable for large numbers of users in North America and Europe. The services themselves were healthy. Users just could not resolve the names.",
      recovery:
        "Dyn recorded two damaging waves on October 21. Mitigation for the first was fully deployed by 13:20 UTC, about two hours after it began, and the company had substantially recovered from the second by 17:00 UTC, roughly seventy minutes in. Residual impact from other sources ran until about 20:30 UTC, and smaller probing attacks over the following hours and days were mitigated without further customer impact. That is why the day reads as a series of failures rather than one continuous outage.",
      primarySource: {
        label: "Dyn — Dyn Analysis Summary of Friday October 21 Attack (archived)",
        url: "https://web.archive.org/web/20161027025156/http://dyn.com/blog/dyn-analysis-summary-of-friday-october-21-attack/",
      },
    },
  },
  {
    slug: "aws-s3-us-east-1-outage",
    sortDate: "2017-02-28",
    dateLabel: "February 2017",
    year: "2017",
    title: "AWS S3 US-East-1 Outage",
    category: "Cloud / Human Error",
    severity: "Critical",
    summary:
      "A mistyped debugging command removed more S3 capacity than intended. Thousands of applications went down with it, including systems people did not realize depended on that region so heavily. The outage became a lasting example of how one control-plane mistake can turn a local action into a public outage.",
    lesson: "Lesson: One control-plane error can overrule thousands of otherwise healthy systems.",
    duration: "Duration: approximately 4 hours · February 28, 2017",
    groupKey: "cloud",
    homePlacement: "timeline",
    findings: {
      cause:
        "An authorized engineer ran an established playbook command to take a small number of servers out of the S3 billing subsystem and mistyped one input. The command removed a much larger set, including servers running the index subsystem that tracks where every object lives and the placement subsystem that allocates storage for new objects. Both needed a full restart, and neither had been restarted at that scale in years.",
      blastRadius:
        "GET, LIST, PUT, and DELETE requests failed across US-EAST-1. Anything leaning on S3 in that region went with it, including new EC2 instance launches, EBS snapshot operations, and Lambda. Slack, Trello, Quora, Giphy, Medium, Coursera, Docker Hub, and Business Insider were among the public casualties. The AWS Service Health Dashboard also ran on S3, so Amazon could not update its own status page while the outage was happening.",
      recovery:
        "Restart and safety-check work ran through the morning. GET, LIST, and DELETE came back at 12:26 PM PST once the index subsystem was serving, the index subsystem finished recovering at 1:18 PM PST, and PUT requests returned at 1:54 PM PST when the placement subsystem completed. About four hours and seventeen minutes end to end, with dependent services needing extra time to clear their backlogs.",
      primarySource: {
        label: "AWS — Summary of the Amazon S3 Service Disruption in the Northern Virginia Region",
        url: "https://aws.amazon.com/message/41926/",
      },
    },
  },
  {
    slug: "mainone-google-route-leak",
    sortDate: "2018-11-12",
    dateLabel: "November 2018",
    year: "2018",
    title: "MainOne and Google Route Leak",
    category: "Route leak",
    severity: "High Severity",
    summary:
      "A route leak involving MainOne and China Telecom redirected traffic for Google and other large services through unexpected paths. It was a sharp demonstration of how brittle inter-network trust still is.",
    lesson: "Lesson: Route hygiene is a dependency, not a best-effort courtesy.",
    groupKey: "routing",
    homePlacement: null,
  },
  {
    slug: "centurylink-911-outage",
    sortDate: "2018-12-27",
    dateLabel: "December 2018",
    year: "2018",
    title: "CenturyLink 911 Outage",
    category: "Public-safety outage",
    severity: "Critical",
    summary:
      "A network failure disrupted 911 service across multiple states and affected millions of customers. The incident showed how emergency calling systems could still share failure domains with commercial backbone infrastructure.",
    lesson: "Lesson: Public safety is only as isolated as the infrastructure it actually shares.",
    groupKey: "physical",
    homePlacement: null,
  },
  {
    slug: "comcast-fiber-cut-outage",
    sortDate: "2018-06-29",
    dateLabel: "June 2018",
    year: "2018",
    title: "Comcast Fiber Cut Outage",
    category: "Fiber cut",
    severity: "High Severity",
    summary:
      "A large Comcast outage traced back to physical infrastructure damage and showed how ordinary cable-path failures can still produce wide consumer and enterprise impact. The cloud did not make the fiber less real.",
    lesson: "Lesson: Physical chokepoints remain part of the internet's blast-radius story.",
    groupKey: "physical",
    homePlacement: null,
  },
  {
    slug: "verizon-route-leak-2019",
    sortDate: "2019-06-24",
    dateLabel: "June 2019",
    year: "2019",
    title: "Verizon Route Leak Disrupts 15 Percent of Global Internet Traffic",
    category: "BGP Route Leak",
    severity: "Critical",
    summary:
      "A small provider leaked routes it did not own. Verizon accepted them and propagated them. Cloudflare, Facebook, Google, and much more of the network got pulled into the mistake.",
    lesson: "Lesson: Upstream filtering has to be real, not assumed.",
    groupKey: "routing",
    homePlacement: "archive",
  },
  {
    slug: "google-cloud-networking-outage-2019",
    sortDate: "2019-06-02",
    dateLabel: "June 2019",
    year: "2019",
    title: "Google Cloud Networking Outage",
    category: "Cloud networking",
    severity: "Critical",
    summary:
      "A routine change cascaded through Google Cloud's networking systems and led to major traffic loss and degraded access across services. The incident showed how internal reliability changes can widen into public unavailability.",
    lesson:
      "Lesson: Reliability work can become an outage vector when coordination layers fail with it.",
    groupKey: "cloud",
    homePlacement: null,
  },
  {
    slug: "sectigo-addtrust-root-expiration",
    sortDate: "2020-05-30",
    dateLabel: "May 2020",
    year: "2020",
    title: "Sectigo AddTrust Root Expiration",
    category: "PKI expiration",
    severity: "High Severity",
    summary:
      "The expiration of the AddTrust root certificate triggered trust failures on legacy systems and broke connections that still depended on that chain. A quiet certificate deadline turned into a visible service problem for older clients.",
    lesson: "Lesson: Trust chains are part of availability, not just security.",
    groupKey: "naming",
    homePlacement: null,
  },
  {
    slug: "zoom-partial-global-outage-2020",
    sortDate: "2020-08-24",
    dateLabel: "August 2020",
    year: "2020",
    title: "Zoom Partial Global Outage",
    category: "Video platform",
    severity: "High Severity",
    summary:
      "Zoom experienced a broad service disruption during the period when remote work had made video infrastructure a daily dependency. The incident showed how a platform that looks optional can become operationally central very quickly.",
    lesson:
      "Lesson: Once a platform becomes routine coordination infrastructure, partial outages stop feeling partial.",
    groupKey: "platform",
    homePlacement: null,
  },
  {
    slug: "centurylink-level3-backbone-outage",
    sortDate: "2020-08-30",
    dateLabel: "August 2020",
    year: "2020",
    title: "CenturyLink / Level 3 Backbone Outage",
    category: "BGP / ISP",
    severity: "High Severity",
    summary:
      "A bad Flowspec rule was supposed to block abuse. Instead it blocked BGP itself across one of the internet's largest backbones. Routers crashed, restarted, received the same bad rule, and crashed again. The network started rejecting the information needed to fix the network.",
    lesson:
      "Lesson: Backbone routing failures can damage the recovery path as well as the data path.",
    duration: "Duration: approximately 4.5 hours · August 30, 2020",
    groupKey: "routing",
    homePlacement: "timeline",
  },
  {
    slug: "google-auth-outage-2020",
    sortDate: "2020-12-14",
    dateLabel: "December 2020",
    year: "2020",
    title: "Google Auth Outage Renders All Google Services Inaccessible",
    category: "Authentication Failure",
    severity: "Critical",
    summary:
      "A quota enforcement mistake during an auth migration knocked out Gmail, YouTube, Drive, and everything else tied to the same gate. The apps were not the first problem. Access was.",
    lesson: "Lesson: When auth fails, healthy services still feel dead.",
    groupKey: "naming",
    homePlacement: "archive",
  },
  {
    slug: "fastly-global-content-delivery-outage",
    sortDate: "2021-06-08",
    dateLabel: "June 2021",
    year: "2021",
    title: "Fastly Global Content Delivery Outage",
    category: "CDN / Edge",
    severity: "Critical",
    summary:
      "A dormant software bug sat in Fastly's network until a customer pushed a valid configuration change. Within seconds, most of Fastly's global edge started returning errors. News sites, commerce platforms, and government pages disappeared together because the front door was more shared than it looked.",
    lesson: "Lesson: Shared front-door infrastructure fails at the scale of its customer base.",
    duration: "Duration: approximately 1 hour · June 8, 2021",
    groupKey: "front_door",
    homePlacement: "timeline",
  },
  {
    slug: "salesforce-multi-hour-outage",
    sortDate: "2021-05-11",
    dateLabel: "May 2021",
    year: "2021",
    title: "Salesforce Multi-hour Outage",
    category: "SaaS DNS",
    severity: "High Severity",
    summary:
      "A DNS-related failure affected Salesforce services and disrupted the large body of business workflows built on top of them. The outage hit as an enterprise dependency problem, not just an app problem.",
    lesson: "Lesson: SaaS platforms inherit the blast radius of their own shared front doors.",
    groupKey: "front_door",
    homePlacement: null,
  },
  {
    slug: "akamai-dns-outage-2021",
    sortDate: "2021-07-22",
    dateLabel: "July 2021",
    year: "2021",
    title: "Akamai DNS Outage Silences FedEx, Airlines, and Major Banks",
    category: "DNS / CDN",
    severity: "Critical",
    summary:
      "A configuration update triggered a bug in Akamai Edge DNS and took down a long list of companies that looked unrelated until they failed at the same time.",
    lesson: "Lesson: DNS dependencies reach farther than most teams think.",
    groupKey: "front_door",
    homePlacement: "archive",
  },
  {
    slug: "akamai-prolexic-outage",
    sortDate: "2021-06-17",
    dateLabel: "June 2021",
    year: "2021",
    title: "Akamai Prolexic Outage",
    category: "DDoS mitigation",
    severity: "High Severity",
    summary:
      "A platform designed to preserve availability became the source of unavailability instead. Customers depending on Prolexic lost service because the defensive layer itself failed under load.",
    lesson: "Lesson: Shared protection systems become shared failure systems when they break.",
    groupKey: "front_door",
    homePlacement: null,
  },
  {
    slug: "azure-dns-outage",
    sortDate: "2021-04-01",
    dateLabel: "April 2021",
    year: "2021",
    title: "Azure DNS Outage",
    category: "Cloud DNS",
    severity: "High Severity",
    summary:
      "A DNS-layer problem inside Azure interrupted name resolution and widened into a broader cloud-service disruption. Parts of the visibility and status path became unreliable too, which made diagnosis harder for customers already in the dark.",
    lesson:
      "Lesson: A naming failure often reaches users before any deeper system fault is visible.",
    groupKey: "naming",
    homePlacement: null,
  },
  {
    slug: "facebook-global-blackout",
    sortDate: "2021-10-04",
    dateLabel: "October 2021",
    year: "2021",
    title: "Facebook Global Blackout",
    category: "BGP / Platform",
    severity: "Critical",
    summary:
      "One backbone maintenance change withdrew Meta's BGP routes. Facebook, Instagram, WhatsApp, and Messenger vanished at the same time. The harder part came next. The same failure also cut engineers off from some of the internal systems needed to fix it, which turned an outage into a recovery trap.",
    lesson: "Lesson: Platform concentration turns routing failures into public-life failures.",
    duration: "Duration: approximately 6 hours · October 4, 2021",
    groupKey: "routing",
    homePlacement: "timeline",
    findings: {
      cause:
        "During routine backbone maintenance an engineer issued a command meant to assess global capacity. A bug in the audit tool that should have blocked it did not, and the command took down every connection on Meta's backbone, disconnecting its data centers from each other. The DNS servers kept running, but they withdrew their BGP advertisements once they saw the backbone was unhealthy. With the routes gone, the rest of the internet had no way left to find Meta's servers.",
      blastRadius:
        "Facebook, Instagram, WhatsApp, and Messenger went dark together for billions of users. Internal systems went with them. The tools engineers normally use to reach and repair the backbone lived behind the same routes that had just been withdrawn, so the outage removed the recovery path along with the service.",
      recovery:
        "Remote access was gone, so Meta sent engineers to the data centers in person, and the physical security built to make hardware hard to tamper with slowed them down once they got there. Services returned roughly six hours after the routes were withdrawn. Bringing everything back at once risked a second crash from the traffic surge, so the restart was staged.",
      primarySource: {
        label: "Meta Engineering — More details about the October 4 outage",
        url: "https://engineering.fb.com/2021/10/05/networking-traffic/outage-details/",
      },
    },
  },
  {
    slug: "lets-encrypt-dst-root-ca-x3-expiration",
    sortDate: "2021-09-30",
    dateLabel: "September 2021",
    year: "2021",
    title: "Let's Encrypt DST Root CA X3 Expiration",
    category: "PKI expiration",
    severity: "High Severity",
    summary:
      "The expiration of DST Root CA X3 caused compatibility failures on older Android devices and legacy clients that still anchored trust there. Modern infrastructure stayed up while part of the user base lost the ability to connect cleanly.",
    lesson: "Lesson: Client compatibility can turn a certificate event into a real outage.",
    groupKey: "naming",
    homePlacement: null,
  },
  {
    slug: "azure-ad-key-rotation-outage",
    sortDate: "2021-03-15",
    dateLabel: "March 2021",
    year: "2021",
    title: "Azure AD Key-Rotation Outage",
    category: "Identity failure",
    severity: "Critical",
    summary:
      "A signing-key problem became a long authentication outage across Microsoft 365, Teams, Exchange Online, and related services. Systems were still there, but access to them was blocked by the gate in front.",
    lesson:
      "Lesson: Identity infrastructure fails like public infrastructure once enough work depends on it.",
    groupKey: "naming",
    homePlacement: null,
  },
  {
    slug: "aws-us-east-1-control-plane-outage-2021",
    sortDate: "2021-12-07",
    dateLabel: "December 2021",
    year: "2021",
    title: "AWS US-East-1 Control-Plane Outage",
    category: "Cloud DNS and control plane",
    severity: "Critical",
    summary:
      "Internal networking and DNS issues in US-East-1 disrupted AWS services, Amazon devices, logistics systems, and third-party applications. The region concentration problem was visible, but so was the depth of internal dependency inside the same region.",
    lesson:
      "Lesson: Shared control planes magnify regional concentration into public outage scale.",
    groupKey: "cloud",
    homePlacement: null,
  },
  {
    slug: "roblox-73-hour-outage",
    sortDate: "2021-10-28",
    dateLabel: "October 2021",
    year: "2021",
    title: "Roblox 73-hour Outage",
    category: "Distributed systems failure",
    severity: "Critical",
    summary:
      "Roblox went down for roughly three days after failures involving internal service-discovery and data systems compounded across a highly interconnected platform. The length of the outage made the recovery-path problem impossible to ignore.",
    lesson:
      "Lesson: Complex platforms fail longer when the coordination layer is part of the incident.",
    groupKey: "platform",
    homePlacement: null,
  },
  {
    slug: "slack-outage-2022",
    sortDate: "2022-02-22",
    dateLabel: "February 2022",
    year: "2022",
    title: "Slack Outage",
    category: "Collaboration platform",
    severity: "High Severity",
    summary:
      "Slack suffered a cascading failure involving database and cache systems, which disrupted messaging, connections, and workflow continuity for teams that depend on it as operating infrastructure. Recovery was shaped by how many internal pieces were failing together.",
    lesson:
      "Lesson: Collaboration software behaves like infrastructure once offices route work through it.",
    groupKey: "platform",
    homePlacement: null,
  },
  {
    slug: "rogers-canada-2022",
    sortDate: "2022-07-08",
    dateLabel: "July 2022",
    year: "2022",
    title: "Rogers Canada: 12 Million Without Service, Including 911",
    category: "Telecom Core Failure",
    severity: "Critical",
    summary:
      "A core network upgrade removed a critical filter and sent traffic into the wrong place at the wrong scale. Rogers collapsed under the load, taking mobile service, internet access, and 911 with it for millions of people.",
    lesson: "Lesson: Core networks need overload protection before the bad day.",
    groupKey: "physical",
    homePlacement: "archive",
  },
  {
    slug: "crowdstrike-falcon-global-outage",
    sortDate: "2024-07-19",
    dateLabel: "July 2024",
    year: "2024",
    title: "CrowdStrike Falcon Global Outage",
    category: "Software Supply Chain",
    severity: "Critical",
    summary:
      "A routine CrowdStrike update shipped a bad configuration file and crashed Windows at kernel level on an estimated 8.5 million devices. Airlines could not board passengers. Hospitals switched to paper. Banks shut down systems. Recovery was slow because every broken machine needed hands-on work.",
    lesson: "Lesson: A shared software dependency can outrank every local redundancy plan.",
    duration: "Duration: recovery spanning 10 days · July 19, 2024",
    groupKey: "platform",
    homePlacement: "timeline",
    findings: {
      cause:
        "CrowdStrike published a Rapid Response Content update, Channel File 291, at 04:09 UTC. The sensor's Content Interpreter expected 20 input fields and the new template instance supplied 21. A missing runtime array bounds check turned that mismatch into an out-of-bounds memory read inside a kernel-level driver, which crashed Windows outright. A logic error in the Content Validator let the file ship in the first place.",
      blastRadius:
        "Roughly 8.5 million Windows devices crashed into boot loops. Delta, United, and American cancelled or delayed flights. Hospitals fell back to paper. Banks, broadcasters, retailers, and airports lost systems in the same window, because the same sensor was running at kernel level on all of them.",
      recovery:
        "CrowdStrike reverted the file at 05:27 UTC, 78 minutes after publishing it. That stopped new machines from breaking but repaired none of the ones already down. Each affected host had to be booted into Safe Mode or recovery and have the bad channel file deleted by hand, which is why recovery ran for days instead of hours and stretched longer at organizations with encrypted drives or remote fleets.",
      primarySource: {
        label: "CrowdStrike — External Technical Root Cause Analysis, Channel File 291 (PDF)",
        url: "https://www.crowdstrike.com/wp-content/uploads/2024/08/Channel-File-291-Incident-Root-Cause-Analysis-08.06.2024.pdf",
      },
    },
  },
  {
    slug: "aws-dynamodb-dns-failure",
    sortDate: "2025-10-20",
    dateLabel: "October 2025",
    year: "2025",
    title: "AWS DynamoDB DNS Failure",
    category: "Cloud / DNS",
    severity: "Critical",
    summary:
      "DNS resolution for DynamoDB failed in us-east-1. Disney+, Delta, Reddit, Robinhood, Roblox, and many other services went dark. The data was still there. The names stopped resolving. A naming failure overruled the resilience of the underlying system.",
    lesson: "Lesson: A naming failure can overrule a healthy underlying service.",
    duration: "Duration: approximately 15 hours · October 20, 2025",
    groupKey: "naming",
    homePlacement: "timeline",
    findings: {
      cause:
        "DynamoDB manages its endpoint DNS with two automated pieces: a DNS Planner that writes plans and DNS Enactors that apply them in each Availability Zone. One Enactor stalled partway through an older plan. A second Enactor applied a newer plan and started cleanup. The stalled Enactor then finished and overwrote the newer plan with its stale one, and cleanup deleted that plan as obsolete. The delete removed every IP address for the regional DynamoDB endpoint and left the system unable to repair itself without manual work.",
      blastRadius:
        "The regional DynamoDB endpoint in us-east-1 stopped resolving, and everything that stores state or authenticates through it followed. EC2 instance launches, Network Load Balancer, Lambda, ECS, EKS, Fargate, STS, IAM, and Redshift were all affected. In public, Disney+, Delta, Reddit, Robinhood, Roblox, Snapchat, Venmo, Coinbase, Ring, Fortnite, and Duolingo went down together.",
      recovery:
        "Engineers restored the DNS records by hand at 2:25 AM PDT and customer connectivity to DynamoDB came back at 2:40 AM. The dependent services took far longer. EC2 leases were re-established at 5:28 AM, network propagation normalized at 10:36 AM, EC2 fully recovered at 1:50 PM, and the last services cleared at 2:20 PM on October 20. About fifteen hours from first impact to full recovery.",
      primarySource: {
        label:
          "AWS — Summary of the Amazon DynamoDB Service Disruption in Northern Virginia (US-EAST-1)",
        url: "https://aws.amazon.com/message/101925/",
      },
    },
  },
  {
    slug: "google-global-5-minute-outage-2013",
    sortDate: "2013-08-16",
    dateLabel: "August 2013",
    year: "2013",
    title: "Google Global 5-minute Outage",
    category: "Platform failure",
    severity: "High Severity",
    summary:
      "A brief but iconic Google outage took major services offline at the same time and became a durable example of how concentrated platform ecosystems can vanish all at once, even during a short failure.",
    lesson:
      "Lesson: A short outage at a concentrated platform can still expose outsized systemic dependence.",
    groupKey: "platform",
    homePlacement: null,
  },
  {
    slug: "amazon-retail-outage-2013",
    sortDate: "2013-08-19",
    dateLabel: "August 2013",
    year: "2013",
    title: "Amazon.com Retail Outage",
    category: "Commerce platform",
    severity: "High Severity",
    summary:
      "A high-profile Amazon retail outage showed how visible and immediate the impact becomes when a single commerce platform failure blocks browsing, purchasing, and order flow together.",
    lesson:
      "Lesson: Platform outages feel infrastructural once daily transactions route through one front door.",
    groupKey: "platform",
    homePlacement: null,
  },
  {
    slug: "skype-supernode-failure-2010",
    sortDate: "2010-12-22",
    dateLabel: "December 2010",
    year: "2010",
    title: "Skype Supernode Failure",
    category: "P2P platform failure",
    severity: "High Severity",
    summary:
      "A software problem destabilized Skype's supernode layer and broke service for a huge share of users, showing how coordination nodes inside distributed platforms can still become central failure points.",
    lesson:
      "Lesson: Distributed systems still depend on control nodes that can fail like any other shared layer.",
    groupKey: "platform",
    homePlacement: null,
  },
  {
    slug: "notpetya-2017",
    sortDate: "2017-06-27",
    dateLabel: "June 2017",
    year: "2017",
    title: "NotPetya Global Outage",
    category: "Software supply chain",
    severity: "Critical",
    summary:
      "NotPetya spread through a trusted software-update channel and crippled shipping, logistics, hospitals, and enterprise networks around the world. It remains one of the clearest demonstrations of software supply chains acting like outage multipliers.",
    lesson:
      "Lesson: A trusted update path can spread failure faster than any one-off breach or local outage.",
    groupKey: "platform",
    homePlacement: null,
  },
  {
    slug: "google-voice-expired-tls-cert-2021",
    sortDate: "2021-02-15",
    dateLabel: "February 2021",
    year: "2021",
    title: "Google Voice Expired TLS Certificate",
    category: "Certificate expiration",
    severity: "High Severity",
    summary:
      "An expired TLS certificate broke access to Google Voice and showed, again, that trust-chain maintenance is part of availability engineering rather than a side concern reserved for security teams.",
    lesson: "Lesson: Certificate hygiene is uptime work, not just compliance work.",
    groupKey: "naming",
    homePlacement: null,
  },
  {
    slug: "gcp-us-east4-traffic-loss-2023",
    sortDate: "2023-04-25",
    dateLabel: "April 2023",
    year: "2023",
    title: "GCP us-east4 Traffic Loss",
    category: "Regional cloud networking",
    severity: "High Severity",
    summary:
      "Traffic loss in Google Cloud's us-east4 region highlighted how regional networking faults can still create large downstream application problems when many services quietly share the same cloud locality.",
    lesson:
      "Lesson: Regional concentration stays dangerous even when the failure looks narrower than a full cloud outage.",
    groupKey: "cloud",
    homePlacement: null,
  },
  {
    slug: "verizon-mobile-outage-2024",
    sortDate: "2024-09-30",
    dateLabel: "September 2024",
    year: "2024",
    title: "Verizon Mobile Outage",
    category: "Mobile carrier outage",
    severity: "Critical",
    summary:
      "A major Verizon mobile outage underscored how quickly carrier failures still spill into daily public life once voice, data, authentication, and payment flows all assume cellular reachability.",
    lesson:
      "Lesson: Telecom outages still behave like public-infrastructure outages, not just product outages.",
    groupKey: "physical",
    homePlacement: null,
  },
  {
    slug: "att-tmobile-verizon-roaming-outage-2024",
    sortDate: "2024-06-26",
    dateLabel: "June 2024",
    year: "2024",
    title: "AT&T / T-Mobile / Verizon Roaming Outage",
    category: "Third-party roaming dependency",
    severity: "Critical",
    summary:
      "A shared roaming dependency disrupted multiple major U.S. carriers at once, making the outage notable less for any one brand than for the hidden third-party relationship that linked them together.",
    lesson:
      "Lesson: Third-party telecom dependencies can quietly create shared-fate outages across competing carriers.",
    groupKey: "platform",
    homePlacement: null,
  },
  {
    slug: "meta-facebook-instagram-outage-2024",
    sortDate: "2024-03-05",
    dateLabel: "March 2024",
    year: "2024",
    title: "Meta (Facebook / Instagram) Outage",
    category: "Platform ecosystem outage",
    severity: "Critical",
    summary:
      "A broad Meta outage affecting Facebook and Instagram showed that even without a long root-cause disclosure, the operational story remains the same: concentrated social platforms fail at the scale of their audience.",
    lesson:
      "Lesson: Platform concentration means even short-lived outages become mass public events.",
    groupKey: "platform",
    homePlacement: null,
  },
  {
    slug: "microsoft-365-azure-front-door-outage-2025",
    sortDate: "2025-10-29",
    dateLabel: "October 2025",
    year: "2025",
    title: "Microsoft 365 / Azure Global Outage",
    category: "Azure Front Door configuration",
    severity: "Critical",
    summary:
      "A global Microsoft 365 and Azure outage tied to Azure Front Door configuration reinforced the atlas theme that the front door often fails harder than the applications behind it.",
    lesson:
      "Lesson: Shared edge and routing layers can erase the practical value of otherwise resilient back-end services.",
    groupKey: "front_door",
    homePlacement: null,
  },
  {
    slug: "github-outage-2025",
    sortDate: "2025-04-01",
    dateLabel: "2025",
    year: "2025",
    title: "GitHub Outage",
    category: "Developer platform outage",
    severity: "High Severity",
    summary:
      "A GitHub outage disrupted repository operations and development workflows at a layer many teams now treat as critical infrastructure rather than an optional collaboration tool.",
    lesson:
      "Lesson: Developer platforms have become operational dependencies with their own public blast radius.",
    groupKey: "platform",
    homePlacement: null,
  },
  {
    slug: "cloudflare-bot-management-outage-2025",
    sortDate: "2025-11-18",
    dateLabel: "November 2025",
    year: "2025",
    title: "Cloudflare Bot-management Outage",
    category: "Protective edge logic failure",
    severity: "Critical",
    summary:
      "An internal Cloudflare bot-management failure propagated widely because the protective layer itself sat in front of customer traffic at massive scale. The case fits the broader pattern of defensive systems becoming shared failure systems.",
    lesson:
      "Lesson: Protective layers can create global outages when they fail in the path of ordinary traffic.",
    groupKey: "front_door",
    homePlacement: null,
  },
  {
    slug: "telekom-malaysia-level3-route-leak-2015",
    sortDate: "2015-06-12",
    dateLabel: "June 2015",
    year: "2015",
    title: "Telekom Malaysia Route Leak Cripples Level 3 and the Global Internet",
    category: "BGP route leak",
    severity: "High Severity",
    summary:
      "Telekom Malaysia (AS4788) accidentally announced roughly 179,000 BGP routes to Level 3, which accepted and propagated them. Traffic for large parts of the internet was pulled toward Malaysia, and for about two hours users saw global packet loss and slowdowns, felt most acutely in Australia and New Zealand. eBay, Yahoo Mail, PlayStation Network, and Xbox Live degraded together as the bad routes spread.",
    lesson:
      "Lesson: One mis-announced route table, accepted by a large transit provider, becomes a global slowdown in minutes.",
    groupKey: "routing",
    homePlacement: null,
  },
  {
    slug: "verizon-mobile-outage-2026",
    sortDate: "2026-01-14",
    dateLabel: "January 2026",
    year: "2026",
    title: "Verizon Mobile Outage",
    category: "Mobile carrier outage",
    severity: "High Severity",
    summary:
      "A later Verizon mobile outage, even with thinner public disclosure, remains useful in the atlas because it reinforces how dependent daily communications and service access remain on a small number of carrier systems.",
    lesson:
      "Lesson: Thin disclosure does not reduce the structural importance of major carrier failures.",
    groupKey: "physical",
    homePlacement: null,
  },
  {
    slug: "microsoft-365-outage-2026",
    sortDate: "2026-01-22",
    dateLabel: "January 2026",
    year: "2026",
    title: "Microsoft 365 Outage",
    category: "Enterprise suite outage",
    severity: "Critical",
    summary:
      "A long Microsoft 365 outage highlighted how deeply office coordination, messaging, documents, and identity have been consolidated into one operational dependency for many organizations.",
    lesson:
      "Lesson: Enterprise software suites fail like infrastructure once work is routed through them continuously.",
    groupKey: "cloud",
    homePlacement: null,
  },
  {
    slug: "cloudflare-byoip-bgp-outage-2026",
    sortDate: "2026-02-20",
    dateLabel: "February 2026",
    year: "2026",
    title: "Cloudflare BYOIP BGP Outage",
    category: "BGP / address announcement failure",
    severity: "Critical",
    summary:
      "A large-scale Cloudflare routing incident tied to BYOIP handling showed how reachability can still disappear at internet scale when address announcement logic goes wrong at a major provider edge.",
    lesson:
      "Lesson: Address-advertisement mistakes at large edges become public outages immediately.",
    groupKey: "routing",
    homePlacement: null,
  },
  {
    slug: "aws-middle-east-drone-strike-outage-2026",
    sortDate: "2026-03-01",
    dateLabel: "March 2026",
    year: "2026",
    title: "AWS Middle East Drone-strike Outage",
    category: "Physical attack on cloud infrastructure",
    severity: "Critical",
    summary:
      "This incident is preserved because it forces the cloud back into physical reality: regional availability ultimately depends on facilities, geography, power, and security on the ground.",
    lesson:
      "Lesson: Cloud infrastructure remains physical infrastructure, even when the interface to it feels abstract.",
    groupKey: "physical",
    homePlacement: null,
  },
];

export const atlasIncidents: AtlasIncident[] = rawAtlasIncidents.map((incident) => {
  const enrichment = atlasEnrichment[incident.slug];

  return enrichment ? { ...incident, ...enrichment } : incident;
});

const groupOrder = incidentGroups.map((group) => group.key);

export const homeTimelineIncidentSlugs = atlasIncidents
  .filter((incident) => incident.homePlacement === "timeline")
  .map((incident) => incident.slug);

export const homeArchiveIncidentSlugs = atlasIncidents
  .filter((incident) => incident.homePlacement === "archive")
  .map((incident) => incident.slug);

export function getAllTimelineIncidents(): AtlasIncident[] {
  return [...atlasIncidents].sort((left, right) => left.sortDate.localeCompare(right.sortDate));
}

export function getHomeTimelineIncidents(): AtlasIncident[] {
  return getAllTimelineIncidents().filter((incident) => incident.homePlacement === "timeline");
}

export function getHomeArchiveIncidents(): AtlasIncident[] {
  return getAllTimelineIncidents().filter((incident) => incident.homePlacement === "archive");
}

export function getIncidentBySlug(slug: string): AtlasIncident | undefined {
  return atlasIncidents.find((incident) => incident.slug === slug);
}

export function getIncidentSourceLabels(incident: AtlasIncident): string[] {
  const labels = [atlasPrimarySourceLabel];

  if (atlasNarrativeIncidentSlugs.has(incident.slug)) {
    labels.push(atlasNarrativeSourceLabel);
  }

  return labels;
}

export function getIncidentSecondaryDetail(incident: AtlasIncident): string | null {
  const segments = incident.summary
    .split(/(?<=\.)\s+/)
    .map((segment) => segment.trim())
    .filter(Boolean);

  if (segments.length <= 1) return null;

  return segments.slice(1).join(" ");
}

export function getArchiveGroups(): AtlasIncidentArchiveGroup[] {
  return groupOrder
    .map((groupKey) => {
      const groupMeta = incidentGroups.find((group) => group.key === groupKey);
      const items = getAllTimelineIncidents().filter((incident) => incident.groupKey === groupKey);

      if (!groupMeta || items.length === 0) return null;

      return {
        ...groupMeta,
        items,
      };
    })
    .filter((group): group is AtlasIncidentArchiveGroup => group !== null);
}

export function getIncidentNeighbors(slug: string): {
  prev: AtlasIncident | null;
  next: AtlasIncident | null;
} {
  const ordered = getAllTimelineIncidents();
  const index = ordered.findIndex((incident) => incident.slug === slug);

  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? ordered[index - 1] : null,
    next: index < ordered.length - 1 ? ordered[index + 1] : null,
  };
}

export type AffectedServiceEdge = {
  service: string;
  providerSlug?: string;
  incidentSlug: string;
  incidentTitle: string;
  severity: string;
};

export function getAffectedServiceEdges(): AffectedServiceEdge[] {
  return atlasIncidents.flatMap((incident) =>
    (incident.affectedServices ?? []).map((service) => ({
      service: service.name,
      providerSlug: service.providerSlug,
      incidentSlug: incident.slug,
      incidentTitle: incident.title,
      severity: incident.severity,
    }))
  );
}
