import type { NextPage } from "next";
import { WittyRemarkList } from "../components/witty-remark-list";
import { AppHeader } from "../components/app-header";
import { AppDescription } from "../components/app-description";
import { AppFooter } from "../components/app-footer";

const Home: NextPage = () => {
  return (
    <div>
      <AppHeader />
      <AppDescription />
      <WittyRemarkList />
      <AppFooter />
    </div>
  );
};

export default Home;
