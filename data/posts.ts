/**
 * Redline — single source of truth for every blog post on the site.
 *
 * HOW TO ADD A NEW BLOG:
 * Copy any post object below, paste it into the `posts` array, and change the
 * values. Everything on the site (home sections, search, categories, tags,
 * sitemap, footer, read times, dates) is computed from this one file.
 * Each post must have exactly ONE photo in the `image` field.
 */

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  /** Full article body — one string per paragraph. */
  content: string[];
  category: string;
  tags: string[];
  author: string;
  /** ISO date, yyyy-mm-dd */
  date: string;
  views: number;
  comments: number;
  /** Exactly one cover photo per post. */
  image: string;
  imageAlt: string;
  /**
   * Optional video for the article body (YouTube link in any common form,
   * or a direct embed URL). Leave unset for no video — the article then
   * renders exactly as before.
   */
  videoUrl?: string;
  editorsPick?: boolean;
  featured?: boolean;
  trending?: boolean;
  breaking?: boolean;
  mainNews?: boolean;
}

export const posts: Post[] = [
  {
    slug: "digital-products-are-trending",
    title: "Digital products are trending: the downloads everyone is buying right now",
    excerpt:
      "Courses, ebooks, templates and AI toolkits are selling faster than physical goods online. Here is what people are actually buying, why creators are winning, and the checklist smart buyers use before they pay.",
    content: [
      "Something quiet has changed in the way people spend money online. The fastest-growing carts on the internet no longer hold shoes or gadgets — they hold downloads. Online courses, ebooks, design templates, Notion systems, AI prompt packs and ready-made spreadsheets are being bought at a pace that physical e-commerce would envy, and the trend is accelerating into the final quarter of the year.",
      "The numbers tell the story. Marketplaces that sell digital goods report record traffic, and independent creators selling from their own storefronts say a single well-made template can outsell months of freelance work. The appeal is simple: a digital product costs almost nothing to deliver, arrives instantly, and can be sold to a thousand people while its creator sleeps.",
      "So what is everyone buying? Skills come first. Short, practical courses on video editing, freelancing, trading basics and AI tools dominate the bestseller lists, followed closely by ebooks that promise a specific outcome — a first client, a first thousand dollars, a healthier routine. Templates are the silent giant: resume packs, social-media kits, business plans and budget trackers sell every single day because they save the buyer time, and time is the one thing nobody can download more of.",
      "Creators are winning for three reasons. First, trust has moved from big brands to individual experts; people buy from the person who taught them something for free. Second, distribution is free — a single viral post can send more buyers than a year of advertising. Third, the products themselves keep improving: buyers now expect updates, community access and support, and the best sellers deliver all three.",
      "Buyers, meanwhile, have learned to be picky. The smart checklist looks like this: check that the product solves one clear problem, look for real reviews with screenshots, confirm there is a refund policy, and make sure the creator actually uses what they sell. Anything promising overnight riches with no work is, as ever, selling the dream rather than the product.",
      "The takeaway for anyone watching the trend is not that digital products are a fad, but that they are becoming the default way knowledge changes hands online. Whether you plan to buy your first course or sell your first template, the market is open, the tools are cheap, and the audience is already there — credit card in hand.",
    ],
    category: "Business",
    tags: ["Business", "Digital Products", "E-commerce", "Creators", "Trending"],
    author: "Ayesha Khan",
    date: "2026-11-21",
    views: 14250,
    comments: 72,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "A customer paying online with a card next to a laptop",
    editorsPick: true,
    featured: true,
    trending: true,
    breaking: true,
  },
  {
    slug: "markets-rally-tech-stocks",
    title: "Markets rally as tech stocks post their strongest week of the year",
    excerpt:
      "A run of blockbuster earnings and calmer inflation data sent indices to record highs. Analysts explain what is driving the surge — and what could stop it.",
    content: [
      "Stock markets closed the week at record highs after a run of earnings reports from the biggest technology firms beat even the most optimistic forecasts. The rally, which lifted every major index, was powered by cloud and AI-chip revenues that grew far faster than analysts had modelled at the start of the quarter.",
      "Investors also took comfort from fresh inflation data showing price growth cooling for the third month in a row. With central banks signalling that rate cuts remain on the table, money that had been parked in cash flooded back into equities, particularly the large-cap technology names that dominate index funds.",
      "Not everyone is celebrating. Strategists warn that valuations now price in years of flawless growth, leaving little room for disappointment. A single weak guidance update from a bellwether company could trigger the kind of sharp correction that has followed previous euphoric runs.",
      "For ordinary savers, the practical advice has not changed: broad diversification, regular contributions, and an eye on fees matter more than timing the top. The investors who did best this week, as in most weeks, were the ones who simply stayed invested.",
      "All eyes now turn to next week's jobs report. A strong number could reignite fears of sticky inflation; a soft one could extend the rally. Either way, the market's message this week was unmistakable — risk appetite is back.",
    ],
    category: "Business",
    tags: ["Business", "Markets", "Stocks", "Trending"],
    author: "Bilal Ahmed",
    date: "2026-11-20",
    views: 9800,
    comments: 41,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Stock market charts rising on a trading screen",
    trending: true,
    breaking: true,
  },
  {
    slug: "ai-moves-into-the-newsroom",
    title: "AI moves into the newsroom: how editors are using it without losing trust",
    excerpt:
      "Transcription, translation and data crunching are now automated in most large newsrooms. The hard part is deciding what AI should never touch.",
    content: [
      "Walk into a modern newsroom and the first thing you will notice is how quiet the transcription desk has become. Interviews that once took an hour to type up now arrive as searchable text in ninety seconds. Translation, once a bottleneck for international stories, happens almost in real time. Artificial intelligence has not replaced journalists, but it has quietly absorbed the slowest parts of their day.",
      "Editors say the gains are real but uneven. AI is excellent at turning hours of council-meeting audio into a searchable archive, at spotting patterns in thousands of documents, and at drafting the first version of routine market reports. It is far less reliable at judgement: deciding what matters, what is fair, and what a community actually needs to know.",
      "The newsrooms handling this well share a pattern. They publish clear policies on where AI is used, they keep a human signature on every story, and they treat machine output as a draft to be verified rather than a fact to be repeated. Several have also begun labelling AI-assisted content so readers can see exactly how a story was produced.",
      "Trust remains the currency. Surveys show readers are comfortable with AI helping behind the scenes but hostile to undisclosed machine-written news. The outlets that are transparent about the process are, so far, keeping both their audiences and their credibility.",
      "The likely future is a hybrid newsroom: machines doing the heavy lifting on data and drafts, humans doing the reporting, the verifying and the storytelling. The technology will keep improving. The standards, editors insist, are not negotiable.",
    ],
    category: "Tech",
    tags: ["Tech", "AI", "Media", "Trending"],
    author: "Sarah Mitchell",
    date: "2026-11-19",
    views: 8600,
    comments: 38,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Colourful artificial intelligence artwork generated by a neural network",
    trending: true,
  },
  {
    slug: "battery-breakthrough-phone-life",
    title: "The battery breakthrough that could double your phone's life",
    excerpt:
      "Solid-state cells have been five years away for a decade. New manufacturing results suggest the wait is finally ending — with phones first in line.",
    content: [
      "Every smartphone owner knows the ritual: the midday hunt for a charger, the battery-health percentage creeping down month after month. A new generation of solid-state batteries promises to end both. By replacing the flammable liquid electrolyte in today's lithium-ion cells with a ceramic layer, manufacturers say they can pack in far more energy, charge in minutes, and keep capacity for years longer.",
      "The breakthrough this month is not the chemistry — scientists have demonstrated solid-state cells in labs for years — but the manufacturing. Two major producers say they have cracked the yield problem that made the cells too expensive to mass-produce, with pilot lines now turning out cells at a cost within striking distance of conventional batteries.",
      "Phones are expected to be the first beneficiaries. A solid-state pack could take a flagship handset from a day of use to two, while also being thinner and far less prone to swelling or fire. Laptops, wearables and eventually electric vehicles would follow as production scales.",
      "Scepticism is healthy — the industry has announced this future before. But the difference now is money: billions in factory investment are already committed, and the first consumer devices using the cells are scheduled for next year.",
      "If the timelines hold, the humble battery — long the bottleneck of mobile technology — is about to become its headline feature again.",
    ],
    category: "Tech",
    tags: ["Tech", "Science", "Smartphones"],
    author: "Danish Raza",
    date: "2026-11-18",
    views: 7900,
    comments: 29,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "A modern smartphone held in a hand",
    featured: true,
  },
  {
    slug: "last-over-thriller-seals-series",
    title: "Last-over thriller seals the series as home crowd erupts",
    excerpt:
      "Needing 14 from the final six balls, the hosts held their nerve in a finish that will be replayed for years. Here is how the decider unfolded, ball by ball.",
    content: [
      "It came down, as the best matches always do, to the final over. Fourteen runs needed, six balls remaining, and a capacity crowd on its feet. When the winning boundary finally raced to the rope, the stadium produced a noise that players later described as something they felt in their chests.",
      "The decider had swung both ways all evening. The visitors posted a formidable total on the back of a century from their opener, and for long stretches the chase looked beyond reach. The turning point was a 19th over that yielded 22 runs, including two sixes struck clean over long-on.",
      "Credit belongs to the finishers, who paced the innings with a maturity that belied the pressure. Rather than swinging wildly, they picked their bowlers, ran hard between the wickets, and saved the big shots for the balls that deserved them.",
      "The series win lifts the hosts to the top of the championship table and sets up a mouth-watering tour next month. The visitors, beaten but far from disgraced, will point to dropped catches in the field as the difference between the sides.",
      "For the fans who stayed long after the presentation, singing in the stands, this was the kind of night that reminds everyone why live sport still beats every screen in the house.",
    ],
    category: "Sports",
    tags: ["Sport", "Cricket", "Trending"],
    author: "Omar Farooq",
    date: "2026-11-20",
    views: 12400,
    comments: 96,
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "A cricket batsman playing a shot in a packed stadium",
    editorsPick: true,
    trending: true,
    breaking: true,
  },
  {
    slug: "science-behind-fastest-marathon",
    title: "A 2:01 marathon: the science behind the fastest run ever",
    excerpt:
      "Carbon plates, perfect pacing and a new understanding of fuelling have rewritten what the human body can do over 26.2 miles.",
    content: [
      "When the clock stopped at two hours and one minute, the marathon world did not just witness a record — it witnessed the collision of physiology, engineering and data. The run was the product of a decade of marginal gains, each small on its own, devastating in combination.",
      "The shoes are the most visible change. Carbon-fibre plates embedded in thick, springy foam return energy with every stride, effectively reducing the metabolic cost of running by around four percent. At elite level, four percent is an eternity.",
      "Less visible is the fuelling revolution. Where runners once hit the wall at mile twenty, today's elites absorb up to 120 grams of carbohydrate per hour, trained like a second discipline. Gut training, once an afterthought, is now scheduled as carefully as interval sessions.",
      "Pacing has become a science of its own. Laser guides, rotating pacemakers and real-time split feedback keep the athlete locked to the optimal line, saving the surges that used to cost precious seconds.",
      "Purists debate how much of the record belongs to the athlete and how much to the equipment. The athletes themselves are relaxed about it: the clock, they point out, does not care how you got there.",
    ],
    category: "Sports",
    tags: ["Sport", "Running", "Science"],
    author: "Emma Wilson",
    date: "2026-11-15",
    views: 5400,
    comments: 18,
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "A marathon runner in motion on a city road",
  },
  {
    slug: "city-population-keeping-pace",
    title: "Is your city's population keeping pace? The new census maps, explained",
    excerpt:
      "Fresh census data redraws the map of where people actually live. Some districts are booming, others are emptying — and the reasons are not what you think.",
    content: [
      "The newest census maps make for fascinating, and sometimes uncomfortable, reading. City centres that emptied during the remote-work years are filling again, while some once-booming suburbs have stalled. The pattern is not a simple return to the old normal; it is a reshuffle with winners and losers on every street.",
      "Three forces explain most of the movement. Housing costs continue to push younger workers outward, but new transit lines are pulling others back toward well-connected districts. Remote work has settled into a hybrid rhythm that favours homes with a spare room over flats near the office. And international migration is concentrating in a handful of gateway cities, supercharging their growth.",
      "The consequences are practical. Schools in fast-growing districts face waiting lists while others merge classes. Water, power and transport planners are redrawing decade-old assumptions. Local businesses feel it first: the café that survives is the one on the street where the cranes are.",
      "Demographers caution against reading too much into a single year. Populations move slowly, and today's boom district can be tomorrow's oversupply. But the direction of travel is clear — the map is being redrawn, and the cities that plan for it will cope far better than those that pretend it is not happening.",
    ],
    category: "Newsbeat",
    tags: ["Newsbeat", "Cities", "Data", "Trending"],
    author: "Sarah Mitchell",
    date: "2026-11-17",
    views: 6700,
    comments: 22,
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Aerial view of a dense city skyline at dusk",
    trending: true,
  },
  {
    slug: "back-to-the-moon-mission",
    title: "Back to the Moon: inside the mission that lands this winter",
    excerpt:
      "More than fifty years after the last footprints, a new lander is heading for the lunar south pole. The prize is water ice — and a permanent foothold.",
    content: [
      "The launch window opens this winter, and with it humanity's return to the surface of the Moon. The uncrewed lander at the centre of the mission is not going for nostalgia. It is going for water — the ice locked in permanently shadowed craters at the lunar south pole that could one day be split into drinking water, oxygen and rocket fuel.",
      "The south pole is the most contested real estate in the solar system. Peaks there enjoy near-constant sunlight for power, while the crater floors beside them have not seen the sun in billions of years. Whoever learns to live off that ice first gains an enormous head start in deep-space exploration.",
      "The mission profile is unforgiving. The lander must navigate by camera and laser altimeter over terrain no spacecraft has touched, avoid boulders the size of houses, and set down within a target zone a few hundred metres wide — all with a two-second signal delay that makes joystick control impossible.",
      "Engineers are quietly confident. The same autonomous landing software has been tested through hundreds of simulated descents, and the hardware has survived vibration, vacuum and temperature trials designed to be harsher than the real thing.",
      "If it succeeds, the landing will mark the moment the Moon stopped being a destination for flags and became a place to build. The crewed missions that follow will be standing, quite literally, on ground this robot scouted.",
    ],
    category: "Science",
    tags: ["Science", "Space", "Trending"],
    author: "Danish Raza",
    date: "2026-11-16",
    views: 9100,
    comments: 54,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Earth seen from orbit at night with city lights",
    featured: true,
    breaking: true,
  },
  {
    slug: "climate-summit-deal",
    title: "Climate summit ends with a deal nobody expected — and a deadline nobody can miss",
    excerpt:
      "After two weeks of deadlock, negotiators agreed a loss-and-damage fund with real money attached. The hard part starts now.",
    content: [
      "The gavel came down at dawn, thirty-six hours after the summit was supposed to end. Exhausted delegates applauded a text that, a week earlier, most had written off as impossible: a fully funded loss-and-damage mechanism, a timetable for phasing down unabated fossil fuels, and — for the first time — language tying trade rules to emissions standards.",
      "The breakthrough came from an unlikely alliance. Small island states, front-line farming nations and a bloc of wealthy economies found common ground on a simple trade: guaranteed climate finance in exchange for verifiable emissions cuts. The final numbers are not everything the vulnerable countries asked for, but they are real, scheduled and independently monitored.",
      "Sceptics note, correctly, that summits have produced fine words before. What distinguishes this deal is the enforcement calendar: annual public scorecards, automatic reviews, and funding that pauses if targets are missed. It is the closest the process has come to consequences.",
      "Markets reacted within hours. Renewable-energy stocks rose, insurers began repricing climate risk in exposed regions, and several governments announced accelerated grid investment before the delegates had even flown home.",
      "The deadline that matters now is eighteen months away, when the first scorecard lands. By then we will know whether this was a turning point or another beautifully worded delay.",
    ],
    category: "World",
    tags: ["World", "Climate", "Politics"],
    author: "Emma Wilson",
    date: "2026-11-14",
    views: 7200,
    comments: 47,
    image:
      "https://images.unsplash.com/photo-1569163139394-de44cb5894ce?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Wind turbines turning against a clear sky",
  },
  {
    slug: "sleep-habit-that-matters-most",
    title: "Sleep scientists found the one habit that matters more than eight hours",
    excerpt:
      "Consistency beats duration. A decade-long study of 60,000 sleepers shows that going to bed at the same time matters more than the total hours you log.",
    content: [
      "If you have ever lain awake doing the maths — asleep by eleven, up at seven, that's eight hours, that counts — sleep science has news for you. A decade-long study tracking more than 60,000 adults found that the regularity of sleep predicted health outcomes more strongly than its duration.",
      "Participants who kept a consistent sleep-wake schedule, even on weekends, showed lower rates of metabolic disease, better mood scores and sharper cognitive test results than those who slept longer but at erratic times. The body's internal clock, researchers explain, cares less about the total than about predictability.",
      "The mechanism is hormonal. Regular sleep stabilises the daily rhythm of cortisol and melatonin, which in turn regulates appetite, blood sugar and inflammation. A chaotic schedule scrambles those signals, producing effects similar to chronic jet lag — which is, in a sense, exactly what it is.",
      "The practical advice is refreshingly modest. Pick a wake-up time you can keep seven days a week, get bright light within an hour of rising, and let bedtime follow naturally. You do not need a tracker, a supplement or a perfect eight hours. You need a rhythm.",
      "For shift workers and new parents, the researchers acknowledge, perfect regularity is impossible. But even anchoring one end of the night — the same wake time whenever possible — delivered measurable benefits. Consistency, it turns out, is the closest thing sleep science has to a free lunch.",
    ],
    category: "Health",
    tags: ["Health", "Science", "Sleep", "Trending"],
    author: "Ayesha Khan",
    date: "2026-11-13",
    views: 11200,
    comments: 63,
    image:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "A person sleeping peacefully in a dark bedroom",
    trending: true,
  },
  {
    slug: "mediterranean-diet-heart-numbers",
    title: "What the Mediterranean diet actually does to your heart, in plain numbers",
    excerpt:
      "It is the most studied diet on Earth. Here is what the evidence really shows — benefits, limits, and how to start without moving to Italy.",
    content: [
      "Few eating patterns have been studied as thoroughly as the Mediterranean diet, and few have survived the scrutiny so well. Decades of trials link it to lower rates of heart attack and stroke, better blood-sugar control, and slower cognitive decline. The effect sizes are not magic, but they are consistent — which in nutrition science is rarer and more valuable.",
      "The pattern itself is simple: vegetables, legumes, whole grains, olive oil as the main fat, fish a few times a week, and meat as an occasional guest rather than the main event. Herbs and spices do the flavour work that salt and sugar do elsewhere.",
      "In plain numbers, the landmark trials found roughly a 30 percent relative reduction in major cardiovascular events among high-risk adults who adopted the diet with extra-virgin olive oil or nuts. That is in the same conversation as some medications — achieved with food people actually enjoy.",
      "Starting does not require a plane ticket. Swap butter for olive oil, make beans or lentils the centre of two dinners a week, eat fish on Fridays, and let vegetables fill half the plate. The diet works because it is a pattern, not a punishment.",
      "The honest caveat: no diet outruns smoking, inactivity or untreated blood pressure. But as a foundation for heart health, the Mediterranean pattern remains the closest thing nutrition has to a consensus.",
    ],
    category: "Health",
    tags: ["Health", "Food", "Science"],
    author: "Bilal Ahmed",
    date: "2026-11-11",
    views: 4800,
    comments: 12,
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "A colourful Mediterranean food bowl with vegetables and grains",
  },
  {
    slug: "searching-for-forgotten-heroes",
    title: "Searching for the forgotten heroes of World War Two",
    excerpt:
      "Their names were left off the memorials and out of the history books. A new generation of researchers is finding them — one archive box at a time.",
    content: [
      "The archive room smells of dust and old paper, and the box on the table has not been opened since 1947. Inside are the service records of soldiers whose names appear on no memorial — dispatch riders, stretcher-bearers, code clerks, cooks who held a perimeter with a rifle when the line broke. The war was won by famous generals, but it was survived by people like these.",
      "A growing movement of historians, genealogists and volunteers is now hunting for them. Digitised records have made the search possible: war diaries, medal rolls and unit photographs that once required weeks in a reading room can now be cross-referenced from a kitchen table.",
      "The discoveries are often small and devastating. A signaller who stayed at his post under shellfire to pass one last message. A nurse who worked three days without sleep during an evacuation. A teenage messenger whose bicycle is now in a museum, though his name is not on the label.",
      "Families are at the heart of the project. Many descendants grew up with a photograph and a silence; the records give them a story. Several towns have already amended their memorials, adding names eighty years late but, as one mayor put it, not too late.",
      "History, it turns out, is not finished. It is waiting in boxes, in attics and in databases, for someone patient enough to go looking.",
    ],
    category: "Stories",
    tags: ["Stories", "History", "World"],
    author: "Emma Wilson",
    date: "2026-11-12",
    views: 5900,
    comments: 31,
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Mist rolling over quiet green hills at dawn",
    editorsPick: true,
  },
  {
    slug: "cargo-planes-boom",
    title: "Business is booming for giant cargo planes — and airports are scrambling",
    excerpt:
      "E-commerce, chip factories and satellite launches have created a gold rush in air freight. The bottleneck now is not planes — it is parking space.",
    content: [
      "The humble freighter has become the most sought-after aircraft in the sky. Demand for air cargo has surged as e-commerce giants promise two-day delivery across oceans, semiconductor fabs ship equipment worth more than the planes carrying it, and satellite constellations need constant replenishment.",
      "Airlines that retired their freighters a decade ago are buying them back at premium prices. Conversion lines that turn passenger jets into cargo carriers have waiting lists stretching years, and the giant nose-loading freighters — the only aircraft that can swallow a satellite or a turbine blade whole — are booked solid.",
      "The bottleneck has moved to the ground. Airports report aprons full of freighters waiting for warehouse space, customs capacity and truck slots. The smart money is flowing into cargo villages: automated warehouses, cold-chain facilities and customs pre-clearance that can turn a plane around in hours instead of a day.",
      "For travellers, the boom has a silver lining. Cargo revenue helps airlines keep passenger routes viable, and the belly-hold space on passenger flights is now a profit centre rather than an afterthought.",
      "The sky, it turns out, is not just for passengers anymore. The boxes are winning.",
    ],
    category: "Business",
    tags: ["Business", "Aviation", "Trade"],
    author: "Omar Farooq",
    date: "2026-11-10",
    views: 6100,
    comments: 15,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "An aeroplane wing above the clouds at sunset",
  },
  {
    slug: "tech-giant-record-eu-fine",
    title: "Tech giant hit with record EU fine over shopping service",
    excerpt:
      "Regulators say the company abused its dominance by favouring its own shopping results. The fine is the largest ever levied — and the appeal will shape the next decade of the internet.",
    content: [
      "European regulators have levied the largest fine in their history against one of the world's biggest technology companies, ruling that it abused its dominance by systematically favouring its own shopping service in search results. The penalty, running into the billions, lands after an investigation that spanned years and millions of pages of evidence.",
      "The core finding is about self-preferencing. Internal documents showed the company's comparison-shopping product was given prominent placement, rich formatting and exemption from the penalties applied to rivals — while competing services were demoted, sometimes to the fourth page of results where traffic goes to die.",
      "The company rejects the ruling and will appeal, arguing that its shopping results helped users find products faster and that rivals thrived during the same period. Legal experts say the appeal could take years, during which the company must still change its behaviour or face daily penalties.",
      "Rival shopping services, some of which shrank to a fraction of their former size, welcomed the decision but warned that a fine alone does not restore a lost decade. The remedy — equal treatment in results — matters more to them than the money.",
      "Whatever the appeal decides, the case has already changed the industry. Every large platform now employs teams whose job is to ask, before any product launch: would a regulator call this self-preferencing? That question, asked daily in boardrooms, may be the fine's most lasting effect.",
    ],
    category: "Newsbeat",
    tags: ["Newsbeat", "Tech", "Business", "Trending"],
    author: "Sarah Mitchell",
    date: "2026-11-21",
    views: 10300,
    comments: 84,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Business documents and a laptop on a desk during a meeting",
    mainNews: true,
    trending: true,
    breaking: true,
  },
  {
    slug: "phone-microphone-privacy-myth",
    title: "No, your phone isn't secretly listening — here's what's really happening",
    excerpt:
      "You talk about running shoes, then see an ad for running shoes. It feels like eavesdropping. The truth is stranger — and in some ways worse.",
    content: [
      "It has happened to everyone. You mention a product in conversation — a brand of shoes, a holiday destination — and within hours an advert for exactly that thing appears on your phone. The conclusion feels obvious: the microphone must be listening. Security researchers have tested this claim for years, and the evidence says otherwise.",
      "When researchers monitored phones for the constant audio uploads that secret listening would require, they found none. What they found instead was something more mundane and more powerful: an advertising ecosystem that knows your location history, your browsing, your purchases, your contacts' purchases, and the statistical likelihood that someone with your profile is about to want running shoes.",
      "The ad you saw was probably not triggered by your conversation. It was triggered by the running-shoe website your friend visited, the race you both signed up for, the location data that placed you near a sports shop, or the simple fact that people who talk about running shoes were already likely to buy them. The conversation and the ad share a cause; neither caused the other.",
      "That does not mean your privacy is fine. The real data collection — location trails, app usage, purchase histories, and the inferences drawn from them — is extensive, mostly invisible, and largely legal because you agreed to it in terms nobody reads.",
      "The practical steps are boring but effective: audit app permissions, turn off ad personalisation, limit location access to when apps are in use, and treat 'free' services as paid for with data. Your phone is not listening. It does not need to.",
    ],
    category: "Tech",
    tags: ["Tech", "Privacy", "Science"],
    author: "Danish Raza",
    date: "2026-11-09",
    views: 8900,
    comments: 57,
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "A studio microphone in warm light",
    featured: true,
  },
  {
    slug: "electric-highway-charging-race",
    title: "The charging race: who will own the electric highway?",
    excerpt:
      "Petrol stations took a century to blanket the roads. EV charging networks are trying to do it in a decade — and the fight for the best corners is fierce.",
    content: [
      "Every era of transport has its land grab. Railways fought for the passes, petrol brands fought for the corners, and now charging networks are fighting for the motorway exits. The prize is enormous: whoever owns the reliable, fast, well-lit charging stop owns the electric driver's loyalty for decades.",
      "The build-out is accelerating. Ultra-fast chargers that add 200 miles of range in fifteen minutes are appearing along major corridors, often paired with cafés, workspaces and play areas — because a fifteen-minute stop is a business opportunity, not just a technical one.",
      "The challenges are equally real. Grid connections can take years, rural routes struggle to justify investment, and reliability — the charger that actually works when you arrive — remains the industry's weakest point. Regulators are beginning to set uptime standards with penalties attached.",
      "Drivers, meanwhile, are adapting faster than the infrastructure. Home charging covers most daily miles, and the long-trip anxiety that once dominated EV discussions fades with every corridor completed.",
      "The electric highway will be built. The only question the race will answer is whose logo is on the canopy when it is.",
    ],
    category: "World",
    tags: ["World", "Tech", "Business"],
    author: "Omar Farooq",
    date: "2026-11-08",
    views: 4300,
    comments: 9,
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "An electric car plugged into a charging station",
  },
];

