import styles from "@/app/ui/dashboard/posts/posts.module.css";
import { getCommentsByPostId } from "@/app/lib/service";
import Link from "next/link";

const Comments = async ({ params }) => {
  const { id } = params;
  const comments = await getCommentsByPostId(id);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Description</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>
                <div className={styles.post}>{comment.name}</div>
              </td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/posts/${id}/comments/${comment.id}`}>
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

export default Comments;
