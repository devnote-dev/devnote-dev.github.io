import { useEffect, useState } from 'react';

function getTextColour(): string {
  let hour = parseInt(new Date().toTimeString().split(':')[0]);
  return hour >= 19 || hour < 7 ? 'text-slate-200' : 'text-black';
}

function getFormattedDate(): string {
  let [day, month, date, year] = new Date().toDateString().split(' ');
  let fmt = '';

  switch (day) {
    case 'Mon':
      fmt += 'Monday';
      break;
    case 'Tue':
      fmt += 'Tuesday';
      break;
    case 'Wed':
      fmt += 'Wednesday';
      break;
    case 'Thu':
      fmt += 'Thursay';
      break;
    case 'Fri':
      fmt += 'Friday';
      break;
    case 'Sat':
      fmt += 'Saturday';
      break;
    case 'Sun':
      fmt += 'Sunday';
      break;
  }

  if (date.startsWith('0')) date = date.slice(1);
  fmt += ' ' + date;
  if (date.endsWith('1')) {
    fmt += 'st ';
  } else if (date.endsWith('2')) {
    fmt += 'nd ';
  } else if (date.endsWith('3')) {
    fmt += 'rd ';
  } else {
    fmt += 'th ';
  }

  switch (month) {
    case 'Jan':
      fmt += 'January';
      break;
    case 'Feb':
      fmt += 'February';
      break;
    case 'Mar':
      fmt += 'March';
      break;
    case 'Apr':
      fmt += 'April';
      break;
    case 'May':
      fmt += 'May';
      break;
    case 'Jun':
      fmt += 'June';
      break;
    case 'Jul':
      fmt += 'July';
      break;
    case 'Aug':
      fmt += 'August';
      break;
    case 'Sep':
      fmt += 'September';
      break;
    case 'Oct':
      fmt += 'October';
      break;
    case 'Nov':
      fmt += 'November';
      break;
    case 'Dec':
      fmt += 'December';
      break;
  }

  return fmt + ' ' + year;
}

export default function Index() {
  let date = getFormattedDate();
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
        <h1 className="pt-10 pb-2 font-bold text-8xl">{time}</h1>
        <div className="pt-2 text-xl">{date}</div>
      </div>
    </div>
  );
}
