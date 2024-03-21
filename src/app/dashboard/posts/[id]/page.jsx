import styles from "@/app/ui/dashboard/posts/view/view.module.css";
import { getPostById } from "@/app/lib/service";
import Link from "next/link";

const View = async ({ params }) => {
  const { id } = params;
  const post = await getPostById(id);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <ul className={styles.post}>
          <li>ID : {post.id}</li>
          <li>Title : {post.title}</li>
          <li>Description : {post.body}</li>
        </ul>
        <div className={styles.comment}>
          <Link href={`/dashboard/posts/${post.id}/comments`}>
            View Comment{" "}
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default View;
