import { intervalToDuration, formatDuration } from "date-fns";
import { useEffect, useState } from "react";

const TURKNET_DATE = new Date("2022-07-09T13:07");

const customFormatDuration = ({ start, end }) => {
  const durations = intervalToDuration({ start, end });
  return formatDuration(durations);
};

function getElapsedTime(now) {
  return customFormatDuration({ start: TURKNET_DATE, end: now });
}

function Counter() {
  const [duration, setDuration] = useState(getElapsedTime(new Date()));
  const [message, setMessage] = useState(
    "lorem ipsum dolor sit amet placeholder text lol very long sentence"
  );
  const timer = () => {
    setDuration(getElapsedTime(new Date()));
  };
  // setInterval(setDuration(getElapsedTime()), 1e3);
  useEffect(() => {
    let id = setInterval(timer, 1e3);
    return () => clearInterval(id);
  });
  return (
    <div className="flex flex-col h-full">
      <p className="h-8/10 text-center flex flex-col md:justify-around sm:text-xl md:text-2xl">
        Turknet left me without internet since{" "}
        <span className="text-2xl md:text-4xl">{duration}</span>
      </p>
      <p className="h-2/10 flex flex-col text-center justify-end text-sm sm:text-lg">
        {message}
      </p>
    </div>
  );
}

export default Counter;
