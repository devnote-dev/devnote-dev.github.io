import { Link } from '@remix-run/react';

interface Props {
  home?: boolean;
  experience?: boolean;
  photos?: boolean;
}

export default function ({ home, experience, photos }: Props) {
  return (
    <nav className="w-full h-14 flex flex-wrap items-center justify-center gap-x-6 bg-black text-white shadow-md font-[Roboto Medium,monospace]">
      {home ? (
        <div className="decoration-4 underline underline-offset-[17px]">
          Home
        </div>
      ) : (
        <div className="decoration-4 hover:underline underline-offset-[17px]">
          <Link to="/">Home</Link>
        </div>
      )}
      {experience ? (
        <div className="decoration-4 underline underline-offset-[17px]">
          Experience
        </div>
      ) : (
        <div className="decoration-4 hover:underline underline-offset-[17px]">
          <Link to="/experience">Experience</Link>
        </div>
      )}
      {photos ? (
        <div className="decoration-4 underline underline-offset-[17px]">
          Photography
        </div>
      ) : (
        <div className="decoration-4 hover:underline underline-offset-[17px]">
          <Link to="/photos">Photography</Link>
        </div>
      )}
      <div className="decoration-4 hover:underline underline-offset-[17px]">
        <a href="https://github.com/devnote-dev">GitHub</a>
      </div>
      {/* <div className="decoration-4 underline underline-offset-[17px]"><a href="https://linked.in/devaune">LinkedIn</a></div> */}
    </nav>
  );
}
