import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Luc Mosser | Developer',
  lang: 'en',
  description: 'web development portfolio',
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Luc Mosser',
  subtitle: `I'm a creative full-stack web developer`,
  cta: 'Hire me.',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I'm Luc, a Web Developer and UX/UI designer from France.`,
  paragraphTwo: `Customers have relied on me for design,\
                implementation, and management of their digital products.`,
  paragraphThree: `I work to create innovative solutions that inspire, and foster memorable relationships between brands and their clients. With a focus on branding and UI / Web, I strive to create usable and polished products through passionate and deliberate design.`,
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'bandwizard.png',
    title: 'BandWizard',
    date: 'Sep 2019',
    info: ' ',
    info2: 'BandWizard is a web app that connects musicians who want to play music together.',
    url: 'http://www.bandwizard.co/',
    repo: 'https://github.com/nicofraisse/bandwizard', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'rentalife.png',
    title: 'Rent My Life',
    date: 'Jul 2019',
    info: ' ',
    info2: `Rent My Life was designed in one week during Le Wagon. It's a fun clone of Airbnb.`,
    url: '',
    repo: 'https://github.com/lmssr/rentmylife', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'landingpage.png',
    title: '3D Landing Page',
    date: 'Nov 2019',
    info: ' ',
    info2: 'This project was a simple 3D landing page to implement generative design with threejs.',
    url: 'https://lmssr.github.io/threejs_portfolio/',
    repo: 'https://github.com/lmssr/threejs_portfolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'conseillgbt.png',
    title: 'Conseil LGBT',
    date: 'Jul 2019',
    info: ' ',
    info2: 'Designed and implemented UI/UX solutions for a complete redesign of Quebec’s Conseil LGBT website, as part of PrideHacks 2019, a hackathon to build digital products for nonprofit organizations serving the LGBT community.',
    url: 'https://www.conseil-lgbt.ca/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'loowie.png',
    title: 'Loowie',
    date: 'Jun 2019',
    info: ' ',
    info2: 'Loowie is an eco-responsible american shoe brand.',
    url: 'https://mocheteboul.wixsite.com/loowie',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/Luc_Mosser',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/lmssr',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/luc-mosser/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/lmssr',
    },
    {
      id: uuidv1(),
      name: 'stack-overflow',
      url: 'https://stackoverflow.com/users/13640675/luc-mosser',
    },
    {
      id: uuidv1(),
      name: 'medium',
      url: 'https://medium.com/@luc.mosser86',
    },
  ],
};
