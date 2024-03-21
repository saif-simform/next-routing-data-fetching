import styles from "@/app/ui/dashboard/users/view/view.module.css";

import { getPostById, getUserById } from "../lib/service";
import Post from "../ui/dashboard/feed/post";

const Feed = async () => {
  // Parallel Data fetching

  // initiate both requests in parallel
  const userData = getUserById(1);
  const userPosts = getPostById(1);

  const [user, post] = await Promise.all([userData, userPosts]);

  return (
    <>
      <div className={styles.container}>
        <h2>User Details</h2>
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
      <Post data={post} />
    </>
  );
};

export default Feed;
