"use client";
import { useState } from "react";

const Editform = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    accountName: "",
    accountNumber: "",
  });
  const test = () => {
    console.log("hello");
  };

  return (
    <>
      <div className="editFormStyle">
        <div className="title-style">Custodian Details</div>
        <form className="around">
          <div className="flex">
            <input
              type="text"
              className="search-input"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="text"
              className="search-input"
              placeholder="Address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>
          <div className="flex">
            <input
              type="text"
              className="search-input"
              placeholder="Account Name"
              value={formData.accountName}
              onChange={(e) =>
                setFormData({ ...formData, accountName: e.target.value })
              }
            />
            <input
              type="text"
              className="search-input"
              placeholder="Account Number"
              value={formData.accountNumber}
              onChange={(e) =>
                setFormData({ ...formData, accountNumber: e.target.value })
              }
            />
          </div>
        </form>
        <div className="button-flex">
          <button onClick={test} className="btn cancel-style">
            Cancel
          </button>
          <button className="btn submit-style">Submit</button>
        </div>
      </div>
    </>
  );
};
export default Editform;
