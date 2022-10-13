import React, { useState } from "react";
import { formInputs } from "../utils/constants";
import Button from "./Button";
import Modal from "react-modal";
import { useMutation } from "@apollo/client";
import { CREATE_RECORD } from "../resolvers/mutations/records";

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
  initialValues,
  onSubmit = () => {},
  visible = false,
  hide = () => {},
  onChange = () => {},
}) => {
  const [formValue, setFormValue] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  const [createRecord] = useMutation(CREATE_RECORD);

  // const [updateRecord] = useMutation(UPDATE_RECORD, {
  //   variables: {
  //     id: formValue.id,
  //     country: formValue.country,
  //     year: formValue.year,
  //     totalPopulation: formValue.totalPopulation,
  //     area: formValue.area,
  //   },
  // });

  const resetForm = () => {
    setFormValue(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (formValue.id) {
        const res = await updateRecord();
      } else {
        const res = await createRecord({
          variables: {
            data: {
              country: formValue.country,
              year: formValue.year.toString(),
              totalPopulation: Number(formValue.totalPopulation),
              area: Number(formValue.area),
            },
          },
        });
        setLoading(false);
        resetForm();
        // console.log(res, dataCreate, loadingCreate, errorCreate);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleChange = (e, input) => {
    setFormValue({
      ...formValue,
      [input]: e.target.value,
    });
  };

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
            <label htmlFor={input.name} className="mb-1 opacity-70">
              {input.label}
            </label>
            <br />
            <input
              type={input.type}
              placeholder={input.placeholder}
              className="my-2 w-96 p-2 rounded"
              value={formValue[input.name]}
              onChange={(e) => handleChange(e, input.name)}
            />
            <br />
          </div>
        ))}
        <div className="flex flex-row justify-between">
          <Button
            label={loading ? "..." : formInputs.id ? "Update" : "Create"}
            variant="new"
            onClick={handleSubmit}
          />
          <Button label="Cancel" variant="cancel" onClick={hide} />
        </div>
      </div>
    </Modal>
  );
};

export default Form;
