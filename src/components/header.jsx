import React, { useState } from "react";
import Task from "./Task";

export default function Header({count,setcount}) {
 

  return (
    <div className="w-50 mx-auto bg-secondary mt-4 p-4 text-white rounded-lg">
      <div className="d-flex justify-content-between">
        
        <div>
          <h4>What needs to be done</h4>
        </div>
        <div>
          <button className="btn btn-sm btn-primary" onClick={()=>{setcount()}}>Add Component</button>
        </div>
      </div>
      <hr />
      <nav aria-label="breadcrumb ">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">View All</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Active</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Completed
          </li>
        </ol>
      </nav>

      {count.map((c, i) => {
        if (i == 0) {
          return <Task key={i} header="Schedule Meetup" />;
        } else if (i == 1) {
          return <Task key={i} header="Update Site" />;
        } else if (i == 2) {
          return <Task key={i} header="Showel Snow" />;
        }
        else{
            return <Task key={i} header="New Event/Task" />;
        }
      })}
    </div>
  );
}
