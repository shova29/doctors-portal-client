import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmation = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
  const { name, email, specialty } = deletingDoctor;
  const handleDelete = () => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Doctor: ${name} is deleted`);
          setDeletingDoctor(null);
          refetch();
        } else {
          toast.error(`Doctor: ${name} is not deleted`);
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure to delete Dr {name} ?
          </h3>
          <p className="py-4">
            {" "}
            Dr {name} is an expert on {specialty}. His email is {email}
          </p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
