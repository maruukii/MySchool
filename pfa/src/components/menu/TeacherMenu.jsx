import { Link } from "react-router-dom";
import "./menu.scss";
import { Teachermenu } from "../../../data";

const TeacherMenu = ({setOpen}) => {
  const handleclick=()=>{
    setOpen(true)
      }
  return (
    <div className="menu">
      {Teachermenu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem" key={listItem.id} onClick={listItem.title==="Class Register"?handleclick :undefined}>
              <img src={`../../${listItem.icon}`} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TeacherMenu;
