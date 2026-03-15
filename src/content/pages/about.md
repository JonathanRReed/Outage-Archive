---
_schema: default
title: About
description: Learn what Internet Outage Atlas is, how it is organized, and how Jonathan R Reed built and maintains it.
pageSections:
  - _component: atlas/about-dossier
    dateline: "About File \xB7 Project Record \xB7 Atlas Edition 2026"
    kicker: 'Internet Outage Atlas · About'
    heading: 'ABOUT<br>THE ATLAS'
    subtitle: What this site is, how it is organized, and who built it
    byline: ''
    introTitle: What this site is
    profileQuote: ''
    introBody: >-
      <p>Internet Outage Atlas is a broadsheet-style record of landmark internet
      failures. It treats outages as infrastructure events with patterns,
      causes, and blast radius that can be documented and compared over
      time.</p>

      <p>This is not a live dashboard and not a status page for one company. It
      is a reference work. The site follows the shared layers that let failures
      spread, including naming, routing, edge networks, identity, control
      planes, and the physical systems underneath them.</p>

      <p>The project was researched, written, designed, and built by Jonathan R
      Reed.</p>
    profileLabel: Creator
    profileName: Jonathan R Reed
    profileRole: Creator
    profileBody: >-
      Jonathan R Reed built this atlas as an editorial record of systemic
      internet failures. The goal was to make outage history readable, visual,
      and specific as a reference work rather than a dashboard.
    profileImage: https://img.jonathanrreed.com/personal/jonathan.avif
    profileImageAlt: Jonathan R Reed
    websiteUrl: https://JonathanRReed.com
    articleUrl: https://JonathanRReed.com/blog/days-the-internet-dies/
    focusTitle: What the atlas covers
    focusItems:
      - Major outages where the blast radius escaped one product or one vendor
      - Failures in shared layers like DNS, BGP, CDN, identity, and control planes
      - Incidents with strong public reporting, postmortems, or primary technical analysis
      - Cases that help explain how internet concentration turns local mistakes into public outages
    structureTitle: How the site is organized
    structureItems:
      - The homepage handles the core narrative and the most defining incidents
      - The timeline isolates a smaller canon that best explains shared infrastructure failure
      - The archive and taxonomy expand the record into supporting cases and recurring failure classes
      - The About file now includes the methodology and source record for the atlas
    principlesTitle: Editorial approach
    principlesItems:
      - Write clearly and keep the failure mode specific
      - Prefer shared dependency patterns over vendor branding
      - Treat outages as historical records, not product marketing copy
      - Keep the design readable in both light and dark theme without losing the atlas character
    linkedinUrl: https://www.linkedin.com/in/jonathanrreed0/
    githubUrl: https://github.com/JonathanRReed
  - _component: atlas/methodology-section
    kicker: 'Methodology and Sources · Integrated Record'
    heading: How This Atlas Was Built
    leftTitle: Inclusion Criteria
    leftBody: >-
      <p>An incident belongs here if it produced meaningful U.S. user impact,
      revealed a failure mode worth tracking, or clarified how shared
      infrastructure actually breaks. Meaningful means more than a short wobble
      and more than one service feeling it.</p>

      <p>Minor degradations stay out. So do incidents that can only be verified
      through social posts or cases where the sourcing is too thin to trust the
      key facts.</p>
    leftTitle2: Handling Disputed Details
    leftBody2: >-
      <p>When authoritative sources conflict, this atlas uses the most
      conservative figure and notes the dispute. Financial loss numbers are used
      as scale markers, not as precise accounting.</p>
    rightTitle: Source Hierarchy
    rightItems:
      - Company postmortems and official incident reports
      - Regulatory filings (FCC, CRTC, and equivalent bodies)
      - Technical analyses by BGP monitoring services (Cloudflare Radar, RIPE NCC, RouteViews)
      - Investigative journalism with technical depth and primary sources cited
      - Peer-reviewed research and major conference proceedings (USENIX, SIGCOMM)
    rightTitle2: Scope and Coverage
    rightItems2:
      - Launch corpus built around the strongest incidents documented in the merged report
      - Homepage remains a curated narrative, while timeline and archives broaden coverage
      - 'Temporal scope: historical incidents through March 2026'
      - 'Geographic focus: incidents with significant U.S. user impact prioritized'
      - 'No real-time monitoring component; this is a historical record'
  - _component: atlas/atlas-footer
    publicationTitle: 'Internet<br>Outage Atlas'
    tagline: A project, creator, and methodology record for the atlas
    figures:
      - bold: '1'
        text: 'Creator: Jonathan R Reed'
      - bold: Atlas
        text: 'Editorial reference on shared infrastructure failure'
      - bold: Method
        text: 'Selection rules and source hierarchy included in this file'
    editionText: 'About Edition<br />Project, creator, and methodology record'
    copyrightText: '© 2026 Jonathan R Reed'
    typesetText: 'Creator: Jonathan R Reed'
    websiteUrl: 'https://JonathanRReed.com'
    articleUrl: 'https://JonathanRReed.com/blog/days-the-internet-dies/'
---
