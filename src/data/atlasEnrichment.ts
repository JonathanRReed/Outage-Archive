// AUTO-GENERATED — geo, affected-services, provider, duration, and source enrichment for atlas incidents.
// Drafted by a web-verified research workflow and reviewed before merge.
// 50 incidents enriched. Editorial content lives in atlasIncidents.ts.
import type { AtlasIncident } from "./atlasIncidents";

export const atlasEnrichment: Record<string, Partial<AtlasIncident>> = {
  "as7007-route-leak": {
    scope: "global",
    severityRank: 2,
    provider: "mai-network-services",
    affectedServices: [
      {
        name: "MAI Network Services (AS7007)",
        providerSlug: "mai-network-services",
      },
    ],
    sources: [
      {
        label: "Wikipedia — AS 7007 incident",
        url: "https://en.wikipedia.org/wiki/AS_7007_incident",
      },
      {
        label: "NANOG — A Brief History of the Internet's Biggest BGP Incidents",
        url: "https://nanog.org/stories/articles/a-brief-history-of-the-internets-biggest-bgp-incidents/",
      },
      {
        label: "Kentik — A Brief History of the Internet's Biggest BGP Incidents",
        url: "https://www.kentik.com/blog/a-brief-history-of-the-internets-biggest-bgp-incidents/",
      },
    ],
  },
  "hurricane-katrina-telecom-failures": {
    scope: "regional",
    severityRank: 3,
    geo: [
      {
        lat: 29.95,
        lng: -90.07,
        label: "New Orleans, LA",
      },
      {
        lat: 30.4,
        lng: -88.9,
        label: "Mississippi Gulf Coast (Biloxi/Gulfport)",
      },
      {
        lat: 30.6,
        lng: -89.4,
        label: "Slidell / southeast Louisiana",
      },
    ],
    affectedServices: [
      {
        name: "BellSouth",
        providerSlug: "bellsouth",
      },
      {
        name: "Sprint Nextel",
        providerSlug: "sprint",
      },
      {
        name: "Cingular Wireless",
        providerSlug: "cingular",
      },
      {
        name: "Public Safety Answering Points (911/E911)",
        providerSlug: "psap",
      },
    ],
    sources: [
      {
        label: "FCC Katrina Panel (overview)",
        url: "https://www.fcc.gov/katrina-panel",
      },
      {
        label: "FCC Order Adopting Independent Panel Recommendations (FCC 07-177)",
        url: "https://docs.fcc.gov/public/attachments/FCC-07-177A1.pdf",
      },
      {
        label: "Washington Post: Telecom Damage Tops $400 Million (Sept 2005)",
        url: "http://www.washingtonpost.com/wp-dyn/content/article/2005/09/05/AR2005090501231.html",
      },
    ],
  },
  "pakistan-youtube-route-hijack": {
    scope: "global",
    severityRank: 3,
    provider: "pakistan-telecom",
    originRegion: {
      lat: 33.6844,
      lng: 73.0479,
      label: "Pakistan Telecom / AS17557 (Islamabad, PK)",
    },
    affectedServices: [
      {
        name: "YouTube",
        providerSlug: "google",
      },
    ],
    durationMinutes: 125,
    sources: [
      {
        label: "RIPE NCC: YouTube Hijacking — A RIPE NCC RIS Case Study",
        url: "https://www.ripe.net/about-us/news/youtube-hijacking-a-ripe-ncc-ris-case-study/",
      },
      {
        label:
          "Google Research: YouTube Hijacking (Feb 24 2008) — Analysis of BGP Routing Dynamics",
        url: "https://research.google/pubs/youtube-hijacking-february-24th-2008-analysis-of-bgp-routing-dynamics/",
      },
      {
        label: "Renesys Blog: Pakistan hijacks YouTube (archived)",
        url: "https://crysp.uwaterloo.ca/courses/cs458/F08-lectures/local/www.renesys.com/blog/2008/02/pakistan_hijacks_youtube_1.shtml.html",
      },
    ],
  },
  "the-planet-houston-outage": {
    scope: "local",
    severityRank: 2,
    provider: "the-planet",
    geo: [
      {
        lat: 29.7604,
        lng: -95.3698,
        label: "Houston, TX (The Planet H1 datacenter)",
      },
    ],
    affectedServices: [
      {
        name: "The Planet (web hosting provider)",
        providerSlug: "the-planet",
      },
    ],
    sources: [
      {
        label: "Data Center Knowledge: Explosion at The Planet Causes Major Outage",
        url: "https://www.datacenterknowledge.com/archives/2008/06/01/explosion-at-the-planet-causes-major-outage",
      },
      {
        label: "Computerworld: Explosion has data center scrambling, users venting",
        url: "https://www.computerworld.com/article/2786156/explosion-has-data-center-scrambling--users-venting.html",
      },
      {
        label: "Slashdot: Explosion At ThePlanet Datacenter Drops 9,000 Servers",
        url: "https://tech.slashdot.org/story/08/06/01/1715247/explosion-at-theplanet-datacenter-drops-9000-servers",
      },
    ],
  },
  "aws-ec2-ebs-2011": {
    scope: "regional",
    severityRank: 3,
    provider: "aws",
    geo: [
      {
        lat: 38.94,
        lng: -77.45,
        label: "us-east-1 (N. Virginia)",
      },
    ],
    originRegion: {
      lat: 38.94,
      lng: -77.45,
      label: "us-east-1 (N. Virginia)",
    },
    affectedServices: [
      {
        name: "Reddit",
        providerSlug: "reddit",
      },
      {
        name: "Quora",
        providerSlug: "quora",
      },
      {
        name: "Foursquare",
        providerSlug: "foursquare",
      },
      {
        name: "Heroku",
        providerSlug: "heroku",
      },
      {
        name: "Hootsuite",
        providerSlug: "hootsuite",
      },
      {
        name: "Engine Yard",
        providerSlug: "engineyard",
      },
    ],
    durationMinutes: 4470,
    sources: [
      {
        label:
          "AWS official postmortem: Summary of the Amazon EC2 and Amazon RDS Service Disruption in the US East Region",
        url: "https://aws.amazon.com/message/65648/",
      },
      {
        label: "The Register: Amazon cloud fell from sky after botched network upgrade",
        url: "https://www.theregister.com/Print/2011/04/29/amazon_ec2_outage_post_mortem/",
      },
    ],
  },
  "indosat-bgp-hijack": {
    scope: "global",
    severityRank: 2,
    provider: "indosat",
    originRegion: {
      lat: -6.2088,
      lng: 106.8456,
      label: "Indosat (AS4761), Jakarta, Indonesia",
    },
    durationMinutes: 169,
    sources: [
      {
        label: "BGPmon: 'Hijack' by AS4761 - Indosat, a quick report",
        url: "https://www.bgpmon.net/hijack-by-as4761-indosat-a-quick-report/",
      },
      {
        label: "BGPmon: Hijack event today by Indosat",
        url: "https://www.bgpmon.net/hijack-event-today-by-indosat/",
      },
    ],
  },
  "azure-storage-outage-2014": {
    scope: "global",
    severityRank: 3,
    provider: "microsoft",
    affectedServices: [
      {
        name: "Azure Storage (Blob)",
        providerSlug: "microsoft",
      },
      {
        name: "Azure Virtual Machines",
        providerSlug: "microsoft",
      },
      {
        name: "Azure Websites",
        providerSlug: "microsoft",
      },
      {
        name: "Azure Active Directory / identity services",
        providerSlug: "microsoft",
      },
    ],
    durationMinutes: 660,
    sources: [
      {
        label:
          "Microsoft Azure Blog — Final Root Cause Analysis: Nov 18 Azure Storage Service Interruption",
        url: "https://azure.microsoft.com/en-us/blog/final-root-cause-analysis-and-improvement-areas-nov-18-azure-storage-service-interruption/",
      },
      {
        label: "Network World — Human error root cause of November Microsoft Azure outage",
        url: "https://www.networkworld.com/article/2861018/human-error-root-cause-of-november-microsoft-azure-outage.html",
      },
      {
        label: "Data Center Knowledge — Recent Microsoft Azure Outage Came Down to Human Error",
        url: "https://www.datacenterknowledge.com/outages/recent-microsoft-azure-outage-came-down-to-human-error-report",
      },
    ],
  },
  "axcelx-aws-route-leak": {
    scope: "global",
    severityRank: 2,
    provider: "axcelx",
    originRegion: {
      lat: 42.3601,
      lng: -71.0589,
      label: "Boston, MA (AxcelX / AS33083)",
    },
    affectedServices: [
      {
        name: "Amazon Web Services (AWS)",
        providerSlug: "aws",
      },
      {
        name: "Reddit",
      },
      {
        name: "Netflix",
      },
      {
        name: "Yelp",
      },
      {
        name: "Match",
      },
      {
        name: "Tinder",
      },
      {
        name: "HipChat",
      },
      {
        name: "Jobvite",
      },
      {
        name: "Experian",
      },
    ],
    durationMinutes: 42,
    sources: [
      {
        label: "iTnews — Route leak cuts access to Amazon Web Services",
        url: "https://www.itnews.com.au/news/route-leak-cuts-access-to-amazon-web-services-406033",
      },
      {
        label:
          "Network World — Config error at Boston-area hosting company takes down Reddit, others",
        url: "https://www.networkworld.com/article/940698/config-error-at-boston-area-hosting-company-takes-down-reddit-others.html",
      },
      {
        label: "ThousandEyes — Route Leak Causes Amazon and AWS Outage",
        url: "https://www.thousandeyes.com/blog/route-leak-causes-amazon-and-aws-outage",
      },
    ],
  },
  "dyn-dns-ddos-attack": {
    scope: "global",
    severityRank: 3,
    provider: "dyn",
    affectedServices: [
      {
        name: "Twitter",
        providerSlug: "twitter",
      },
      {
        name: "Spotify",
        providerSlug: "spotify",
      },
      {
        name: "GitHub",
        providerSlug: "github",
      },
      {
        name: "Reddit",
        providerSlug: "reddit",
      },
      {
        name: "The New York Times",
        providerSlug: "nyt",
      },
      {
        name: "Amazon",
        providerSlug: "amazon",
      },
      {
        name: "Netflix",
        providerSlug: "netflix",
      },
      {
        name: "PayPal",
        providerSlug: "paypal",
      },
      {
        name: "Pinterest",
        providerSlug: "pinterest",
      },
      {
        name: "Etsy",
        providerSlug: "etsy",
      },
      {
        name: "Shopify",
        providerSlug: "shopify",
      },
      {
        name: "Airbnb",
        providerSlug: "airbnb",
      },
      {
        name: "Slack",
        providerSlug: "slack",
      },
    ],
    durationMinutes: 480,
    sources: [
      {
        label: "Dyn — Dyn Analysis Summary of Friday October 21 Attack (official, archived)",
        url: "https://web.archive.org/web/20161027025156/http://dyn.com/blog/dyn-analysis-summary-of-friday-october-21-attack/",
      },
      {
        label: "Wikipedia — DDoS attacks on Dyn",
        url: "https://en.wikipedia.org/wiki/DDoS_attacks_on_Dyn",
      },
      {
        label: "ThousandEyes — The DDoS Attack on Dyn's DNS Infrastructure",
        url: "https://www.thousandeyes.com/blog/dyn-dns-ddos-attack",
      },
    ],
  },
  "aws-s3-us-east-1-outage": {
    scope: "global",
    severityRank: 3,
    provider: "aws",
    originRegion: {
      lat: 38.94,
      lng: -77.45,
      label: "us-east-1 (N. Virginia)",
    },
    affectedServices: [
      {
        name: "Amazon S3",
        providerSlug: "aws",
      },
      {
        name: "AWS Lambda",
        providerSlug: "aws",
      },
      {
        name: "Amazon EC2",
        providerSlug: "aws",
      },
      {
        name: "Slack",
      },
      {
        name: "Trello",
      },
      {
        name: "Quora",
      },
      {
        name: "Giphy",
      },
      {
        name: "Medium",
      },
      {
        name: "Coursera",
      },
      {
        name: "Docker Hub",
        providerSlug: "docker",
      },
      {
        name: "Business Insider",
      },
    ],
    durationMinutes: 240,
    sources: [
      {
        label: "AWS official postmortem: Summary of the Amazon S3 Service Disruption (US-EAST-1)",
        url: "https://aws.amazon.com/message/41926/",
      },
      {
        label: "TechCrunch: Amazon AWS S3 outage is breaking things for a lot of websites and apps",
        url: "https://techcrunch.com/2017/02/28/amazon-aws-s3-outage-is-breaking-things-for-a-lot-of-websites-and-apps/",
      },
      {
        label:
          "The Register: AWS's S3 outage was so bad Amazon couldn't get into its own dashboard",
        url: "https://www.theregister.com/2017/03/01/aws_s3_outage/",
      },
    ],
  },
  "mainone-google-route-leak": {
    scope: "global",
    severityRank: 2,
    provider: "mainone",
    originRegion: {
      lat: 6.4541,
      lng: 3.3947,
      label: "Lagos, Nigeria (MainOne AS37282)",
    },
    affectedServices: [
      {
        name: "Google Search",
        providerSlug: "google",
      },
      {
        name: "Google Cloud Platform",
        providerSlug: "google",
      },
      {
        name: "G Suite / Gmail",
        providerSlug: "google",
      },
      {
        name: "Google Analytics",
        providerSlug: "google",
      },
    ],
    durationMinutes: 74,
    sources: [
      {
        label: "ThousandEyes: Internet Vulnerability Takes Down Google",
        url: "https://www.thousandeyes.com/blog/internet-vulnerability-takes-down-google",
      },
      {
        label: "Internet Society / MANRS: Route Leak Causes Major Google Outage",
        url: "https://www.internetsociety.org/blog/2018/11/route-leak-caused-a-major-google-outage/",
      },
      {
        label: "Cloudflare: How a Nigerian ISP Knocked Google Offline",
        url: "https://blog.cloudflare.com/how-a-nigerian-isp-knocked-google-offline/",
      },
    ],
  },
  "centurylink-911-outage": {
    scope: "regional",
    severityRank: 3,
    provider: "centurylink",
    geo: [
      {
        lat: 39.7392,
        lng: -104.9903,
        label: "Denver, CO (fault-origin node; impact nationwide across 39 US states)",
      },
    ],
    originRegion: {
      lat: 39.7392,
      lng: -104.9903,
      label: "Denver, CO (Infinera switching node where malformed packets originated)",
    },
    affectedServices: [
      {
        name: "CenturyLink (broadband/VoIP backbone)",
        providerSlug: "centurylink",
      },
      {
        name: "911 / Public Safety Answering Points (nationwide)",
      },
      {
        name: "Comcast",
        providerSlug: "comcast",
      },
      {
        name: "Verizon",
        providerSlug: "verizon",
      },
      {
        name: "TeleCommunication Systems (TCS)",
      },
      {
        name: "General Dynamics IT",
      },
      {
        name: "West Safety Services",
      },
      {
        name: "Infinera (equipment vendor; node that generated malformed packets)",
        providerSlug: "infinera",
      },
    ],
    durationMinutes: 2220,
    sources: [
      {
        label:
          "FCC Public Safety & Homeland Security Bureau - December 27, 2018 CenturyLink Network Outage Report",
        url: "https://docs.fcc.gov/public/attachments/DOC-359134A1.pdf",
      },
      {
        label: "NPR - FCC Investigates Widespread CenturyLink Outage That Disrupted 911 Service",
        url: "https://www.npr.org/2018/12/28/680747866/fcc-investigates-widespread-centurylink-outage-that-disrupted-911-service",
      },
      {
        label: "The Register - How four rotten packets broke CenturyLink's network for 37 hours",
        url: "https://www.theregister.com/2019/08/20/centurylink_outage_report_fcc/",
      },
    ],
  },
  "comcast-fiber-cut-outage": {
    scope: "regional",
    severityRank: 2,
    provider: "comcast",
    geo: [
      {
        lat: 40.71,
        lng: -74.01,
        label: "New York, NY",
      },
      {
        lat: 39.95,
        lng: -75.17,
        label: "Philadelphia, PA",
      },
      {
        lat: 35.78,
        lng: -78.64,
        label: "North Carolina (CenturyLink fiber cut)",
      },
    ],
    affectedServices: [
      {
        name: "Comcast Xfinity (internet, TV, voice)",
        providerSlug: "comcast",
      },
      {
        name: "Netflix",
        providerSlug: "netflix",
      },
      {
        name: "Okta",
        providerSlug: "okta",
      },
    ],
    durationMinutes: 240,
    sources: [
      {
        label: "CNBC: Comcast says cut fibers triggered nationwide outage",
        url: "https://www.cnbc.com/2018/06/29/comcast-says-customers-nationwide-are-experiencing-a-service-interrupt.html",
      },
      {
        label:
          "The Philadelphia Inquirer: Fiber cuts lead to big outages at Comcast, Verizon, and others",
        url: "https://www.inquirer.com/philly/business/comcast/sweeping-comcast-outage-reported-on-social-media-20180629.html",
      },
      {
        label: "Slate: Comcast Xfinity outage caused by cut fiber",
        url: "https://slate.com/technology/2018/06/comcast-internet-nationwide-outage-caused-by-cut-fiber-latest-status-updates.html",
      },
    ],
  },
  "verizon-route-leak-2019": {
    scope: "global",
    severityRank: 3,
    provider: "verizon",
    originRegion: {
      lat: 40.44,
      lng: -79.99,
      label: "Verizon AS701 / DQE Communications (Pittsburgh, PA region)",
    },
    affectedServices: [
      {
        name: "Cloudflare",
        providerSlug: "cloudflare",
      },
      {
        name: "Amazon Web Services",
        providerSlug: "aws",
      },
      {
        name: "Facebook",
        providerSlug: "meta",
      },
      {
        name: "Linode",
        providerSlug: "linode",
      },
      {
        name: "Google",
        providerSlug: "google",
      },
    ],
    durationMinutes: 120,
    sources: [
      {
        label: "Cloudflare official postmortem",
        url: "https://blog.cloudflare.com/how-verizon-and-a-bgp-optimizer-knocked-large-parts-of-the-internet-offline-today/",
      },
      {
        label: "Cloudflare technical deep dive",
        url: "https://blog.cloudflare.com/the-deep-dive-into-how-verizon-and-a-bgp-optimizer-knocked-large-parts-of-the-internet-offline-monday",
      },
      {
        label: "BleepingComputer: BGP Route Leak Causes Cloudflare and Amazon AWS Problems",
        url: "https://www.bleepingcomputer.com/news/technology/bgp-route-leak-causes-cloudflare-and-amazon-aws-problems/",
      },
    ],
  },
  "google-cloud-networking-outage-2019": {
    scope: "regional",
    severityRank: 3,
    provider: "google",
    geo: [
      {
        lat: 39.02,
        lng: -77.54,
        label: "us-east4 (N. Virginia/Ashburn)",
      },
      {
        lat: 34.05,
        lng: -118.24,
        label: "us-west2 (Los Angeles)",
      },
      {
        lat: -23.55,
        lng: -46.63,
        label: "southamerica-east1 (São Paulo)",
      },
      {
        lat: 45.5,
        lng: -73.57,
        label: "northamerica-northeast1 (Montréal)",
      },
    ],
    originRegion: {
      lat: 39.02,
      lng: -77.54,
      label: "us-east4 (N. Virginia)",
    },
    affectedServices: [
      {
        name: "YouTube",
        providerSlug: "google",
      },
      {
        name: "Gmail / G Suite",
        providerSlug: "google",
      },
      {
        name: "Google Compute Engine",
        providerSlug: "google",
      },
      {
        name: "Google Cloud Console",
        providerSlug: "google",
      },
      {
        name: "Snapchat",
      },
      {
        name: "Spotify",
      },
      {
        name: "Discord",
      },
      {
        name: "Nest",
        providerSlug: "google",
      },
      {
        name: "Apple iCloud / iMessage",
        providerSlug: "apple",
      },
    ],
    durationMinutes: 265,
    sources: [
      {
        label: "Google Cloud official postmortem (incident #19009)",
        url: "https://status.cloud.google.com/incident/cloud-networking/19009",
      },
      {
        label: "CBS News: Google Cloud outage hits YouTube, Gmail, Snapchat",
        url: "https://www.cbsnews.com/news/google-cloud-outage-hits-youtube-gmail-snapchat-apps-services-today-2019-06-02-live-updates/",
      },
      {
        label: "CNBC: Google services restored after outage",
        url: "https://www.cnbc.com/2019/06/02/google-says-its-looking-into-service-outages-as-cloud-experiences-larger-network-issue.html",
      },
    ],
  },
  "sectigo-addtrust-root-expiration": {
    scope: "global",
    severityRank: 2,
    provider: "sectigo",
    affectedServices: [
      {
        name: "Stripe",
        providerSlug: "stripe",
      },
      {
        name: "Roku",
        providerSlug: "roku",
      },
      {
        name: "Spreedly",
        providerSlug: "spreedly",
      },
      {
        name: "Algolia",
        providerSlug: "algolia",
      },
      {
        name: "Heroku",
        providerSlug: "heroku",
      },
      {
        name: "Turnitin",
        providerSlug: "turnitin",
      },
      {
        name: "RoboForm",
        providerSlug: "roboform",
      },
      {
        name: "Red Hat Enterprise Linux 7",
        providerSlug: "redhat",
      },
      {
        name: "DNSimple",
        providerSlug: "dnsimple",
      },
    ],
    sources: [
      {
        label: "The Register: Sectigo root cert expires, online chaos ensues",
        url: "https://www.theregister.com/2020/06/02/sectigo_root_cert_expires/",
      },
      {
        label: "Sectigo KB: AddTrust External CA Root Expiring May 30, 2020",
        url: "https://support.sectigo.com/articles/Knowledge/Sectigo-AddTrust-External-CA-Root-Expiring-May-30-2020",
      },
      {
        label: "DNSimple Blog: Sectigo Root Certificate Expiration Issue",
        url: "https://blog.dnsimple.com/2020/06/sectigo-expired-root-certificate/",
      },
    ],
  },
  "zoom-partial-global-outage-2020": {
    scope: "global",
    severityRank: 2,
    provider: "zoom",
    affectedServices: [
      {
        name: "Zoom",
        providerSlug: "zoom",
      },
    ],
    durationMinutes: 150,
    sources: [
      {
        label: "Washington Post — Zoom outages disrupt first day of online classes",
        url: "https://www.washingtonpost.com/local/education/zoom-outages-disrupt-first-day-of-online-classes-for-many-schools-and-universities/2020/08/24/5caf1494-e61e-11ea-bc79-834454439a44_story.html",
      },
      {
        label: "UPI — Zoom service outages cause disruption in schools, businesses",
        url: "https://www.upi.com/Top_News/US/2020/08/24/Zoom-service-outages-cause-disruption-in-schools-businesses/2721598289407/",
      },
      {
        label:
          "George Mason University ITS — Zoom Outage August 24th after-action report (quotes Zoom postmortem)",
        url: "https://its.gmu.edu/after_action_reports/zoom-outage-august-24th/",
      },
    ],
  },
  "centurylink-level3-backbone-outage": {
    scope: "global",
    severityRank: 2,
    provider: "centurylink",
    affectedServices: [
      {
        name: "Cloudflare",
        providerSlug: "cloudflare",
      },
      {
        name: "Amazon",
        providerSlug: "amazon",
      },
      {
        name: "Hulu",
      },
      {
        name: "Discord",
      },
      {
        name: "Steam",
        providerSlug: "valve",
      },
      {
        name: "Xbox Live",
        providerSlug: "microsoft",
      },
      {
        name: "PlayStation Network",
        providerSlug: "sony",
      },
      {
        name: "Reddit",
      },
      {
        name: "Twitter",
      },
      {
        name: "Blizzard",
        providerSlug: "blizzard",
      },
      {
        name: "EA",
      },
      {
        name: "Feedly",
      },
      {
        name: "NameCheap",
      },
      {
        name: "OpenDNS",
      },
    ],
    durationMinutes: 270,
    sources: [
      {
        label: "Cloudflare blog: Analysis of today's CenturyLink/Level(3) outage",
        url: "https://blog.cloudflare.com/analysis-of-todays-centurylink-level-3-outage/",
      },
      {
        label: "ThousandEyes: CenturyLink / Level 3 Outage Analysis",
        url: "https://www.thousandeyes.com/blog/centurylink-level-3-outage-analysis",
      },
      {
        label:
          "BleepingComputer: CenturyLink routing issue led to outages on Hulu, Steam, Discord, more",
        url: "https://www.bleepingcomputer.com/news/technology/centurylink-routing-issue-led-to-outages-on-hulu-steam-discord-more/",
      },
    ],
  },
  "google-auth-outage-2020": {
    scope: "global",
    severityRank: 3,
    provider: "google",
    affectedServices: [
      {
        name: "Gmail",
        providerSlug: "google",
      },
      {
        name: "YouTube",
        providerSlug: "google",
      },
      {
        name: "Google Drive",
        providerSlug: "google",
      },
      {
        name: "Google Docs",
        providerSlug: "google",
      },
      {
        name: "Google Calendar",
        providerSlug: "google",
      },
      {
        name: "Google Meet",
        providerSlug: "google",
      },
      {
        name: "Google Maps",
        providerSlug: "google",
      },
      {
        name: "Google Photos",
        providerSlug: "google",
      },
      {
        name: "Google Play",
        providerSlug: "google",
      },
      {
        name: "Google Cloud Platform",
        providerSlug: "google",
      },
      {
        name: "Google Workspace",
        providerSlug: "google",
      },
    ],
    durationMinutes: 47,
    sources: [
      {
        label: "SecurityWeek: Google Issues Post Mortem on Gmail, YouTube Outage",
        url: "https://www.securityweek.com/google-issues-post-mortem-gmail-youtube-outage/",
      },
      {
        label: "CNBC: Google suffers widespread outage taking YouTube, Gmail and Drive offline",
        url: "https://www.cnbc.com/2020/12/14/googles-youtube-gmail-and-drive-services-suffer-outage.html",
      },
      {
        label: "Wikipedia: 2020 Google services outages",
        url: "https://en.wikipedia.org/wiki/2020_Google_services_outages",
      },
    ],
  },
  "fastly-global-content-delivery-outage": {
    scope: "global",
    severityRank: 3,
    provider: "fastly",
    affectedServices: [
      {
        name: "Amazon",
        providerSlug: "amazon",
      },
      {
        name: "Reddit",
        providerSlug: "reddit",
      },
      {
        name: "The New York Times",
        providerSlug: "nyt",
      },
      {
        name: "Spotify",
        providerSlug: "spotify",
      },
      {
        name: "Twitch",
        providerSlug: "twitch",
      },
      {
        name: "GitHub",
        providerSlug: "github",
      },
      {
        name: "PayPal",
        providerSlug: "paypal",
      },
      {
        name: "GOV.UK",
        providerSlug: "uk-gov",
      },
    ],
    durationMinutes: 49,
    sources: [
      {
        label: "Fastly official postmortem — Summary of June 8 outage",
        url: "https://www.fastly.com/blog/summary-of-june-8-outage",
      },
      {
        label: "The Register — Fastly explains web blackout (undiscovered software bug)",
        url: "https://www.theregister.com/2021/06/09/fastly_explains_web_blackout",
      },
      {
        label: "NBC News — Fastly blames global internet outage on software bug",
        url: "https://www.nbcnews.com/news/ncna1270100",
      },
    ],
  },
  "salesforce-multi-hour-outage": {
    scope: "global",
    severityRank: 2,
    provider: "salesforce",
    affectedServices: [
      {
        name: "Salesforce Core (Sales/Service Cloud)",
        providerSlug: "salesforce",
      },
      {
        name: "Marketing Cloud",
        providerSlug: "salesforce",
      },
      {
        name: "Commerce Cloud",
        providerSlug: "salesforce",
      },
      {
        name: "Experience Cloud",
        providerSlug: "salesforce",
      },
      {
        name: "Government Cloud",
        providerSlug: "salesforce",
      },
      {
        name: "Pardot",
        providerSlug: "salesforce",
      },
      {
        name: "Salesforce Status Page (Trust)",
        providerSlug: "salesforce",
      },
    ],
    durationMinutes: 275,
    sources: [
      {
        label: "Salesforce Help: Multi-Instance Service Disruption on May 11-12, 2021",
        url: "https://help.salesforce.com/s/articleView?id=000390251&language=en_US&type=1",
      },
      {
        label: "The Register: Salesforce fell over so hard it took out its own status page",
        url: "https://www.theregister.com/2021/05/12/salesforce_outage_dns_issue/",
      },
      {
        label: "iTnews: Failed DNS server restarts caused Salesforce outage",
        url: "https://www.itnews.com.au/news/failed-dns-server-restarts-caused-salesforce-outage-564893",
      },
    ],
  },
  "akamai-dns-outage-2021": {
    scope: "global",
    severityRank: 3,
    provider: "akamai",
    affectedServices: [
      {
        name: "FedEx",
        providerSlug: "fedex",
      },
      {
        name: "UPS",
        providerSlug: "ups",
      },
      {
        name: "Delta Air Lines",
        providerSlug: "delta",
      },
      {
        name: "Southwest Airlines",
        providerSlug: "southwest",
      },
      {
        name: "PlayStation Network",
        providerSlug: "sony",
      },
      {
        name: "Steam",
        providerSlug: "valve",
      },
    ],
    durationMinutes: 60,
    sources: [
      {
        label: "Akamai Blog — Akamai Summarizes Service Disruption (RESOLVED)",
        url: "https://www.akamai.com/blog/news/akamai-summarizes-service-disruption-resolved",
      },
      {
        label:
          "BleepingComputer — Akamai DNS global outage takes down major websites, online services",
        url: "https://www.bleepingcomputer.com/news/security/akamai-dns-global-outage-takes-down-major-websites-online-services/",
      },
      {
        label: "ThousandEyes — Akamai Edge DNS Outage Analysis",
        url: "https://www.thousandeyes.com/blog/akamai-edge-dns-outage-analysis",
      },
    ],
  },
  "akamai-prolexic-outage": {
    scope: "global",
    severityRank: 2,
    provider: "akamai",
    affectedServices: [
      {
        name: "American Airlines",
        providerSlug: "akamai",
      },
      {
        name: "Southwest Airlines",
        providerSlug: "akamai",
      },
      {
        name: "Hong Kong Stock Exchange",
        providerSlug: "akamai",
      },
      {
        name: "Commonwealth Bank of Australia",
        providerSlug: "akamai",
      },
      {
        name: "Westpac",
        providerSlug: "akamai",
      },
      {
        name: "ANZ",
        providerSlug: "akamai",
      },
    ],
    durationMinutes: 267,
    sources: [
      {
        label: "SecurityWeek — Akamai Blames Outage on DDoS Protection Service",
        url: "https://www.securityweek.com/akamai-blames-outage-ddos-protection-service/",
      },
      {
        label: "Security Affairs — Akamai outage caused by Prolexic DDoS protection bug",
        url: "https://securityaffairs.com/119094/security/akamai-outage-akamai-bug.html",
      },
      {
        label:
          "NPR — Airlines, Banks And Other Companies Across The World Hit In Latest Web Outage",
        url: "https://www.npr.org/2021/06/17/1007496797/airlines-banks-and-other-companies-across-the-world-hit-in-latest-web-outage",
      },
    ],
  },
  "azure-dns-outage": {
    scope: "global",
    severityRank: 2,
    provider: "microsoft",
    affectedServices: [
      {
        name: "Microsoft Azure",
        providerSlug: "microsoft",
      },
      {
        name: "Microsoft 365 / Office Online",
        providerSlug: "microsoft",
      },
      {
        name: "Microsoft Teams",
        providerSlug: "microsoft",
      },
      {
        name: "Exchange Online",
        providerSlug: "microsoft",
      },
      {
        name: "SharePoint Online",
        providerSlug: "microsoft",
      },
      {
        name: "OneDrive",
        providerSlug: "microsoft",
      },
      {
        name: "Xbox Live",
        providerSlug: "microsoft",
      },
      {
        name: "Dynamics 365",
        providerSlug: "microsoft",
      },
      {
        name: "Power BI",
        providerSlug: "microsoft",
      },
      {
        name: "Bing",
        providerSlug: "microsoft",
      },
      {
        name: "Azure Status Page",
        providerSlug: "microsoft",
      },
    ],
    durationMinutes: 39,
    sources: [
      {
        label: "BleepingComputer — Microsoft outage caused by overloaded Azure DNS servers",
        url: "https://www.bleepingcomputer.com/news/microsoft/microsoft-outage-caused-by-overloaded-azure-dns-servers/",
      },
      {
        label:
          "Data Center Dynamics — Microsoft suffers intermittent Azure outage over DNS resolution issues",
        url: "https://www.datacenterdynamics.com/en/news/microsoft-suffers-intermittent-azure-outage-over-dns-resolution-issues/",
      },
      {
        label: "Exoprise — Azure DNS Outage, April 1st 2021",
        url: "https://www.exoprise.com/2021/04/01/azure-dns-outage-april-1st-2021/",
      },
    ],
  },
  "facebook-global-blackout": {
    scope: "global",
    severityRank: 3,
    provider: "meta",
    originRegion: {
      lat: 37.3541,
      lng: -121.9552,
      label: "Meta backbone (recovery at Santa Clara, CA data center)",
    },
    affectedServices: [
      {
        name: "Facebook",
        providerSlug: "meta",
      },
      {
        name: "Instagram",
        providerSlug: "meta",
      },
      {
        name: "WhatsApp",
        providerSlug: "meta",
      },
      {
        name: "Messenger",
        providerSlug: "meta",
      },
    ],
    durationMinutes: 360,
    sources: [
      {
        label: "Meta Engineering — More details about the October 4 outage (official postmortem)",
        url: "https://engineering.fb.com/2021/10/05/networking-traffic/outage-details/",
      },
      {
        label: "Wikipedia — 2021 Facebook outage",
        url: "https://en.wikipedia.org/wiki/2021_Facebook_outage",
      },
      {
        label: "ThousandEyes — Facebook Outage Analysis",
        url: "https://www.thousandeyes.com/blog/facebook-outage-analysis",
      },
    ],
  },
  "lets-encrypt-dst-root-ca-x3-expiration": {
    scope: "global",
    severityRank: 2,
    provider: "lets-encrypt",
    affectedServices: [
      {
        name: "Shopify",
        providerSlug: "shopify",
      },
      {
        name: "Fortinet",
        providerSlug: "fortinet",
      },
      {
        name: "Auth0",
        providerSlug: "auth0",
      },
      {
        name: "Heroku",
        providerSlug: "salesforce",
      },
      {
        name: "Cloudflare Pages",
        providerSlug: "cloudflare",
      },
      {
        name: "Netlify",
        providerSlug: "netlify",
      },
      {
        name: "Xero",
        providerSlug: "xero",
      },
      {
        name: "QuickBooks",
        providerSlug: "intuit",
      },
      {
        name: "Monday.com",
        providerSlug: "monday",
      },
      {
        name: "Palo Alto Networks",
        providerSlug: "paloalto",
      },
      {
        name: "Cisco Umbrella",
        providerSlug: "cisco",
      },
      {
        name: "OVH",
        providerSlug: "ovh",
      },
      {
        name: "Google Cloud Monitoring",
        providerSlug: "google",
      },
      {
        name: "Catchpoint",
        providerSlug: "catchpoint",
      },
    ],
    sources: [
      {
        label: "Let's Encrypt — DST Root CA X3 Expiration (official)",
        url: "https://letsencrypt.org/docs/dst-root-ca-x3-expiration-september-2021/",
      },
      {
        label:
          "SecurityWeek — Expired Let's Encrypt Root Certificate Causes Problems for Many Companies",
        url: "https://www.securityweek.com/expired-lets-encrypt-root-certificate-causes-problems-many-companies/",
      },
      {
        label: "Scott Helme — Let's Encrypt's Root Certificate is expiring!",
        url: "https://scotthelme.co.uk/lets-encrypt-old-root-expiration/",
      },
    ],
  },
  "azure-ad-key-rotation-outage": {
    scope: "global",
    severityRank: 3,
    provider: "microsoft",
    affectedServices: [
      {
        name: "Microsoft 365",
        providerSlug: "microsoft",
      },
      {
        name: "Microsoft Teams",
        providerSlug: "microsoft",
      },
      {
        name: "Exchange Online",
        providerSlug: "microsoft",
      },
      {
        name: "Azure Active Directory",
        providerSlug: "microsoft",
      },
      {
        name: "Office 365",
        providerSlug: "microsoft",
      },
      {
        name: "Dynamics 365",
        providerSlug: "microsoft",
      },
      {
        name: "Xbox Live",
        providerSlug: "microsoft",
      },
      {
        name: "Microsoft Intune",
        providerSlug: "microsoft",
      },
      {
        name: "SharePoint Online",
        providerSlug: "microsoft",
      },
      {
        name: "OneDrive for Business",
        providerSlug: "microsoft",
      },
      {
        name: "Yammer",
        providerSlug: "microsoft",
      },
      {
        name: "Azure Portal",
        providerSlug: "microsoft",
      },
    ],
    durationMinutes: 180,
    sources: [
      {
        label:
          "BleepingComputer — Microsoft explains the cause of yesterday's massive service outage",
        url: "https://www.bleepingcomputer.com/news/microsoft/microsoft-explains-the-cause-of-yesterdays-massive-service-outage/",
      },
      {
        label: "Practical365 — Azure AD Suffers Another Big Authentication Outage (March 15, 2021)",
        url: "https://practical365.com/azure-ad-outage-march-15-2021/",
      },
      {
        label:
          "PortSwigger Daily Swig — Microsoft blames crypto key rotation snafu for 365 outage (archived)",
        url: "https://web.archive.org/web/20210413193338/https://portswigger.net/daily-swig/microsoft-blames-crypto-key-rotation-snafu-for-365-outage",
      },
    ],
  },
  "aws-us-east-1-control-plane-outage-2021": {
    scope: "global",
    severityRank: 3,
    provider: "aws",
    originRegion: {
      lat: 38.94,
      lng: -77.45,
      label: "us-east-1 (N. Virginia)",
    },
    affectedServices: [
      {
        name: "Amazon EC2",
        providerSlug: "aws",
      },
      {
        name: "Amazon Route 53",
        providerSlug: "aws",
      },
      {
        name: "Elastic Load Balancing",
        providerSlug: "aws",
      },
      {
        name: "AWS STS / Console",
        providerSlug: "aws",
      },
      {
        name: "Amazon CloudWatch",
        providerSlug: "aws",
      },
      {
        name: "Amazon Connect",
        providerSlug: "aws",
      },
      {
        name: "Amazon Alexa",
        providerSlug: "amazon",
      },
      {
        name: "Ring",
        providerSlug: "amazon",
      },
      {
        name: "Amazon logistics / delivery package routing",
        providerSlug: "amazon",
      },
      {
        name: "Disney+",
      },
      {
        name: "Netflix",
      },
      {
        name: "Venmo",
      },
      {
        name: "Instacart",
      },
      {
        name: "Coinbase",
      },
      {
        name: "Robinhood",
      },
      {
        name: "Roku",
      },
      {
        name: "Tinder",
      },
    ],
    durationMinutes: 412,
    sources: [
      {
        label: "AWS official post-event summary (message/12721)",
        url: "https://aws.amazon.com/message/12721/",
      },
      {
        label: "ThousandEyes AWS Outage Analysis: Dec 7 & 10, 2021",
        url: "https://www.thousandeyes.com/blog/aws-outage-analysis-dec-7-2021",
      },
      {
        label: "Deadline: AWS outage takes Netflix, Disney+ and many sites dark",
        url: "https://deadline.com/2021/12/amazon-web-services-outage-unplugs-netflix-disney-and-many-websites-in-parts-of-u-s-1234886348/",
      },
    ],
  },
  "roblox-73-hour-outage": {
    scope: "global",
    severityRank: 3,
    provider: "roblox",
    affectedServices: [
      {
        name: "Roblox",
        providerSlug: "roblox",
      },
    ],
    durationMinutes: 4380,
    sources: [
      {
        label: "Roblox official postmortem: Return to Service 10/28-10/31 2021",
        url: "https://about.roblox.com/newsroom/2022/01/roblox-return-to-service-10-28-10-31-2021",
      },
      {
        label: "Data Center Frontier: Roblox Adds Data Center to Address 73-Hour Outage",
        url: "https://datacenterfrontier.com/metaverse-platform-roblox-adds-data-center-to-address-73-hour-outage/",
      },
    ],
  },
  "slack-outage-2022": {
    scope: "global",
    severityRank: 2,
    provider: "slack",
    affectedServices: [
      {
        name: "Slack",
        providerSlug: "slack",
      },
    ],
    durationMinutes: 180,
    sources: [
      {
        label: "Slack Engineering: Slack's Incident on 2-22-22 (official postmortem)",
        url: "https://slack.engineering/slacks-incident-on-2-22-22/",
      },
      {
        label: "The Register: Slack goes down (Feb 22, 2022)",
        url: "https://www.theregister.com/2022/02/22/slack_down/",
      },
      {
        label: "TechCrunch: Slack confirms it's down for some users",
        url: "https://techcrunch.com/2022/02/22/slack-confirms-its-down-for-some-users-says-its-working-on-a-resolution/",
      },
    ],
  },
  "rogers-canada-2022": {
    scope: "regional",
    severityRank: 3,
    provider: "rogers",
    geo: [
      {
        lat: 43.6532,
        lng: -79.3832,
        label: "Canada (nationwide; Rogers HQ, Toronto)",
      },
    ],
    affectedServices: [
      {
        name: "Rogers Wireless (mobile)",
        providerSlug: "rogers",
      },
      {
        name: "Rogers Internet / Ignite (home internet)",
        providerSlug: "rogers",
      },
      {
        name: "Rogers home phone",
        providerSlug: "rogers",
      },
      {
        name: "911 emergency calling",
        providerSlug: "rogers",
      },
      {
        name: "Interac debit / e-Transfer",
        providerSlug: "interac",
      },
      {
        name: "Government of Canada services (Service Canada, CRA, passport offices)",
      },
      {
        name: "GO Transit fare/ticketing",
      },
    ],
    durationMinutes: 1560,
    sources: [
      {
        label:
          "CRTC — Assessment of Rogers Networks Following the 8 July 2022 Outage (Executive Summary)",
        url: "https://crtc.gc.ca/eng/publications/reports/xona2024.htm",
      },
      {
        label: "ThousandEyes — Rogers Outage Analysis: July 8, 2022",
        url: "https://www.thousandeyes.com/blog/rogers-outage-analysis-july-8-2022",
      },
      {
        label: "Wikipedia — 2022 Rogers Communications outage",
        url: "https://en.wikipedia.org/wiki/2022_Rogers_Communications_outage",
      },
    ],
  },
  "crowdstrike-falcon-global-outage": {
    scope: "global",
    severityRank: 3,
    provider: "crowdstrike",
    affectedServices: [
      {
        name: "Delta Air Lines",
        providerSlug: "airlines",
      },
      {
        name: "United Airlines",
        providerSlug: "airlines",
      },
      {
        name: "American Airlines",
        providerSlug: "airlines",
      },
      {
        name: "Microsoft Windows",
        providerSlug: "microsoft",
      },
      {
        name: "Banks and financial services",
      },
      {
        name: "Hospitals and healthcare providers",
      },
      {
        name: "Broadcasters and TV stations",
      },
      {
        name: "Airports and transportation systems",
      },
    ],
    sources: [
      {
        label: "CrowdStrike: Channel File 291 RCA Available (official)",
        url: "https://www.crowdstrike.com/en-us/blog/channel-file-291-rca-available/",
      },
      {
        label: "CrowdStrike External Technical Root Cause Analysis — Channel File 291 (PDF)",
        url: "https://www.crowdstrike.com/wp-content/uploads/2024/08/Channel-File-291-Incident-Root-Cause-Analysis-08.06.2024.pdf",
      },
      {
        label: "Wikipedia: 2024 CrowdStrike-related IT outages",
        url: "https://en.wikipedia.org/wiki/2024_CrowdStrike-related_IT_outages",
      },
    ],
  },
  "aws-dynamodb-dns-failure": {
    scope: "global",
    severityRank: 3,
    provider: "aws",
    originRegion: {
      lat: 38.94,
      lng: -77.45,
      label: "us-east-1 (N. Virginia)",
    },
    affectedServices: [
      {
        name: "Disney+",
        providerSlug: "disney",
      },
      {
        name: "Delta Air Lines",
        providerSlug: "delta",
      },
      {
        name: "Reddit",
        providerSlug: "reddit",
      },
      {
        name: "Robinhood",
        providerSlug: "robinhood",
      },
      {
        name: "Roblox",
        providerSlug: "roblox",
      },
      {
        name: "Snapchat",
        providerSlug: "snap",
      },
      {
        name: "Venmo",
        providerSlug: "paypal",
      },
      {
        name: "Coinbase",
        providerSlug: "coinbase",
      },
      {
        name: "Amazon Ring",
        providerSlug: "amazon",
      },
      {
        name: "Fortnite",
        providerSlug: "epic",
      },
      {
        name: "Duolingo",
        providerSlug: "duolingo",
      },
    ],
    durationMinutes: 900,
    sources: [
      {
        label:
          "AWS official postmortem — Summary of the Amazon DynamoDB Service Disruption (Oct 19-20, 2025)",
        url: "https://aws.amazon.com/message/101925/",
      },
      {
        label: "The Register — A single DNS race condition brought AWS to its knees",
        url: "https://www.theregister.com/2025/10/23/amazon_outage_postmortem/",
      },
      {
        label: "NBC News — Major AWS outage takes down web services like Snapchat and Ring",
        url: "https://www.nbcnews.com/news/us-news/amazon-web-services-outage-websites-offline-rcna238594",
      },
    ],
  },
  "google-global-5-minute-outage-2013": {
    scope: "global",
    severityRank: 2,
    provider: "google",
    affectedServices: [
      {
        name: "Google Search",
        providerSlug: "google",
      },
      {
        name: "YouTube",
        providerSlug: "google",
      },
      {
        name: "Gmail",
        providerSlug: "google",
      },
      {
        name: "Google Drive",
        providerSlug: "google",
      },
    ],
    durationMinutes: 5,
    sources: [
      {
        label: "The Register — Google outage (Aug 17, 2013)",
        url: "https://www.theregister.com/2013/08/17/google_outage/",
      },
      {
        label: "GoSquared — Google's downtime caused a 40% drop in global traffic (archived)",
        url: "https://web.archive.org/web/20200605182250/https://www.gosquared.com/blog/googles-downtime-40-drop-in-traffic",
      },
    ],
  },
  "amazon-retail-outage-2013": {
    scope: "global",
    severityRank: 2,
    provider: "amazon",
    affectedServices: [
      {
        name: "Amazon.com",
        providerSlug: "amazon",
      },
      {
        name: "Amazon.ca",
        providerSlug: "amazon",
      },
    ],
    sources: [
      {
        label: "Christian Science Monitor — Amazon.com back up after outage (Aug 19, 2013)",
        url: "https://www.csmonitor.com/Business/2013/0819/Amazon-outage-over-Amazon.com-back-up-after-15-minute-outage",
      },
      {
        label: "BuzzFeed News — The High Cost Of An Amazon Outage (Aug 19, 2013)",
        url: "https://www.buzzfeednews.com/article/mattlynley/the-high-cost-of-an-amazon-outage",
      },
    ],
  },
  "skype-supernode-failure-2010": {
    scope: "global",
    severityRank: 2,
    provider: "skype",
    affectedServices: [
      {
        name: "Skype",
        providerSlug: "skype",
      },
    ],
    durationMinutes: 1440,
    sources: [
      {
        label: "The Register: Skype's mega-FAIL — exec cops to cause",
        url: "https://www.theregister.com/2010/12/29/skype_explains_outage/",
      },
      {
        label: "IEEE Spectrum: Skype Scuppered by Problem With Supernodes",
        url: "https://spectrum.ieee.org/skype-scuppered-by-problem-with-supernodes-millions-affected-worldwide-2650254104",
      },
      {
        label: "Telecom Reseller: Skype CIO Update — Post-Mortem On The Outage",
        url: "https://telecomreseller.com/2010/12/29/skype-cio-update-post-mortem-on-the-outage/",
      },
    ],
  },
  "notpetya-2017": {
    scope: "global",
    severityRank: 3,
    provider: "medoc",
    originRegion: {
      lat: 50.45,
      lng: 30.52,
      label: "Kyiv, Ukraine (M.E.Doc update servers)",
    },
    affectedServices: [
      {
        name: "Maersk",
        providerSlug: "maersk",
      },
      {
        name: "Merck",
        providerSlug: "merck",
      },
      {
        name: "FedEx / TNT Express",
        providerSlug: "fedex",
      },
      {
        name: "Mondelez",
        providerSlug: "mondelez",
      },
      {
        name: "Reckitt Benckiser",
        providerSlug: "reckitt",
      },
      {
        name: "Saint-Gobain",
        providerSlug: "saint-gobain",
      },
      {
        name: "M.E.Doc (MeDoc accounting software)",
        providerSlug: "medoc",
      },
    ],
    sources: [
      {
        label:
          "Wired — The Untold Story of NotPetya, the Most Devastating Cyberattack in History (Andy Greenberg)",
        url: "https://www.wired.com/story/notpetya-cyberattack-ukraine-russia-code-crashed-the-world/",
      },
      {
        label: "CNBC — Maersk says NotPetya cyberattack could cost $300 million",
        url: "https://www.cnbc.com/2017/08/16/maersk-says-notpetya-cyberattack-could-cost-300-million.html",
      },
      {
        label:
          "BleepingComputer — Maersk Reinstalled 45,000 PCs and 4,000 Servers to Recover From NotPetya Attack",
        url: "https://www.bleepingcomputer.com/news/security/maersk-reinstalled-45-000-pcs-and-4-000-servers-to-recover-from-notpetya-attack/",
      },
    ],
  },
  "google-voice-expired-tls-cert-2021": {
    scope: "global",
    severityRank: 2,
    provider: "google",
    affectedServices: [
      {
        name: "Google Voice",
        providerSlug: "google",
      },
    ],
    durationMinutes: 262,
    sources: [
      {
        label: "BleepingComputer: Recent Google Voice outage caused by expired certificates",
        url: "https://www.bleepingcomputer.com/news/google/recent-google-voice-outage-caused-by-expired-certificates/",
      },
      {
        label:
          "AppViewX: Google Voice Outage - Expired TLS Certificate Brings Down Yet Another Giant",
        url: "https://www.appviewx.com/blogs/google-voice-outage-expired-tls-certificate-brings-down-yet-another-giant/",
      },
    ],
  },
  "gcp-us-east4-traffic-loss-2023": {
    scope: "regional",
    severityRank: 2,
    provider: "google",
    geo: [
      {
        lat: 39.0438,
        lng: -77.4874,
        label: "us-east4 (Ashburn / N. Virginia)",
      },
    ],
    originRegion: {
      lat: 39.0438,
      lng: -77.4874,
      label: "us-east4-a (Ashburn / N. Virginia)",
    },
    affectedServices: [
      {
        name: "Cloud Load Balancing",
        providerSlug: "google",
      },
      {
        name: "Cloud Armor",
        providerSlug: "google",
      },
      {
        name: "Cloud VPN",
        providerSlug: "google",
      },
      {
        name: "Virtual Private Cloud (VPC)",
        providerSlug: "google",
      },
      {
        name: "Persistent Disk",
        providerSlug: "google",
      },
      {
        name: "Google Cloud Networking",
        providerSlug: "google",
      },
    ],
    durationMinutes: 159,
    sources: [
      {
        label: "Google Cloud Service Health postmortem (incident gsr6HAk6oCUpNG4CAZ1H)",
        url: "https://status.cloud.google.com/incidents/gsr6HAk6oCUpNG4CAZ1H",
      },
    ],
  },
  "verizon-mobile-outage-2024": {
    scope: "regional",
    severityRank: 3,
    provider: "verizon",
    geo: [
      {
        lat: 39.8283,
        lng: -98.5795,
        label: "United States (nationwide)",
      },
    ],
    affectedServices: [
      {
        name: "Verizon Wireless",
        providerSlug: "verizon",
      },
    ],
    durationMinutes: 570,
    sources: [
      {
        label: "CNBC: FCC investigating Verizon mobile network outage",
        url: "https://www.cnbc.com/2024/09/30/verizons-network-down-for-thousands-of-users-downdetector-shows.html",
      },
      {
        label: "Cloudflare Blog: Impact of Verizon's September 30 outage on internet traffic",
        url: "https://blog.cloudflare.com/impact-of-verizons-september-30-outage-on-internet-traffic/",
      },
      {
        label: "WSFA: Verizon says nationwide outage has been resolved",
        url: "https://www.wsfa.com/2024/09/30/verizon-users-report-nationwide-outage/",
      },
    ],
  },
  "att-tmobile-verizon-roaming-outage-2024": {
    scope: "global",
    severityRank: 3,
    provider: "syniverse",
    originRegion: {
      lat: 27.9506,
      lng: -82.4572,
      label: "Syniverse HQ (Tampa, FL) — global roaming/signaling hub",
    },
    affectedServices: [
      {
        name: "AT&T",
        providerSlug: "att",
      },
      {
        name: "T-Mobile",
        providerSlug: "tmobile",
      },
      {
        name: "Verizon",
        providerSlug: "verizon",
      },
      {
        name: "Syniverse",
        providerSlug: "syniverse",
      },
    ],
    sources: [
      {
        label: "CBS News — AT&T, T-Mobile and Verizon confirm service outages for customers abroad",
        url: "https://www.cbsnews.com/news/att-t-mobile-and-verizon-international-roaming-outage/",
      },
      {
        label:
          "Light Reading — AT&T, Verizon and T-Mobile point finger at 'third-party' for roaming outage",
        url: "https://www.lightreading.com/smartphones-devices/at-t-verizon-and-t-mobile-point-finger-at-third-party-for-roaming-outage",
      },
      {
        label:
          "Data Center Dynamics — Syniverse blames US carrier roaming outage on 'signaling storm'",
        url: "https://www.datacenterdynamics.com/en/news/syniverse-blames-us-carrier-roaming-outage-on-signaling-storm/",
      },
    ],
  },
  "meta-facebook-instagram-outage-2024": {
    scope: "global",
    severityRank: 3,
    provider: "meta",
    affectedServices: [
      {
        name: "Facebook",
        providerSlug: "meta",
      },
      {
        name: "Instagram",
        providerSlug: "meta",
      },
      {
        name: "Messenger",
        providerSlug: "meta",
      },
      {
        name: "Threads",
        providerSlug: "meta",
      },
    ],
    durationMinutes: 120,
    sources: [
      {
        label: "CNN Business — Facebook and Instagram outage resolved",
        url: "https://www.cnn.com/2024/03/05/tech/facebook-instagram-outages/index.html",
      },
      {
        label: "The Washington Post — Facebook and Instagram restored after widespread Meta outage",
        url: "https://www.washingtonpost.com/technology/2024/03/05/facebook-instagram-down-meta-outage/",
      },
      {
        label: "ThousandEyes — Meta Outage Analysis: March 5, 2024",
        url: "https://www.thousandeyes.com/blog/meta-outage-analysis-march-5-2024",
      },
    ],
  },
  "microsoft-365-azure-front-door-outage-2025": {
    scope: "global",
    severityRank: 3,
    provider: "microsoft",
    affectedServices: [
      {
        name: "Microsoft 365",
        providerSlug: "microsoft",
      },
      {
        name: "Outlook",
        providerSlug: "microsoft",
      },
      {
        name: "Azure Portal",
        providerSlug: "microsoft",
      },
      {
        name: "Microsoft Entra ID",
        providerSlug: "microsoft",
      },
      {
        name: "Xbox Live",
        providerSlug: "microsoft",
      },
      {
        name: "Minecraft",
        providerSlug: "microsoft",
      },
      {
        name: "Microsoft Copilot",
        providerSlug: "microsoft",
      },
      {
        name: "Alaska Airlines",
      },
      {
        name: "Hawaiian Airlines",
      },
    ],
    durationMinutes: 485,
    sources: [
      {
        label: "ThousandEyes - Microsoft Azure Front Door Outage Analysis: October 29, 2025",
        url: "https://www.thousandeyes.com/blog/microsoft-azure-front-door-outage-analysis-october-29-2025",
      },
      {
        label: "Build5Nines - Major Azure Front Door Outage (October 29, 2025)",
        url: "https://build5nines.com/major-azure-front-door-outage-causing-widespread-service-disruptions-across-microsoft-365-microsoft-azure-and-the-azure-portal-october-29-2025/",
      },
      {
        label: "Dataconomy - Microsoft Blames Azure Front Door For Major Global Disruption",
        url: "https://dataconomy.com/2025/10/30/azure-outage-microsoft-blames-azure-front-door-for-major-global-disruption/",
      },
    ],
  },
  "github-outage-2025": {
    scope: "global",
    severityRank: 2,
    provider: "github",
    affectedServices: [
      {
        name: "GitHub Repositories",
        providerSlug: "github",
      },
      {
        name: "GitHub Actions",
        providerSlug: "github",
      },
      {
        name: "GitHub Pages",
        providerSlug: "github",
      },
      {
        name: "GitHub Pull Requests",
        providerSlug: "github",
      },
      {
        name: "GitHub API",
        providerSlug: "github",
      },
      {
        name: "GitHub Copilot",
        providerSlug: "github",
      },
    ],
    sources: [
      {
        label: "GitHub Status",
        url: "https://www.githubstatus.com/",
      },
      {
        label: "An update on GitHub availability - The GitHub Blog",
        url: "https://github.blog/news-insights/company-news/an-update-on-github-availability/",
      },
    ],
  },
  "cloudflare-bot-management-outage-2025": {
    scope: "global",
    severityRank: 3,
    provider: "cloudflare",
    affectedServices: [
      {
        name: "Cloudflare CDN / core proxy",
        providerSlug: "cloudflare",
      },
      {
        name: "Cloudflare Workers KV",
        providerSlug: "cloudflare",
      },
      {
        name: "Cloudflare Access",
        providerSlug: "cloudflare",
      },
      {
        name: "Cloudflare Turnstile",
        providerSlug: "cloudflare",
      },
      {
        name: "Cloudflare Dashboard",
        providerSlug: "cloudflare",
      },
      {
        name: "X (Twitter)",
      },
      {
        name: "ChatGPT",
        providerSlug: "openai",
      },
      {
        name: "OpenAI",
        providerSlug: "openai",
      },
      {
        name: "Spotify",
      },
      {
        name: "Canva",
      },
      {
        name: "Discord",
      },
    ],
    durationMinutes: 346,
    sources: [
      {
        label: "Cloudflare official postmortem: Cloudflare outage on November 18, 2025",
        url: "https://blog.cloudflare.com/18-november-2025-outage/",
      },
      {
        label: "ThousandEyes: Cloudflare Outage Analysis: November 18, 2025",
        url: "https://www.thousandeyes.com/blog/cloudflare-outage-analysis-november-18-2025",
      },
    ],
  },
  "telekom-malaysia-level3-route-leak-2015": {
    scope: "global",
    severityRank: 2,
    provider: "telekom-malaysia",
    originRegion: {
      lat: 3.139,
      lng: 101.6869,
      label: "Telekom Malaysia (Kuala Lumpur)",
    },
    affectedServices: [
      {
        name: "eBay",
      },
      {
        name: "Yahoo Mail",
      },
      {
        name: "PlayStation Network",
      },
      {
        name: "Xbox Live",
      },
    ],
    durationMinutes: 120,
    sources: [
      {
        label: "ThousandEyes: Route leak causes global outage on the Level 3 network",
        url: "https://www.thousandeyes.com/blog/route-leak-causes-global-outage-level-3-network",
      },
      {
        label:
          "Fierce Network: Level 3 network outage disrupts internet traffic in the U.S. and Europe",
        url: "https://www.fierce-network.com/telecom/level-3-fiber-network-outage-disrupts-internet-traffic-u-s-and-europe",
      },
    ],
  },
  "verizon-mobile-outage-2026": {
    scope: "regional",
    severityRank: 2,
    provider: "verizon",
    geo: [
      {
        lat: 40.7128,
        lng: -74.006,
        label: "New York City, NY",
      },
      {
        lat: 38.9072,
        lng: -77.0369,
        label: "Washington, DC",
      },
      {
        lat: 41.8781,
        lng: -87.6298,
        label: "Chicago, IL",
      },
    ],
    affectedServices: [
      {
        name: "Verizon Wireless (voice)",
        providerSlug: "verizon",
      },
      {
        name: "Verizon Wireless (SMS/text)",
        providerSlug: "verizon",
      },
      {
        name: "Verizon Wireless (mobile data)",
        providerSlug: "verizon",
      },
    ],
    durationMinutes: 600,
    sources: [
      {
        label: "Verizon — An update on our network outage (official statement)",
        url: "https://www.verizon.com/about/news/update-network-outage",
      },
      {
        label: "NPR — Verizon just had a big outage. Here's what we know",
        url: "https://www.npr.org/2026/01/15/nx-s1-5678889/verizon-outage-what-happened",
      },
      {
        label: "NBC News — Widespread Verizon outage resolved after prompting emergency alerts",
        url: "https://www.nbcnews.com/business/consumer/verizon-outage-new-york-washington-rcna254050",
      },
    ],
  },
  "microsoft-365-outage-2026": {
    scope: "global",
    severityRank: 3,
    provider: "microsoft",
    originRegion: {
      lat: 38.94,
      lng: -77.45,
      label: "North America (Microsoft 365 service infrastructure)",
    },
    affectedServices: [
      {
        name: "Microsoft 365",
        providerSlug: "microsoft",
      },
      {
        name: "Outlook / Exchange Online",
        providerSlug: "microsoft",
      },
      {
        name: "Microsoft Teams",
        providerSlug: "microsoft",
      },
      {
        name: "SharePoint Online",
        providerSlug: "microsoft",
      },
      {
        name: "OneDrive",
        providerSlug: "microsoft",
      },
      {
        name: "Microsoft Defender XDR",
        providerSlug: "microsoft",
      },
      {
        name: "Microsoft Purview",
        providerSlug: "microsoft",
      },
      {
        name: "Microsoft 365 admin center",
        providerSlug: "microsoft",
      },
    ],
    durationMinutes: 600,
    sources: [
      {
        label: "The Register: Microsoft 365 outage drags on for nearly 10 hours",
        url: "https://www.theregister.com/2026/01/23/microsoft_365_outage/",
      },
      {
        label: "Windows Central: Microsoft 365 and Outlook back to normal following outage",
        url: "https://www.windowscentral.com/software-apps/microsoft-365-and-outlook-are-down-to-start-the-work-week-microsoft-confirms-outage",
      },
      {
        label: "TechRepublic: Microsoft 365 admin outage (Feb 2026)",
        url: "https://www.techrepublic.com/article/news-microsoft-365-admin-outage-feb-2026/",
      },
    ],
  },
  "cloudflare-byoip-bgp-outage-2026": {
    scope: "global",
    severityRank: 3,
    provider: "cloudflare",
    affectedServices: [
      {
        name: "Cloudflare BYOIP",
        providerSlug: "cloudflare",
      },
      {
        name: "Cloudflare Spectrum",
        providerSlug: "cloudflare",
      },
      {
        name: "Cloudflare Magic Transit",
        providerSlug: "cloudflare",
      },
      {
        name: "one.one.one.one (1.1.1.1)",
        providerSlug: "cloudflare",
      },
      {
        name: "Uber",
      },
      {
        name: "Workday",
      },
      {
        name: "Minecraft",
        providerSlug: "microsoft",
      },
      {
        name: "Wikipedia",
      },
      {
        name: "Microsoft Outlook",
        providerSlug: "microsoft",
      },
      {
        name: "Bet365",
      },
    ],
    durationMinutes: 367,
    sources: [
      {
        label: "Cloudflare official postmortem — Cloudflare outage on February 20, 2026",
        url: "https://blog.cloudflare.com/cloudflare-outage-february-20-2026/",
      },
      {
        label: "IT Pro — Cloudflare outage explained: what happened, who was impacted",
        url: "https://www.itpro.com/infrastructure/networking/cloudflare-outage-explained-what-happened-who-was-impacted-and-how-was-it-resolved",
      },
      {
        label: "BleepingComputer — Cloudflare misconfiguration behind recent BGP route leak",
        url: "https://www.bleepingcomputer.com/news/security/cloudflare-misconfiguration-behind-recent-bgp-route-leak/",
      },
    ],
  },
  "aws-middle-east-drone-strike-outage-2026": {
    scope: "regional",
    severityRank: 3,
    provider: "aws",
    geo: [
      {
        lat: 24.4539,
        lng: 54.3773,
        label: "AWS me-central-1 (UAE)",
      },
      {
        lat: 26.0667,
        lng: 50.5577,
        label: "AWS me-south-1 (Bahrain)",
      },
    ],
    originRegion: {
      lat: 24.4539,
      lng: 54.3773,
      label: "me-central-1 (UAE) — mec1-az2 first strike",
    },
    affectedServices: [
      {
        name: "Amazon S3",
        providerSlug: "aws",
      },
      {
        name: "AWS me-central-1 (UAE)",
        providerSlug: "aws",
      },
      {
        name: "AWS me-south-1 (Bahrain)",
        providerSlug: "aws",
      },
      {
        name: "Careem",
      },
      {
        name: "Alaan",
      },
      {
        name: "Hubpay",
      },
      {
        name: "Snowflake",
      },
    ],
    sources: [
      {
        label: "The Register — AWS says drones hit two of its datacenters in UAE",
        url: "https://www.theregister.com/2026/03/02/amazon_outages_middle_east/",
      },
      {
        label: "CNBC — Amazon says drone strikes damaged 3 facilities in UAE and Bahrain",
        url: "https://www.cnbc.com/2026/03/02/amazon-says-drone-strikes-damaged-3-facilities-in-uae-and-bahrain.html",
      },
      {
        label:
          "CyberSecurityNews — AWS Middle East (UAE) Region Hit by Drone Strikes, 109 Services Disrupted",
        url: "https://cybersecuritynews.com/aws-middle-east-services-disrupted/",
      },
    ],
  },
};
