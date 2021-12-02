import React from "react";
import { WittyRemarkContent } from "./witty-remark-content";

const WittyRemarkList = ({}) => {
  const data = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className="max-w-4xl h-screen overflow-auto mx-auto border">
        {data.map((d) => (
          <WittyRemarkContent />
        ))}
      </div>
      <div className="pb-8" />
    </>
  );
};

export { WittyRemarkList };
