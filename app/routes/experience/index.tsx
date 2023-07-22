import { Link } from '@remix-run/react';
import Footer from '~/components/Footer';
import NavBar from '~/components/NavBar';

export default function () {
  return (
    <main className="grid min-h-[100svh] grid-rows-[auto_1fr_auto]">
      <NavBar experience />
      <div className="grid grid-rows-2 gap-y-10 m-12 font-[Roboto Medium,monospace]">
        <h1 className="mb-2 font-bold text-4xl uppercase">Experience</h1>
        <Link
          className="text-slate-400 hover:text-black"
          to="/experience/python"
        >
          <hr className="w-full h-6 rounded-xl bg-[#3572A5]" />
          <h3 className="ml-4 font-bold text-xl uppercase hover:transition hover:ease-in-out duration-300">
            Python - 2016
          </h3>
        </Link>
        <div>
          <div className="grid justify-items-end">
            <hr className="w-[95%] h-6 rounded-xl bg-[#F1E05A]" />
          </div>
          <h3 className="ml-[6%] font-bold text-slate-400 text-xl uppercase">
            JavaScript
          </h3>
        </div>
        <div>
          <div className="grid justify-items-end">
            <hr className="w-[90%] h-6 rounded-xl bg-[#3178C6]" />
          </div>
          <h3 className="ml-[11%] font-bold text-slate-400 text-xl uppercase">
            TypeScript
          </h3>
        </div>
        <div>
          <div className="grid justify-items-end">
            <hr className="w-[55%] h-6 rounded-xl bg-black" />
          </div>
          <h3 className="ml-[46%] font-bold text-slate-400 text-xl uppercase">
            Crystal
          </h3>
        </div>
        <Link className="text-slate-400 hover:text-black" to="/experience/dart">
          <div className="grid justify-items-end">
            <hr className="w-[45%] h-6 rounded-xl bg-[#00B4AB]" />
          </div>
          <h3 className="ml-[56%] font-bold text-xl uppercase hover:transition hover:ease-in-out duration-300">
            Dart - 2021
          </h3>
        </Link>
        <div>
          <div className="grid justify-items-end">
            <hr className="w-[40%] h-6 rounded-xl bg-[#00ADD8]" />
          </div>
          <h3 className="ml-[61%] font-bold text-slate-400 text-xl uppercase">
            Go
          </h3>
        </div>
        <div>
          <div className="grid justify-items-end">
            <hr className="w-[25%] h-6 rounded-xl bg-[#DEA584]" />
          </div>
          <h3 className="ml-[76%] font-bold text-slate-400 text-xl uppercase">
            Rust
          </h3>
        </div>
        <Link className="text-slate-400 hover:text-black" to="/experience/zig">
          <div className="grid justify-items-end">
            <hr className="w-[12%] h-6 rounded-xl bg-[#EC915C]" />
          </div>
          <h3 className="ml-[89%] font-bold text-xl uppercase hover:transition hover:ease-in-out duration-300">
            Zig - 2023
          </h3>
        </Link>
      </div>
      <Footer />
    </main>
  );
}
