import type { NextPage } from "next";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const Home: NextPage = () => {
  return (
    <div>
      <p>Backend - Nest js</p>
      <p>Frontend - Next js (TypeScript)</p>
      <p>DB - Mysql</p>
      <p>Deploy - Heroku(Nextjs), vercel(Nextjs)</p>
    </div>
  );
};

export default Home;
