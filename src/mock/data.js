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
  paragraphOne: 'I think I am supposed to write stuff here',
  paragraphTwo: 'I think I can write even more stuff here',
  paragraphThree: 'I think I can write even more stuff here',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
