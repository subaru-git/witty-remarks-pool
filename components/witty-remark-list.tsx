import React from "react";
import {
  WittyRemarkContent,
  WittyRemarkContentProps,
} from "./witty-remark-content";

export interface WittyRemarkListProps {
  data: WittyRemarkContentProps[];
}

const WittyRemarkList: React.FC<WittyRemarkListProps> = ({ data }) => {
  return (
    <>
      <div className="max-w-5xl h-screen overflow-auto mx-auto border">
        {data.map((d, i) => (
          <WittyRemarkContent
            title={d.title}
            text={d.text}
            url={d.url}
            image={d.image}
            key={i.toString()}
          />
        ))}
      </div>
      <div className="pb-8" />
    </>
  );
};

export { WittyRemarkList };
