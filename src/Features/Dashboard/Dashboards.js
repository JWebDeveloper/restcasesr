import React, { useState } from 'react';
import { FaTachometerAlt, FaTicketAlt,FaScrewdriver } from 'react-icons/fa';
import styles from '../Dashboard/Dashboard.module.css'; // CSS module
import '../../components/MainPage/Main.module.css'; // Global CSS
import DriversPage from '../Driver/Driver';

export default function Dashboards() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={styles["home-container"]}>
      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
        {isSidebarOpen && (
          <div className={styles.overlay} onClick={toggleSidebar}></div>
        )}

        <button
          className={styles["sidebar-toggle"]}
          onClick={toggleSidebar}
          aria-expanded={isSidebarOpen}
          aria-label="Toggle sidebar"
        >
          &#9776; {/* Hamburger menu */}
        </button>
        {"    "}
        <span className={styles["brand-name"]}>Dispatcher.ca</span>
        <ul>
          {/* <li>
            <FaTachometerAlt className={styles.icon} />
            <span>Dashboard</span>
          </li>
          <li>
            <FaTicketAlt className={styles.icon} />
            <span>Trip</span>
          </li> */}
          <li>
            <FaScrewdriver className={styles.icon} />
            <span>Drivers</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        className={`${styles["main-content"]} ${
          isSidebarOpen ? styles["sidebar-open"] : ''
        }`}
      >
        {/* <Main /> */}
        <DriversPage/>
      </div>
    </div>
  );
}
