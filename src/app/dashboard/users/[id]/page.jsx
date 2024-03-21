import styles from "@/app/ui/dashboard/users/view/view.module.css";
import { getUserById } from "@/app/lib/service";
import Image from "next/image";

const View = async ({ params }) => {
  const { id } = params;

  const user = await getUserById(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="profile" fill />
        </div>
        {user.name}
      </div>
      <div className={styles.formContainer}>
        <ul className={styles.userInfo}>
          <li>Name : {user.name}</li>
          <li>UserName : {user.username}</li>
          <li>Email : {user.email}</li>
          <li>Phone : {user.phone}</li>
          <li>Website : {user.website}</li>
          <li>Company : {user.company.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default View;
