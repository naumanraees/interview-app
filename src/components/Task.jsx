import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Task(props) {
  return (
    <div className="mx-auto">
      <hr />
      <div className="d-flex justify-content-between">
        <div className="d-flex ">
          <CheckCircleIcon onClick={() => {}} />{" "}
          <h5 className="ml-2">{props.header}</h5>
        </div>
        <div className="d-flex">
          <EditIcon onClick={() => {}} /> <span className="ml-2"></span>{" "}
          <DeleteIcon onClick={() => {}} />
        </div>
      </div>
      
    </div>
  );
}
