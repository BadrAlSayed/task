import Image from "next/image";
import downloadIcon from "../../public/downloadIcon.svg";
import eyeIcon from "../../public/eyeIcon.svg";
import editIcon from "../../public/editIcon.svg";
const Form = () => {
  return (
    // create a table that has id, form title, date, actions
    <div className="formDataStyle">
      <table className="formTable">
        <tr>
          <th className="tdStyle">Id</th>
          <th className="tdStyle">Form Title</th>
          <th className="tdStyle">Date</th>
          <th className="tdStyle ">Actions</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Form 1</td>
          <td>2021-09-01</td>
          <td>
            <Image src={downloadIcon}></Image>
            <Image src={eyeIcon}></Image>
            <Image src={editIcon}></Image>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Form 2</td>
          <td>2021-09-02</td>
          <td>View</td>
        </tr>
      </table>
    </div>
  );
};

export default Form;
