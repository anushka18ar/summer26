export type Expert = {
  id: string;
  name: string;
  title: string;
  image: string;
  flag: string;
  nationality: string;
  license: string;
  rating: number;
  reviews: number;
  sessions: number;
  experience: number;
  languages: string[];
  specializations: string[];
  clubs: string[];
  achievements: string[];
  bio: string;
  price: number;
  reviewList: { author: string; avatar: string; country: string; rating: number; date: string; text: string }[];
};

export type BoardMember = {
  name: string;
  role: string;
  image: string;
  strategicProfile: string;
};

export const experts: Expert[] = [
  {
    id: "marcos-silva",
    name: "Marcos Silva",
    title: "UEFA Pro Licensed Head Coach · Tactical Analyst",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    flag: "🇧🇷",
    nationality: "Brazilian",
    license: "UEFA Pro",
    rating: 4.9,
    reviews: 142,
    sessions: 380,
    experience: 18,
    languages: ["Portuguese", "English", "Spanish"],
    specializations: ["Tactical Analysis", "Striker Development", "Video Analysis"],
    clubs: ["FC Porto B", "Sporting Braga", "Academica de Coimbra"],
    achievements: [
      "UEFA Pro License — 2018",
      "Portuguese Liga Second Division Champion — 2019",
      "15 players scouted to top European clubs",
    ],
    bio: "Former professional midfielder turned elite tactical coach with 18 years of experience across Portugal and Brazil. Marcos specialises in player development for attackers and midfielders, combining data analytics with real-time video analysis to deliver measurable performance gains.",
    price: 120,
    reviewList: [
      {
        author: "James Okafor",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&q=80",
        country: "Nigeria",
        rating: 5,
        date: "March 2026",
        text: "Marcos completely transformed my understanding of positional play. His video breakdowns are detailed and actionable. Within 3 sessions my 1v1 conversion rate improved significantly.",
      },
      {
        author: "Luca Bianchi",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
        country: "Italy",
        rating: 5,
        date: "February 2026",
        text: "Incredibly professional. He identified a flaw in my off-ball movement in the first session and gave me a drill programme I still use every week.",
      },
    ],
  },
  {
    id: "aisha-mensah",
    name: "Aisha Mensah",
    title: "CAF A Licensed Coach · Athletic Development Specialist",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    flag: "🇬🇭",
    nationality: "Ghanaian",
    license: "CAF A",
    rating: 4.8,
    reviews: 97,
    sessions: 210,
    experience: 12,
    languages: ["English", "Twi", "French"],
    specializations: ["Athletic Development", "Speed Training", "Youth Development"],
    clubs: ["Hasaacas Ladies", "Accra Lions", "Ghana Women's National Team"],
    achievements: [
      "CAF A License — 2020",
      "Ghana Women's Premier League — Two-time champion",
      "Produced 8 players for national team",
    ],
    bio: "A decorated coach in the African football ecosystem, Aisha brings elite athletic conditioning methodology developed over 12 years with club and national teams. She focuses on speed, agility, and strength development tailored to each player's physiological profile.",
    price: 85,
    reviewList: [
      {
        author: "Fatima Diallo",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
        country: "Senegal",
        rating: 5,
        date: "April 2026",
        text: "I improved my sprint times by over 8% in 6 weeks under Aisha's programme. Her attention to biomechanics is world-class.",
      },
      {
        author: "Kwame Asante",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
        country: "Ghana",
        rating: 4,
        date: "March 2026",
        text: "Very structured sessions. She sends written plans ahead of each video call and follows up every week. Highly recommended.",
      },
    ],
  },
  {
    id: "david-kowalski",
    name: "David Kowalski",
    title: "UEFA A Licensed Coach · Goalkeeper Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    flag: "🇵🇱",
    nationality: "Polish",
    license: "UEFA A",
    rating: 4.7,
    reviews: 63,
    sessions: 155,
    experience: 14,
    languages: ["Polish", "English", "German"],
    specializations: ["Goalkeeping", "Technical Dribbling", "Midfield Play"],
    clubs: ["Legia Warsaw Academy", "Wisla Krakow", "GKS Katowice"],
    achievements: [
      "UEFA A License — 2017",
      "Polish Cup — Semi-finalist coach",
      "Trained 4 keepers who reached Ekstraklasa",
    ],
    bio: "David is one of Poland's most sought-after goalkeeping coaches, known for his modern positional play methodology that revolutionises how keepers read the game. His sessions blend footwork, distribution, and decision-making into cohesive technical programmes.",
    price: 95,
    reviewList: [
      {
        author: "Tomasz Wróbel",
        avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&q=80",
        country: "Poland",
        rating: 5,
        date: "April 2026",
        text: "My distribution under pressure has improved dramatically. David's progressive keeper coaching is unlike anything I've encountered in Poland.",
      },
    ],
  },
  {
    id: "rafael-montoya",
    name: "Rafael Montoya",
    title: "FA Licensed Scout · Data Analytics Expert",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
    flag: "🇦🇷",
    nationality: "Argentine",
    license: "FA Licensed",
    rating: 4.9,
    reviews: 58,
    sessions: 130,
    experience: 10,
    languages: ["Spanish", "English", "Italian"],
    specializations: ["Data Analytics", "Video Analysis", "Tactical Analysis"],
    clubs: ["River Plate Analytics Dept", "Club Atlético Tucumán", "Independent FC UK"],
    achievements: [
      "FA Talent ID Licence — 2021",
      "Built scouting model adopted by 3 Football League clubs",
      "20+ players placed into professional academies",
    ],
    bio: "Rafael combines a background in statistics with on-pitch expertise to produce data-driven player profiles that scouts and clubs trust. He helps players understand their own statistical footprint and how to optimise it for recruitment visibility.",
    price: 110,
    reviewList: [
      {
        author: "Carlos Herrera",
        avatar: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=100&q=80",
        country: "Colombia",
        rating: 5,
        date: "March 2026",
        text: "Rafael built a complete analytics profile for me that I used to approach three clubs. One offered me a trial within a month. Outstanding service.",
      },
    ],
  },
  {
    id: "sophie-chen",
    name: "Sophie Chen",
    title: "AFC Licensed Coach · Youth Development Specialist",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80",
    flag: "🇸🇬",
    nationality: "Singaporean",
    license: "AFC Licensed",
    rating: 4.8,
    reviews: 74,
    sessions: 190,
    experience: 9,
    languages: ["English", "Mandarin", "Malay"],
    specializations: ["Youth Development", "Technical Dribbling", "Speed Training"],
    clubs: ["Lion City Sailors Academy", "Tampines Rovers Youth", "Singapore U-17 National Team"],
    achievements: [
      "AFC C Licence — 2019, AFC B Licence — 2022",
      "Singapore Youth Cup — Champion 2023",
      "12 academy players progressed to senior professional contracts",
    ],
    bio: "Sophie is Asia's leading youth development coach, recognised by the AFC for her innovative player pathway methodology. She specialises in technical skill building for players aged 14–21 and works with families to design long-term development plans.",
    price: 75,
    reviewList: [
      {
        author: "Wei Liang",
        avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&q=80",
        country: "China",
        rating: 5,
        date: "February 2026",
        text: "Sophie's structured approach for my 16-year-old son has been remarkable. She communicates clearly with both him and us as parents. Exceptional coach.",
      },
    ],
  },
  {
    id: "james-osei",
    name: "James Osei",
    title: "UEFA B Licensed Coach · Midfield Play Specialist",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&q=80",
    flag: "🇬🇧",
    nationality: "British-Ghanaian",
    license: "UEFA B",
    rating: 4.6,
    reviews: 45,
    sessions: 98,
    experience: 7,
    languages: ["English", "Twi"],
    specializations: ["Midfield Play", "Tactical Analysis", "Technical Dribbling"],
    clubs: ["Coventry City Community", "Kidderminster Harriers Youth", "West Bromwich Albion Foundation"],
    achievements: [
      "UEFA B License — 2022",
      "FA Youth Coaching Award — 2021",
      "6 players promoted to senior squads",
    ],
    bio: "James is a dynamic young coach bringing fresh methodology shaped by his own professional career in England's lower leagues. Specialising in midfield intelligence and pressing triggers, he communicates complex ideas simply and keeps sessions high-energy.",
    price: 65,
    reviewList: [
      {
        author: "Tyler Reid",
        avatar: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=100&q=80",
        country: "UK",
        rating: 5,
        date: "April 2026",
        text: "James is brilliant. He understands modern football pressing systems better than any coach I've worked with at semi-pro level. My positioning has improved massively.",
      },
    ],
  },
];

