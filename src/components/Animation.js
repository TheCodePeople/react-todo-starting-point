import React from "react";
import Lottie from "react-lottie";
import a from "../a.json";
import { useState } from "react";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: a,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Animation = () => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const animationCompleted = () => {
    setIsStopped(true);
    setIsPaused(true);
  };

  return (
    <div className="absolute inset-0 mt-20">
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={isStopped}
        isPaused={isPaused}
        eventListeners={[
          {
            eventName: "complete",
            callback: animationCompleted,
          },
        ]}
      />
    </div>
  );
};

export default Animation;
