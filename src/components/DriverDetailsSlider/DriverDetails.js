import React from 'react';
import sliderStyles from '../DriverDetailsSlider/Driver.module.css'

export default function DriverDetailsSlider({ driver, onClose }) {
    console.log(driver,"[[[[[[[[[[[[")

  return (
    <div className={sliderStyles.slider}>
      <button className={sliderStyles.closeButton} onClick={onClose}>
        ×
      </button>
      <div className={sliderStyles.content}>
        <img src={driver.image} alt={driver.name} className={sliderStyles.image} />
        <h2>{driver.name}</h2>
        <p><strong>Phone:</strong> {driver.phone}</p>
        <p><strong>Email:</strong> {driver.email}</p>
        <p><strong>Status:</strong> {driver.status}</p>
        <p><strong>Employment Type:</strong> {driver.employmentType}</p>
      </div>
    </div>
  );
}
