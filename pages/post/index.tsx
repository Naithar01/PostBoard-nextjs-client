import { GetServerSideProps } from "next";
import { Fragment } from "react";
import PageHeader from "../../components/Layouts/PageHeader/PageHeader";
import PostItem from "../../components/Post/PostItem";
import { GetPost } from "../../Lib/Post";

import styles from "../../styles/post/post.module.css";

export type Post = {
  id: string;
  author: string;
  title: string;
  content: string;
  create_at: string;
};

interface IProps {
  post: Post[];
}

const PostMainPage = ({ post }: IProps) => {
  return (
    <div className="post_main_page">
      <PageHeader header_text="Posts" />
      <div className="post_length">
        <p>[Written Post Count: {post.length}]</p>
      </div>
      <div className={styles.post_item_list}>
        {post.map((post, index) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await GetPost();
  const posts: Post[] = await res.json();

  return {
    props: {
      post: posts,
    },
  };
};

export default PostMainPage;
