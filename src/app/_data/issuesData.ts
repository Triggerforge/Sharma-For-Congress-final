const issues = [
  {
    key: "lower-taxes",
    title: "Lowering Personal Taxes",
    image: "/issues/lowering-personal-taxes.jpg",
    content: `As an Accountant, the best way to fight inflation is to LOWER TAXES. My job is to make government SMALLER. I propose new tax brackets and believe anyone making under $50,000 should not pay taxes. This will put money back in the economy, support savings, and reduce reliance on government programs.`
  },
  {
    key: "business-taxes",
    title: "Lowering Business Taxes",
    image: "/issues/lowering-business-taxes.jpg",
    content: `To reduce inflation, we must also lower corporate taxes. I propose tax breaks for companies that manufacture goods in America and tariffs on imports. I also support special tax incentives for startups and small businesses.`
  },
  {
    key: "gas-prices",
    title: "Lowering Gas Prices",
    image: "/issues/lowering-gas-prices.jpg",
    content: `Gas powers our economy. I propose drilling for oil, reducing taxes on gas providers, and making America the #1 drilling nation again. Tariffs on foreign oil will support energy independence.`
  },
  {
    key: "grocery-prices",
    title: "Lower Grocery Prices",
    image: "/issues/lowering-grocery-prices.jpg",
    content: `To tackle grocery prices, I propose tax breaks to grocery chains that keep essential item prices low, like eggs. This will be overseen by a federal committee with oversight and accountability.`
  },
  {
    key: "mortgage-protection",
    title: "Mortgage Protection Program",
    image: "/issues/mortgage-protection.jpg",
    content: `Mortgage rates are out of control. I propose tax reductions to lenders in exchange for lower fixed interest rates. I also support expanding the mortgage interest deduction and adding accountability to lending institutions.`
  },
  {
    key: "deregulation",
    title: "Deregulation",
    image: "/issues/deregulation.jpg",
    content: `Regulation is a hidden tax on American businesses. I will introduce bills to require Congressional approval for agency rules and simplify regulatory procedures to remove barriers to success.`
  },
  {
    key: "veterans",
    title: "Veterans",
    image: "/issues/veterans.jpg",
    content: `Veterans are national heroes. I will introduce legislation to end veteran homelessness, expand the GI Bill, improve VA healthcare, and incentivize companies to hire veterans with tax breaks.`
  },
  {
    key: "border-security",
    title: "Border Security",
    image: "/issues/border-security.jpg",
    content: `Congress can't fix the border alone, but we can fund and enforce border security. I propose sanctions on Mexico, ICE raids in sanctuary cities, and allow states to sue the federal government over border failure.`
  },
  {
    key: "fentanyl",
    title: "Fentanyl Crisis",
    image: "/issues/fentanyl-crisis.jpg",
    content: `We must declare war on fentanyl. I support mandatory sentencing, Guantanamo for traffickers, and mandatory rehab with strict testing for addicts. Offenders caught with drugs face real accountability.`
  },
  {
    key: "abolish-fema",
    title: "Destruction of FEMA",
    image: "/issues/abolish-fema.jpg",
    content: `FEMA has failed Americans in crisis. I will abolish FEMA and replace it with a Congressional committee with state reps, transparency, audits, and military support in times of disaster.`
  },
  {
    key: "first-responders",
    title: "Support First Responders",
    image: "/issues/first-responders.jpg",
    content: `We must prioritize police, fire, and EMS workers. I will fight for bonuses, training upgrades, and stronger protections for those who risk their lives daily.`
  },
  {
    key: "second-amendment",
    title: "Second Amendment",
    image: "/issues/second-amendment.jpg",
    content: `The right to keep and bear arms shall not be infringed. I oppose any registry, red flag law, or federal restriction on responsible gun ownership.`
  },
  {
    key: "school-prayer",
    title: "School Prayer",
    image: "/issues/school-prayer.jpg",
    content: `Freedom of religion is a founding principle. I will protect the right for voluntary prayer and Christian clubs in public schools.`
  },
  {
    key: "school-choice",
    title: "School Choice",
    image: "/issues/school-choice.jpg",
    content: `I will support legislation to allow funding to follow students. Every family deserves the right to choose private, charter, or homeschool options.`
  },
  {
    key: "parental-rights",
    title: "Parental Rights",
    image: "/issues/parental-rights.jpg",
    content: `I will write legislation that affirms a parent's right to know what their child is being taught and prohibit gender discussions without parental consent.`
  },
  {
    key: "womens-sports",
    title: "Protect Women's Sports",
    image: "/issues/womens-sports.jpg",
    content: `I will propose a national ban on biological males competing in women’s sports. We must protect Title IX.`
  },
  {
    key: "voter-id",
    title: "Voter ID",
    image: "/issues/voter-id.jpg",
    content: `Election integrity matters. I support universal voter ID, bans on ballot harvesting, and penalties for fraud.`
  },
  {
    key: "foreign-policy",
    title: "Foreign Policy",
    image: "/issues/foreign-policy.jpg",
    content: `America comes first. No blank checks. I oppose endless wars, will bring troops home, and prioritize strategic alliances not global policing.`
  },
  {
    key: "deregulate-law-accounting",
    title: "Deregulate Law & Accounting",
    image: "/issues/deregulate-law-accounting.jpg",
    content: `I will fight for licensing reform to reduce cost and increase access to legal and accounting services.`
  },
  {
    key: "abortion",
    title: "Pro-Life",
    image: "/issues/abortion.jpg",
    content: `Life begins at conception. I will support legislation that affirms the right to life and cuts all federal funding for abortion providers.`
  },
  {
    key: "opt-out-social-security",
    title: "Opt-Out of Social Security",
    image: "/issues/opt-out-social-security.jpg",
    content: `I will propose legislation to allow young workers to opt-out of Social Security and invest their payroll tax privately.`
  },
  {
    key: "farmers",
    title: "Support Farmers",
    image: "/issues/farmers.jpg",
    content: `Agriculture is freedom. I’ll protect family farms, fight foreign land ownership, and eliminate regulations choking rural producers.`
  },
  {
    key: "castrate-rapists",
    title: "Castrate Rapists",
    image: "/issues/castrate-rapists.jpg",
    content: `I support mandatory chemical castration for child predators and serial rapists. No second chances.`
  },
  {
    key: "second-chance",
    title: "Second Chance",
    image: "/issues/second-chance.jpg",
    content: `Everyone deserves redemption. I’ll support second chance legislation for non-violent ex-offenders who work and stay clean.`
  },
  {
    key: "habeas-reform",
    title: "Habeas Reform",
    image: "/issues/habeas-reform.jpg",
    content: `Justice delayed is justice denied. I’ll streamline appeals and reduce endless litigation in our legal system.`
  },
  {
    key: "judiciary-salary",
    title: "Judiciary Salary Reform",
    image: "/issues/judiciary-salary.jpg",
    content: `I propose limiting judicial salaries to median state income and ending lifetime perks. Judges should serve the public, not themselves.`
  },
  {
    key: "civil-rights-bill",
    title: "New Civil Rights Bill",
    image: "/issues/civil-rights-bill.jpg",
    content: `I will write a modern Civil Rights Act that protects political viewpoint, faith, and personal sovereignty.`
  },
  {
    key: "usps-budget",
    title: "USPS Budget Reform",
    image: "/issues/usps-budget.jpg",
    content: `The USPS must operate like a business or be privatized. I support removing the pension burden and giving it financial autonomy.`
  },
  {
    key: "oppose-gay-acceptance",
    title: "Oppose LGBTQ Curriculum",
    image: "/issues/oppose-gay-acceptance.jpg",
    content: `I oppose public school normalization of LGBTQ ideology. I support protecting children from gender propaganda.`
  }
];

export default issues;