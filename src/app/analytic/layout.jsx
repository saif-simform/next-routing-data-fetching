import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import styles from "../ui/dashboard/dashboard.module.css";

const Layout = ({ card, transaction, chart, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <div className={styles.main}>
          <div className={styles.cards}>
            {card}
            {card}
            {card}
          </div>
          {transaction}
          {chart}
        </div>
      </div>
    </div>
  );
};

export default Layout;
