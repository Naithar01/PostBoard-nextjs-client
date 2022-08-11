import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GetLoginUsernameData } from "../../actions/UserActions";
import PageHeader from "../../components/Layouts/PageHeader/PageHeader";
import PostCraeteTemplate from "../../components/Post/Create/PostCreateTemplate";
import { CreatePost } from "../../Lib/Post";

const PostCreatePage = () => {
  const router = useRouter();
  const [createPostInputState, setCreatePostInputState] = useState<{
    title: string;
    content: string;
  }>({
    title: "",
    content: ``,
  });

  const [authorInfo, setAuthorInfo] = useState<string>("");

  const GetAuthorName = async () => {
    const username: string = await GetLoginUsernameData();
    setAuthorInfo(username);
  };

  const CreatePostInputStateChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCreatePostInputState({
      ...createPostInputState,
      [e.target.name]: e.target.value,
    });
  };

  const PostCreateSubmitHandler = async () => {
    if (
      createPostInputState.title.trim().length === 0 ||
      createPostInputState.content.trim().length === 0
    ) {
      alert("Enter Title Or Content");
    }
    await CreatePost(
      createPostInputState.title,
      createPostInputState.content,
      authorInfo
    )
      .then((res) => {
        alert("Success Create Post");
        return router.push("/post");
      })
      .catch((err) => {
        alert(`Error\n${err.message}`);
      });
  };

  useEffect(() => {
    GetAuthorName();
  }, []);

  return (
    <div className="post_create_page">
      <PageHeader header_text="Create Post" />
      <PostCraeteTemplate
        CreatePostInputStateChangeHandler={CreatePostInputStateChangeHandler}
        PostCreateSubmitHandler={PostCreateSubmitHandler}
        author={authorInfo}
      />
    </div>
  );
};

export default PostCreatePage;
