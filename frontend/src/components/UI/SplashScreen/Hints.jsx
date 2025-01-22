import { useState, useEffect } from "react";

import SmallText from "../SmallText";

const tips = [
  "Set a budget and stick to it.",
  "Cook meals at home instead of eating out.",
  "Cancel unused subscriptions.",
  "Buy in bulk to save money.",
  "Use energy-efficient appliances to reduce utility bills.",
  "Track your expenses to identify unnecessary spending.",
  "Set up automatic savings transfers.",
  "Shop during sales or use coupons.",
  "Avoid impulse purchases by waiting 24 hours.",
  "Use public transportation to save on gas and parking.",
];

const Hints = () => {
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    // incase if user stuck in loader we can stop this to avoid performance issue
    if (currentTip >= 20) return;

    const interval = setInterval(() => {
      setCurrentTip((prevTip) => (prevTip + 1) % tips.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentTip]);

  return (
    <div className="mt-10">
      <p key={currentTip} className="fade-in text-xs">
        {tips[currentTip]}
      </p>
    </div>
  );
};

export default Hints;
