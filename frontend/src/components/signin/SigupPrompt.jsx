import React from "react";
import Button from "../UI/button";

const SigupPrompt = () => {
  return (
    <div className="fixed right-10 top-4 flex items-center justify-center gap-3 md:top-20">
      <span className="text-sm font-semibold  whitespace-nowrap">
        Not a Member ?
      </span>
      <Button href="/signup" className="w-auto px-5 [&]:mt-0">
        Sign up
      </Button>
    </div>
  );
};

export default SigupPrompt;
