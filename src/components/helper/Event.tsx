import React from "react";
import { Link } from "react-router-dom";

const Event = (props: {
  id?: number | string;
  title?: string;
  time?: string;
  date?: string;
  picture?: string;
  price?: number;
  location?: string;
  user?: string;
  ticketСeller?: string;
}) => {
  return (
    <div key={props.id} className="grid place-items-center px-4 pt-4 pb-10">
      <Link to={`/event/${props.id}`}>
        <img
          src={props.picture}
          alt="#"
          className="rounded-full object-cover w-48 h-24"
        ></img>
      </Link>
      <div className="place-items-center text-center">
        <h4 className="col-start-1 col-end-5 text-lg" key={props.id}>
          {props.title}
        </h4>
      </div>
    </div>
  );
};

export default Event;
