---
_schema: default
title: Archives
description: Extended outage records from Internet Outage Atlas for incidents not already featured on the homepage.
pageSections:
  - _component: atlas/archives-register
    dateline: 'Vol. I · Extension Register · Additional incidents documented'
    kicker: 'Internet Outage Atlas · Extended Register'
    heading: 'THE<br>ARCHIVES'
    subtitle: Additional outage records drawn from the merged report and article draft, excluding the incidents already carried on the homepage
    byline: Selected from the merged report and The Days the Internet Died
    introTitle: The rest of the record
    introBody: >-
      <p>The homepage carries the primary narrative, the featured timeline, and a
      smaller supporting archive. This page extends that work instead of
      repeating it. The incidents below come from the broader research pool and
      focus on failures that still clarify how shared infrastructure breaks.</p>

      <p>The organizing rule is the same as the rest of the atlas: start with the
      layer that amplified the outage. Routing, naming, trust, shared provider
      dependencies, control planes, and physical systems all fail differently.
      The archive is where those differences become easier to compare.</p>
    scopeTitle: What this page covers
    scopeItems:
      - Incidents not already featured on the homepage timeline or homepage clippings
      - Additional cases drawn from the merged report and article draft
      - Grouping by failure propagation instead of vendor branding alone
      - Short editorial records meant for scanning, comparison, and follow-up research
    groups:
      - label: Routing failures
        heading: When bad maps become public reality
        intro: The service may still exist. The route to it is what disappears, leaks, or gets replaced by something false.
        items:
          - date: April 1997
            category: BGP leak
            title: AS7007 Route Leak
            summary: A misconfigured router at MAI Network Services originated a massive set of more-specific routes and polluted routing tables across the internet. The event became an early proof that one broken routing announcement could destabilize far more than the network that sent it.
            lesson: 'Lesson: BGP accepts bad claims quickly unless filters stop them first.'
          - date: April 2014
            category: Route hijack
            title: Indosat BGP Hijack
            summary: An Indonesian provider briefly announced routes for large portions of the internet, diverting traffic that had nothing to do with it. The incident showed how an operational mistake in one network can distort global reachability in minutes.
            lesson: 'Lesson: A local route leak becomes global if upstream trust is too loose.'
          - date: July 2015
            category: Route leak
            title: AxcelX and AWS Route Leak
            summary: Routes connected to AWS address space leaked outward and disrupted access to major sites and services. The fault was not in application code. It was in the routing layer that decides where traffic goes at all.
            lesson: 'Lesson: Cloud scale does not protect against bad routing inputs.'
          - date: November 2018
            category: Route leak
            title: MainOne and Google Route Leak
            summary: A route leak involving MainOne and China Telecom redirected traffic for Google and other large services through unexpected paths. It was a sharp demonstration of how brittle inter-network trust still is.
            lesson: 'Lesson: Route hygiene is a dependency, not a best-effort courtesy.'
      - label: Naming, identity, and trust
        heading: When the service still exists but users cannot reach or trust it
        intro: Some failures do not knock servers offline. They break naming, authentication, or certificate trust, which is enough to make healthy systems feel dead.
        items:
          - date: July 2021
            category: Cloud DNS
            title: Azure DNS Outage
            summary: A DNS-layer problem inside Azure interrupted name resolution and widened into a broader cloud-service disruption. Parts of the visibility and status path became unreliable too, which made diagnosis harder for customers already in the dark.
            lesson: 'Lesson: A naming failure often reaches users before any deeper system fault is visible.'
          - date: September 2021
            category: Identity failure
            title: Azure AD Key-Rotation Outage
            summary: A signing-key problem became a long authentication outage across Microsoft 365, Teams, Exchange Online, and related services. Systems were still there, but access to them was blocked by the gate in front.
            lesson: 'Lesson: Identity infrastructure fails like public infrastructure once enough work depends on it.'
          - date: May 2020
            category: PKI expiration
            title: Sectigo AddTrust Root Expiration
            summary: The expiration of the AddTrust root certificate triggered trust failures on legacy systems and broke connections that still depended on that chain. A quiet certificate deadline turned into a visible service problem for older clients.
            lesson: 'Lesson: Trust chains are part of availability, not just security.'
          - date: September 2021
            category: PKI expiration
            title: Let's Encrypt DST Root CA X3 Expiration
            summary: The expiration of DST Root CA X3 caused compatibility failures on older Android devices and legacy clients that still anchored trust there. Modern infrastructure stayed up while part of the user base lost the ability to connect cleanly.
            lesson: 'Lesson: Client compatibility can turn a certificate event into a real outage.'
      - label: Shared platforms and front doors
        heading: When unrelated services fail together
        intro: These incidents mattered because one shared provider or shared operational layer sat in front of many different products at once.
        items:
          - date: July 2021
            category: DDoS mitigation
            title: Akamai Prolexic Outage
            summary: A platform designed to preserve availability became the source of unavailability instead. Customers depending on Prolexic lost service because the defensive layer itself failed under load.
            lesson: 'Lesson: Shared protection systems become shared failure systems when they break.'
          - date: May 2021
            category: SaaS DNS
            title: Salesforce Multi-hour Outage
            summary: A DNS-related failure affected Salesforce services and disrupted the large body of business workflows built on top of them. The outage hit as an enterprise dependency problem, not just an app problem.
            lesson: 'Lesson: SaaS platforms inherit the blast radius of their own shared front doors.'
          - date: February 2022
            category: Collaboration platform
            title: Slack Outage
            summary: Slack suffered a cascading failure involving database and cache systems, which disrupted messaging, connections, and workflow continuity for teams that depend on it as operating infrastructure. Recovery was shaped by how many internal pieces were failing together.
            lesson: 'Lesson: Collaboration software behaves like infrastructure once offices route work through it.'
          - date: August 2020
            category: Video platform
            title: Zoom Partial Global Outage
            summary: Zoom experienced a broad service disruption during the period when remote work had made video infrastructure a daily dependency. The incident showed how a platform that looks optional can become operationally central very quickly.
            lesson: 'Lesson: Once a platform becomes routine coordination infrastructure, partial outages stop feeling partial.'
      - label: Cloud and control planes
        heading: When recovery tools and platform internals start failing too
        intro: The hardest cloud outages are not just service failures. They are outages where the systems needed to understand or recover the outage are also under stress.
        items:
          - date: November 2014
            category: Cloud deploy failure
            title: Azure Storage Outage
            summary: Human error during a storage-system deployment led to a broad Azure outage and became one of the clearer early examples of control-plane mistakes causing large customer impact. The trigger was routine. The spread was not.
            lesson: 'Lesson: Ordinary maintenance becomes infrastructure risk at cloud scale.'
          - date: June 2019
            category: Cloud networking
            title: Google Cloud Networking Outage
            summary: A routine change cascaded through Google Cloud's networking systems and led to major traffic loss and degraded access across services. The incident showed how internal reliability changes can widen into public unavailability.
            lesson: 'Lesson: Reliability work can become an outage vector when coordination layers fail with it.'
          - date: December 2021
            category: Cloud DNS and control plane
            title: AWS US-East-1 Control-Plane Outage
            summary: Internal networking and DNS issues in US-East-1 disrupted AWS services, Amazon devices, logistics systems, and third-party applications. The region concentration problem was visible, but so was the depth of internal dependency inside the same region.
            lesson: 'Lesson: Shared control planes magnify regional concentration into public outage scale.'
          - date: October 2021
            category: Distributed systems failure
            title: Roblox 73-hour Outage
            summary: Roblox went down for roughly three days after failures involving internal service-discovery and data systems compounded across a highly interconnected platform. The length of the outage made the recovery-path problem impossible to ignore.
            lesson: 'Lesson: Complex platforms fail longer when the coordination layer is part of the incident.'
      - label: Physical and public infrastructure
        heading: When geography and public systems stop being abstract
        intro: The cloud still depends on buildings, cables, power, carrier paths, and public-safety infrastructure that can fail in the same event.
        items:
          - date: August 2005
            category: Telecom infrastructure
            title: Hurricane Katrina Telecom Failures
            summary: Katrina destroyed fiber paths, towers, power, and fuel logistics together, collapsing multiple redundant systems at once. It remains one of the clearest examples of geography overpowering abstract redundancy claims.
            lesson: 'Lesson: Redundancy fails when the same event wipes out every redundant path.'
          - date: February 2008
            category: Datacenter power
            title: The Planet Houston Outage
            summary: A power failure at The Planet's Houston datacenter exposed how fragile backup systems can be when they are tested under real pressure. Thousands of hosted servers went dark and recovery stretched across days.
            lesson: 'Lesson: Backup power is not resilience unless failover actually survives the event.'
          - date: December 2018
            category: Public-safety outage
            title: CenturyLink 911 Outage
            summary: A network failure disrupted 911 service across multiple states and affected millions of customers. The incident showed how emergency calling systems could still share failure domains with commercial backbone infrastructure.
            lesson: 'Lesson: Public safety is only as isolated as the infrastructure it actually shares.'
          - date: June 2018
            category: Fiber cut
            title: Comcast Fiber Cut Outage
            summary: A large Comcast outage traced back to physical infrastructure damage and showed how ordinary cable-path failures can still produce wide consumer and enterprise impact. The cloud did not make the fiber less real.
            lesson: "Lesson: Physical chokepoints remain part of the internet's blast-radius story."
  - _component: atlas/atlas-footer
    publicationTitle: 'Internet<br>Outage Atlas'
    tagline: Extended archive for the incidents not carried on the homepage canon
    figures:
      - bold: '16'
        text: 'Additional incidents in this register'
      - bold: '14'
        text: 'Homepage incidents reserved for the main narrative'
      - bold: Scope
        text: 'Routing, naming, gates, shared providers, control planes, and physical failures'
    editionText: 'Archive Edition<br />Extended incident register'
    copyrightText: '© 2026 Jonathan R Reed'
    typesetText: 'Curated from the merged report and article draft by Jonathan R Reed'
---
