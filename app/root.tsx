import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from './styles/tailwind.css';
import NavBar from './components/NavBar';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'devnote-dev',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script
          async
          defer
          data-website-id="6638a74d-f8b3-4919-821c-fe96040be339"
          src="https://your-information.is-on.top/umami.js"
        />
      </head>
      <body className="bg-white">
        <NavBar home />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <footer className="h-14 w-full bg-black text-center">
          <div className="flex items-center justify-center">
            <a
              className="mt-4 text-gray-300 transition duration-150 ease-in-out hover:text-gray-300"
              href="https://github.com/devnote-dev"
            >
              &copy; 2023 devnote-dev
            </a>
          </div>
        </footer>
        <LiveReload />
      </body>
    </html>
  );
}
