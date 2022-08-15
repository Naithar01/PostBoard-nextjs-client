import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { GetLoginUsernameData } from "../../actions/UserActions";
import PageHeader from "../../components/Layouts/PageHeader/PageHeader";
import PostCraeteTemplate from "../../components/Post/Create/PostCreateTemplate";
import PostMarkDownRender from "../../components/Post/Create/PostMarkDownRender";
import { GetCategory } from "../../Lib/Category";
import { CreatePost } from "../../Lib/Post";
import { Category } from "../category";

import styles from "../../styles/post/createpost.module.css";
import PostSelectCategory from "../../components/Post/Create/PostSelectCategory";

interface IProps {
  CategoryList: Category[];
}

const PostCreatePage = ({ CategoryList }: IProps) => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies();
  const [showContent, setShowContent] = useState<boolean>(false);
  const [createPostInputState, setCreatePostInputState] = useState<{
    title: string;
    content: string;
    category: string;
  }>({
    title: "",
    content: ``,
    category: "",
  });

  const [authorInfo, setAuthorInfo] = useState<string>("");

  const ShowContentHandler = useCallback(() => {
    setShowContent(!showContent);
  }, [showContent]);

  const GetAuthorName = useCallback(async () => {
    const username: string = await GetLoginUsernameData();
    setAuthorInfo(username);
  }, []);

  const CreatePostInputStateChangeHandler = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setCreatePostInputState({
        ...createPostInputState,
        [e.target.name]: e.target.value,
      });
    },
    [createPostInputState]
  );

  const CreatePostSelectChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCreatePostInputState({
        ...createPostInputState,
        category: e.target.value,
      });
    },
    [createPostInputState]
  );

  const PostCreateSubmitHandler = useCallback(async () => {
    if (
      createPostInputState.title.trim().length === 0 ||
      createPostInputState.content.trim().length === 0
    ) {
      return alert("Enter Title Or Content");
    }

    if (createPostInputState.category.trim().length === 0) {
      return alert("Select Category");
    }
    const { token } = await cookies;
    await CreatePost(
      createPostInputState.title,
      createPostInputState.content,
      token,
      createPostInputState.category
    )
      .then((res) => {
        if (res.status !== 201) {
          throw new Error("Login First");
        }
        alert("Success Create Post");
        return router.push("/post");
      })
      .catch((err) => {
        alert(`Error\n${err.message}`);
      });
  }, [
    cookies,
    createPostInputState.category,
    createPostInputState.content,
    createPostInputState.title,
    router,
  ]);

  useEffect(() => {
    GetAuthorName();
  }, [GetAuthorName]);

  return (
    <div className="post_create_page">
      <PageHeader header_text="Create Post" />
      <p className={styles.create_category_page}>
        <Link href="/category/create">Create Category</Link>
      </p>

      {!showContent && (
        <Fragment>
          <PostSelectCategory
            CategoryList={CategoryList}
            CreatePostSelectChangeHandler={CreatePostSelectChangeHandler}
          />
          <PostCraeteTemplate
            CreatePostInputStateChangeHandler={
              CreatePostInputStateChangeHandler
            }
            PostCreateSubmitHandler={PostCreateSubmitHandler}
            ShowContentHandler={ShowContentHandler}
            createPostInputState={createPostInputState}
            author={authorInfo}
          />
        </Fragment>
      )}

      {showContent && (
        <PostMarkDownRender
          markdown={createPostInputState.content}
          ShowContentHandler={ShowContentHandler}
        />
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await GetCategory();
  const CategoryList = await res.json();

  return {
    props: {
      CategoryList: CategoryList,
    },
    revalidate: 1,
  };
};

export default PostCreatePage;
