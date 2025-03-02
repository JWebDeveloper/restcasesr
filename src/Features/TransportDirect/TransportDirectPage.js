"use client";
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  fetchExcelData,
  handleEdit,
  handleSaveEdit,
  handleDelete,
} from "../TransportDirect/Transport";

export default function ExcelTable() {
  const [data, setData] = useState([]);
  const [editRow, setEditRow] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editValues, setEditValues] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // ✅ Search input state

  const rowsPerPage = 10; // Adjust per page row count

  useEffect(() => {
    fetchExcelData((fetchedData) => {
      // ✅ Remove empty rows
      const filteredData = fetchedData.filter((row) =>
        Object.values(row).some(
          (value) => value !== null && value !== undefined && value.toString().trim() !== ""
        )
      );
      setData(filteredData);
    });
  }, []);

  // ✅ Filter Data Based on Search Query
  const filteredData = data.filter((row) =>
    Object.values(row).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // ✅ Pagination Logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="container mt-4">
      <h2>Data Sheet</h2>

      {/* ✅ Search Box */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search any text..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setCurrentPage(1); // Reset to first page on search
        }}
      />

      {currentRows.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              {Object.keys(currentRows[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() =>
                      handleEdit(index + indexOfFirstRow, data, setEditRow, setEditValues, setShowModal)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(index + indexOfFirstRow, data, setData)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No matching records found...</p>
      )}

      {/* ✅ Pagination Buttons */}
      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn btn-danger me-2"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>

        {Array.from({ length: Math.min(4, totalPages) }, (_, i) => {
          let page = Math.max(1, currentPage - 2) + i;
          if (page > totalPages) return null;
          return (
            <button
              key={page}
              className={`btn ${page === currentPage ? "btn-dark" : "btn-light"} me-2`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          );
        })}

        <button
          className="btn btn-danger"
          disabled={currentPage >= totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// "use client";
// import { useEffect, useState } from "react";
// import { Modal, Button } from "react-bootstrap";
// import {
//   fetchExcelData,
//   handleEdit,
//   handleSaveEdit,
//   handleDelete,
// } from "../TransportDirect/Transport";

// export default function ExcelTable() {
//   const [data, setData] = useState([]);
//   const [editRow, setEditRow] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [editValues, setEditValues] = useState({});
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 10; // Number of rows per page

//   useEffect(() => {
//     fetchExcelData((fetchedData) => {
//       // ✅ Remove completely empty rows
//       const filteredData = fetchedData.filter((row) =>
//         Object.values(row).some((value) => value && value.toString().trim() !== "")
//       );
//       setData(filteredData);
//     });
//   }, []);

//   // ✅ Total Pages Calculation
//   const totalPages = Math.ceil(data.length / rowsPerPage);

//   // ✅ Pagination Logic
//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

//   return (
//     <>
//       <div className="container mt-4">
//         <h2>Data Sheet</h2>

//         {currentRows.length > 0 ? (
//           <table className="table table-bordered">
//             <thead>
//               <tr>
//                 {Object.keys(currentRows[0]).map((key) => (
//                   <th key={key}>{key}</th>
//                 ))}
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentRows.map((row, index) => (
//                 <tr key={index}>
//                   {Object.values(row).map((value, i) => (
//                     <td key={i}>{value}</td>
//                   ))}
//                   <td>
//                     <button
//                       className="btn btn-primary btn-sm me-2"
//                       onClick={() =>
//                         handleEdit(
//                           index + indexOfFirstRow,
//                           data,
//                           setEditRow,
//                           setEditValues,
//                           setShowModal
//                         )
//                       }
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() =>
//                         handleDelete(index + indexOfFirstRow, data, setData)
//                       }
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No data available.</p>
//         )}

//         {/* ✅ Pagination Controls */}
//         <div className="d-flex justify-content-center align-items-center mt-3 gap-2">
//           {/* Previous Button */}
//           <button
//             className="btn btn-danger"
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage(currentPage - 1)}
//           >
//             Prev
//           </button>

//           {/* First Page Button */}
//           {currentPage > 3 && (
//             <>
//               <button
//                 className="btn btn-outline-danger"
//                 onClick={() => setCurrentPage(1)}
//               >
//                 1
//               </button>
//               {currentPage > 4 && <span>...</span>} {/* Show "..." if needed */}
//             </>
//           )}

//           {/* Dynamic Page Number Buttons (4 Pages at a Time) */}
//           {Array.from({ length: Math.min(4, totalPages) }, (_, i) => {
//             let page = Math.max(1, currentPage - 2) + i;
//             if (page > totalPages) return null; // Prevent extra pages

//             return (
//               <button
//                 key={page}
//                 className={`btn ${
//                   currentPage === page ? "btn-primary" : "btn-outline-danger"
//                 }`}
//                 onClick={() => setCurrentPage(page)}
//               >
//                 {page}
//               </button>
//             );
//           })}

//           {/* Last Page Button */}
//           {currentPage < totalPages - 2 && (
//             <>
//               {currentPage < totalPages - 3 && <span>...</span>} {/* Show "..." if needed */}
//               <button
//                 className="btn btn-outline-danger"
//                 onClick={() => setCurrentPage(totalPages)}
//               >
//                 {totalPages}
//               </button>
//             </>
//           )}

//           {/* Next Button */}
//           <button
//             className="btn btn-danger"
//             disabled={currentPage === totalPages}
//             onClick={() => setCurrentPage(currentPage + 1)}
//           >
//             Next
//           </button>
//         </div>

//         {/* ✅ Bootstrap Modal for Editing */}
//         <Modal show={showModal} onHide={() => setShowModal(false)}>
//           <Modal.Header closeButton>
//             <Modal.Title>Edit Row</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             {editRow !== null &&
//               Object.keys(editValues).map((key, i) => (
//                 <div key={i} className="mb-3">
//                   <label className="form-label">{key}</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={editValues[key]}
//                     onChange={(e) =>
//                       setEditValues({ ...editValues, [key]: e.target.value })
//                     }
//                   />
//                 </div>
//               ))}
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setShowModal(false)}>
//               Close
//             </Button>
//             <Button
//               variant="primary"
//               onClick={() =>
//                 handleSaveEdit(editRow, data, setData, editValues, setShowModal)
//               }
//             >
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </>
//   );
// }
