import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CheckUserLogin } from "../actions/UserActions";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    CheckUserLogin(dispatch);
  }, [dispatch]);

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
