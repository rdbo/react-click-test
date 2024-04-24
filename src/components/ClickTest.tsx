import { useEffect, useRef, useState } from "react";

interface Props {
  timeSecs: number;
  onFinish: (cps: number) => void;
}

function ClickTest({ timeSecs, onFinish }: Props) {
  const intervalMillis = 10;
  const [clickCount, setClickCount] = useState(0);
  const clickCountRef = useRef(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const timeLeftRef = useRef(0);

  useEffect(() => {
    clickCountRef.current = clickCount;
  }, [clickCount]);

  useEffect(() => {
    timeLeftRef.current = timeLeft;
  }, [timeLeft]);

  if (timeSecs <= 0) {
    const defaultValue = 1;
    console.warn(
      `Invalid timeout seconds: ${timeSecs}. Changing to ${defaultValue}`,
    );
    timeSecs = defaultValue;
  }

  const startTest = () => {
    setTimeLeft(timeSecs * 1000);
    const interval = setInterval(() => {
      setTimeLeft(Math.max(timeLeftRef.current - intervalMillis, 0));
      if (timeLeftRef.current == 0) {
        clearInterval(interval);
        setTimeLeft(0);
        let cps = clickCountRef.current / timeSecs;
        onFinish(cps);
      }
    }, intervalMillis);
  };

  const handleClick = () => {
    if (clickCount == 0) {
      startTest();
    }

    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <p>Time Left: {timeLeft / 1000}</p>
      <button
        className="rounded-full border-2 border-black w-96 h-96"
        onClick={handleClick}
      >
        {clickCount > 0 ? `Clicks: ${clickCount}` : "Click me!"}
      </button>
    </div>
  );
}

export default ClickTest;
