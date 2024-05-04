import React,{useState} from 'react'

const Class = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedClassLevel, setSelectedClassLevel] = useState('');
    const [selectedClassSpec, setSelectedClassSpec] = useState('');

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handleClassLevelChange = (e) => {
    setSelectedClassLevel(e.target.value);
    if(selectedClassLevel==='First Level'){setSelectedClassSpec('No specialty')}
};
  return (
   
       <div className="containerContent">
    
    <div className='current'>
      <div className='titleOP'>Classes</div>
        <div className='content'>
          <div className='manage'>
            <div className='manageBar'>
              <div className='searchby'>
                <h1 className='titleSearch'>Search by</h1>
                <div className='search'>
                <label htmlFor="level">Class Level</label>
                <select type="text" className="form-control" >
                  <option value="">Select...</option>
                  <option value="First level">First level</option>
                  <option value="Second level">Second level</option>
                  <option value="Third level">Third level</option>
                  <option value="Fourth level">Fourth level</option>
              </select>
              <label htmlFor="specialty">Class Specialty</label>
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
              </select>
                
              </div></div><div>|<br/>|<br/>|<br/>|</div>
              <div className='crud'><button  className="w-20 btn btn-sm btn-primary" onClick={togglePopup}><i class="fa-solid fa-plus fa-sm"></i>  Add Class</button></div>
            </div>
          <table className="table table-secondary table-striped">
          <thead>
  <tr>
    
    <th scope="col"colSpan={2}>Class Level</th>
    <th scope="col"colSpan={2}>Class Specialty</th>
    <th scope="col"colSpan={2}>Class Name</th>
    <th scope="col"colSpan={2}># Alumnis</th>
    <th scope="col"colSpan={3}>Manage</th>
  </tr>
</thead>
<tbody >
  <tr>
    <td scope="row" colSpan={2}>First level</td>
    <td colSpan={2}>No specialty</td>
    <td colSpan={2}>Class A</td>
    <td colSpan={2}>20</td>
    <td colSpan={3} ><button  className="w-50 btn btn-sm btn-success"><i class="fa-solid fa-rotate fa-sm"></i></button><button  className="w-50 btn btn-sm btn-danger"><i class="fa-solid fa-trash fa-sm"></i></button></td>
  </tr>
  <tr>
    <td scope="row" colSpan={2}>Second level</td>
    <td colSpan={2}>Science Fundamental</td>
    <td colSpan={2}>Class A</td>
    <td colSpan={2}>21</td>
    <td colSpan={3} ><button  className="w-50 btn btn-sm btn-success"><i class="fa-solid fa-rotate fa-sm"></i></button><button  className="w-50 btn btn-sm btn-danger"><i class="fa-solid fa-trash fa-sm"></i></button></td>
  </tr>
  <tr>
    <td scope="row" colSpan={2}>First level</td>
    <td colSpan={2}>No specialty</td>
    <td colSpan={2}>Class B</td>
    <td colSpan={2}>0</td>
    <td colSpan={3} ><button  className="w-50 btn btn-sm btn-success"><i class="fa-solid fa-rotate fa-sm"></i></button><button  className="w-50 btn btn-sm btn-danger"><i class="fa-solid fa-trash fa-sm"></i></button></td>
  </tr>
  <tr>
    <td scope="row" colSpan={2}>Fourth level</td>
    <td colSpan={2}>Technology</td>
    <td colSpan={2}>Class C</td>
    <td colSpan={2}>20</td>
    <td colSpan={3} ><button  className="w-50 btn btn-sm btn-success"><i class="fa-solid fa-rotate fa-sm"></i></button><button  className="w-50 btn btn-sm btn-danger"><i class="fa-solid fa-trash fa-sm"></i></button></td>
  </tr>
  <tr>
   </tr>
  <tr>
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
            <h1 className='popup-title'>Add Class</h1>
              <div className="form-floating">
                <label htmlFor="classroomType">Class Level</label>
                <select type="text" className="form-control" value={selectedClassLevel} onChange={handleClassLevelChange} >
                <option value="">Select ...</option>
                  <option value="First level">First level</option>
                  <option value="Second level">Second level</option>
                  <option value="Third level">Third level</option>
                  <option value="Fourth level">Fourth level</option>
              </select>             </div>
              <div className="form-floating">
                <label htmlFor="specialty">Class Specialty</label>
                <select type="text" className="form-control" disabled={selectedClassLevel === "First level"} defaultValue={selectedClassSpec} >
                <option value="nospec" selected={selectedClassLevel === "First level"}>No specialty</option>
                  <option value="Technology">Technology</option>
                  <option value="Math">Math</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Fundamental Science">Fundamental Science</option>
                  <option value="Economics">Economics</option>
                  <option value="Sports">Sports</option>
                  <option value="Literature">Literature</option>
              </select>              </div>
              <div className="form-floating">
              <label htmlFor="name">Class Name</label>
                <select type="text" className="form-control">
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  
              </select>              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button className="btn btn-secondary" onClick={togglePopup}>Cancel</button>
            </form>            
            </div>
        </div>
      )}
        </div>
       
  )
}

export default Class
