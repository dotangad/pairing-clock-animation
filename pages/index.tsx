import React, { useEffect, useState } from "react";

const DATE = '2021-07-29T00:00+0530';

interface ICountdown {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

function countdownTo(dt: string): ICountdown {
  const fmt = (n: number) => String(Math.floor(n)).padStart(2, "0");
  const diff = (Date.parse(dt) - Date.now()) / 1000;
  const days = fmt(diff / (60 * 60 * 24));
  const hours = fmt((diff / (60 * 60)) % 24);
  const minutes = fmt((diff / 60) % 60);
  const seconds = fmt(diff % 60);

  return {
    days,
    hours,
    minutes,
    seconds
  };
}

export default function Home() {
  // const [countdown, setCountdown] = useState<ICountdown>(countdownTo(DATE));
  const [countdown, setCountdown] = useState(countdownTo(DATE));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdownTo(DATE));
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="container">
      <div className="countdown">
        <div>
          <span>{String(countdown.seconds).split('').map((x, i) => <span className={i === 1 ? 'animate': ''}>{x}</span>)}</span>
          <span>Sec</span>
        </div>
      </div>
    </div>
  )
}
