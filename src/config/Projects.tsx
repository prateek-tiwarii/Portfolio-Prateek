import ExpressJs from '@/components/technologies/ExpressJs';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Scene-Smith',
    description:
      'Scene Smith is an AI-powered tool for storytellers and creators to design, preview, and organize scenes with ease. It allows you to generate scene visuals from prompts, manage scripts, and keep everything structured in one place. Perfect for writers, filmmakers, and creatives looking to streamline their storytelling workflow.',
    image: '/project/scene.png',
    video: '',
    link: 'https://scene-smith-three.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      
    ],
    github: 'https://github.com/prateek-tiwarii/SceneSmith',
    live: 'https://scene-smith-three.vercel.app/',
    details: true,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'Write-Wizz',
    description:
      'Write-Wiz leverages the power of the Next js, fortified by Authjs authentication, to deliver a secure and user-friendly blogging platform. By integrating the Gemini API, it provides advanced generative AI support, transforming the blog-writing experience into an intuitive and innovative process.',
    image: '/project/writeWizz.png',
    video: '',
    link: 'https://write-wiz.vercel.app/',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'ExpressJs', icon: <ExpressJs key="expressjs" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'MongoDb', icon: <MongoDB key="mongodb" /> },
    ],
    github: 'https://github.com/prateek-tiwarii/WriteWiz',
    live: 'https://write-wiz.vercel.app/',
    details: true,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'Equas Online',
    description:
      'Built a modern and responsive web platform with clean UI and smooth user experience. Focused on minimal design, intuitive navigation, and optimized performance to deliver a seamless browsing experience.',
    image: '/project/Equas.png',
    video: '',
    link: 'https://eqasonline.com/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      
    ],
    github: 'https://github.com/prateek-tiwarii/Equas-Web',
    live: 'https://eqasonline.com/',
    details: true,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'Shreshtha Hire',
    description:
      'A web app to conduct and manage online interviews with candidate tracking and interviewer dashboards.',
    image: '/project/Shreshtha.png',
    video: '',
    link: 'https://shrestha-admin.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
    ],
    github: 'https://github.com/prateek-tiwarii/shrestha_admin',
    live: 'https://shrestha-admin.vercel.app/',
    details: true,
    projectDetailsPageSlug: '',
    isWorking: false, // Currently in development
  },
  {
    title: 'GDSC-Abesit',
    description:
      'A community platform showcasing events, resources, and initiatives of Google Developer Student Clubs ABESIT, built to connect and engage students in tech.',
    image: '/project/gdsc.png',
    video: '',
    link: 'https://gdsc-abesit.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'MDX', icon: <MDXIcon key="mdx" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/prateek-tiwarii/GDSC-ABESIT',
    live: 'https://gdsc-abesit.vercel.app/',
    details: true,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'Fest-in-oBeats',
    description:
      "Comprehensive event management platform for college festivals  built for fest-in-oBeats 13th eddition",
    image: '/project/fest.png',
    video: '',
    link: 'https://festin-0-beats-130-j83aogg4h-tomioka-senseis-projects.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/prateek-tiwarii/Festin-0-Beats_13',
    live: 'https://festin-0-beats-130-j83aogg4h-tomioka-senseis-projects.vercel.app/',
    details: true,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  
];
