import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CheckUserLogin } from "../actions/UserActions";

const CATEGORY = [
  {
    id: "01",
    title: "SomeCategory1",
  },
  {
    id: "02",
    title: "SomeCategory2",
  },
  {
    id: "03",
    title: "SomeCategory3",
  },
  {
    id: "04",
    title: "SomeCategory4",
  },
  {
    id: "05",
    title: "SomeCategory5",
  },
  {
    id: "06",
    title: "SomeCategory6",
  },
  {
    id: "07",
    title: "SomeCat egory7",
  },
];

const Home: NextPage = () => {
  const [nowCategory, setNowCategory] = useState<string>("");

  const dispatch = useDispatch();
  useEffect(() => {
    CheckUserLogin(dispatch);
  }, [dispatch]);

  const abs = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name.replace(/ /g, "");

    if (nowCategory.length) {
      const ClickedButton = document.querySelector(
        `#${nowCategory}`
      ) as HTMLButtonElement;
      ClickedButton.style.color = "black";
    }

    setNowCategory(name);

    const ClickCategory = document.querySelector(
      `#${name}`
    ) as HTMLButtonElement;

    if (ClickCategory) {
      ClickCategory.style.color = "red";
    }
  };

  return (
    <div>
      <p>Backend - Nest js</p>
      <p>Frontend - Next js (TypeScript)</p>
      <p>DB - Mysql</p>
      <p>Deploy - Heroku(Nextjs), vercel(Nextjs)</p>

      <br />

      <hr />
      <br />
      <p>
        {nowCategory ? (
          <>
            <button
              onClick={() => {
                setNowCategory("");
              }}
            >
              List
            </button>
            {nowCategory}
          </>
        ) : (
          <>Click Category</>
        )}
      </p>
      <br />

      <hr />
      <div>
        {CATEGORY.map((category) => (
          <div key={category.id}>
            <br />
            <button
              name={category.title}
              id={category.title.replace(/ /g, "")}
              onClick={abs}
            >
              {category.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