export const boardMembers: BoardMember[] = [
  {
    name: "Sylvie Lederlé",
    role: "Brand Partnerships Leader",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    strategicProfile:
      "A senior brand partnerships leader with 20+ years of experience across major international sports properties. Expert in sponsorship, rights valuation, and KPI frameworks.",
  },
  {
    name: "Marco Garcia",
    role: "Football Advisor",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
    strategicProfile:
      "A Spanish-Chilean football advisor and high-performance specialist with 11+ years of international experience across youth development, elite talent identification, and sports management.",
  },
  {
    name: "Katarina Cosic",
    role: "Sport Lawyer & FIFA Agent",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    strategicProfile:
      "Has 14+ years' experience as a Sport Lawyer and licensed FIFA Football Agent providing legal and strategic representation within the football industry.",
  },
  {
    name: "Keith Hackett",
    role: "Former Premier League Referee",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=600&q=80",
    strategicProfile:
      "English former football referee, who began refereeing in 1960. He is counted amongst the top 100 referees of all time by the IFFHS.",
  },
];

export type EliteExpert = {
  name: string;
  role: string;
  certification: string;
  regions: string;
  experience: string;
  image: string;
};

export const eliteExperts: EliteExpert[] = [
  {
    name: "JOHAN",
    role: "Football Manager/Director",
    certification: "UEFA Pro License",
    regions: "Sweden, Denmark, Liberia & Hungary",
    experience: "19 Years Exp",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&q=80",
  },
  {
    name: "MARKO",
    role: "Manager & Coach",
    certification: "UEFA A, Youth Elite",
    regions: "Malta",
    experience: "10 Years Exp",
    image: "https://images.unsplash.com/photo-1546961342-ea5f62d5a27b?w=600&q=80",
  },
  {
    name: "PAUL",
    role: "Coach & Scout",
    certification: "UEFA Pro License",
    regions: "Romania",
    experience: "12 Years Exp",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&q=80",
  },
  {
    name: "AJITHKUMAR B.",
    role: "Coach",
    certification: "AIFF D, AFC B, FA Level-1",
    regions: "India",
    experience: "9+ Years Exp",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=600&q=80",
  },
];
