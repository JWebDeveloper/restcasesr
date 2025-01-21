import React from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import styles from '../MainPage/Main.module.css'; // Import CSS module

export default function Main() {
  return (
    <div className={styles["right-side-container"]}>
      {/* Welcome Section */}
      <div className={styles["welcome-container"]}>
        <span className={styles["welcome-text"]}>Welcome, Aerotrack logistics Ltd</span>
        <FaChevronDown className={styles["down-arrow"]} />
      </div>
      <hr className={styles.divider} />

      {/* Trips Section */}
      <div className={styles["main-section"]}>
        <span className={styles["trips-text"]}>
          Trips <FaChevronRight className={styles["arrow-icon"]} />
          <span className={styles["create-trips-text"]}>Create a trip</span>
        </span>
      </div>

      {/* Create a Trip Section */}
      <div className={styles["main-section"]}>
        <h2 className={styles["main-heading"]}>Create a Trip</h2>
        <div className={styles["trip"]}>
          <h3 className={styles["section-title"]}>Trip Details</h3>
          <div className={styles["trip-details"]}>
            <input type="date" placeholder="Start Date" className={styles["input-field"]} />
            <input type="text" placeholder="Order Number" className={styles["input-field"]} />
            <input type="text" placeholder="Rate" className={styles["input-field"]} />
          </div>

          {/* Checkbox and Advanced Settings */}
          <div className={styles["additional-settings"]}>
            <label className={styles["checkbox-label"]}>
              <input type="checkbox" className={styles["checkbox"]} />
              Is this load already delivered?
            </label>
            <span className={styles["advanced-settings"]}>
              Show Advanced Settings <FaChevronDown className={styles["down-arrow"]} />
            </span>
          </div>
        </div>
      </div>

      {/* Customer Details Section */}
      <div className={styles["main-section"]}>
        <h3 className={styles["section-title"]}>Customer Details</h3>

        {/* Customer Name and Contact */}
        <div className={styles["customer-details-row"]}>
          <input type="text" className={styles["input-field"]} placeholder="Name" />
          <input type="email" className={styles["input-field"]} placeholder="Email" />
          <input type="number" className={styles["input-field"]} placeholder="Contact" />
        </div>

        {/* Address Details */}
        <div className={styles["customer-details-row"]}>
          <input type="text" className={styles["input-field"]} placeholder="Street" />
          <input type="text" className={styles["input-field"]} placeholder="Address 2" />
          <input type="text" className={styles["input-field"]} placeholder="State" />
        </div>

        {/* City, Country, Postal Code */}
        <div className={styles["customer-details-row"]}>
          <input type="text" className={styles["input-field"]} placeholder="City" />
          <input type="text" className={styles["input-field"]} placeholder="Country" />
          <input type="text" className={styles["input-field"]} placeholder="Postal Code" />
        </div>

        {/* Advanced Settings */}
        <div className={styles["advanced-settings-container"]}>
          <span className={styles["advanced-settings"]}>
            Show Advanced Settings <FaChevronDown className={styles["down-arrow"]} />
          </span>
        </div>
      </div>
    </div>
  );
}
