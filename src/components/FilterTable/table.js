import React, { useState } from 'react';
import applyFilterStyles from '../FilterTable/Filter.module.css';
import { FaUsers, FaCheck, FaBan } from "react-icons/fa";

export default function Table() {
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const drivers = [
    {
      id: "001",
      name: "John Doe",
      phone: "(123) 456-7890",
      email: "johndoe@example.com",
      status: "Active",
      employmentType: "Owner Operators",
      image: "/path-to-john-image.jpg",
    },
    {
      id: "002",
      name: "Jane Smith",
      phone: "(987) 654-3210",
      email: "janesmith@example.com",
      status: "Inactive",
      employmentType: "Company Drivers",
      image: "/path-to-jane-image.jpg",
    },
    {
      id: "003",
      name: "Sam Brown",
      phone: "(555) 555-5555",
      email: "sambrown@example.com",
      status: "Active",
      employmentType: "Owner Operators",
      image: "/path-to-sam-image.jpg",
    },{
      id: "004",
      name: "Sajen Haul",
      phone: "(555) 5667- 755",
      email: "sambrown@example.com",
      status: "Active",
      employmentType: "Company Drivers",
      image: "/path-to-sam-image.jpg",
    },
    ,{
      id: "005",
      name: "Mary Com",
      phone: "(555) 5667- 755",
      email: "mary@example.com",
      status: "Inactive",
      employmentType: "Company Drivers",
      image: "/path-to-sam-image.jpg",
    }
  ];

  const handleViewDetails = (driver) => {
    setSelectedDriver(driver);
    setIsSliderOpen(true);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
  };

  return (
    <div>
      <h1 className={applyFilterStyles.applyFiltersTitle}>Apply Filters</h1>
      <div className={applyFilterStyles.filterOptions}>
        <button className={applyFilterStyles.filterOption}>
          <FaUsers className={applyFilterStyles.icon} /> All Drivers
        </button>
        <button className={applyFilterStyles.filterOption}>Owner Operators</button>
        <button className={applyFilterStyles.filterOption}>Company Drivers</button>
        <button className={applyFilterStyles.filterOption}>
          <FaCheck className={applyFilterStyles.icon} /> Active
        </button>
        <button className={applyFilterStyles.filterOption}>
          <FaBan className={applyFilterStyles.icon} /> Inactive
        </button>
      </div>

      <div className={applyFilterStyles.tableSection}>
        <table className={applyFilterStyles.driverTable}>
          <thead>
            <tr>
              
              <th>Driver ID</th>
              <th>Driver Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Status</th>
              <th>Employment Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.id}>
                <td>{driver.id}</td>
                <td>{driver.name}</td>
                <td>{driver.phone}</td>
                <td>{driver.email}</td>
                
                 <td >
                  <button className={applyFilterStyles[`${driver.status.toLowerCase()}Status`]}>{driver.status}</button>
                </td>
                <td>{driver.employmentType}</td>

                <td>
                  <button
                    onClick={() => handleViewDetails(driver)}
                    className={applyFilterStyles.viewLink}
                  >
                    View Driver Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedDriver && (
  <div className={`${applyFilterStyles.slider} ${isSliderOpen ? applyFilterStyles.open : ''}`}>
    <button className={applyFilterStyles.closeButton} onClick={closeSlider}>
      ×
    </button>
    <div className={applyFilterStyles.content}>
      <p className={applyFilterStyles.drivertitle}>Driver Details</p>
      <hr />
      
      {/* First Row: Photo and Basic Details */}
      <div className={applyFilterStyles.driverRow}>
        <img 
          src={selectedDriver.image} 
          alt={selectedDriver.name} 
          className={applyFilterStyles.driverPhoto} 
        />
        <div className={applyFilterStyles.driverDetails}>
          <p><strong>Driver ID:</strong> {selectedDriver.id}</p>
          <p><strong>Name:</strong> {selectedDriver.name}</p>
          <p><strong>Address:</strong> 1234 Main St, Springfield, USA</p> {/* Example address */}
        </div>
      </div>
      
     
      <div className={applyFilterStyles.driverDate}>
        <p><strong>Date:</strong> January 18, 2025</p> 
      </div>
      
    
      <div className={applyFilterStyles.driverOrder}>
     
        <p><strong>Jane Doe</strong> </p> 
        <p><strong>[5876869866]</strong> </p> 
      </div>
    </div>
  </div>
)}

    </div>
  );
}
