import Single from "../../components/user/userProfil"
import { singleUser } from "../../../data"


const Profil = () => {


  return (
    <div className="user">
      <Single {...singleUser}/>
    </div>
  )
}

export default Profil