import type { MetaFunction } from '@remix-run/node';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from './styles/tailwind.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'devnote-dev',
  viewport: 'width=device-width,initial-scale=1',
});

export function CatchBoundary() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-white">
        <main className="grid min-h-[100svh] grid-rows-[auto_1fr_auto]">
          <NavBar />
          <div className="m-12 font-[Roboto Medium,monospace]">
            <h1 className="mb-4 font-bold text-4xl uppercase">Oops</h1>
            <p>
              Looks like you got lost, maybe you want to&nbsp;
              <Link className="underline hover:text-cyan-500" to="/">
                go home
              </Link>
              .
            </p>
          </div>
          <Footer />
        </main>
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-white">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
