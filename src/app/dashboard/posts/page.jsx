import styles from "@/app/ui/dashboard/posts/posts.module.css";
import { getPosts } from "@/app/lib/service";
import Link from "next/link";

const Post = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>
                <div className={styles.post}>{post.title}</div>
              </td>
              <td>{post.body}</td> 
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/posts/${post.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Post;
