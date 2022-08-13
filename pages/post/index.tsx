import { GetServerSideProps } from "next";
import Link from "next/link";
import { Fragment } from "react";
import PageHeader from "../../components/Layouts/PageHeader/PageHeader";
import PostItem from "../../components/Post/Read/PostItem";
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
  query_category: string | string[] | undefined;
}

const PostMainPage = ({ post, query_category }: IProps) => {
  return (
    <div className="post_main_page">
      <PageHeader header_text={query_category} />
      {!query_category && (
        <h1 className={styles.select_cateogry}>
          <Link href="/category">Select Category</Link>
        </h1>
      )}

      {query_category && (
        <h3 className={styles.show_all_post}>
          <Link href="/post">Show All Post</Link>
        </h3>
      )}

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
  const { query_category } = ctx.query;

  const res = await GetPost(query_category);
  const posts: Post[] = await res.json();

  return {
    props: {
      post: posts,
      query_category: query_category || null,
    },
  };
};

export default PostMainPage;
