import React, { useState } from 'react';
import applyFilterStyles from '../FilterTable/Filter.module.css';
import { FaUsers, FaCheck, FaBan, FaEllipsisV } from "react-icons/fa";

export default function TripsTable() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [selectedTrips, setSelectedTrips] = useState([]);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); 

  const trips = [
    {
      tripNumber: "TRIP001",
      date: "2025-01-15",
      status: "Delivered",
      customer: "John Doe",
      customerPhone: "123-456-7890",
      customerAddress: "123 Elm St, New York, NY",
      orderNumber: "ORD001",
      driverName: "Alice Johnson",
      rate: "$100",
      pickupLocation: "New York, NY",
    },
    {
      tripNumber: "TRIP002",
      date: "2025-01-16",
      status: "In Transit",
      customer: "Jane Smith",
      customerPhone: "234-567-8901",
      customerAddress: "456 Oak St, Los Angeles, CA",
      orderNumber: "ORD002",
      driverName: "Bob Lee",
      rate: "$120",
      pickupLocation: "Los Angeles, CA",
    },
    {
      tripNumber: "TRIP003",
      date: "2025-01-17",
      status: "Dispatched",
      customer: "Sam Wilson",
      customerPhone: "345-678-9012",
      customerAddress: "789 Pine St, Chicago, IL",
      orderNumber: "ORD003",
      driverName: "Charlie King",
      rate: "$90",
      pickupLocation: "Chicago, IL "},
    {
      tripNumber: "TRIP004",
      date: "2025-01-18",
      status: "Load Confirmed",
      customer: "Emily Davis",
      customerPhone: "456-789-0123",
      customerAddress: "101 Maple St, Houston, TX",
      orderNumber: "ORD004",
      driverName: "David Clark",
      rate: "$110",
      pickupLocation: "Houston, TX",
    },
    {
      tripNumber: "TRIP005",
      date: "2025-01-19",
      status: "Completed",
      customer: "Michael Brown",
      customerPhone: "567-890-1234",
      customerAddress: "202 Birch St, San Francisco, CA",
      orderNumber: "ORD005",
      driverName: "Eva White",
      rate: "$95",
      pickupLocation: "San Francisco, CA",
    },
    {
      tripNumber: "TRIP006",
      date: "2025-01-20",
      status: "Scheduled",
      customer: "Sophia Turner",
      customerPhone: "678-901-2345",
      customerAddress: "303 Birchwood Rd, Miami, FL",
      orderNumber: "ORD006",
      driverName: "Franklin Scott",
      rate: "$150",
      pickupLocation: "Miami, FL",
    },
    {
      tripNumber: "TRIP007",
      date: "2025-01-21",
      status: "In Transit",
      customer: "Isabella Moore",
      customerPhone: "789-012-3456",
      customerAddress: "404 Lakeview Dr, Phoenix, AZ",
      orderNumber: "ORD007",
      driverName: "Grace Young",
      rate: "$110",
      pickupLocation: "Phoenix, AZ",
    },
    {
      tripNumber: "TRIP008",
      date: "2025-01-22",
      status: "Dispatched",
      customer: "Liam Harris",
      customerPhone: "890-123-4567",
      customerAddress: "505 Oak Grove, Dallas, TX",
      orderNumber: "ORD008",
      driverName: "Helen Adams",
      rate: "$135",
      pickupLocation: "Dallas, TX",
    },
    {
      tripNumber: "TRIP009",
      date: "2025-01-23",
      status: "Completed",
      customer: "James Clark",
      customerPhone: "901-234-5678",
      customerAddress: "606 Pine St, Orlando, FL",
      orderNumber: "ORD009",
      driverName: "Isaac Wilson",
      rate: "$130",
      pickupLocation: "Orlando, FL",
    },
    {
      tripNumber: "TRIP010",
      date: "2025-01-24",
      status: "Load Confirmed",
      customer: "Ava Lee",
      customerPhone: "012-345-6789",
      customerAddress: "707 Sunset Blvd, Austin, TX",
      orderNumber: "ORD010",
      driverName: "Jack Taylor",
      rate: "$145",
      pickupLocation: "Austin, TX",
    },
    {
      tripNumber: "TRIP011",
      date: "2025-01-25",
      status: "In Progress",
      customer: "Mason Scott",
      customerPhone: "123-456-7891",
      customerAddress: "808 Meadow Ln, Seattle, WA",
      orderNumber: "ORD011",
      driverName: "Kate Brown",
      rate: "$120",
      pickupLocation: "Seattle, WA",
    },
    {
      tripNumber: "TRIP012",
      date: "2025-01-26",
      status: "Delivered",
      customer: "Amelia Johnson",
      customerPhone: "234-567-8902",
      customerAddress: "909 Willow St, Boston, MA",
      orderNumber: "ORD012",
      driverName: "Leo Martinez",
      rate: "$105",
      pickupLocation: "Boston, MA",
    },
    {
      tripNumber: "TRIP013",
      date: "2025-01-27",
      status: "In Transit",
      customer: "Lucas Walker",
      customerPhone: "345-678-9013",
      customerAddress: "1010 Elm Ave, Denver, CO",
      orderNumber: "ORD013",
      driverName: "Mia Carter",
      rate: "$125",
      pickupLocation: "Denver, CO",
    },
    {
      tripNumber: "TRIP014",
      date: "2025-01-28",
      status: "Dispatched",
      customer: "Ethan Young",
      customerPhone: "456-789-0124",
      customerAddress: "1111 Maple Rd, Minneapolis, MN",
      orderNumber: "ORD javascript 014",
      driverName: "Noah Evans",
      rate: "$115",
      pickupLocation: "Minneapolis, MN",
    },
    {
      tripNumber: "TRIP015",
      date: "2025-01-29",
      status: "Scheduled",
      customer: "Charlotte King",
      customerPhone: "567-890-1235",
      customerAddress: "1212 Cedar Dr, Portland, OR",
      orderNumber: "ORD015",
      driverName: "Olivia Lewis",
      rate: "$140",
      pickupLocation: "Portland, OR",
    },
    {
      tripNumber: "TRIP016",
      date: "2025-01-30",
      status: "Load Confirmed",
      customer: "Benjamin Harris",
      customerPhone: "678-901-2346",
      customerAddress: "1313 Pine Ave, Detroit, MI",
      orderNumber: "ORD016",
      driverName: "Paul Wright",
      rate: "$155",
      pickupLocation: "Detroit, MI",
    },
    {
      tripNumber: "TRIP017",
      date: "2025-01-31",
      status: "Completed",
      customer: "Ella Moore",
      customerPhone: "789-012-3457",
      customerAddress: "1414 Birch Ln, Raleigh, NC",
      orderNumber: "ORD017",
      driverName: "Quinn Hill",
      rate: "$125",
      pickupLocation: "Raleigh, NC",
    },
    {
      tripNumber: "TRIP018",
      date: "2025-02-01",
      status: "In Transit",
      customer: "Sebastian Adams",
      customerPhone: "890-123-4568",
      customerAddress: "1515 Sunset Blvd, San Diego, CA",
      orderNumber: "ORD018",
      driverName: "Ryan Scott",
      rate: "$130",
      pickupLocation: "San Diego, CA",
    },
    {
      tripNumber: "TRIP019",
      date: "2025-02-02",
      status: "Dispatched",
      customer: "Scarlett Martinez",
      customerPhone: "901-234-5679",
      customerAddress: "1616 Oak Dr, San Jose, CA",
      orderNumber: "ORD019",
      driverName: "Sophia Turner",
      rate: "$140",
      pickupLocation: "San Jose, CA",
    },
    {
      tripNumber: "TRIP020",
      date: "2025-02-03",
      status: "Scheduled",
      customer: "Oliver Roberts",
      customerPhone: "012-345-6790",
      customerAddress: "1717 Cedar Ln, Salt Lake City, UT",
      orderNumber: "ORD020",
      driverName: "Thomas Clark",
      rate: "$100",
      pickupLocation: "Salt Lake City, UT",
    },
  ];

  const statusList = [
    "Load Confirmed",
    "Dispatched",
    "In Transit",
    "Delivered",
    "Payment received",
  ];
  
  const getStatusColor = (status, currentStatus) => {
    if (status === currentStatus) {
      return 'bg-success'; // Mark current status as green
    }
    return statusList.indexOf(status) < statusList.indexOf(currentStatus) ? 'bg-success' : 'bg-secondary';
  };

  const handleSelectRow = (event, trip) => {
    if (event.target.checked) {
      setSelectedTrips((prevSelected) => [...prevSelected, trip.tripNumber]);
      setSelectedTrip(trip); // Set the trip as the current trip
      setIsSliderOpen(true); // Open the slider
    } else {
      setSelectedTrips((prevSelected) =>
        prevSelected.filter((num) => num !== trip.tripNumber)
      );
      setSelectedTrip(null); // Clear the current trip
      setIsSliderOpen(false); // Close the slider
    }
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedTrips(trips.map((trip) => trip.tripNumber));
    } else {
      setSelectedTrips([]);
    }
    setSelectedTrip(null); // Clear any selected trip
    setIsSliderOpen(false); // Close the slider
  };

  const handleViewDetails = (trip) => {
    setSelectedTrip(trip); // Set the trip as the current trip
    setIsSliderOpen(true); // Open the slider
  };

  const closeSlider = () => {
    setSelectedTrip(null); // Clear the selected trip
    setIsSliderOpen(false); // Close the slider
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  // Calculate the start and end index for the current page
  const indexOfLastTrip = currentPage * itemsPerPage;
  const indexOfFirstTrip = indexOfLastTrip - itemsPerPage;
  const currentTrips = trips.slice(indexOfFirstTrip, indexOfLastTrip);

  // Calculate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(trips.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={`${applyFilterStyles.container} ${isSliderOpen ? applyFilterStyles.sliderOpen : ''}`}>
      <h1 className={applyFilterStyles.applyFiltersTitle}>Apply Filters</h1>
      <div className={applyFilterStyles.filterOptions}>
        <button className={applyFilterStyles.filterOption}>
          <FaUsers className={applyFilterStyles.icon} /> All Trips
        </button>
        <button className={applyFilterStyles.filterOption}>Dispatched</button>
        <button className={applyFilterStyles.filterOption}>Pending</button>
        <button className={applyFilterStyles.filterOption}>In Transit</button>
        <button className={applyFilterStyles.filterOption}>
          <FaCheck className={applyFilterStyles.icon} /> Delivered
        </button>
        <button className={applyFilterStyles.filterOption}>
          <FaBan className={applyFilterStyles.icon} /> In Draft
        </button>
      </div>

      <div className={applyFilterStyles.tableSection}>
        <table className={applyFilterStyles.driverTable +  
" table table-responsive table-hover table-striped"}>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={
                    selectedTrips.length === trips.length && trips.length > 0
                  }
                />
              </th>
              <th>Trip Number</th>
              <th>Date</th>
              <th>Status</th>
              <th>Customer</th>
              <th>Rate</th>
              <th>Pickup Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentTrips.map((trip) => (
              <tr key={trip.tripNumber}>
                <td>
                  <input
                    type="checkbox"
                    onChange={(e) => handleSelectRow(e, trip)}
                    checked={selectedTrips.includes(trip.tripNumber)}
                  />
                </td>
                <td>{trip.tripNumber}</td>
                <td>{trip.date}</td>
                <td>
                  <span
                    className={`badge ${["Delivered", "In Transit", "Payment received"].includes(trip.status) ? 'bg-success' :
                      ["Dispatched", "Load Confirmed"].includes(trip.status) ? 'bg-danger' :
                        trip.status === "In Draft" ? 'bg-dark' : 'bg-secondary'}`}
                  >
                    {trip.status}
                  </span>
                </td>
                <td>{trip.customer}</td>
                <td>{trip.rate}</td>
                <td>{trip.pickupLocation}</td>
                <td>
                  <button
                    onClick={() => handleViewDetails(trip)}
                    className={applyFilterStyles.viewLink}
                  >
                    <FaEllipsisV />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-between mt-3">
          <div>
            <label className="me-2">Items per page:</label>
            <select onChange={handleItemsPerPageChange} value={itemsPerPage}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>
          <div>
            <button 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button 
              onClick={() => handlePageChange(currentPage + 1)} 
              disabled={indexOfLastTrip >= trips.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {isSliderOpen && selectedTrip && (
        <div className={`${applyFilterStyles.slider} ${isSliderOpen ? applyFilterStyles.open : ''}`}>
          <button className={applyFilterStyles.closeButton} onClick={closeSlider}>×</button>
          <div className={applyFilterStyles.content}>
            <div className={applyFilterStyles.mapContainer}>
              <h3>Map View</h3>
              <div style={{ height: "200px", backgroundColor: "#e0e0e0" }}>Map Placeholder</div>
            </div>

            <h3>Customer Details</h3>
            <p><strong>Customer:</strong> {selectedTrip.customer}</p>
            <p><strong>Phone:</strong> {selectedTrip.customerPhone}</p>
            <p><strong>Address:</strong> {selectedTrip.customerAddress}</p>

            <h3>Status Progression</h3>
            <div className={applyFilterStyles.statusProgress}>
              {statusList.map((status) => (
                <div key={status} className={`statusStep ${selectedTrip.status === status ? 'active' : ''}`}>
                  <span
                    className={`badge rounded-circle ${getStatusColor(status, selectedTrip.status)}`}
                  >
                    <i className="fa-solid fa-check"></i>
                  </span>
                  {status}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
// import React, { useState } from 'react';
// import applyFilterStyles from '../FilterTable/Filter.module.css';
// import { FaUsers, FaCheck, FaBan, FaEllipsisV } from "react-icons/fa";

// export default function TripsTable() {
//   const [selectedTrip, setSelectedTrip] = useState(null);
//   const [selectedTrips, setSelectedTrips] = useState([]);
//   const [isSliderOpen, setIsSliderOpen] = useState(false);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(10); 

//   const trips = [
//     {
//       tripNumber: "TRIP001",
//       date: "2025-01-15",
//       status: "Delivered",
//       customer: "John Doe",
//       customerPhone: "123-456-7890",
//       customerAddress: "123 Elm St, New York, NY",
//       orderNumber: "ORD001",
//       driverName: "Alice Johnson",
//       rate: "$100",
//       pickupLocation: "New York, NY",
//     },
//     {
//       tripNumber: "TRIP002",
//       date: "2025-01-16",
//       status: "In Transit",
//       customer: "Jane Smith",
//       customerPhone: "234-567-8901",
//       customerAddress: "456 Oak St, Los Angeles, CA",
//       orderNumber: "ORD002",
//       driverName: "Bob Lee",
//       rate: "$120",
//       pickupLocation: "Los Angeles, CA",
//     },
//     {
//       tripNumber: "TRIP003",
//       date: "2025-01-17",
//       status: "Dispatched",
//       customer: "Sam Wilson",
//       customerPhone: "345-678-9012",
//       customerAddress: "789 Pine St, Chicago, IL",
//       orderNumber: "ORD003",
//       driverName: "Charlie King",
//       rate: "$90",
//       pickupLocation: "Chicago, IL",
//     },
//     {
//       tripNumber: "TRIP004",
//       date: "2025-01-18",
//       status: "Load Confirmed",
//       customer: "Emily Davis",
//       customerPhone: "456-789-0123",
//       customerAddress: "101 Maple St, Houston, TX",
//       orderNumber: "ORD004",
//       driverName: "David Clark",
//       rate: "$110",
//       pickupLocation: "Houston, TX",
//     },
//     {
//       tripNumber: "TRIP005",
//       date: "2025-01-19",
//       status: "Completed",
//       customer: "Michael Brown",
//       customerPhone: "567-890-1234",
//       customerAddress: "202 Birch St, San Francisco, CA",
//       orderNumber: "ORD005",
//       driverName: "Eva White",
//       rate: "$95",
//       pickupLocation: "San Francisco, CA",
//     },
//     {
//       tripNumber: "TRIP006",
//       date: "2025-01-20",
//       status: "Scheduled",
//       customer: "Sophia Turner",
//       customerPhone: "678-901-2345",
//       customerAddress: "303 Birchwood Rd, Miami, FL",
//       orderNumber: "ORD006",
//       driverName: "Franklin Scott",
//       rate: "$150",
//       pickupLocation: "Miami, FL",
//     },
//     {
//       tripNumber: "TRIP007",
//       date: "2025-01-21",
//       status: "In Transit",
//       customer: "Isabella Moore",
//       customerPhone: "789-012-3456",
//       customerAddress: "404 Lakeview Dr, Phoenix, AZ",
//       orderNumber: "ORD007",
//       driverName: "Grace Young",
//       rate: "$110",
//       pickupLocation: "Phoenix, AZ",
//     },
//     {
//       tripNumber: "TRIP008",
//       date: "2025-01-22",
//       status: "Dispatched",
//       customer: "Liam Harris",
//       customerPhone: "890-123-4567",
//       customerAddress: "505 Oak Grove, Dallas, TX",
//       orderNumber: "ORD008",
//       driverName: "Helen Adams",
//       rate: "$135",
//       pickupLocation: "Dallas, TX",
//     },
//     {
//       tripNumber: "TRIP009",
//       date: "2025-01-23",
//       status: "Completed",
//       customer: "James Clark",
//       customerPhone: "901-234-5678",
//       customerAddress: "606 Pine St, Orlando, FL",
//       orderNumber: "ORD009",
//       driverName: "Isaac Wilson",
//       rate: "$130",
//       pickupLocation: "Orlando, FL",
//     },
//     {
//       tripNumber: "TRIP010",
//       date: "2025-01-24",
//       status: "Load Confirmed",
//       customer: "Ava Lee",
//       customerPhone: "012-345-6789",
//       customerAddress: "707 Sunset Blvd, Austin, TX",
//       orderNumber: "ORD010",
//       driverName: "Jack Taylor",
//       rate: "$145",
//       pickupLocation: "Austin, TX",
//     },
//     {
//       tripNumber: "TRIP011",
//       date: "2025-01-25",
//       status: "In Progress",
//       customer: "Mason Scott",
//       customerPhone: "123-456-7891",
//       customerAddress: "808 Meadow Ln, Seattle, WA",
//       orderNumber: "ORD011",
//       driverName: "Kate Brown",
//       rate: "$120",
//       pickupLocation: "Seattle, WA",
//     },
//     {
//       tripNumber: "TRIP012",
//       date: "2025-01-26",
//       status: "Delivered",
//       customer: "Amelia Johnson",
//       customerPhone: "234-567-8902",
//       customerAddress: "909 Willow St, Boston, MA",
//       orderNumber: "ORD012",
//       driverName: "Leo Martinez",
//       rate: "$105",
//       pickupLocation: "Boston, MA",
//     },
//     {
//       tripNumber: "TRIP013",
//       date: "2025-01-27",
//       status: "In Transit",
//       customer: "Lucas Walker",
//       customerPhone: "345-678-9013",
//       customerAddress: "1010 Elm Ave, Denver, CO",
//       orderNumber: "ORD013",
//       driverName: "Mia Carter",
//       rate: "$125",
//       pickupLocation: "Denver, CO",
//     },
//     {
//       tripNumber: "TRIP014",
//       date: "2025-01-28",
//       status: "Dispatched",
//       customer: "Ethan Young",
//       customerPhone: "456-789-0124",
//       customerAddress: "1111 Maple Rd, Minneapolis, MN",
//       orderNumber: "ORD014",
//       driverName: "Noah Evans",
//       rate: "$115",
//       pickupLocation: "Minneapolis, MN",
//     },
//     {
//       tripNumber: "TRIP015",
//       date: "2025-01-29",
//       status: "Scheduled",
//       customer: "Charlotte King",
//       customerPhone: "567-890-1235",
//       customerAddress: "1212 Cedar Dr, Portland, OR",
//       orderNumber: "ORD015",
//       driverName: "Olivia Lewis",
//       rate: "$140",
//       pickupLocation: "Portland, OR",
//     },
//     {
//       tripNumber: "TRIP016",
//       date: "2025-01-30",
//       status: "Load Confirmed",
//       customer: "Benjamin Harris",
//       customerPhone: "678-901-2346",
//       customerAddress: "1313 Pine Ave, Detroit, MI",
//       orderNumber: "ORD016",
//       driverName: "Paul Wright",
//       rate: "$155",
//       pickupLocation: "Detroit, MI",
//     },
//     {
//       tripNumber: "TRIP017",
//       date: "2025-01-31",
//       status: "Completed",
//       customer: "Ella Moore",
//       customerPhone: "789-012-3457",
//       customerAddress: "1414 Birch Ln, Raleigh, NC",
//       orderNumber: "ORD017",
//       driverName: "Quinn Hill",
//       rate: "$125",
//       pickupLocation: "Raleigh, NC",
//     },
//     {
//       tripNumber: "TRIP018",
//       date: "2025-02-01",
//       status: "In Transit",
//       customer: "Sebastian Adams",
//       customerPhone: "890-123-4568",
//       customerAddress: "1515 Sunset Blvd, San Diego, CA",
//       orderNumber: "ORD018",
//       driverName: "Ryan Scott",
//       rate: "$130",
//       pickupLocation: "San Diego, CA",
//     },
//     {
//       tripNumber: "TRIP019",
//       date: "2025-02-02",
//       status: "Dispatched",
//       customer: "Scarlett Martinez",
//       customerPhone: "901-234-5679",
//       customerAddress: "1616 Oak Dr, San Jose, CA",
//       orderNumber: "ORD019",
//       driverName: "Sophia Turner",
//       rate: "$140",
//       pickupLocation: "San Jose, CA",
//     },
//     {
//       tripNumber: "TRIP020",
//       date: "2025-02-03",
//       status: "Scheduled",
//       customer: "Oliver Roberts",
//       customerPhone: "012-345-6790",
//       customerAddress: "1717 Cedar Ln, Salt Lake City, UT",
//       orderNumber: "ORD020",
//       driverName: "Thomas Clark",
//       rate: "$100",
//       pickupLocation: "Salt Lake City, UT",
//     },
//   ];
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleItemsPerPageChange = (event) => {
//     setItemsPerPage(parseInt(event.target.value, 10));
//     setCurrentPage(1); // Reset to the first page when changing items per page
//   };

//   // Calculate the start and end index for the current page
//   const indexOfLastTrip = currentPage * itemsPerPage;
//   const indexOfFirstTrip = indexOfLastTrip - itemsPerPage;
//   const currentTrips = trips.slice(indexOfFirstTrip, indexOfLastTrip);

//   // Calculate page numbers for pagination
//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(trips.length / itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }
//   const statusList = [
//     "Load Confirmed",
//     "Dispatched",
//     "In Transit",
//     "Delivered",
//     "Payment received",
//   ];
  
//   const getStatusColor = (status, currentStatus) => {
//     if (status === currentStatus) {
//       return 'bg-success'; // Mark current status as green
//     }
//     return statusList.indexOf(status) < statusList.indexOf(currentStatus) ? 'bg-success' : 'bg-secondary';
//   };

//   const handleSelectRow = (event, trip) => {
//     if (event.target.checked) {
//       setSelectedTrips((prevSelected) => [...prevSelected, trip.tripNumber]);
//       setSelectedTrip(trip); // Set the trip as the current trip
//       setIsSliderOpen(true); // Open the slider
//     } else {
//       setSelectedTrips((prevSelected) =>
//         prevSelected.filter((num) => num !== trip.tripNumber)
//       );
//       setSelectedTrip(null); // Clear the current trip
//       setIsSliderOpen(false); // Close the slider
//     }
//   };

//   const handleSelectAll = (event) => {
//     if (event.target.checked) {
//       setSelectedTrips(trips.map((trip) => trip.tripNumber));
//     } else {
//       setSelectedTrips([]);
//     }
//     setSelectedTrip(null); // Clear any selected trip
//     setIsSliderOpen(false); // Close the slider
//   };

//   const handleViewDetails = (trip) => {
//     setSelectedTrip(trip); // Set the trip as the current trip
//     setIsSliderOpen(true); // Open the slider
//   };

//   const closeSlider = () => {
//     setSelectedTrip(null); // Clear the selected trip
//     setIsSliderOpen(false); // Close the slider
//   };

//   return (
//     <div
//       className={`${applyFilterStyles.container} ${
//         isSliderOpen ? applyFilterStyles.sliderOpen : ''
//       }`}
//     >
//       <h1 className={applyFilterStyles.applyFiltersTitle}>Apply Filters</h1>
//       <div className={applyFilterStyles.filterOptions}>
//         <button className={applyFilterStyles.filterOption}>
//           <FaUsers className={applyFilterStyles.icon} /> All Trips
//         </button>
//         <button className={applyFilterStyles.filterOption}>Dispatched</button>
//         <button className={applyFilterStyles.filterOption}>Pending</button>
//         <button className={applyFilterStyles.filterOption}>In Transit</button>
//         <button className={applyFilterStyles.filterOption}>
//           <FaCheck className={applyFilterStyles.icon} /> Delivered
//         </button>
//         <button className={applyFilterStyles.filterOption}>
//           <FaBan className={applyFilterStyles.icon} /> In Draft
//         </button>
//       </div>

//       <div className={applyFilterStyles.tableSection}>
//         <table className={applyFilterStyles.driverTable + " table table-responsive table-hover table-striped"}>
//           <thead>
//             <tr>
//               <th>
//                 <input
//                   type="checkbox"
//                   onChange={handleSelectAll}
//                   checked={
//                     selectedTrips.length === trips.length && trips.length > 0
//                   }
//                 />
//               </th>
//               <th>Trip Number</th>
//               <th>Date</th>
//               <th>Status</th>
//               <th>Customer</th>
//               <th>Rate</th>
//               <th>Pickup Location</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {trips.map((trip) => (
//               <tr key={trip.tripNumber}>
//                 <td>
//                   <input
//                     type="checkbox"
//                     onChange={(e) => handleSelectRow(e, trip)}
//                     checked={selectedTrips.includes(trip.tripNumber)}
//                   />
//                 </td>
//                 <td>{trip.tripNumber}</td>
//                 <td>{trip.date}</td>
//                 <td>
//                   {/* <span
//                     className={`badge ${["Delivered", "In Transit", "Payment received"].includes(trip.status) ? ' bg-success ' : ' bg-danger '}`}
//                   >
//                     {trip.status}
//                   </span> */}
//                   <span
//                     className={`badge ${["Delivered", "In Transit", "Payment received"].includes(trip.status) ? 'bg-success' :
//                       ["Dispatched", "Load Confirmed"].includes(trip.status) ? 'bg-danger' :
//                         trip.status == "In Draft" ? 'bg-dark' : 'bg-secondary'}`}
//                   >
//                     {trip.status}
//                   </span>
//                 </td>

//                 <td>{trip.customer}</td>
//                 <td>{trip.rate}</td>
//                 <td>{trip.pickupLocation}</td>
//                 <td>
//                   <button
//                     onClick={() => handleViewDetails(trip)}
//                     className={applyFilterStyles.viewLink}
//                   >
//                     <FaEllipsisV />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="d-flex justify-content-between mt-3">
//           <div>
//             <label className="me-2">Items per page:</label>
//             <select onChange={handleItemsPerPageChange} value={itemsPerPage}>
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//               <option value={15}>15</option>
//             </select>
//           </div>
//           <div>
//             <button 
//               onClick={() => handlePageChange(currentPage - 1)} 
//               disabled={currentPage === 1}
//             >
//               Prev
//             </button>
//             <button 
//               onClick={() => handlePageChange(currentPage + 1)} 
//               disabled={indexOfLastTrip >= trips.length}
//             >
//               Next
//             </button>
//             </div>
//         </div>
//       </div>

//       {isSliderOpen && selectedTrip && (
//         <div className={`${applyFilterStyles.slider} ${isSliderOpen ? applyFilterStyles.open : ''}`}>
//           <button className={applyFilterStyles.closeButton} onClick={closeSlider}>×</button>
//           <div className={applyFilterStyles.content}>
//             <div className={applyFilterStyles.mapContainer}>
//               <h3>Map View</h3>
//               {/* Insert a map component here */}
//               <div style={{ height: "200px", backgroundColor: "#e0e0e0" }}>Map Placeholder</div>
//             </div>

//             <h3>Customer Details</h3>
//             <p><strong>Customer:</strong> {selectedTrip.customer}</p>
//             <p><strong>Phone:</strong> {selectedTrip.customerPhone}</p>
//             <p><strong>Address:</strong> {selectedTrip.customerAddress}</p>

//             <h3>Status Progression</h3>
//             <div className={applyFilterStyles.statusProgress}>
//               {statusList.map((status) => (
//                 <div key={status} className={`statusStep ${selectedTrip.status === status ? 'active' : ''}`}>
//                   <span
//                     className={`badge rounded-circle ${getStatusColor(status, selectedTrip.status)
//                       } text-white p-2 ms-4 me-4`}
//                   >
//                     {selectedTrip.status === status ? (
//                       <i className="fa-solid fa-check"></i>
//                     ) : (
//                       <i className="fa-solid fa-check"></i>
//                     )}
//                   </span>
//                   {status}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




// import React, { useState } from 'react';
// import applyFilterStyles from '../FilterTable/Filter.module.css';
// import { FaUsers, FaCheck, FaBan } from "react-icons/fa";

// export default function TripsTable() {
//   const [selectedDriver, setSelectedDriver] = useState(null);
//   const [selectedTrip, setSelectedTrip] = useState(null);
//   const [selectedTrips, setSelectedTrips] = useState([]);
//   const [isSliderOpen, setIsSliderOpen] = useState(false);

//   const handleSelectRow = (event, tripNumber) => {
//     if (event.target.checked) {      
//       setSelectedTrips((prevSelected) => [...prevSelected, tripNumber]);
//       setIsSliderOpen(true);
//     } else {
//       setSelectedTrips((prevSelected) =>
//         prevSelected.filter((num) => num !== tripNumber)
//       );
//     }
//   };

//   const handleSelectAll = (event) => {
//     if (event.target.checked) {
//       setSelectedTrips(trips.map((trip) => trip.tripNumber));
      
//     } else {
//       setSelectedTrips([]);
//     }
//   };
//   const trips = [
//     {
//       tripNumber: "TRIP001",
//       date: "2025-01-15",
//       status: "Completed",
//       customer: "John Doe",
//       rate: "$100",
//       pickupLocation: "New York, NY",
//     },
//     {
//       tripNumber: "TRIP002",
//       date: "2025-01-16",
//       status: "Scheduled",
//       customer: "Jane Smith",
//       rate: "$120",
//       pickupLocation: "Los Angeles, CA",
//     },
//     {
//       tripNumber: "TRIP003",
//       date: "2025-01-17",
//       status: "Cancelled",
//       customer: "Sam Wilson",
//       rate: "$90",
//       pickupLocation: "Chicago, IL",
//     },
//     {
//       tripNumber: "TRIP004",
//       date: "2025-01-18",
//       status: "In Progress",
//       customer: "Emily Davis",
//       rate: "$110",
//       pickupLocation: "Houston, TX",
//     },
//     {
//       tripNumber: "TRIP005",
//       date: "2025-01-19",
//       status: "Completed",
//       customer: "Michael Brown",
//       rate: "$95",
//       pickupLocation: "San Francisco, CA",
//     },
//   ];


//   const handleViewDetails = (trips) => {
//     setselectedTrip(trips);
//     setIsSliderOpen(true);
//   };
 

//   const closeSlider = () => {
//     setIsSliderOpen(false);
//   };

//   return (
//     <div>
//       <h1 className={applyFilterStyles.applyFiltersTitle}>Apply Filters</h1>
//       <div className={applyFilterStyles.filterOptions}>
//         <button className={applyFilterStyles.filterOption}>
//           <FaUsers className={applyFilterStyles.icon} /> All Trips
//         </button>
//         <button className={applyFilterStyles.filterOption}>Dispatched</button>
//         <button className={applyFilterStyles.filterOption}>Pending</button>
//         <button className={applyFilterStyles.filterOption}>In Transit</button>
//         <button className={applyFilterStyles.filterOption}>
//           <FaCheck className={applyFilterStyles.icon} /> Delivered
//         </button>
//         <button className={applyFilterStyles.filterOption}>
//           <FaBan className={applyFilterStyles.icon} /> In Draft
//         </button>
//       </div>

//       <div className={applyFilterStyles.tableSection}>
//         <table className={applyFilterStyles.driverTable}>
//           <thead>
//             <tr>
//               <th>
//                 <input
//                   type="checkbox"
//                   onChange={handleSelectAll}  
//                 />
//               </th>
//               <th>Trip Number</th>
//               <th>Date</th>
//               <th>Status</th>
//               <th>Customer</th>
//               <th>Rate</th>
//               <th>Pickup Location</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {trips.map((trip) => (
//               <tr key={trip.tripNumber}>
//                 <td>
//                   <input
//                     type="checkbox"
//                     onChange={(e) => handleSelectRow(e, trip.tripNumber)}  
//                   />
//                 </td>
//                 <td>{trip.tripNumber}</td>
//                 <td>{trip.date}</td>
//                 <td>{trip.status}</td>
//                 <td>{trip.customer}</td>
//                 <td>{trip.rate}</td>
//                 <td>{trip.pickupLocation}</td>
//                 <td>
//                   <button
//                     onClick={() => handleViewDetails(trip)}
//                     className={applyFilterStyles.viewLink}
//                   >
//                     View Trip
//                   </button>
//                   <span
//                     className={applyFilterStyles.threeDots}
//                     onClick={() => handleThreeDotsClick(trip)}
//                   >
//                     &#x22EE;  
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//       </div>

//       {selectedTrip && (
//         <div className={`${applyFilterStyles.slider} ${isSliderOpen ? applyFilterStyles.open : ''}`}>
//           <button className={applyFilterStyles.closeButton} onClick={closeSlider}>
//             ×
//           </button>
//           <div className={applyFilterStyles.content}>
//             <p className={applyFilterStyles.drivertitle}>Driver Details</p>
//             <hr />

//             {/* First Row: Photo and Basic Details */}
//             <div className={applyFilterStyles.driverRow}>
//               <img
//                 src={selectedTrip.image}
//                 alt={selectedTrip.name}
//                 className={applyFilterStyles.driverPhoto}
//               />
//               <div className={applyFilterStyles.driverDetails}>
//                 <p><strong>Driver ID:</strong> {selectedTrip.id}</p>
//                 <p><strong>Name:</strong> {selectedTrip.name}</p>
//                 <p><strong>Address:</strong> 1234 Main St, Springfield, USA</p>  
//               </div>
//             </div>


//             <div className={applyFilterStyles.driverDate}>
//               <p><strong>Date:</strong> January 18, 2025</p>
//             </div>


//             <div className={applyFilterStyles.driverOrder}>

//               <p><strong>Jane Doe</strong> </p>
//               <p><strong>[5876869866]</strong> </p>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }
