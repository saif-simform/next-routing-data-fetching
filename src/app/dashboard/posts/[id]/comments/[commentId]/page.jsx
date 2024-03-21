import styles from "@/app/ui/dashboard/posts/view/view.module.css";

const View = async ({ params }) => {
  const { commentId } = params;

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <ul className={styles.post}>
          <li>ID : {commentId}</li>
          <li>Name : odio adipisci rerum aut animi</li>
          <li>Email : Jayne_Kuhic@sydney.com</li>
          <li>
            Description : est natus enim nihil est dolore omnis voluptatem
            numquam et omnis occaecati quod ullam at
          </li>
        </ul>
      </div>
    </div>
  );
};

export default View;
