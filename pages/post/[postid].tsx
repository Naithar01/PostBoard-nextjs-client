import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import PageHeader from "../../components/Layouts/PageHeader/PageHeader";
import { DeletePost, GetPost, GetPostById } from "../../Lib/Post";
import ReactMarkdown from "react-markdown";

import { Post } from "./index";

import styles from "../../styles/post/postread.module.css";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface IProps {
  post: Post;
}

const PostReadPage = ({ post }: IProps) => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies();

  const DeletePostHandler = async () => {
    await DeletePost(post.id)
      .then((res) => {
        if (res.status >= 300) {
          throw Error("Some Error");
        }
        alert("Success Delete Post");
        return router.push("/post");
      })
      .catch((err) => {
        return alert("Some Error");
      });
  };

  return (
    <div className="post_read_page">
      <PageHeader header_text={post.title} />
      <header className={styles.post_read_page_header}>
        <p className={styles.post_read_page_header_author}>{post.author}</p>
        <small>{new Date(post.create_at).toLocaleString()}</small>
        <div className="post_read_delete_btn">
          {cookies.username === post.author && (
            <button type="button" onClick={DeletePostHandler}>
              Delete
            </button>
          )}
        </div>
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
