import React from "react";
import Image from "next/image";

const AppHeader = () => {
  return (
    <div className="h-96 relative">
      <div className="bg-header-bg h-96 blur-sm" />
      <div className="top-0 absolute h-full w-full">
        <div className="flex flex-row justify-between h-full">
          <div className="flex-initial flex items-center text-8xl font-extrabold pl-10">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white font-serif italic tracking-wider">
              Witty Remarks
              <br />
              Pool
            </p>
          </div>
          <a
            className="flex-initial flex-grow-0"
            href="https://github.com/subaru-git/witty-remarks-pool"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              loading="lazy"
              width="149"
              height="149"
              src="https://github.blog/wp-content/uploads/2008/12/forkme_right_red_aa0000.png?resize=149%2C149"
              className="attachment-full size-full"
              alt="Fork me on GitHub"
              data-recalc-dims="1"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export { AppHeader };
