import React,{useState} from 'react'

const classroom = () => {
    const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
   
       <div className="containerContent">
    
    <div className='current'>
      <div className='titleOP'>Classrooms</div>

        
          
        <div className='content'>
          <div className='manage'>
            <div className='manageBar'>
              <div className='searchby'>
                <h1 className='titleSearch'>Search by</h1>
                <div className='search'>
                <label htmlFor="type">Classroom Type</label>
                <select type="text" className="form-control" >
                  <option value="">Select...</option>
                  <option value="Normal">Normal</option>
                  <option value="Lab">Lab</option>
              </select>
              <label htmlFor="number">Classroom Number</label>
                <input type="number" className='form-control' />
              </div></div><div>|<br/>|<br/>|<br/>|</div>
              <div className='crud'><button  className="w-20 btn btn-sm btn-primary" onClick={togglePopup}><i class="fa-solid fa-plus fa-sm"></i>  Add Classroom</button></div>
            </div>
          <table className="table table-secondary table-striped">
          <thead>
  <tr>
    
    <th scope="col"colSpan={2}>Classroom Type</th>
    <th scope="col"colSpan={2}>Classroom Number</th>
    <th scope="col"colSpan={2}>Capacity</th>
    <th scope="col"colSpan={3}>Manage</th>
  </tr>
</thead>
<tbody >
  <tr>
    <td scope="row" colSpan={2}>Normal</td>
    <td colSpan={2}>302</td>
    <td colSpan={2}>25</td>
    <td colSpan={3} ><button  className="w-50 btn btn-sm btn-success"><i class="fa-solid fa-rotate fa-sm"></i></button><button  className="w-50 btn btn-sm btn-danger"><i class="fa-solid fa-trash fa-sm"></i></button></td>
  </tr>
  <tr>
  <td scope="row" colSpan={2}>Lab</td>
    <td colSpan={2}>202</td>
    <td colSpan={2}>15</td>
    <td colSpan={3} ><button  className="w-50 btn btn-sm btn-success"><i class="fa-solid fa-rotate fa-sm"></i></button><button  className="w-50 btn btn-sm btn-danger"><i class="fa-solid fa-trash fa-sm"></i></button></td>

  </tr>
  <tr>
  <td scope="row" colSpan={2}>Lab</td>
    <td colSpan={2}>201</td>
    <td colSpan={2}>18</td>
    <td colSpan={3} ><button  className="w-50 btn btn-sm btn-success"><i class="fa-solid fa-rotate fa-sm"></i></button><button  className="w-50 btn btn-sm btn-danger"><i class="fa-solid fa-trash fa-sm"></i></button></td>

  </tr>
  <tr>
  <td scope="row" colSpan={2}>Normal</td>
    <td colSpan={2}>102</td>
    <td colSpan={2}>29</td>
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
            <h1 className='popup-title'>Add Classroom</h1>
              <div className="form-floating">
                <label htmlFor="classroomType">Classroom Type</label>
                <select type="text" className="form-control" >
                  <option value="Normal">Normal</option>
                  <option value="Lab">Lab</option>
              </select>              </div>
              <div className="form-floating">
                <label htmlFor="classroomNumber">Classroom Number</label>
                <input type="text" className="form-control" id="classroomNumber" />
              </div>
              <div className="form-floating">
                <label htmlFor="classroomCapacity">Classroom Capacity</label>
                <input type="number" className="form-control" id="classroomCapacity" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button className="btn btn-secondary" onClick={togglePopup}>Cancel</button>
            </form>            
            </div>
        </div>
      )}
        </div>
       
  )
}

export default classroom
