import styles from "@/app/ui/dashboard/users/view/view.module.css";

const Post = async ({ data }) => {
  const post = await data;

  return (
    <div className={styles.container}>
      <h2>Post Details</h2>

      <div className={styles.formContainer}>
        <ul className={styles.userInfo}>
          <li>ID : {post.id}</li>
          <li>Title : {post.title}</li>
          <li>Description : {post.body}</li>
        </ul>
      </div>
    </div>
  );
};

export default Post;
