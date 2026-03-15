---
_schema: default
title: Internet Outage Atlas
description: >-
  The Internet Outage Atlas: a forensic editorial record of the failures that
  define modern digital infrastructure, in the typographic tradition of serious
  journalism.
pageSections:
  - _component: atlas/hero-broadsheet
    dateline: "Vol. I \xB7 Issue 1 \xB7 Curated Edition 2026 \xB7 52 Incidents Documented"
    kicker: 'Internet Outage Atlas · Launch Edition'
    heading: 'INTERNET<br>OUTAGE ATLAS'
    subtitle: A reference to the outages that showed how shared internet systems fail
    byline: "By The Internet Outage Atlas Project \xB7 March 2026"
    heroHeading: How internet failures spread
    heroQuote: ''
    heroBody: >-
      <p>The biggest outages are rarely one server going down. They are
      failures in a few shared layers. DNS. BGP. CDNs. Identity. Control
      planes. When one of those layers breaks, unrelated services start failing
      together.</p>

      <p>This atlas tracks fifty-two incidents where the blast radius escaped
      the original system and spilled into public life. Hospitals switched to
      paper. Airlines stopped moving. Banks went dark. Emergency systems
      failed. The same dependency patterns keep showing up because the internet
      is more concentrated than it looks.</p>

      <p>Read the <a href="#timeline">Featured Timeline</a>, review the <a
      href="#archive">Incident Archive</a>, and study the <a
      href="#taxonomy">Failure Taxonomy</a> to see what broke, how it spread,
      and why the same failures keep returning.</p>
    statFigures:
      - number: '52'
        label: Incidents Documented
        note: Curated atlas, version 1
      - number: 8.5M
        label: Devices in largest incident
        note: CrowdStrike Falcon, July 2024
      - number: $47B
        label: Market cap lost in single outage
        note: Facebook/Meta, October 2021
      - number: 26h
        label: Longest telecom outage duration
        note: Rogers Canada, July 2022
      - number: BGP
        label: Dominant failure class
        note: Border Gateway Protocol misconfig

  - _component: atlas/outage-timeline
    kicker: "Chapter Three \xB7 Featured Timeline"
    heading: Eight Defining Incidents
    intro: >-
      These are the incidents operators still cite because each one exposed a
      different way shared infrastructure can fail.
    entries:
      - year: '2016'
        title: Dyn DNS DDoS Attack
        dek: "Dyn \xB7 Mirai Botnet \xB7 Eastern United States"
        severity: Critical
        category: DNS / DDoS
        body: >-
          Mirai used hacked cameras, routers, DVRs, and other junk devices to
          hammer Dyn's DNS infrastructure. Twitter, Spotify, GitHub, Reddit,
          and much of the East Coast web started failing together. The point was
          not only the attack. It was how much of the visible web depended on
          one naming layer.
        duration: "Duration: approximately 8 hours \xB7 October 21, 2016"
      - year: '2017'
        title: AWS S3 US-East-1 Outage
        dek: "Amazon Web Services \xB7 Northern Virginia Region"
        severity: Critical
        category: Cloud / Human Error
        body: >-
          A mistyped debugging command removed more S3 capacity than intended.
          Thousands of applications went down with it, including systems people
          did not realize depended on that region so heavily. The outage became
          a lasting example of how one control-plane mistake can turn a local
          action into a public outage.
        duration: "Duration: approximately 4 hours \xB7 February 28, 2017"
      - year: '2020'
        title: CenturyLink / Level 3 Backbone Outage
        dek: "CenturyLink \xB7 Lumen Technologies \xB7 Global Backbone"
        severity: High Severity
        category: BGP / ISP
        body: >-
          A bad Flowspec rule was supposed to block abuse. Instead it blocked
          BGP itself across one of the internet's largest backbones. Routers
          crashed, restarted, received the same bad rule, and crashed again.
          The network started rejecting the information needed to fix the
          network.
        duration: "Duration: approximately 4.5 hours \xB7 August 30, 2020"
      - year: '2021'
        title: Fastly Global Content Delivery Outage
        dek: "Fastly \xB7 Global CDN Network"
        severity: Critical
        category: CDN / Edge
        body: >-
          A dormant software bug sat in Fastly's network until a customer pushed
          a valid configuration change. Within seconds, most of Fastly's global
          edge started returning errors. News sites, commerce platforms, and
          government pages disappeared together because the front door was more
          shared than it looked.
        duration: "Duration: approximately 1 hour \xB7 June 8, 2021"
      - year: '2021'
        title: Facebook Global Blackout
        dek: "Meta Platforms \xB7 Facebook, Instagram, WhatsApp, Messenger"
        severity: Critical
        category: BGP / Platform
        body: >-
          One backbone maintenance change withdrew Meta's BGP routes. Facebook,
          Instagram, WhatsApp, and Messenger vanished at the same time. The
          harder part came next. The same failure also cut engineers off from
          some of the internal systems needed to fix it, which turned an outage
          into a recovery trap.
        duration: "Duration: approximately 6 hours \xB7 October 4, 2021"
      - year: '2024'
        title: CrowdStrike Falcon Global Outage
        dek: "CrowdStrike \xB7 Microsoft Windows \xB7 Worldwide"
        severity: Critical
        category: Software Supply Chain
        body: >-
          A routine CrowdStrike update shipped a bad configuration file and
          crashed Windows at kernel level on an estimated 8.5 million devices.
          Airlines could not board passengers. Hospitals switched to paper.
          Banks shut down systems. Recovery was slow because every broken
          machine needed hands-on work.
        duration: "Duration: recovery spanning 10 days \xB7 July 19, 2024"
      - year: '2025'
        title: AWS DynamoDB DNS Failure
        dek: "Amazon Web Services \xB7 Northern Virginia Region"
        severity: Critical
        category: Cloud / DNS
        body: >-
          DNS resolution for DynamoDB failed in us-east-1. Disney+, Delta,
          Reddit, Robinhood, Roblox, and many other services went dark. The
          data was still there. The names stopped resolving. A naming failure
          overruled the resilience of the underlying system.
        duration: "Duration: approximately 15 hours \xB7 October 20, 2025"

  - _component: atlas/incident-archive
    kicker: "Chapter Four \xB7 Incident Archive"
    heading: The Broader Corpus
    intro: >-
      Additional incidents from the full atlas, shown as shorter archive cards.
    clippings:
      - date: February 2008
        category: BGP Route Hijack
        headline: Pakistan Telecom Blacks Out YouTube for the World
        body: >-
          Pakistan tried to block YouTube at home. The route escaped, spread,
          and briefly blacked out YouTube for everyone else. A local censorship
          action became a global routing fact.
        lesson: 'Lesson: BGP spreads bad routes fast. Filters are mandatory.'
      - date: April 2011
        category: Cloud Infrastructure
        headline: AWS EC2 Failure Exposes Limits of Availability Zone Isolation
        body: >-
          A network upgrade misrouted EBS traffic and took volumes offline in
          us-east-1. Reddit, Quora, Foursquare, and other services built too
          tightly around one zone lost their cushion fast.
        lesson: 'Lesson: Single-region comfort disappears during a real outage.'
      - date: June 2019
        category: BGP Route Leak
        headline: Verizon Route Leak Disrupts 15 Percent of Global Internet Traffic
        body: >-
          A small provider leaked routes it did not own. Verizon accepted them
          and propagated them. Cloudflare, Facebook, Google, and much more of
          the network got pulled into the mistake.
        lesson: 'Lesson: Upstream filtering has to be real, not assumed.'
      - date: December 2020
        category: Authentication Failure
        headline: Google Auth Outage Renders All Google Services Inaccessible
        body: >-
          A quota enforcement mistake during an auth migration knocked out
          Gmail, YouTube, Drive, and everything else tied to the same gate.
          The apps were not the first problem. Access was.
        lesson: 'Lesson: When auth fails, healthy services still feel dead.'
      - date: July 2021
        category: DNS / CDN
        headline: Akamai DNS Outage Silences FedEx, Airlines, and Major Banks
        body: >-
          A configuration update triggered a bug in Akamai Edge DNS and took
          down a long list of companies that looked unrelated until they failed
          at the same time.
        lesson: 'Lesson: DNS dependencies reach farther than most teams think.'
      - date: July 2022
        category: Telecom Core Failure
        headline: 'Rogers Canada: 12 Million Without Service, Including 911'
        body: >-
          A core network upgrade removed a critical filter and sent traffic into
          the wrong place at the wrong scale. Rogers collapsed under the load,
          taking mobile service, internet access, and 911 with it for millions
          of people.
        lesson: 'Lesson: Core networks need overload protection before the bad day.'

  - _component: atlas/failure-taxonomy
    kicker: "Chapter Five \xB7 Failure Taxonomy"
    heading: How the Internet Fails
    intro: >-
      Six recurring failure classes. Different triggers, different spread
      patterns, same outcome: too much depends on too few shared layers.
    entries:
      - word: DNS
        position: noun, failure class 01
        fullName: Domain Name System
        definition: >-
          The address book of the internet fails to resolve domain names to IP
          addresses. Servers remain operational, but users cannot discover their
          locations. The failure mode is total, invisible, and affects every
          user simultaneously.
        triggers: >-
          <strong>Common triggers:</strong> Volumetric DDoS attacks against
          resolvers, software defects in DNS server applications activated by
          configuration changes, quota enforcement errors in cloud DNS
          infrastructure.
        examples:
          - Dyn DDoS 2016
          - Akamai DNS 2021
          - AWS DynamoDB 2025
      - word: BGP / Routing
        position: noun, failure class 02
        fullName: Border Gateway Protocol
        definition: >-
          The routing protocol that connects the world's networks to each other
          is corrupted by leaked or incorrect route announcements. Traffic is
          sent to incorrect destinations, or routed into a black hole.
        triggers: >-
          <strong>Common triggers:</strong> Route leaks from small ISPs without
          proper filters, BGP Optimizer software misbehavior,
          government-ordered route announcements that escape containment,
          faulty Flowspec rules issued to routers.
        examples:
          - Pakistan YouTube 2008
          - Verizon 2019
          - Facebook 2021
          - CenturyLink 2020
      - word: CDN / Edge
        position: noun, failure class 03
        fullName: Content Delivery Network
        definition: >-
          Content delivery networks, which serve the majority of web traffic,
          fail simultaneously across their distributed infrastructure.
          Thousands of websites go dark even though their origin servers remain
          fully operational.
        triggers: >-
          <strong>Common triggers:</strong> Latent software bugs activated by
          valid configuration changes, errors in configuration update systems,
          DDoS mitigation systems that inadvertently block legitimate traffic.
        examples:
          - Fastly 2021
          - Akamai 2021
          - Cloudflare 2025
      - word: Cloud Control Plane
        position: noun, failure class 04
        fullName: Cloud Management Layer
        definition: >-
          The management infrastructure that orchestrates cloud services fails.
          All data stored within the affected cloud remains intact, but no
          application can reach it, and no new resources can be created.
        triggers: >-
          <strong>Common triggers:</strong> Configuration changes to
          foundational services, quota enforcement system errors,
          authentication infrastructure failures during migration operations.
        examples:
          - AWS S3 2017
          - Google Auth 2020
          - Azure Storage 2014
      - word: Software Supply Chain
        position: noun, failure class 05
        fullName: Dependency Propagation
        definition: >-
          A software update, library change, or security tool introduces a
          defect that spreads to every dependent system at once. Nobody has to
          opt in after the bad release. The dependency does the spreading.
        triggers: >-
          <strong>Common triggers:</strong> Routine update deployments without
          adequate staged rollout, kernel-level security software with
          privileged system access, certificate expiry in widely distributed
          libraries, malicious modifications to widely used packages.
        examples:
          - NotPetya 2017
          - CrowdStrike 2024
      - word: Telecom Backbone
        position: noun, failure class 06
        fullName: Tier-1 Infrastructure
        definition: >-
          Tier-1 carriers and backbone ISPs that carry large fractions of
          global internet traffic fail, affecting all of their downstream
          transit customers simultaneously.
        triggers: >-
          <strong>Common triggers:</strong> Errors during scheduled maintenance
          windows, faulty routing protocol configuration rules, physical fiber
          damage, core network overload cascading through shared infrastructure
          without protective rate limits.
        examples:
          - CenturyLink 2020
          - Rogers 2022
          - CenturyLink 911 2018

  - _component: atlas/blast-radius
    kicker: "Chapter Six \xB7 Blast Radius"
    heading: How Failures Spread
    intro: >-
      Outage scale is mostly a dependency story. The more shared the layer, the
      less local the failure stays.
    insetTitle: "Failure Propagation Model \xB7 Illustrated"
    insetSub: >-
      Four levels, from contained failure to broad cascade.
    levels:
      - numeral: I
        title: Local Failure
        description: >-
          A single server or service fails. Only its direct users are affected.
          Recovery is rapid and contained.
        isRed: false
      - numeral: II
        title: Provider Failure
        description: >-
          A cloud region or CDN fails. Dependent customers lose service at the
          same time, no matter how carefully they wrote their own code.
        isRed: false
      - numeral: III
        title: Shared Dependency
        description: >-
          DNS or BGP fails. Services across providers disappear together because
          the shared map or naming layer stopped working.
        isRed: true
      - numeral: IV
        title: Cascading Collapse
        description: >-
          Failure in one system overloads adjacent systems. Retry storms and
          routing instability compound into self-reinforcing collapse.
        isRed: true

  - _component: atlas/methodology-section
    kicker: "Chapter Seven \xB7 Methodology and Sources"
    heading: How This Atlas Was Built
    leftTitle: Inclusion Criteria
    leftBody: >-
      <p>An incident belongs here if it produced meaningful U.S. user impact,
      revealed a failure mode worth tracking, or clarified how shared
      infrastructure actually breaks. "Meaningful" means more than a short
      wobble and more than one service feeling it.</p>

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
      - 52-incident curated atlas, version 1
      - 13-incident canonical core for the featured timeline
      - 56-incident watchlist for potential version 2 expansion
      - 'Temporal scope: year 2000 through March 2026'
      - 'Geographic focus: incidents with significant U.S. user impact prioritized'
      - 'No real-time monitoring component; this is a historical record'

  - _component: atlas/atlas-footer
    publicationTitle: 'INTERNET<br>OUTAGE<br>ATLAS'
    tagline: A record of the failures that exposed how much daily life rests on shared internet infrastructure.
    figures:
      - bold: '52'
        text: Incidents documented, v1
      - bold: 8.5M
        text: "Devices crashed \xB7 CrowdStrike 2024"
      - bold: $47B
        text: "Market cap lost \xB7 Facebook 2021"
      - bold: 26h
        text: "Longest outage \xB7 Rogers 2022"
    editionText: "Archival Broadsheet Edition<br>Vol. I \xB7 March 2026<br>CloudCannon Astro Challenge"
    copyrightText: "\xA9 2026 Internet Outage Atlas Project. All content for educational purposes."
    typesetText: 'JonathanRReed.com · Original article available'
    websiteUrl: 'https://JonathanRReed.com'
    articleUrl: 'https://JonathanRReed.com/blog/days-the-internet-dies/'
---
