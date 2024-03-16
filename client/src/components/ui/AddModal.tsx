import React from "react";

type AddModalProps = {
  onClose: () => void;
  onSubmit: () => void;
};

const AddModal = ({ onClose, onSubmit }: AddModalProps) => {
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
            <form>
              <div className="mb-3">
                <label htmlFor="originalId" className="form-label">
                  Original ID
                </label>
                <input type="text" className="form-control" id="originalId" />
              </div>
              <div className="mb-3">
                <label htmlFor="talentId" className="form-label">
                  Talent ID
                </label>
                <input type="text" className="form-control" id="talentId" />
              </div>
              <div className="mb-3">
                <label htmlFor="talentName" className="form-label">
                  Talent Name
                </label>
                <input type="text" className="form-control" id="talentName" />
              </div>
              <div className="mb-3">
                <label htmlFor="talentGrade" className="form-label">
                  Talent Grade
                </label>
                <input type="text" className="form-control" id="talentGrade" />
              </div>
              <div className="mb-3">
                <label htmlFor="bookingGrade" className="form-label">
                  Booking Grade
                </label>
                <input type="text" className="form-control" id="bookingGrade" />
              </div>
              <div className="mb-3">
                <label htmlFor="operatingUnit" className="form-label">
                  Operating Unit
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="operatingUnit"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="officeCity" className="form-label">
                  Office City
                </label>
                <input type="text" className="form-control" id="officeCity" />
              </div>
              <div className="mb-3">
                <label htmlFor="officePostalCode" className="form-label">
                  Office Postal Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="officePostalCode"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="jobManagerName" className="form-label">
                  Job Manager Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="jobManagerName"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="jobManagerId" className="form-label">
                  Job Manager ID
                </label>
                <input type="text" className="form-control" id="jobManagerId" />
              </div>
              <div className="mb-3">
                <label htmlFor="totalHours" className="form-label">
                  Total Hours
                </label>
                <input type="number" className="form-control" id="totalHours" />
              </div>
              <div className="mb-3">
                <label htmlFor="startDate" className="form-label">
                  Start Date
                </label>
                <input type="date" className="form-control" id="startDate" />
              </div>
              <div className="mb-3">
                <label htmlFor="endDate" className="form-label">
                  End Date
                </label>
                <input type="date" className="form-control" id="endDate" />
              </div>
              <div className="mb-3">
                <label htmlFor="clientName" className="form-label">
                  Client Name
                </label>
                <input type="text" className="form-control" id="clientName" />
              </div>
              <div className="mb-3">
                <label htmlFor="clientId" className="form-label">
                  Client ID
                </label>
                <input type="text" className="form-control" id="clientId" />
              </div>
              <div className="mb-3">
                <label htmlFor="industry" className="form-label">
                  Industry
                </label>
                <input type="text" className="form-control" id="industry" />
              </div>
              <div className="mb-3">
                <label htmlFor="isUnassigned" className="form-label">
                  Is Unassigned
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="isUnassigned"
                />
              </div>
            </form>
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
