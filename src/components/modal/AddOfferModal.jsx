import { useState, useEffect } from "react";
import { Button, Form, Modal, ListGroup } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import {
  modalType,
  validation,
  validationText,
} from "../../utils/app-constants";
import { errorMsg, successMsg } from "../../constants/msgs.js";
import { useForm } from "react-hook-form";
import ThemeInput from "../input/ThemeInput.jsx";
import ThemeCheckbox from "../input/ThemeCheckbox.jsx";
import ThemeTextArea from '../input/ThemeTextArea'
import ThemeSpinner from "../general/ThemeSpinner.jsx";
import { useCreateOfferMutation } from "../../store/apis/offersApi.js"; // Update to the correct offer API slice

const AddOfferModal = ({ isOpen, setIsOpen, refetch }) => {
  const [createOffer, { isLoading }] = useCreateOfferMutation();
  const {
    register,
    control,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({ mode: "onChange" });
  const feature = watch("feature");
  const [features, setFeatures] = useState([]);

  const onSubmit = async (formData) => {
    const { name, price, durationInDays, trialAvailable } = formData;
    const newOffer = { ...formData, features };
    const { data, error } = await createOffer(newOffer);
    if (data) {
      successMsg(data.message);
      refetch();
      setIsOpen({ type: null, open: false });
      reset();
      setFeatures([]);
    } else {
      errorMsg(error.data.message);
    }
  };

  const addFeature = () => {
    if (feature && !features.includes(feature)) {
      setFeatures([...features, feature]);
      setValue("feature", ""); // Clear the input
    }
  };

  const removeFeature = (index) => {
    const updatedFeatures = features.filter((_, i) => i !== index);
    setFeatures(updatedFeatures);
  };

  return (
    <>
      <Modal
        className="theme-modal"
        show={isOpen?.open && isOpen?.type === modalType.add}
        onHide={() => setIsOpen({ type: null, open: false })}
        size={"md"}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <header className="header d-flex align-items-center justify-content-between">
          <h3 className="text-black fw-700">Add Offer</h3>
          <div
            className="box cursor"
            onClick={() => setIsOpen({ type: null, open: false })}
          >
            <FaTimes />
          </div>
        </header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <ThemeInput
              name="name"
              control={control}
              errors={errors}
              rules={{
                required: {
                  value: true,
                  message: "Offer name is required",
                },
              }}
              label="Offer Name"
              placeholder="Enter offer name"
              type="text"
            />

            <ThemeInput
              name="price"
              control={control}
              errors={errors}
              rules={{
                required: {
                  value: true,
                  message: "Price is required",
                },
                pattern: {
                  value: /^\d+(\.\d{1,2})?$/,
                  message: "Enter a valid price",
                },
              }}
              label="Price (USD)"
              placeholder="Enter offer price"
              type="number"
              min="0"
            />

            <ThemeInput
              name="durationInDays"
              control={control}
              errors={errors}
              rules={{
                required: {
                  value: true,
                  message: "Duration is required",
                },
              }}
              label="Duration (Days)"
              placeholder="Enter offer duration"
              type="number"
              min="1"
            />

            {/* <ThemeCheckbox
              name="trialAvailable"
              control={control}
              errors={errors}
              rules={{
                required: {
                  value: true,
                  message: "Trial option is required",
                },
              }}
              label="Trial Available"
              type="checkbox"
            /> */}

            <div>
              <ThemeTextArea
                name="description"
                control={control}
                errors={errors}
                rules={{
                  required: {
                    value: true,
                    message: validationText.descriptionRequired,
                  },
                  maxLength: {
                    value: validation.descriptionMax,
                    message: validationText.descriptionMax,
                  },
                }}
                label="Description"
                placeholder="Description..."
                type="text"
                maxLength={validation.descriptionMax}
              />
            </div>

            <div className="d-flex align-items-center justify-content-between mt-3">
              <ThemeInput
                name="feature"
                control={control}
                errors={errors}
                label="Feature"
                placeholder="Enter feature"
                type="text"
              />
              <Button className="btn-solid btn-purple" onClick={addFeature}>
                Add Feature
              </Button>
            </div>

            <ListGroup className="mt-3">
              {features.map((feature, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-between align-items-center"
                >
                  {feature}
                  <Button variant="danger" onClick={() => removeFeature(index)}>
                    Remove
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>

            <Button
              type="submit"
              disabled={isLoading}
              className="btn-solid btn-purple w-100 mt-3"
            >
              {isLoading ? <ThemeSpinner /> : "Submit"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddOfferModal;
