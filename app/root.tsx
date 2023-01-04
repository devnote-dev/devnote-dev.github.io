import { Tooltip } from '@mui/material';
import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import styles from './styles/tailwind.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'devnote-dev',
  viewport: 'width=device-width,initial-scale=1',
});

function getColourScheme(): string {
  let hour = parseInt(new Date().toTimeString().split(':')[0]);
  if (hour >= 7 && hour < 12) return 'from-[#cdcff9] to-[#ffb885]';
  if (hour >= 12 && hour < 16) return 'from-[#85c8ff] to-[#494ea7]';
  if (hour >= 16 && hour < 18) return 'from-[#494ea7] to-[#3b1c59]';
  return 'from-[#181646] to-[#100f2f]';
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className={`h-screen bg-gradient-to-b ${getColourScheme()}`}>
        <nav className="w-full px-6 py-2 flex flex-row items-center justify-start gap-x-6 bg-black text-white opacity-50">
          <Tooltip title="GitHub">
            <a href="https://github.com/devnote-dev">
              <BsGithub className="w-8 h-8" />
            </a>
          </Tooltip>
          <Tooltip title="Gmail (business)">
            <a href="mailto:dkwhittle4@gmail.com">
              <SiGmail className="w-8 h-8" />
            </a>
          </Tooltip>
          <Tooltip title="Twitter">
            <a href="https://twitter.com/devw1_">
              <BsTwitter className="w-8 h-8" />
            </a>
          </Tooltip>
        </nav>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
