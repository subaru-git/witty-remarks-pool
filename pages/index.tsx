import type { NextPage } from "next";
import {
  WittyRemarkList,
  WittyRemarkListProps,
} from "../components/witty-remark-list";
import { PageHead } from "../components/page-head";
import { AppHeader } from "../components/app-header";
import { AppDescription } from "../components/app-description";
import { AppFooter } from "../components/app-footer";
import { GetStaticProps } from "next";
import path from "path";
import fs from "fs";

const Home: NextPage<WittyRemarkListProps> = ({ data }) => {
  return (
    <div>
      <PageHead />
      <AppHeader />
      <AppDescription />
      <WittyRemarkList data={data} />
      <AppFooter />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const json = fs.readFileSync(
    path.join(process.cwd(), "data/data.json"),
    "utf8"
  );

  return {
    props: {
      data: JSON.parse(json).data,
    },
  };
};

export default Home;
