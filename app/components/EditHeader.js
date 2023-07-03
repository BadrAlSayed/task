import Image from "next/image";
import icon from "../../public/formIcon.svg";

const EditHeader = () => {
  return (
    <div className="formStyle formContainer">
      <div className="formFirst">
        <div>
          <Image src={icon}></Image>
        </div>
        <div style={{ fontSize: "17px", marginLeft: "7px" }}>
          Custodian Form
          <p> Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
};

export default EditHeader;
