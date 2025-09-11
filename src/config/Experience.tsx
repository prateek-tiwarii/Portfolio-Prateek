import AWS from '@/components/technologies/AWS';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'EquasOnline',
    position: 'Full Stack Developer Intern',
    location: 'Banglore (Remote)',
    image: '/company/equas.png',
    description: [
  'Architected and developed the complete frontend and website infrastructure for Eqaus, including a dashboard and admin panel to manage proficiency testing for various medical tests.',
  'Implemented and managed the admin userbase, enabling seamless coordination, assignment, and tracking of tests across multiple users.',
  'Integrated and optimized backend APIs to fetch and display medical test data efficiently, with proper error handling and real-time updates.',
  'Enhanced user experience by designing intuitive interfaces, consistent design systems, and responsive layouts for both dashboards and website.',
],

    startDate: 'Jan 2025',
    endDate: 'April 2025',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
    ],
    website: 'https://eqasonline.com/',
    github: '',
    x: 'https://x.com/promotefun_',
  },
  {
    isCurrent: false,
    company: 'WebNexa',
    position: 'Freelance Web Developer',
    location: 'Remote',
    image: '/company/webNexa.png',
    description: [
  'Designed and developed fully functional websites for clients, handling both frontend and backend implementation to meet specific business requirements.',
  'Implemented responsive and user-friendly interfaces, ensuring seamless user experience across devices.',
  'Integrated backend APIs, databases, and third-party services to provide dynamic content and functionality.',
  'Managed deployment, testing, and ongoing maintenance, while maintaining clear technical documentation for client handover.',
],

    startDate: 'June 2025',
    endDate: 'July 2025',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Docker',
        href: 'https://www.docker.com/',
        icon: <Docker />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
    ],
    website: '',
    github: 'https://github.com/prateek-tiwarii/WEBNEXA',
    x: '',
    linkedin: '',
  },
  {
    isCurrent: false,
    company: 'Gdsc Abesit',
    position: ' Full stack lead',
    location: 'Ghaziabad ',
    image: '/company/gdsc.png',
    description: [
  'Served as Full Stack Lead at GDSC ABESIT, mentoring students and guiding project development across multiple initiatives.',
  'Organized and conducted technical workshops and hackathons, facilitating hands-on learning and fostering a collaborative community.',
  'Led the Cloud Campaign, introducing cloud technologies and best practices to students, enhancing their practical skills.',
  'Provided mentorship and technical guidance to student teams as Teach Lead, ensuring successful project execution and skill development.',
  'Architected and implemented full-stack solutions for student projects, helping teams build functional web applications and dashboards efficiently.',
],

    startDate: 'April 2023',
    endDate: 'June 2024',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
    ],
    website: 'https://gdsc-abesit.vercel.app/',
    github: 'https://github.com/prateek-tiwarii/GDSC-ABESIT',
  },
  
];
