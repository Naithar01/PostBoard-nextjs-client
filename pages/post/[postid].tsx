import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import PageHeader from "../../components/Layouts/PageHeader/PageHeader";
import { GetPost, GetPostById } from "../../Lib/Post";

import { Post } from "./index";

import styles from "../../styles/post/postread.module.css";
import ReactMarkdown from "react-markdown";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface IProps {
  post: Post;
}

const PostReadPage = ({ post }: IProps) => {
  return (
    <div className="post_read_page">
      <PageHeader header_text={post.title} />
      <header className={styles.post_read_page_header}>
        <p className={styles.post_read_page_header_author}>{post.author}</p>
        <small>{new Date(post.create_at).toLocaleString()}</small>
      </header>
      <ReactMarkdown className={styles.post_read_page_content}>
        {post.content}
      </ReactMarkdown>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await GetPost();
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { postid: post.id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { postid } = ctx.params as IParams;
  const res = await GetPostById(postid);
  const post: Post[] = await res.json();

  return {
    props: {
      post,
    },
  };
};

export default PostReadPage;
