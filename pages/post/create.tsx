import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { GetLoginUsernameData } from "../../actions/UserActions";
import PageHeader from "../../components/Layouts/PageHeader/PageHeader";
import PostCraeteTemplate from "../../components/Post/Create/PostCreateTemplate";
import { CreatePost } from "../../Lib/Post";

import styles from "../../styles/post/createpost.module.css";

const PostCreatePage = () => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies();
  const [createPostInputState, setCreatePostInputState] = useState<{
    title: string;
    content: string;
  }>({
    title: "",
    content: ``,
  });

  const [authorInfo, setAuthorInfo] = useState<string>("");

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

  const PostCreateSubmitHandler = useCallback(async () => {
    if (
      createPostInputState.title.trim().length === 0 ||
      createPostInputState.content.trim().length === 0
    ) {
      alert("Enter Title Or Content");
    }
    const { token } = await cookies;
    await CreatePost(
      createPostInputState.title,
      createPostInputState.content,
      token
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
      <PostCraeteTemplate
        CreatePostInputStateChangeHandler={CreatePostInputStateChangeHandler}
        PostCreateSubmitHandler={PostCreateSubmitHandler}
        author={authorInfo}
      />
    </div>
  );
};

export default PostCreatePage;
