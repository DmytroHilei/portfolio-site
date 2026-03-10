// Data for portfolio
/*import {
  ExpressjsIcon,
  JavaScriptIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
} from '../utils/icons' */

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'LSTM next-token music generative model',
    shortDescription:
      'A neural network based on Long Short-Term Memory (LSTM) that generates chord sequences while preserving the musical mood based on previous tokens such as chords and separators. Uses a custom dataset built from minor-key songs.',
    cover:
      '/images/LSTM.png',
    githubLink: 'https://github.com/DmytroHilei/LSTM_Music_Prediction_Model',
    type: 'Machine learning',
  },
  {
    priority: 2,
    title: 'Wave spreading simulation',
    shortDescription:
      'Wave propagation simulation using partial differential equations solved on a finite-difference grid, with performance optimisations based on Bentley’s rules.',
    cover:
      '/images/example.png',
    githubLink: 'https://github.com/DmytroHilei/2D_Wave_spreading',
    type: 'Simulations'
  },
  {
    priority: 3,
    title: 'Smart binary clock',
    shortDescription:
      'Smart binary clock built with Arduino that displays time using LED arrays while also measuring temperature and humidity via integrated sensors.',
    cover:
      '/images/SchemeOfTheProject.png',
    githubLink: 'https://github.com/DmytroHilei/SmartBinaryClock',
    type: 'Embedded systems'
  },
  {
    priority: 4,
    title: 'Attention keeper ML',
    shortDescription:
      'YOLO-based eye detection system for attention monitoring, trained on a custom dataset with MediaPipe-generated bounding boxes; triggers a short rickroll when prolonged loss of attention is detected.',
    cover:
      '/images/Usage.png',
    githubLink: 'https://github.com/DmytroHilei/RickRoll_ML',
    type: 'Machine learning'
  },
]

// Service Data
export const achiements = [
  {
    icon: '/icons/telescope.svg',
    title: 'Silver medal at IOAA 2025',
    shortDescription: 'Achieved silver honor while representing Ukraine.',
  },
  {
    icon: '/icons/telescope.svg',
    title: 'Bronze medal at IOAA 2024',
    shortDescription: 'Achieved broze honor while representing Ukraine.',
  },
  {
    icon: '/icons/telescope.svg',
    title: 'silver medal at IOAA jr 2023',
    shortDescription: 'Achieved silver honor while representing Ukraine.',
  },
  {
    icon: '/icons/Diploma2.svg',
    title: 'First diplomas at UNOAA 2024/2025',
    shortDescription: 'Represented my region on all ukrainian olympiads.',
  },
  {
    icon: '/icons/Diploma2.svg',
    title: 'Jury member',
    shortDescription: 'Member of jury commite on Ukrainian national olympiad on astronomy and astrophysics 2025/2026',
  },
  {
    icon: '/icons/Plast.svg',
    title: 'PLAST member',
    shortDescription: 'Designing beautiful and responsive interfaces with Tailwind CSS.',
  },
]

// Skill List
export const skillList = [
  {
    name: 'C++',
    icon: '/icons/cpp.svg',
  },
  {
    name: 'Python',
    icon: '/icons/python.svg',
  },
  {
    name: 'Pytorch',
    icon: '/icons/Pytorch.svg',
  },
  {
    name: 'C',
    icon: '/icons/C.svg',
  },
  {
    name: 'Raspberry pi',
    icon: '/icons/RaspberryPi.svg',
  },
]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  {
    title: 'Blogs',
    href: '#blogs',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['En', 'Es', 'Fr', 'De', 'Ru']
