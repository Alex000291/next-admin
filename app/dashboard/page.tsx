import Sidebar from "../ui/sidebar/sidebar";
import Navbar from "@ui/navbar/navbar";
import styles from "./dashboard.module.scss";

export default function DashboardPage() {
  return (
    <html>
      <body>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
          <div className={styles.navbar}>
            <Navbar />
          </div>
          <div>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
          </div>
        </div>
      </body>
    </html>
  );
}