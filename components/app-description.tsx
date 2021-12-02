import React from "react";

const AppDescription = () => {
  return (
    <div className="h-64">
      <div className="flex flex-row items-center justify-evenly h-full">
        <div className="h-full w-full max-w-4xl min-w-min">
          <img
            className="top-0 object-cover h-full w-full p-8"
            src="/images/description.jpg"
            alt="description"
          />
        </div>
        <div className="min-w-max text-xl text-gray-500 p-8">
          <span>
            本を読んで感銘を受けたところを共有する場所
            <br />
            本に限らずいいなと思うところも
            <br />
            インプットのモチベーションのひとつに
          </span>
        </div>
      </div>
    </div>
  );
};

export { AppDescription };
