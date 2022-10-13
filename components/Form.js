import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "./Button";
import Modal from "react-modal";

// HELPERS
import { formInputs } from "../utils/constants";
import { useMutation } from "@apollo/client";
import { CREATE_RECORD, UPDATE_RECORD } from "../resolvers/mutations/records";

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

const Form = ({ initialValues, visible = false, hide = () => {} }) => {
  // STATES
  const [formValues, setFormValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [reloadHome, setReloadHome] = useState(false);

  // MUTATIONS
  const [createRecord] = useMutation(CREATE_RECORD);
  const [updateRecord] = useMutation(UPDATE_RECORD);

  const resetForm = () => {
    setFormValues(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (formValues.id) {
        setLoading(true);
        const res = await updateRecord({
          variables: {
            id: formValues.id,
            data: {
              country: formValues.country,
              year: formValues.year.toString(),
              totalPopulation: Number(formValues.totalPopulation),
              area: Number(formValues.area),
            },
          },
        });
        setLoading(false);
        resetForm();
        hide(true);
        toast.success("Record updated successfully");
      } else {
        const res = await createRecord({
          variables: {
            data: {
              country: formValues.country,
              year: formValues.year.toString(),
              totalPopulation: Number(formValues.totalPopulation),
              area: Number(formValues.area),
            },
          },
        });
        setLoading(false);
        resetForm();
        setReloadHome(true);
        toast.success("Record created successfully, do you want to enter more?");
      }
    } catch (error) {
      console.warn(error);
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  const handleChange = (e, input) => {
    setFormValues({
      ...formValues,
      [input]: e.target.value,
    });
  };

  useEffect(() => {
    console.log("SEE", initialValues);
    setFormValues(initialValues);
  }, [initialValues]);

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
              value={formValues[input.name]}
              onChange={(e) => handleChange(e, input.name)}
            />
            <br />
          </div>
        ))}
        <div className="flex flex-row justify-between">
          <Button
            label={loading ? "..." : formValues.id ? "Update" : "Create"}
            variant="new"
            onClick={handleSubmit}
          />
          <Button
            label="Cancel"
            variant="cancel"
            onClick={() => hide(reloadHome)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default Form;
