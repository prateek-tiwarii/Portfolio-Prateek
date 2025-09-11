import Headphones from '@/components/svgs/devices/Headphones';
import Keyboard from '@/components/svgs/devices/Keyboard';
import Laptop from '@/components/svgs/devices/Laptop';
import Monitor from '@/components/svgs/devices/Monitor';
import Mouse from '@/components/svgs/devices/Mouse';
import Phone from '@/components/svgs/devices/Phone';


export const devices = [
  {
    name: 'Lenovo IdeaPad 3 14" 16gb 512GB',
    icon: <Laptop className="size-4" />,
  },
  {
    name: 'LG Ultragear 27GN650 (27 inch, 68.5 cm)',
    icon: <Monitor className="size-4" />,
  },
  {
    name: 'Cosmic Byte  Keyboard',
    icon: <Keyboard className="size-4" />,
  },
  {
    name: 'Ideapad Gaming Mouse',
    icon: <Mouse className="size-4" />,
  },
  {
    name: 'SkullCandy Heash 3 (Special Addition)',
    icon: <Headphones className="size-4" />,
  },
  {
    name: 'Samsung S20 fe (128 GB)',
    icon: <Phone className="size-4" />,
  },
];

export const webExtensions = [
  { name: 'Unhook', href: 'https://unhook.app/' },
  { name: 'uBlock Origin', href: 'https://ublockorigin.com/' },
  {
    name: 'React Developer Tools',
    href: 'https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en',
  },
  { name: 'daily.dev', href: 'https://daily.dev/' },
  { name: 'Grammarly', href: 'https://www.grammarly.com/' },
  { name: 'Wappalyzer', href: 'https://www.wappalyzer.com/' },
  {
    name: 'ColorZilla',
    href: 'https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=en',
  },
];

export const software = [
  { name: 'Brave', href: 'https://brave.com/' },
  { name: 'Slack', href: 'https://slack.com/download' },
  { name: 'Discord', href: 'https://discord.com/download' },
  { name: 'Notion', href: 'https://www.notion.so/desktop' },
  { name: 'Copilot', href: 'https://github.com/features/copilot' },
  {
    name: 'Microsoft Power Toys',
    href: 'https://www.microsoft.com/en-us/p/powertoys/9nblggh4nqj3?activetab=pivot:overviewtab',
  },
  { name: 'GitHub Desktop', href: 'https://desktop.github.com/' },
  {
    name: 'Free Download Manager',
    href: 'https://www.freedownloadmanager.org/',
  },
  
  {
    name: 'NVIDIA Broadcast',
    href: 'https://www.nvidia.com/en-us/geforce/geforce-experience/broadcast/',
  },
  { name: 'VLC', href: 'https://www.videolan.org/vlc/' },
];
