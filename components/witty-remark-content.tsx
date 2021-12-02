import React from "react";
import Markdown from "react-markdown";

const WittyRemarkContent = ({}) => {
  const title = "エンジニアの成長を応援する本2";
  const url = "https://booth.pm/ja/items/2370699";
  const text =
    "「正解」へのアプローチについては、以下の３点に注意してみましょう。  \n- 記憶している正解は今も正しいか  \n- なぜその正解が導かれたのか  \n- 正解を導くプロセスを今たどったらどういう結論になるか";
  const image =
    "https://booth.pximg.net/ce439d63-cc11-4ff5-92ec-f5ea3cb863fd/i/2370699/9dfd64a2-3b23-44c9-977e-f46df87eb303_base_resized.jpg";

  return (
    <div className="box-content border-1 rounded-lg bg-yellow-100 bg-opacity-50 hover:bg-opacity-100 p-1 shadow-lg my-px">
      <a
        className="text-2xl text-pink-900 text-opacity-70 p-2"
        href={url}
        target="_blank"
      >
        {title}
      </a>
      <div className="flex flex-row h-50">
        <div className="flex-1 h-120px">
          <div className="markdown">
            <Markdown className="text-indigo-900 antialiased">{text}</Markdown>
          </div>
        </div>
        <div className="flex-shrink-0 pr-2">
          <a href={url} target="_blank">
            <img
              className="object-contain"
              src={image}
              alt="image"
              style={{ height: "120px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export { WittyRemarkContent };
