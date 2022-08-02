import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import { DUMMY_POST, Post } from "./index";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface IProps {
  post: Post;
}

const PostReadPage = ({ post }: IProps) => {
  return <div className="post_read_page">{JSON.stringify(post)}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = DUMMY_POST.map((post) => ({
    params: { postid: post.id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { postid } = ctx.params as IParams;
  const post = DUMMY_POST.filter((post) => post.id !== postid);

  return {
    props: {
      post,
    },
  };
};

export default PostReadPage;
