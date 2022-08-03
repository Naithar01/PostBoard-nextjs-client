import React, { useState } from "react";
import PageHeader from "../../components/Layouts/PageHeader/PageHeader";
import PostCraeteTemplate from "../../components/Post/Create/PostCreateTemplate";

const PostCreatePage = () => {
  const [createPostInputState, setCreatePostInputState] = useState<{
    title: string;
    content: string;
  }>({
    title: "",
    content: "",
  });

  const CreatePostInputStateChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCreatePostInputState({
      ...createPostInputState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="post_create_page">
      <PageHeader header_text="Create Post" />
      <PostCraeteTemplate
        CreatePostInputStateChangeHandler={CreatePostInputStateChangeHandler}
      />
    </div>
  );
};

export default PostCreatePage;
