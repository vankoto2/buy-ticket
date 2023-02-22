import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Dots from "../svg/gear.svg";

interface UsersListProps {}

const AddNew: React.FC<UsersListProps> = (props) => {
  return (
    <Fragment>
      <div className="grid grid-cols-8 items-center">
        <h1 className="col-start-2 col-end-8 py-4 text-2xl font-bold">
          AddNew
        </h1>
        <Link to={`/events`}>
          <img
            src={Dots}
            alt="options"
            className="w-5 h-5 col-start-8 col-end-8"
          />
        </Link>
      </div>
    </Fragment>
  );
};

export default AddNew;
