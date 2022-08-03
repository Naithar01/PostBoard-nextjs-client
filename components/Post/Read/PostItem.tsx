import Link from "next/link";
import { Post } from "../../../pages/post";

import styles from "../../../styles/post/post.module.css";

interface IProps {
  post: Post;
}

const PostItem = ({ post }: IProps) => {
  return (
    <div className={styles.post_item}>
      <header className="post_item_header">
        <p className={styles.post_item_header_title}>{post.title}</p>
        <small className={styles.post_item_author}>author: {post.author}</small>
      </header>
      <div className={styles.post_item_create_at}>
        <p>create_at: {post.create_at}</p>
        <Link href={`post/${post.id}`}>
          <a>Read</a>
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
