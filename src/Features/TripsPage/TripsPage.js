import React from "react";
import { FaPlus, FaFileExport } from "react-icons/fa";
import styles from "./TripsPage.module.css";
import Table from "../../components/TripsTable/TripsTable";
import Link from "next/link";

export default function TripsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Trips</h1>
        <div className={styles.buttons}>
          <button className={styles.newDriverBtn}>
            <FaPlus className={styles.icon} /> Create a trip
          </button>
          <Link  href="/trips" className={styles.link}>
            Export List
            </Link>
          <Link  href="/trips" className={styles.link}>
            |   Columns
          </Link>
        </div>
      </div>
      <div className={styles.filterSection}>
        <div className={styles.fieldsRow}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="# Trip Number"
          />
          <input
            type="text"
            className={styles.inputField}
            placeholder="Customer"
          />
          <input
            type="text"
            className={styles.inputField}
            placeholder="Pickup Location"
          />
          <span className={styles.clearSearch}>Clear Search</span>
          <button className={styles.expandBtn}>Expand Search</button>
        </div>
      </div>
      <Table />
    </div>
  );
}
