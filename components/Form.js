import React, { useState } from "react";
import { formInputs } from "../utils/constants";
import Button from "./Button";
import Modal from "react-modal";

// STYLES
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#000",
  },
};

const Form = ({
  initialValues = null,
  onSubmit = () => {},
  visible = false,
  hide = () => {},
}) => {
  const [formValue, setFormValue] = useState(initialValues);
  return (
    <Modal
      isOpen={visible}
      onRequestClose={hide}
      style={customStyles}
      contentLabel="Record Form"
      ariaHideApp={false}
    >
      <div className="form">
        {formInputs.map((input) => (
          <div key={input.name}>
            <input
              type={input.type}
              placeholder={input.placeholder}
              className="my-2 w-96 p-2 rounded"
              value={formValue[input.name]}
            />
            <br />
          </div>
        ))}
        <div className="flex flex-row justify-between">
          <Button label="Submit" variant="new" onClick={onSubmit} />
          <Button label="Cancel" variant="cancel" onClick={hide} />
        </div>
      </div>
    </Modal>
  );
};

export default Form;
