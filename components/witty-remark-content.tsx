import React from "react";
import Markdown from "react-markdown";

export interface WittyRemarkContentProps {
  title: string;
  text: string;
  url: string;
  image: string;
}

const WittyRemarkContent: React.FC<WittyRemarkContentProps> = ({
  title,
  url,
  text,
  image,
}) => {
  return (
    <div className="box-content border-1 rounded-lg bg-yellow-100 bg-opacity-50 p-1 shadow-lg my-px">
      <div className="flex flex-row max-h-full p-1">
        <div className="flex-1">
          <div className="flex flex-col justify-start">
            <a
              className="text-md text-pink-900 text-opacity-70 hover:text-opacity-100 pt-1 pb-2"
              href={url}
              target="_blank"
            >
              <p className="overflow-ellipsis">{title}</p>
            </a>
            <div className="markdown">
              <Markdown className="text-indigo-900 antialiased">
                {text}
              </Markdown>
            </div>
          </div>
        </div>
        <div className="flex-none p-2">
          <div className="flex items-center h-full">
            <a href={url} target="_blank">
              <img className="h-32" src={image} alt="image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { WittyRemarkContent };
