import React, { useState, useEffect } from 'react';
import './App.css';

const API_BASE = "http://localhost:3001";
const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
function App() {
  const [timetable, setTimetable] = useState([]);
  useEffect(() => {
    const fetchTimetable = async () => {
      try {
        const response = await fetch(`${API_BASE}/timetables/660d5d9571b0076105a301b0`);
        const { result } = await response.json();
        setTimetable(result.Timetable); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching timetable:', error);
      }
    };

    fetchTimetable();
  }, []); // Empty dependency array to only run effect on mount

  return (
    <div className="App">
      <table style={{ borderCollapse: "collapse", width: "80%" }}>
        <tr style={{ border: "1px solid black" }}>
          <th style={{ border: "1px solid black" }}>Day/Session</th>
          <th colSpan="2" style={{ border: "1px solid black" }}>[8:00 9:00]</th>
          <th colSpan="2" style={{ border: "1px solid black" }}>[9:00 10:00]</th>
          <th colSpan="2" style={{ border: "1px solid black" }}>[10:00 11:00]</th>
          <th colSpan="2" style={{ border: "1px solid black" }}>[11:00 12:00]</th>
          <th colSpan="4" style={{ border: "1px solid black" }}>[12:00 14:00]</th>
          <th colSpan="2" style={{ border: "1px solid black" }}>[14:00 15:00]</th>
          <th colSpan="2" style={{ border: "1px solid black" }}>[15:00 16:00]</th>
          <th colSpan="2" style={{ border: "1px solid black" }}>[16:00 17:00]</th>
          <th colSpan="2" style={{ border: "1px solid black" }}>[17:00 18:00]</th>
        </tr>
        {timetable.map((row, index) => (
          <tr key={index} style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black", padding: "8px",width:"30px",height:"50px" }}>{days[index]}</td>
            {row.map((cell, cellIndex) => {
              // Print four empty columns when cellIndex is 7
              if (cellIndex === 7) {
                return (
                  <>
                  <td key={cellIndex} style={{ padding: "8px", width: "30px",backgroundColor: cell ? "#00FF00" : "transparent", border:"none"}}>{cell}</td>
                    <td style={{ padding: "8px", width: "30px" , backgroundColor:"#808080"}}></td>
                    <td style={{ padding: "8px", width: "30px" , backgroundColor:"#808080"}}></td>
                    <td style={{ padding: "8px", width: "30px" , backgroundColor:"#808080"}}></td>
                    <td style={{ padding: "8px", width: "30px" , backgroundColor:"#808080"}}></td>
                  </>
                );
              }
              // Render normal cell otherwise
              return <td key={cellIndex} style={{ border:"none", padding: "8px", width: "30px" ,backgroundColor: cell ? "#00FF00" : "transparent" }}>{cell}</td>;
            })}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;

