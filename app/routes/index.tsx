import { useEffect, useState } from 'react';

function getTextColour(): string {
  let hour = parseInt(new Date().toTimeString().split(':')[0]);
  return hour >= 19 || hour < 7 ? 'text-slate-200' : 'text-black';
}

function getTimeName(): string {
  let hour = parseInt(new Date().toTimeString().split(':')[0]);
  if (hour >= 4 && hour < 12) return 'Good Morning';
  if (hour >= 12 && hour < 18) return 'Good Afternoon';
  if (hour >= 18 && hour < 23) return 'Good Evening';
  return '🌙';
}

export default function Index() {
  let name = getTimeName();
  let [time, setTime] = useState(() => {
    let [hour, minute] = new Date().toTimeString().split(':');
    return `${hour}:${minute}`;
  });

  useEffect(() => {
    setInterval(() => {
      let [hour, minute] = new Date().toTimeString().split(':');
      setTime(`${hour}:${minute}`);
    }, 15_000);
  });

  return (
    <div
      className={`flex flex-col justify-center items-center text-center ${getTextColour()}`}
    >
      <div className="divide-y">
        <h1 className="pt-4 pb-2 font-bold text-8xl">{time}</h1>
        <div className="pt-2 text-xl">{name}</div>
      </div>
      <div className="pt-10 text-2xl sm:text-lg md:text-xl max-w-5xl">
        Hi, you probably know me as Devonte online or Devaune in real life, so
        to simplify things I go by both names. I am an aspiring software
        developer, hobbyist photographer and psychology enthusiast, but most of
        the time you will find me programming. I work primarily on the backend
        of open-source and closed-source projects on Github, and I do private
        freelance work.
      </div>
      {/* <div className="pt-12">
        <div className="block max-w-lg w-52 rounded-lg bg-black opacity-50">
          <h2>Projects</h2>
        </div>
      </div> */}
    </div>
  );
}
