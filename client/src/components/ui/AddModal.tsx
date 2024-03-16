import React, { useState } from "react";
import { EntityConfig, FieldConfig } from "../config/main/schema";

type AddModalProps = {
  onClose: () => void;
  onSubmit: (e: Record<string, FieldConfig>) => void;
  entityConfig: EntityConfig;
};

const AddModal = ({ onClose, onSubmit, entityConfig }: AddModalProps) => {
  const [formData, setFormData] = useState<Record<string, any>>({
    isUnassigned: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: FieldConfig
  ) => {
    const value = field.type === "boolean" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [field.name]: value });
  };
  const isFormValid = !Object.keys(entityConfig.fields)
    .filter((field) => field !== "Jobs_id")
    .some((field) => formData[field] === undefined || formData[field] === "");
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
              onClick={() => {
                onSubmit(formData);
                onClose();
              }}
              type="button"
              className="btn btn-primary bg-warning text-dark"
              disabled={!isFormValid}
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
