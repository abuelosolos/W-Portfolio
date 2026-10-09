// Single source of truth for every project: hero carousel, project grid and /project/:slug case study.
// Marker legend:
//   // TODO: verify   -> I wrote this from the project's type/stack. Check it matches what you actually did.
//   // TODO: add      -> a real link or asset you still need to fill in.
// Anything with no marker is either from your original data or from CarryWise's real stack.
import * as img from '../assets/images';

// How many project cards the mobile grid shows before the "See more" button.
export const MOBILE_INITIAL_PROJECTS = 3;

export const projects = [
  {
    slug: 'gscapes-engine',
    title: "G'Scapes Game Engine",
    subtitle: 'AI Powered Game Engine',
    thumbnail: img.engineCover,
    heroImage: img.engineCover,
    gallery: [img.engineCover, img.engineDefault, img.engineBuild, img.engineOverlay, img.engineWindowOver],
    tags: ['Figma', 'Product Design', 'UI/UX', 'AI', 'Game Dev'],
    shortDescription:
      'An AI-powered game engine with a built-in chatbot for beginner and advanced devs. Scene editing, asset management, intelligent code suggestions.',
    challenge:
      "Game engines are built by engineers for engineers. Open one for the first time and you get a wall of panels, menus and jargon, and most beginners quit before they place a single object in a scene. Experienced devs have the opposite problem. They know what they want, and every extra click between them and it is wasted time.\n\nI wanted one workspace that could serve both without feeling like a compromise. Adding an AI assistant made it harder. If it just sits in a chat window on the side, nobody uses it. If it pops up too often, everybody hates it.", // TODO: verify
    solution:
      "I designed the assistant as part of the workspace instead of a visitor to it. It sits in a dockable panel next to the scene, so you can ask for help, get a code suggestion, or have it explain what you just selected without losing sight of your work.\n\nThe layout has a beginner mode and an advanced mode. Beginners get guided onboarding, a learning module and fewer panels. Advanced users get the dense, dockable layout and keyboard-first controls. Same engine, same screens, different amount of hand-holding. The full process is documented in the Behance case study.", // TODO: verify
    keyFeatures: [
      { title: 'Built-in AI Chatbot', description: 'Ask questions, generate code and get things explained right next to the scene you are working on.' }, // TODO: verify
      { title: 'Scene Editing', description: 'A viewport-first layout with dockable panels for objects, properties and layers.' }, // TODO: verify
      { title: 'Asset Management', description: 'One library for importing, searching and organising everything in the project.' }, // TODO: verify
      { title: 'Intelligent Code Suggestions', description: 'Suggestions that adapt to the mode you are in, simple for beginners, terse for advanced users.' }, // TODO: verify
      { title: 'Build Setup', description: 'A guided build flow for targets, settings and export so shipping does not need a tutorial.' }, // TODO: verify
      { title: 'Learning Module', description: 'Short interactive lessons that run inside the real workspace instead of a separate docs site.' }, // TODO: verify
    ],
    techStack: [
      'Figma for UI, components and prototypes',
      'Design tokens for the dark editor theme',
      'Auto layout for dockable panel behaviour',
      'User flows for beginner and advanced modes',
      'Behance for the full case study',
      'Informal usability reviews with devs and non-devs',
    ], // TODO: verify
    codeUrl: '', // TODO: add repo URL if any
    liveUrl: '',
    behanceUrl: 'https://www.behance.net/gallery/247009759/GScapes-Game-Engine-case-study',
    status: 'Case study live on Behance', // TODO: confirm wording
  },
  {
    slug: 'abfi',
    title: 'AbFi',
    subtitle: 'Web3 DeFi App',
    thumbnail: img.defiCover,
    heroImage: img.defiCover,
    gallery: [img.defiCover, img.defiSection1, img.defiSection2, img.defiSection3],
    tags: ['Figma', 'Mobile', 'Web3', 'Fintech', 'UI/UX'],
    shortDescription:
      'A mobile crypto wallet for swapping token pairs, staking assets, and browsing NFT collections.',
    challenge:
      "Most DeFi apps are designed for people who already know what slippage is. Everyone else gets gas fees, hex addresses and confirm buttons that can cost real money, with very little explanation of what they are agreeing to.\n\nI wanted to see if a wallet could keep the depth DeFi needs while making someone's first swap feel understandable instead of risky.", // TODO: verify
    solution:
      "The three things people actually do, swap, stake and collect, are one tap from the home screen. Everything technical lives one layer down and only shows up when you ask for it or when it matters, like a high fee.\n\nEvery transaction ends with a plain-language review screen: what you send, what you get, what it costs. NFTs and trading share one visual language, so it feels like one product and not three apps in a trench coat.", // TODO: verify
    keyFeatures: [
      { title: 'Token Swap', description: 'Pick a pair and see the rate, fee and result in plain language before you confirm.' }, // TODO: verify
      { title: 'NFT Collection', description: 'A gallery view for browsing and managing the collectibles you own.' }, // TODO: verify
      { title: 'Staking', description: 'Staking flows that state the return and the lock period up front.' }, // TODO: verify
      { title: 'Portfolio Overview', description: 'Balances and recent activity summarised on the first screen you land on.' }, // TODO: verify
      { title: 'Safe Confirmations', description: 'A step-by-step review before anything leaves the wallet, to cut down costly mistakes.' }, // TODO: verify
      { title: 'Dark Interface', description: 'A high-contrast dark theme tuned for one-handed use on a phone.' }, // TODO: verify
    ],
    techStack: [
      'Figma for the full mobile UI',
      'Auto layout and component variants',
      'Mobile UI kit for repeatable screens',
      'Prototype for the swap and staking flows',
      'Behance for the published case study',
      'Contrast and tap-target checks on mobile',
    ], // TODO: verify
    codeUrl: '', // TODO: add repo URL if any
    liveUrl: '',
    behanceUrl: 'https://www.behance.net/gallery/243482849/Wallet-App-UI-%28AbyFi%29',
    status: 'Case study live on Behance', // TODO: confirm wording
  },
  {
    slug: 'roomly',
    title: 'Roomly Dashboard',
    subtitle: 'Hotel Admin Dashboard',
    thumbnail: img.overviewMac,
    heroImage: img.overviewMac,
    gallery: [img.overviewMac, img.revenueMac, img.roomManagementMac, img.reviewMac],
    tags: ['Figma', 'Dashboard', 'Freelance', 'UI/UX', 'Design System'],
    shortDescription:
      'Full hotel management: revenue analytics, room tracking, staff scheduling, and guest management.',
    challenge:
      "Running a hotel means a lot of small things happening at once. A room needs cleaning, a guest is asking for something, a booking just changed. In a lot of hotels that information is spread across a notebook, a spreadsheet and a WhatsApp group, so the front desk spends the day chasing it.\n\nThe brief was one dashboard that holds all of it. The risk with that kind of brief is a screen so full that managers stop reading it.", // TODO: verify
    solution:
      "I started with an overview that answers the questions a manager asks first thing in the morning: how full are we, how is revenue, what needs attention. From there each area, rooms, revenue, reviews, guests, gets its own page built from the same table, filter and status patterns, so once you learn one you know them all.\n\nStatus colours are used only for status, which keeps dense tables readable. I also delivered the components and tokens as a proper UI system, so new pages can be built by the dev team without coming back to me for every screen.", // TODO: verify
    keyFeatures: [
      { title: 'Revenue Analytics', description: 'Charts and summaries of performance by day, month and room type.' }, // TODO: verify
      { title: 'Room Management', description: 'Live room status, occupancy and housekeeping in one view.' }, // TODO: verify
      { title: 'Guest Management', description: 'Guest profiles, stays and requests together so nothing gets lost between shifts.' }, // TODO: verify
      { title: 'Staff Scheduling', description: 'Shift planning that shows coverage per department at a glance.' }, // TODO: verify
      { title: 'Reviews', description: 'Guest feedback collected in one place for quick follow-up.' }, // TODO: verify
      { title: 'Reusable UI System', description: 'Components and tokens handed over so developers can extend the dashboard on their own.' }, // TODO: verify
    ],
    techStack: [
      'Figma for screens and prototypes',
      'Component library with variants',
      'Design tokens for colour, type and spacing',
      'Data table and filter patterns',
      'Chart styles for the analytics pages',
      'Developer handoff notes and specs',
    ], // TODO: verify
    codeUrl: '', // TODO: add repo URL if any
    liveUrl: '',
    behanceUrl: '',
    status: 'Coming Soon', // TODO: confirm
  },
  {
    slug: 'absolute',
    title: 'Absolute',
    subtitle: 'Product Landing Page', // TODO: confirm subtitle
    thumbnail: img.projectAbsolute,
    heroImage: img.projectAbsolute,
    gallery: [img.projectAbsolute],
    tags: ['Landing Page', 'Product Design', 'React', 'Motion'], // TODO: verify
    shortDescription:
      'Landing page for high definition headsets built to amp up the listening experience, whatever the genre.',
    challenge:
      "Headphone sites all say the same thing. A spec sheet, a discount banner and a photo on a white background. You cannot hear a product through a screen, so the page has to make you want it some other way.\n\nI wanted a page that feels like the headphones sound: clean, deliberate and a little bit loud. And it had to do that without turning into a spec dump.", // TODO: verify
    solution:
      "The headline does the talking, \"Your Music Doesn't Have A Type\", and the product photo gets almost the whole viewport. Everything else is quiet around it. Details reveal as you scroll instead of arriving all at once, and each claim gets room so it actually lands.\n\nThe page is built in React with light motion on the product and the type, kept subtle so it supports the product instead of competing with it.", // TODO: verify
    keyFeatures: [
      { title: 'Hero Statement', description: 'One bold headline with a near full-bleed product shot.' }, // TODO: verify
      { title: 'Feature Showcase', description: 'Close-ups of the drivers, materials and controls, revealed on scroll.' }, // TODO: verify
      { title: 'Spec Highlights', description: 'The few numbers that matter, without a wall of specs.' }, // TODO: verify
      { title: 'Colourway Preview', description: 'Switch finishes while the layout stays put.' }, // TODO: verify
      { title: 'Social Proof', description: 'Short reviews placed next to the feature they talk about.' }, // TODO: verify
      { title: 'Sticky Buy Bar', description: 'A persistent call to action that never covers the content.' }, // TODO: verify
    ],
    techStack: [
      'React with Vite',
      'Tailwind CSS for styling',
      'CSS and Framer Motion for scroll animation',
      'Figma for design and handoff to code',
      'Responsive layout, desktop to phone',
      'Deployed on Vercel',
    ], // TODO: verify
    codeUrl: '', // TODO: add repo URL
    liveUrl: '', // TODO: add live URL
    behanceUrl: '',
    status: 'Coming Soon', // TODO: confirm
  },
  {
    slug: 'carrywise',
    title: 'CarryWise Dashboard',
    subtitle: 'Shuttle App Admin Dashboard', // TODO: consider "Logistics Admin Dashboard" to match what CarryWise is now
    thumbnail: img.carrywiseOverview,
    heroImage: img.carrywiseOverview,
    gallery: [img.carrywiseOverview, img.carrywiseOrders, img.carrywiseOrderDetail],
    tags: ['Dashboard', 'Admin', 'Logistics', 'React', 'UI/UX', 'Figma'],
    shortDescription:
      'The admin side of CarryWise, a logistics aggregation platform for Port Harcourt. Live dispatch, fleet management, orders, revenue and carrier performance in one dark dashboard.',
    challenge:
      "Moving goods around Port Harcourt runs on phone calls, WhatsApp groups and whoever the dispatcher happens to know. Orders, riders and payments live in different places, so problems get noticed late, usually when a customer calls to complain.\n\nCarryWise brings those carriers onto one platform, which means someone has to see all of it at once. The admin dashboard had to give a dispatcher the full picture and let them act on it in a few clicks, not a few minutes.",
    solution:
      "I designed it dark, with a deep navy and purple palette and one accent colour, so the data is the loudest thing on screen. Colour is kept for status and alerts, which means anything late or broken stands out straight away.\n\nThe dashboard is split into the jobs an admin actually does: Analytics, Orders, Revenue, a Dispatch Map, Fleet Management, Carrier Performance and Settings. Each page uses the same cards, tables and filters. I wrote the design system as a developer guide, so the build is done against specs instead of guesses.",
    keyFeatures: [
      { title: 'Dispatch Map', description: 'See active deliveries and carriers on a live map and reassign without leaving the screen.' },
      { title: 'Orders', description: 'One filterable table for every order, with status, carrier and quick actions.' },
      { title: 'Fleet Management', description: 'Vehicles and riders with availability, so dispatchers know who can take the next job.' },
      { title: 'Carrier Performance', description: 'Delivery times and completion rates per carrier, so the good ones get more work.' },
      { title: 'Revenue and Analytics', description: 'Charts for earnings, order volume and the platform commission over time.' },
      { title: 'Alerts', description: 'Late, failed or stuck orders surfaced at the top instead of buried in a list.' },
    ],
    techStack: [
      'React with Vite',
      'Tailwind CSS for styling',
      'React Query for server data',
      'Zustand for UI state',
      'Recharts for analytics charts',
      'Node.js, PostgreSQL with PostGIS and Socket.io on the backend',
    ],
    codeUrl: '', // TODO: add repo URL (monorepo is on GitHub, add link only if you want it public)
    liveUrl: '',
    behanceUrl: '',
    status: 'In Development', // TODO: confirm
  },
  {
    slug: 'gscapes-marketplace',
    title: "G'Scapes Marketplace",
    subtitle: 'Game & Game Engine Marketplace',
    thumbnail: img.projectMarketplace,
    heroImage: img.projectMarketplace,
    gallery: [img.projectMarketplace],
    tags: ['Marketplace', 'Games', 'UI/UX', 'Figma'], // TODO: verify
    shortDescription:
      "A marketplace for discovering, buying and downloading games, assets and plugins for the G'Scapes engine.",
    challenge:
      "Game marketplaces are crowded and quality is hard to judge. You scroll a grid of thumbnails, guess what is good, and only find out it does not work with your engine version after you have paid.\n\nThe engine already had its own identity, so the store had to feel like part of it. It also had to look curated enough that a creator would trust it with their work.", // TODO: verify
    solution:
      "Each listing leads with a rich preview and a plain compatibility label, so you know it works before you buy. Browsing is organised by genre, engine tools and creator instead of one endless feed, and a personal library keeps everything you have bought in one place.\n\nVisually it follows the engine: dark, sharp and a bit game-like, so moving between the two does not feel like switching products.", // TODO: verify
    keyFeatures: [
      { title: 'Discover Feed', description: 'Featured, trending and new releases in a layout that is easy to scan.' }, // TODO: verify
      { title: 'Rich Previews', description: 'Screenshots, trailers and details on the page before you pay.' }, // TODO: verify
      { title: 'Compatibility Labels', description: "Engine version and platform support shown clearly on every listing." }, // TODO: verify
      { title: 'Personal Library', description: 'Everything you have bought, downloaded and updated in one place.' }, // TODO: verify
      { title: 'Wishlist', description: 'Save items for later and get told when the price drops.' }, // TODO: verify
      { title: 'Creator Pages', description: "Profiles that show a creator's whole catalogue and not just one listing." }, // TODO: verify
    ],
    techStack: [
      "Figma, shares the G'Scapes engine design system",
      'Dark theme tokens reused from the engine',
      'Component variants for listing cards',
      'Prototype for browse, preview and purchase',
      'Content structure for categories and tags',
      'Developer handoff specs',
    ], // TODO: verify
    codeUrl: '', // TODO: add repo URL
    liveUrl: '', // TODO: add live URL
    behanceUrl: '',
    status: 'Coming Soon', // TODO: confirm
  },
  {
    slug: 'subtraction',
    title: 'Subtraction',
    subtitle: 'Commerce Store Landing Page',
    thumbnail: img.projectSubtraction,
    heroImage: img.projectSubtraction,
    gallery: [img.projectSubtraction], // TODO: add more screens
    tags: ['Node.js', 'Tailwind CSS', 'Zustand', 'JavaScript', 'PayStack', 'Auth'],
    shortDescription:
      'SUBTRACTION is a landing page and e-commerce concept for a clothing brand that strips colour out of the equation so fit, cut and silhouette do the talking.',
    challenge:
      "Fashion e-commerce is loud. Product grids are a wall of competing colourways, seasonal palettes and \"new drop\" banners, and shoppers end up choosing by colour before they think about how a piece fits. Colour hides weak tailoring. A bad silhouette gets rescued by a trendy shade.\n\nBrands that go the other way usually land on \"minimal\", which tends to feel safe, beige and forgettable. I wanted to know if a brand could remove colour without becoming bland, and make people care about construction over palette.",
    solution:
      "SUBTRACTION treats removal as the design idea. The landing page is strictly colourless, so the only things left to look at are the garments: shape, drape and proportion. Photography is tonal and high-contrast, layouts get room to breathe, and the type carries the brand voice.\n\nIt is not minimal for minimal's sake, and it is not anti-colour either. It is a point of view: if the fit is right, nothing else needs to speak. The structure, copy and interactions all push shoppers to judge a piece by its silhouette first.",
    keyFeatures: [
      { title: 'Silhouette-First Product Views', description: 'Garments show as tonal forms and outlines, with full-colour detail revealed only on interaction, so shape comes before shade.' },
      { title: 'Fit Stories', description: 'Each product has a short editorial breakdown of cut, drape and movement in place of the usual colour swatch row.' },
      { title: 'The Subtraction Hero', description: 'An animated landing hero where colour drains out of the frame as you scroll, leaving only the form. The whole brand idea in the first five seconds.' },
      { title: 'Fit Guide and Size Match', description: 'A sizing tool that takes body measurements and fit preference (relaxed, tailored, oversized) to recommend a size, because fit is the whole pitch.' },
      { title: 'Monochrome Collection Filters', description: 'Browse by silhouette, length and layering, like "cropped", "oversized" and "structured", instead of by colour.' },
      { title: 'Frictionless Cart and Checkout', description: 'A slide-out cart, guest checkout and a Paystack payment flow in the same restrained style, so the brand holds all the way to the last click.' },
    ],
    techStack: [
      'Node.js with Express for the API',
      'MongoDB with Mongoose',
      'Tailwind CSS for styling and Zustand for cart state',
      'Auth with JWT in httpOnly cookies, bcrypt for passwords and Zod for validation',
      'Paystack for payments, Cloudinary for product images',
      'Nodemailer for order confirmations and password resets',
    ], // TODO: verify the email provider and database match what you actually used
    codeUrl: '', // TODO: add repo URL (Figma shows a "View Code" pill)
    liveUrl: '',
    behanceUrl: '',
    status: 'Coming Soon',
  },
  {
    slug: 'immunity',
    title: 'Immunity',
    subtitle: 'Commerce Store Landing Page',
    thumbnail: img.projectImmunity,
    heroImage: img.projectImmunity,
    gallery: [img.projectImmunity],
    tags: ['E-commerce', 'Landing Page', 'Fashion', 'React', 'UI/UX'], // TODO: verify
    shortDescription:
      'A bold streetwear landing page built around one idea: dress like nothing can stop you.',
    challenge:
      "Streetwear brands usually compete on hype drops and discount codes, and the identity slowly dissolves into the product grid. People scroll past, buy something, and could not tell you the name of the brand a week later.\n\nI wanted a landing page that sells an attitude first and the clothes second, without ending up as another black hoodie on a grey background.", // TODO: verify
    solution:
      "Immunity pairs huge outline type with monochrome photography, so the model and the message lead and the layout stays out of the way. The copy is short and confident, there is plenty of empty space, and the calls to action stay simple and always in reach.\n\nThe page walks you from the statement to the shop in a couple of scrolls. It is built in React so the motion stays smooth and the same composition holds on a phone.", // TODO: verify
    keyFeatures: [
      { title: 'Statement Hero', description: 'Oversized background type, a strong headline and two clear calls to action.' }, // TODO: verify
      { title: 'Lookbook Section', description: 'Editorial imagery that tells the story of the collection.' }, // TODO: verify
      { title: 'Quick Shop', description: 'Add to cart from the landing page without leaving it.' }, // TODO: verify
      { title: 'Collection Filters', description: 'Browse by fit, season and category.' }, // TODO: verify
      { title: 'Partner Strip', description: 'Brand and stockist logos placed quietly at the bottom of the hero.' }, // TODO: verify
      { title: 'Responsive Layout', description: 'The same bold composition on mobile and desktop.' }, // TODO: verify
    ],
    techStack: [
      'React with Vite',
      'Tailwind CSS for styling',
      'Zustand for cart state',
      'Framer Motion for entrance and scroll animation',
      'Figma for design and handoff to code',
      'Deployed on Vercel',
    ], // TODO: verify
    codeUrl: '', // TODO: add repo URL
    liveUrl: '', // TODO: add live URL
    behanceUrl: '',
    status: 'Coming Soon', // TODO: confirm
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);