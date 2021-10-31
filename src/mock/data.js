import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "dabby's website", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'hello there', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello, I'm",
  name: 'dabby',
  subtitle: 'This website will tell you more about me 🐳',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'dabby_teal_square.jpg',
  paragraphOne:
    "I'm a 16 year old student at Hwa Chong Institution, who worries about his grades too much and studies way too much. 😅",
  paragraphTwo:
    "Sometimes I write some code, but I'm always looking at how to be better at it! 👨🏻‍💻 Also love watching anime but the binge watching isn't great for my eyesight. 👀",
  paragraphThree: 'Currently studying hard to hopefully make it into a good university! 👨🏻‍🎓',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'projects-cover/site-img-dark.png',
    title: 'This website ◑﹏◐',
    info: "Dabby was panicking as usual about his lack of credentials to apply into some way too high-achiever programs, so he finally decided to take some action and get his portfolio together, and hopefully present it in a way that isn't a mess",
    info2: "Thank god for technologies like gatsby so I don't have to work hard 😅",
    url: '',
    repo: 'https://github.com/dabby9734/portfolio-site', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to drop me a message?',
  btn: 'Click here!',
  email: 'wcfmsp@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/___dabby',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://sg.linkedin.com/in/liu-weichu-88b12a222',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dabby9734',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

export const skillsData = [
  [
    {
      id: nanoid(),
      name: 'Python',
      level: '95%',
    },
    {
      id: nanoid(),
      name: 'Web Development - HTML, CSS, JS, PHP, ReactJS',
      level: '85%',
    },
    {
      id: nanoid(),
      name: 'Deployment - Github, GitKraken, Gatsby Cloud, repl.it',
      level: '85%',
    },
    {
      id: nanoid(),
      name: 'SQL & NoSQL Databases - MySQL, SQLite, MongoDB',
      level: '75%',
    },
    {
      id: nanoid(),
      name: 'IDEs - VS Code, Intellij IDEA, Atom',
      level: '75%',
    },
    {
      id: nanoid(),
      name: 'C++',
      level: '70%',
    },
    {
      id: nanoid(),
      name: 'Java',
      level: '65%',
    },
  ],
  [
    {
      id: nanoid(),
      name: 'English',
      level: '100%',
    },
    {
      id: nanoid(),
      name: 'Chinese',
      level: '100%',
    },
  ],
  [
    {
      id: nanoid(),
      name: 'Perserverance',
      level: '100%',
    },
    {
      id: nanoid(),
      name: 'Adaptivity',
      level: '95%',
    },
    {
      id: nanoid(),
      name: 'Teamwork',
      level: '90%',
    },
  ],
];

export const experienceData = [
  {
    id: nanoid(),
    title: '华岗剧坊',
    description:
      'In secondary school, I joined 华岗剧坊, a chinese drama co-curricular activty. I have helped foster strong understanding of lights and sounds operation and choreography in my juniors. My participation in various productions such as 黄城夜韵, HC100 Centennial Musical and more have also refined my acting skills. I have graduated with not just the memories I made, but also teamwork skills and a 自强不息 mindset.',
    img: 'experiences/hgjf.jpg',
    imgDescription: "Huagang's logo",
  },
];

export const achievementsData = [
  {
    id: nanoid(),
    title: 'Australian Maths Competition 2021 (Y10)',
    award: 'DISTINCTION',
    description:
      'The AMC is an engaging 30-problem competition that demonstrates the importance and relevance of mathematics in students’ everyday lives.',
    linkText: 'Learn more',
    link: 'https://www.amt.edu.au/australian-mathematics-competition',
  },
  {
    id: nanoid(),
    title: 'International Chemistry Quiz 2021 (Y10)',
    award: 'DISTINCTION',
    description:
      'The ICQ is a unique chemical education activity, providing a major focus for secondary school students on the relevance of chemistry in an exciting and stimulating way.',
    linkText: 'Learn more',
    link: 'https://icquiz.org/',
  },
  {
    id: nanoid(),
    title: 'Singapore Physics League 2021 (Sec. Schools)',
    award: 'SILVER',
    description:
      'The Singapore Physics League (SPhL) is a 4-hour online contest, in which teams of 3 to 5 students compete to solve challenging physics problems.',
    linkText: 'Learn more',
    link: 'https://sgphysicsleague.org/',
  },
  {
    id: nanoid(),
    title: 'CAT Competition 2021 (Y10)',
    award: 'CREDIT',
    description:
      'The Computational and Algorithmic Thinking (CAT) competition is a one-hour problem-solving competition designed to encourage student curiosity and promote multiple modes of thinking.',
    linkText: 'Learn more',
    link: 'https://www.amt.edu.au/cat-competition',
  },
  {
    id: nanoid(),
    title: 'Singapore Youth Festival 2021 (Drama)',
    award: 'DISTINCTION',
    description:
      'Since 1966, the Singapore Youth Festival (SYF) has been an annual event organised by the Ministry of Education to celebrate the vitality of our youth and their diverse arts talents.',
    linkText: 'Learn more',
    link: 'https://www.syf.gov.sg/',
  },
  {
    id: nanoid(),
    title: 'Projects Day @ HCI 2021',
    award: 'HIGH DISTINCTION',
    description:
      'I embarked on the project "Synthesis of Hybrid Graphene Oxide Membranes for Water Purification" with Isaac Yeap and was awarded high distinction for the innovative solutions presented for water purification.',
    linkText: 'His website',
    link: 'https://iysr.netlify.app/',
  },
  {
    id: nanoid(),
    title: 'Projects Day @ HCI 2020',
    award: 'HIGH DISTINCTION',
    description:
      'I embarked on the project "Extraction and Modification of Chitosan for Water Purification" with some classmates and was awarded high distinction, despite it being my first reserch project!',
    linkText: 'Hover for more!',
    link: '#', // cancelling clicks in a hyper unelegant method :)
  },
  {
    id: nanoid(),
    title: 'Projects Day @ HCI 2019',
    award: 'HIGH DISTINCTION',
    description:
      'I embarked on the project "万事其无疆 \u2022 回顾华中精彩历史" with some friends from chinese drama in the spirit of celebrating Hwa Chong\'s 100th anniversary',
    linkText: 'Hover for more!',
    link: '#',
  },
  {
    id: nanoid(),
    title: 'more achievements on the way!',
    award: 'Soon..',
    description:
      'I am always ready and looking forward to pushing my limits and reaching new heights!',
    linkText: 'Hover for more!',
    link: '#',
  },
];
