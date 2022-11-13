import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { useEffect, useState } from 'react';
import { BsGithub, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';
import styles from './styles/tailwind.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'devnote.dev',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-gradient-to-t from-orange-600 to-white dark:to-black">
        <nav className="h-12 w-full flex-row items-end justify-between px-4 mt-4">
          <div className="flex flex-row gap-x-4 text-2xl text-slate-800 dark:bg-white">
            <a href="mailto:devnote.dev75@gmail.com">
              <IoMail />
            </a>
            <a href="https://github.com/devnote-dev" type="_blank">
              <BsGithub />
            </a>
            {darkMode ? (
              <BsSunFill onClick={() => setDarkMode(false)} />
            ) : (
              <BsMoonFill onClick={() => setDarkMode(true)} />
            )}
          </div>
        </nav>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
