import Image from "next/image";
import icon from "../../public/formIcon.svg";
import searchIcon from "../../public/searchIcon.svg";
const FormBar = () => {
  return (
    <div className="formStyle formContainer">
      <div className="formFirst">
        <div>
          <Image src={icon}></Image>
        </div>
        <div>
          Forms <p> All the compulsory forms are available here</p>
        </div>
      </div>
      <div className="formSearch">
        <div className="searchBar">
          <input className="removeBorder" type="text" placeholder="Search" />
          <Image src={searchIcon}></Image>
        </div>

        <div>Sort</div>
      </div>
    </div>
  );
};

export default FormBar;
