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
    "Just your average teenager, worrying about grades too much, and mugging way too much for exams people say I shouldn't be worried about 🥲",
  paragraphTwo:
    "Sometimes I write some code, but I'm always looking at how to be better at it! 👨🏻‍💻 Also love watching anime but the binge watching isn't great for my eyesight 👀",
  paragraphThree:
    'Currently studying hard to hopefully make it into a good university 👨🏻‍🎓 (where I can worry even more about the future)',
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
      name: 'reddit',
      url: 'https://www.reddit.com/user/___dabby',
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
  {
    id: nanoid(),
    name: 'Python',
    level: '90%',
  },
  {
    id: nanoid(),
    name: 'Javascript',
    level: '80%',
  },
  {
    id: nanoid(),
    name: 'MongoDB',
    level: '75%',
  },
  {
    id: nanoid(),
    name: 'C++',
    level: '70%',
  },
  {
    id: nanoid(),
    name: 'MySQL / SQLite',
    level: '70%',
  },
  {
    id: nanoid(),
    name: 'PHP',
    level: '65%',
  },
  {
    id: nanoid(),
    name: 'C++',
    level: '65%',
  },
  {
    id: nanoid(),
    name: 'CSS / SASS',
    level: '40%',
  },
];

export const experienceData = [
  {
    id: nanoid(),
    title: 'Software Engineer',
    company: 'Google',
    companyurl: 'https://www.google.com',
    location: 'San Francisco, CA',
    from: 'May 2020',
    to: 'Present',
    current: true,
    description: 'PLACEHOLDER PARAGRAPH',
  },
];