/* ------------------------------------------------------------------ */
/* Helpers — every value below is computed from the posts array above. */
/* ------------------------------------------------------------------ */

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** "2026-11-21" -> "Nov 21, 2026" (manual parse — no Date() needed). */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return `${MONTHS[month - 1]} ${day}, ${year}`;
}

export function readTime(post: Post): number {
  const words = post.content.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatViews(views: number): string {
  if (views >= 1000) {
    const value = views / 1000;
    return `${Number.isInteger(value) ? value : value.toFixed(1)}k`;
  }
  return String(views);
}

export function categorySlug(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function tagSlug(tag: string): string {
  return tag.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

/** All posts, newest first. */
export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getMainNews(): Post {
  return posts.find((post) => post.mainNews) ?? getAllPosts()[0];
}

export function getEditorsPicks(): Post[] {
  return posts.filter((post) => post.editorsPick);
}

export function getFeatured(): Post[] {
  return posts.filter((post) => post.featured);
}

export function getTrending(limit = 7): Post[] {
  return posts
    .filter((post) => post.trending)
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

export function getBreaking(): Post[] {
  return posts
    .filter((post) => post.breaking)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getCategories(): { name: string; slug: string; count: number }[] {
  const map = new Map<string, number>();
  for (const post of posts) {
    map.set(post.category, (map.get(post.category) ?? 0) + 1);
  }
  return [...map.entries()]
    .map(([name, count]) => ({ name, slug: categorySlug(name), count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function getCategoryBySlug(
  slug: string,
): { name: string; slug: string; count: number } | undefined {
  return getCategories().find((category) => category.slug === slug);
}

export function getPostsByCategory(categoryName: string): Post[] {
  return getAllPosts().filter((post) => post.category === categoryName);
}

export function getTags(): { name: string; slug: string; count: number }[] {
  const map = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.tags) {
      map.set(tag, (map.get(tag) ?? 0) + 1);
    }
  }
  return [...map.entries()]
    .map(([name, count]) => ({ name, slug: tagSlug(name), count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function getRelated(post: Post, limit = 3): Post[] {
  const sameCategory = posts.filter(
    (candidate) => candidate.slug !== post.slug && candidate.category === post.category,
  );
  const sharedTags = posts.filter(
    (candidate) =>
      candidate.slug !== post.slug &&
      candidate.category !== post.category &&
      candidate.tags.some((tag) => post.tags.includes(tag)),
  );
  return [...sameCategory, ...sharedTags]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

export function getPrevNext(post: Post): { prev?: Post; next?: Post } {
  const ordered = getAllPosts();
  const index = ordered.findIndex((candidate) => candidate.slug === post.slug);
  return {
    prev: index > 0 ? ordered[index - 1] : undefined,
    next: index < ordered.length - 1 ? ordered[index + 1] : undefined,
  };
}

/** Trimmed post data shipped to the client for live search. */
export interface SearchEntry {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  date: string;
}

export function getSearchIndex(): SearchEntry[] {
  return getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    tags: post.tags,
    image: post.image,
    imageAlt: post.imageAlt,
    date: post.date,
  }));
}
