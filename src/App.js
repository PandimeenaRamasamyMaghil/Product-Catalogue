
// import React, { useState } from 'react';
// import Usestatehook from './Hooks/Usestatehook'



// const App = () => {
  

//   return (

// <Usestatehook/>

  
//   );
// };


// export default App;
















// import React, { useState } from "react";

// const App = () => {
//   const [firstRowTable, setFirstRowTable] = useState([
//     { label: "Dinein" },
//     { label: "Pickup" },
//     { label: "Delivery" },
//     { label: "Dinein" },
//     { label: "Pickup" },
//     { label: "Delivery" },
//     { label: "Inventory" },
//     { label: "Customize" }
//   ]);

//   const [secondRowTable, setSecondRowTable] = useState([
//     ["Ac", "Nonac"], // Subheaders for Dinein
//     ["Inhouse", "Swiggy", "Zomato"], // Subheaders for Pickup
//     ["Inhouse", "Swiggy", "Zomato"], // Subheaders for Delivery
//     ["Ac", "Nonac"], // Subheaders for another Dinein
//     ["Inhouse", "Swiggy", "Zomato"], // Subheaders for Pickup
//     ["Inhouse", "Swiggy", "Zomato"], // Subheaders for Delivery
//     ["Total", "Threshold"], // Subheaders for Inventory
//     ["Customize"] // Subheaders for Customize
//   ]);

//   const [bodyData, setBodyData] = useState([
//     {
//       dinein1: ["Ac1", "Ac2"],
//       pickup1: ["Inhouse1", "Swiggy1", "Zomato1"],
//       delivery1: ["Inhouse2", "Swiggy2", "Zomato2"],
//       dinein2: ["Ac1", "Ac2"],
//       pickup2: ["Inhouse1", "Swiggy1", "Zomato1"],
//       delivery2: ["Inhouse2", "Swiggy2", "Zomato2"],
//       inventory: ["Total1", "Threshold1"],
//       customize: ["Customize1"]
//     },
//     {
//       dinein1: ["Bc1", "Bc2"],
//       pickup1: ["Inhouse1", "Swiggy1", "Zomato1"],
//       delivery1: ["Inhouse2", "Swiggy2", "Zomato2"],
//       dinein2: ["Ac1", "Ac2"],
//       pickup2: ["Inhouse1", "Swiggy1", "Zomato1"],
//       delivery2: ["Inhouse2", "Swiggy2", "Zomato2"],
//       inventory: ["Total1", "Threshold1"],
//       customize: ["Customize1"]
//     },
//     // Add more data as needed
//   ]);

//   const [draggedIndex, setDraggedIndex] = useState(null);
//   const [draggedRowIndex, setDraggedRowIndex] = useState(null);

//   const handleDragStart = (index) => {
//     setDraggedIndex(index);
//   };

//   const handleDragOver = (index) => {
//     if (draggedIndex !== index) {
//       const updatedFirstRowTable = [...firstRowTable];
//       const updatedSecondRowTable = [...secondRowTable];

//       const draggedItem = updatedFirstRowTable[draggedIndex];
//       const draggedSubheader = updatedSecondRowTable[draggedIndex];

//       updatedFirstRowTable.splice(draggedIndex, 1);
//       updatedFirstRowTable.splice(index, 0, draggedItem);

//       updatedSecondRowTable.splice(draggedIndex, 1);
//       updatedSecondRowTable.splice(index, 0, draggedSubheader);

//       // Update body data according to header drag
//       const updatedBodyData = bodyData.map(row => {
//         // Ensure row is a valid object
//         if (row && typeof row === 'object') {
//           const reorderedRow = Object.values(row);
//           const draggedCell = reorderedRow.splice(draggedIndex, 1)[0];
//           reorderedRow.splice(index, 0, draggedCell);

//           // Preserve the original object keys
//           return reorderedRow.reduce((acc, val, i) => {
//             const key = Object.keys(row)[i];
//             acc[key] = val;
//             return acc;
//           }, {});
//         }
//         return row; // Return row as is if it's not a valid object
//       });

//       setFirstRowTable(updatedFirstRowTable);
//       setSecondRowTable(updatedSecondRowTable);
//       setBodyData(updatedBodyData);
//       setDraggedIndex(index);
//     }
//   };

//   const handleDragEnd = () => {
//     setDraggedIndex(null);
//   };

//   const handleRowDragStart = (index) => {
//     setDraggedRowIndex(index);
//   };

//   const handleRowDragOver = (index) => {
//     if (draggedRowIndex !== index) {
//       const updatedBodyData = [...bodyData];
//       const draggedRow = updatedBodyData[draggedRowIndex];

//       updatedBodyData.splice(draggedRowIndex, 1);
//       updatedBodyData.splice(index, 0, draggedRow);

//       setBodyData(updatedBodyData);
//       setDraggedRowIndex(index);
//     }
//   };

