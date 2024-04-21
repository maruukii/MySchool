import { Link } from "react-router-dom";
import "./menu.scss";
import { Headmastermenu } from "../../data";

const HeadmasterMenu = () => {
  return (
    <div className="menu">
      {Headmastermenu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HeadmasterMenu;
