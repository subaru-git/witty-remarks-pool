import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import fs from "fs";
import path from "path";

type Data = {
  name: string;
};

const Handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log(req.query.url);
  const json = fs.readFileSync(path.join(process.cwd(), "data/data.json"));
  const data = JSON.parse(json.toString()).data;
  const content = data[Math.floor(Math.random() * data.length)];
  if (typeof req.query.url !== "string") {
    res.status(400);
    return;
  }
  try {
    await axios.post(req.query.url, {
      type: "message",
      attachments: [
        {
          contentType: "application/vnd.microsoft.card.adaptive",
          contentUrl: null,
          content: {
            $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
            type: "AdaptiveCard",
            version: "1.5",
            body: [
              {
                type: "TextBlock",
                size: "Medium",
                wight: "Bolder",
                text: `[${content.title}](${content.url})`,
              },
              {
                type: "ColumnSet",
                columns: [
                  {
                    type: "Column",
                    width: "stretch",
                    items: [
                      {
                        type: "TextBlock",
                        wrap: true,
                        text: content.text,
                        color: "Good",
                        size: "Large",
                        isSubtle: true,
                      },
                    ],
                    horizontalAlignment: "Left",
                  },
                  {
                    type: "Column",
                    width: "auto",
                    items: [
                      {
                        type: "Image",
                        selectAction: {
                          type: "Action.OpenUrl",
                          url: content.url,
                        },
                        altText: "image",
                        url: content.image,
                        size: "Large",
                      },
                    ],
                    style: "default",
                    horizontalAlignment: "Right",
                    spacing: "Large",
                  },
                ],
              },
            ],
            verticalContentAlignment: "Bottom",
            msTeams: {
              width: "Full",
            },
          },
        },
      ],
    });
  } catch (e) {
    console.log(e);
    res.status(500);
    return;
  }
  res.status(200).json(content);
};

export default Handler;
