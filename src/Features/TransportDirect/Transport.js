// import * as XLSX from "xlsx";

// export async function fetchExcelData(setData) {
//   try {
//     const response = await fetch("/assets/Data/MyDataSheet.xlsx");
//     const arrayBuffer = await response.arrayBuffer();
//     const workbook = XLSX.read(arrayBuffer, { type: "array" });
//     const sheetName = workbook.SheetNames[0];
//     const worksheet = workbook.Sheets[sheetName];
//     const jsonData = XLSX.utils.sheet_to_json(worksheet);
//     setData(jsonData);
//   } catch (error) {
//     console.error("Error loading Excel file:", error);
//   }
// }

// export function handleEdit(index, data, setEditRow, setEditValues, setShowModal) {
//   setEditRow(index);
//   setEditValues(data[index]);
//   setShowModal(true);
// }

// export function handleSaveEdit(editRow, data, setData, editValues, setShowModal) {
//   const updatedData = [...data];
//   updatedData[editRow] = editValues;
//   setData(updatedData);
//   setShowModal(false);
// }

// export function handleDelete(index, data, setData) {
//   if (window.confirm("Are you sure you want to delete this row?")) {
//     setData(data.filter((_, i) => i !== index));
//   }
// }

// import * as XLSX from "xlsx";

// // 🛑 Define columns to exclude
// const excludedColumns = [
//   "Date",
//   "Machship",
//   "Connote",
//   "Account Code",
//   "From Name",
//   "To Name",
//   "Item",
//   "Total Sell",
//   "Notes",
// ];

// // ✅ Function to fetch & filter Excel data
// export const fetchExcelData = async (setData) => {
//   try {
//     const response = await fetch("/assets/Data/MyDataSheet.xlsx");
//     const arrayBuffer = await response.arrayBuffer();

//     const workbook = XLSX.read(arrayBuffer, { type: "array" });
//     const sheetName = workbook.SheetNames[0];
//     const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

//     // ❌ Remove unwanted columns
//     const filteredData = sheet.map((row) => {
//       const newRow = {};
//       Object.keys(row).forEach((key) => {
//         if (!excludedColumns.includes(key)) {
//           newRow[key] = row[key];
//         }
//       });
//       return newRow;
//     });

//     setData(filteredData);
//   } catch (error) {
//     console.error("Error loading Excel file:", error);
//   }
// };

// // ✅ Handle Edit
// export const handleEdit = (index, data, setEditRow, setEditValues, setShowModal) => {
//   setEditRow(index);
//   setEditValues(data[index]);
//   setShowModal(true);
// };

// // ✅ Save Edit
// export const handleSaveEdit = (editRow, data, setData, editValues, setShowModal) => {
//   const updatedData = [...data];
//   updatedData[editRow] = editValues;
//   setData(updatedData);
//   setShowModal(false);
// };

// // ✅ Delete Row
// export const handleDelete = (index, data, setData) => {
//   if (confirm("Are you sure you want to delete this row?")) {
//     const updatedData = data.filter((_, i) => i !== index);
//     setData(updatedData);
//   }
// };

"use client";
import * as XLSX from "xlsx";

// ✅ Function to Read Excel Data
export const fetchExcelData = (setData) => {
  fetch("/assets/Data/MyDataSheet.xlsx")
    .then((res) => res.arrayBuffer())
    .then((data) => {
      const workbook = XLSX.read(data, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // ✅ Remove first two rows and extract headers from the 3rd row
      const headers = jsonData[2]; // 3rd row as header
      const rows = jsonData.slice(3); // Data starts from 4th row

      // ✅ Remove unnecessary columns
      const excludedColumns = [
        "Date",
        "Machship",
        "Connote",
        "From Name",
        "To Name",
        "Item",
        "Total Sell",
        "Notes",
      ];
      const filteredData = rows.map((row) => {
        let rowData = {};
        headers.forEach((key, index) => {
          if (!excludedColumns.includes(key)) {
            rowData[key] = row[index];
          }
        });
        return rowData;
      });

      setData(filteredData);
    })
    .catch((err) => console.error("Error loading Excel file:", err));
};

// ✅ Handle Edit Function
export const handleEdit = (index, data, setEditRow, setEditValues, setShowModal) => {
  setEditRow(index);
  setEditValues(data[index]);
  setShowModal(true);
};

// ✅ Handle Save Edit
export const handleSaveEdit = (editRow, data, setData, editValues, setShowModal) => {
  const updatedData = [...data];
  updatedData[editRow] = editValues;
  setData(updatedData);
  setShowModal(false);
};

// ✅ Handle Delete
export const handleDelete = (index, data, setData) => {
  if (window.confirm("Are you sure you want to delete this row?")) {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  }
};
