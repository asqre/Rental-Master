import React from "react";
import Button from "../common/Button";

function DeleteContent(props) {
  return (
    <div className="flex flex-col justify-between items-center min-h-[170px] p-4">
      <h5>Delete Car </h5>
      <p className="text-sm mb-4">Are you sure you want to delete this car?</p>
      <Button name="Delete" onClick={props.handleDelete} />
    </div>
  );
}

export default DeleteContent;