//   const handleRowDragEnd = () => {
//     setDraggedRowIndex(null);
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           {firstRowTable.map((header, index) => (
//             <th
//               key={index}
//               draggable
//               onDragStart={() => handleDragStart(index)}
//               onDragOver={() => handleDragOver(index)}
//               onDragEnd={handleDragEnd}
//               colSpan={secondRowTable[index].length}
//             >
//               {header.label}
//             </th>
//           ))}
//         </tr>
//         <tr>
//           {secondRowTable.flat().map((subheader, subIndex) => (
//             <td key={subIndex}>{subheader}</td>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {bodyData.map((rowData, rowIndex) => (
//           <tr
//             key={rowIndex}
//             draggable
//             onDragStart={() => handleRowDragStart(rowIndex)}
//             onDragOver={() => handleRowDragOver(rowIndex)}
//             onDragEnd={handleRowDragEnd}
//           >
//             {Object.values(rowData || {}).flat().map((cellData, cellIndex) => (
//               <td key={cellIndex}>{cellData}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default App;
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const App = () => {
  const [firstRowTable, setFirstRowTable] = useState([
    { label: "Dinein" },
    { label: "Pickup" },
    { label: "Delivery" },
    { label: "Dinein" },
    { label: "Pickup" },
    { label: "Delivery" },
    { label: "Inventory" },
    { label: "Customize" }
  ]);

  const [secondRowTable, setSecondRowTable] = useState([
    ["Ac", "Nonac"], // Subheaders for Dinein
    ["Inhouse", "Swiggy", "Zomato"], // Subheaders for Pickup
    ["Inhouse", "Swiggy", "Zomato"], // Subheaders for Delivery
    ["Ac", "Nonac"], // Subheaders for another Dinein
    ["Inhouse", "Swiggy", "Zomato"], // Subheaders for Pickup
    ["Inhouse", "Swiggy", "Zomato"], // Subheaders for Delivery
    ["Total", "Threshold"], // Subheaders for Inventory
    ["Customize"] // Subheaders for Customize
  ]);

  const [bodyData, setBodyData] = useState([
    {
      dinein1: ["Ac1", "Ac2"],
      pickup1: ["Inhouse1", "Swiggy1", "Zomato1"],
      delivery1: ["Inhouse2", "Swiggy2", "Zomato2"],
      dinein2: ["Ac1", "Ac2"],
      pickup2: ["Inhouse1", "Swiggy1", "Zomato1"],
      delivery2: ["Inhouse2", "Swiggy2", "Zomato2"],
      inventory: ["Total1", "Threshold1"],
      customize: ["Customize1"]
    },
    {
      dinein1: ["Bc1", "Ac2"],
      pickup1: ["Inhouse1", "Swiggy1", "Zomato1"],
      delivery1: ["Inhouse2", "Swiggy2", "Zomato2"],
      dinein2: ["Ac1", "Ac2"],
      pickup2: ["Inhouse1", "Swiggy1", "Zomato1"],
      delivery2: ["Inhouse2", "Swiggy2", "Zomato2"],
      inventory: ["Total1", "Threshold1"],
      customize: ["Customize1"]
    },
    {
      dinein1: ["Cc1", "Ac2"],
      pickup1: ["Inhouse1", "Swiggy1", "Zomato1"],
      delivery1: ["Inhouse2", "Swiggy2", "Zomato2"],
      dinein2: ["Ac1", "Ac2"],
      pickup2: ["Inhouse1", "Swiggy1", "Zomato1"],
      delivery2: ["Inhouse2", "Swiggy2", "Zomato2"],
      inventory: ["Total1", "Threshold1"],
      customize: ["Customize1"]
    },
    // Add more data as needed
  ]);

  const [secondTableData, setSecondTableData] = useState([
    { id: 1, name: "Item 1", code: "001" },
    { id: 2, name: "Item 2", code: "002" },
    { id: 3, name: "Item 3", code: "003" },
    // Add more rows as needed
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // Handle dragging within the first table body
    if (source.droppableId === 'body-rows' || source.droppableId === 'second-table-body-rows') {
      const reorderedBodyData = Array.from(bodyData);
      const reorderedSecondTableData = Array.from(secondTableData);

      const [removedBodyRow] = reorderedBodyData.splice(source.index, 1);
      const [removedSecondTableRow] = reorderedSecondTableData.splice(source.index, 1);

      reorderedBodyData.splice(destination.index, 0, removedBodyRow);
      reorderedSecondTableData.splice(destination.index, 0, removedSecondTableRow);

      setBodyData(reorderedBodyData);
      setSecondTableData(reorderedSecondTableData);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ marginBottom: "40px" }}>
        <h2>First Table</h2>
        <table>
          <thead>
            <Droppable droppableId="header-row" direction="horizontal">
              {(provided) => (
                <tr {...provided.droppableProps} ref={provided.innerRef}>
                  {firstRowTable.map((header, index) => (
                    <Draggable key={index} draggableId={`header-${index}`} index={index}>
                      {(provided) => (
                        <th
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          colSpan={secondRowTable[index].length}
                        >
                          {header.label}
                        </th>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </tr>
              )}
            </Droppable>
            <tr>
              {secondRowTable.flat().map((subheader, subIndex) => (
                <td key={subIndex}>{subheader}</td>
              ))}
            </tr>
          </thead>
          <Droppable droppableId="body-rows" type="ROW">
            {(provided) => (
              <tbody {...provided.droppableProps} ref={provided.innerRef}>
                {bodyData.map((rowData, rowIndex) => (
                  <Draggable key={rowIndex} draggableId={`row-${rowIndex}`} index={rowIndex}>
                    {(provided) => (
                      <tr {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        {Object.values(rowData).flat().map((cellData, cellIndex) => (
                          <td key={cellIndex}>
                            {cellData}
                          </td>
                        ))}
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </tbody>
            )}
          </Droppable>
        </table>
      </div>

      <div>
        <h2>Second Table</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Code</th>
            </tr>
          </thead>
          <Droppable droppableId="second-table-body-rows" type="ROW">
            {(provided) => (
              <tbody {...provided.droppableProps} ref={provided.innerRef}>
                {secondTableData.map((row, rowIndex) => (
                  <Draggable key={row.id} draggableId={`second-table-row-${row.id}`} index={rowIndex}>
                    {(provided) => (
                      <tr {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.code}</td>
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </tbody>
            )}
          </Droppable>
        </table>
      </div>
    </DragDropContext>
  );
};

export default App;

