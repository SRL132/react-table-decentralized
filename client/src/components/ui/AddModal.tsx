import React from "react";
import { EntityConfig, FieldConfig, FieldType } from "../config/main/schema";

type AddModalProps = {
  onClose: () => void;
  onSubmit: () => void;
  entityConfig: EntityConfig;
};

const AddModal = ({ onClose, onSubmit, entityConfig }: AddModalProps) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: FieldConfig
  ) => {
    console.log(e.target.value);
  };
  return (
    <div className="modal show d-block" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Job</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div>
              {Object.values(entityConfig.fields)
                .filter((field: FieldConfig) => field.name !== "id")
                .map((field: FieldConfig) => (
                  <div key={field.name} className="mb-3">
                    <label className="form-label">{field.label}</label>
                    {field.type === "boolean" ? (
                      <input
                        type="checkbox"
                        name={field.name}
                        onChange={(e) => handleInputChange(e, field)}
                        className="form-check-input"
                      />
                    ) : (
                      <input
                        type={field.type === "text" ? "text" : "number"}
                        name={field.name}
                        onChange={(e) => handleInputChange(e, field)}
                        className="form-control"
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <button
              onClick={onSubmit}
              type="button"
              className="btn btn-primary bg-warning text-dark"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
