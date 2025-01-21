import React from "react";
import { FaPlus, FaFileExport } from "react-icons/fa";
import styles from "./Driver.module.css"; // Import CSS module
import Table from "../../components/FilterTable/table";

export default function DriversPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Drivers</h1>
        <div className={styles.buttons}>
          <button className={styles.newDriverBtn}>
            <FaPlus className={styles.icon} /> New Driver
          </button>
          <button className={styles.exportListBtn}>
            <FaFileExport className={styles.icon} /> Export List
          </button>
        </div>
      </div>
      <div className={styles.filterSection}>
        <div className={styles.fieldsRow}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Driver ID"
          />
          <input
            type="text"
            className={styles.inputField}
            placeholder="Driver Name"
          />
          <input
            type="text"
            className={styles.inputField}
            placeholder="Phone Number"
          />
          <span className={styles.clearSearch}>Clear Search</span>
          <button className={styles.expandBtn}>Expand Search</button>
        </div>
      </div>
    <Table/>
    </div>
  );
}
