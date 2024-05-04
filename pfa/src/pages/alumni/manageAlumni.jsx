import { useState } from "react"
import React from 'react'

const manageAlumni = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [classPopup, setclassPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handleclassPop = () => {
    setclassPopup(!showPopup);
  };
  return (
   
       <div className="containerContent">
    
    <div className='current'>
      <div className='titleOP'>Manage Alumnis</div>

        
          
        <div className='content'>
          <div className='manage'>
            <div className='manageBar'>
            <div className='searchby'>
              <h1 className='titleSearch'>Search by</h1>
              <div className='search'>
                <label htmlFor="level">Level</label>
                <select type="text" className="form-control" >
                  <option value="">Select...</option>
                  <option value="First level">First level</option>
                  <option value="Second level">Second level</option>
                  <option value="Third level">Third level</option>
                  <option value="Fourth level">Fourth level</option>
              </select>
              <label htmlFor="specialty">Specialty</label>
                <select type="text" className="form-control" >
                  <option value="">Select...</option>
                  <option value="nospec">No specialty</option>
                  <option value="Technology">Technology</option>
                  <option value="Math">Math</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Fundamental Science">Fundamental Science</option>
                  <option value="Economics">Economics</option>
                  <option value="Sports">Sports</option>
                  <option value="Literature">Literature</option>
              </select></div></div><div>|<br/>|<br/>|<br/>|</div>
              <div className='crud'><button  className="w-20 btn btn-sm btn-primary" onClick={togglePopup}><i class="fa-solid fa-plus fa-sm"></i>  Add alumni</button></div>
            </div>
          <table className="table table-secondary table-striped">
          <thead>
  <tr>
    
    <th scope="col"colSpan={2}>First Name</th>
    <th scope="col"colSpan={2}>Last Name</th>
    <th scope="col"colSpan={2}>Age</th>
    <th scope="col"colSpan={2}>Specialty</th>
    <th scope="col"colSpan={2}>Class</th>
    <th scope="col"colSpan={3}>Manage</th>
  </tr>
</thead>
<tbody >
  <tr>
    <td scope="row" colSpan={2}>Mohamed</td>
    <td colSpan={2}>Magherbi</td>
    <td colSpan={2}>18</td>
    <td colSpan={2}>Computer science</td>
    <td colSpan={2}></td>
    <td colSpan={3} ><button  className="w-50 btn btn-sm btn-primary" onClick={handleclassPop}><i class="fa-solid fa-plus fa-sm"></i></button><button  className="w-50 btn btn-sm btn-success"><i class="fa-solid fa-rotate fa-sm"></i></button><button  className="w-50 btn btn-sm btn-danger"><i class="fa-solid fa-trash fa-sm"></i></button></td>
  </tr>
  <tr>
  <td scope="row" colSpan={2}>Foulen</td>
    <td colSpan={2}>Ben Foulen</td>
    <td colSpan={2}>15</td>
    <td colSpan={2}></td>
    <td colSpan={2}>First level Class B</td>
    <td colSpan={3} ><button  className="w-50 btn btn-sm btn-primary" onClick={handleclassPop}><i class="fa-solid fa-plus fa-sm"></i></button><button  className="w-50 btn btn-sm btn-success"><i class="fa-solid fa-rotate fa-sm"></i></button><button  className="w-50 btn btn-sm btn-danger"><i class="fa-solid fa-trash fa-sm"></i></button></td>

  </tr>
  <tr>
  <td scope="row" colSpan={2}>Jane</td>
    <td colSpan={2}>Doe</td>
    <td colSpan={2}>17</td>
    <td colSpan={2}>Technology</td>
    <td colSpan={2}>Third level Class A</td>
    <td colSpan={3} ><button  className="w-50 btn btn-sm btn-primary"onClick={handleclassPop}><i class="fa-solid fa-plus fa-sm"></i></button><button  className="w-50 btn btn-sm btn-success"><i class="fa-solid fa-rotate fa-sm"></i></button><button  className="w-50 btn btn-sm btn-danger"><i class="fa-solid fa-trash fa-sm"></i></button></td>

  </tr>
  <tr>
    <td scope="row" colSpan={2}>John</td>
    <td colSpan={2}>Doe</td>
    <td colSpan={2}>19</td>
    <td colSpan={2} >Fundamental Science</td>
    <td colSpan={2} >Fourth level Class C</td>
    <td colSpan={3} ><button  className="w-50 btn btn-sm btn-primary" onClick={handleclassPop}><i class="fa-solid fa-plus fa-sm"></i></button><button  className="w-50 btn btn-sm btn-success"><i class="fa-solid fa-rotate fa-sm"></i></button><button  className="w-50 btn btn-sm btn-danger"><i class="fa-solid fa-trash fa-sm"></i></button></td>
  </tr>
  <tr>
    <td scope="row" colSpan={2}>Mohamed</td>
    <td colSpan={2} >Hedi</td>
    <td colSpan={2} >16</td>
    <td colSpan={2} >Economics</td>
    <td colSpan={2} >Second level Class A</td>
    <td colSpan={3} ><button  className="w-50 btn btn-sm btn-primary" onClick={handleclassPop}><i class="fa-solid fa-plus fa-sm"></i></button><button  className="w-50 btn btn-sm btn-success"><i class="fa-solid fa-rotate fa-sm"></i></button><button  className="w-50 btn btn-sm btn-danger"><i class="fa-solid fa-trash fa-sm"></i></button></td>
  </tr>
  <tr>
    <td scope="row" colSpan={2}>Khairy</td>
    <td colSpan={2}>Hattour</td>
    <td colSpan={2}>20</td>
    <td colSpan={2}>Literature</td>
    <td colSpan={2}>Third Level Class D</td>
    <td colSpan={3} ><button  className="w-50 btn btn-sm btn-primary" onClick={handleclassPop}><i class="fa-solid fa-plus fa-sm"></i></button><button  className="w-50 btn btn-sm btn-success"><i class="fa-solid fa-rotate fa-sm"></i></button><button  className="w-50 btn btn-sm btn-danger"><i class="fa-solid fa-trash fa-sm"></i></button></td>
  </tr>
</tbody>
</table>
          </div>
        </div>
         
        </div>
        {showPopup && (
        <div className="popup">
          <div className="popup-content">
          <form>
            <h1 className='popup-title'>Add Alumni</h1>
              <div className="form-floating">
                <label htmlFor="FirstName">First Name</label>
                <input type="text" className="form-control" id="FirstName" />
           </div>
           <div className="form-floating">
                <label htmlFor="LastName">Last Name</label>
                <input type="text" className="form-control" id="LastName" />
           </div>
           <div className="form-floating">
                <label htmlFor="age">Age</label>
                <input type="number" className="form-control" id="age" />
           </div>
              <div className="form-floating">
                <label htmlFor="Specialty">Specialty</label>
                <select type="text" className="form-control" >
                  <option value="">No specialty</option>
                  <option value="Technology">Technology</option>
                  <option value="Math">Math</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Fundamental Science">Fundamental Science</option>
                  <option value="Economics">Economics</option>
                  <option value="Sports">Sports</option>
                  <option value="Literature">Literature</option>
              </select>              </div>
             
              <button type="submit" className="btn btn-primary">Submit</button>
              <button className="btn btn-secondary" onClick={togglePopup}>Cancel</button>
            </form>            
            </div>
        </div>
      )}
      {classPopup && (
        <div className="popup">
          <div className="popup-content">
          <form>
            <h1 className='popup-title'>Assign Class</h1>
              <div className="form-floating">
              <label htmlFor="level">Level</label>
                <select type="text" className="form-control" >
                  <option value="">Select...</option>
                  <option value="First level">First level</option>
                  <option value="Second level">Second level</option>
                  <option value="Third level">Third level</option>
                  <option value="Fourth level">Fourth level</option>
              </select> </div>
              <div className="form-floating">
                <label htmlFor="class">Class</label>
                <select type="text" className="form-control" >
                  <option value="A">Class A</option>
                  <option value="B">Class B</option>
                  <option value="C">Class C</option>
                  <option value="D">Class D</option>
              </select>              </div>
             
              <button type="submit" className="btn btn-primary">Submit</button>
              <button className="btn btn-secondary" onClick={handleclassPop}>Cancel</button>
            </form>            
            </div>
        </div>
      )}
        </div>
       
  )
}

export default manageAlumni
