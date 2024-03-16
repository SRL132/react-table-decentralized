import React, { useState } from "react";
import AddModal from "./AddModal";
import { EntityConfig } from "../config/main/schema";

type AddButtonProps = {
  className: string;
  entityConfig: EntityConfig;
};

const AddButton = ({ className, entityConfig }: AddButtonProps) => {
  const [showModal, setShowModal] = useState(false);
  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleAddJob = () => {};
  return (
    <>
      <button
        onClick={handleButtonClick}
        className={`btn btn-primary bg-warning text-dark ${className}`}
      >
        Add Job
      </button>
      {showModal && (
        <AddModal entityConfig={entityConfig} onSubmit={handleAddJob} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default AddButton;
