import React, { Fragment } from "react";

import Event from "../helper/Event";

interface UsersListProps {
  events: {
    id: number;
    title: string;
    time: string;
    date: string;
    picture: string;
    price: number;
    location: string;
    user: string;
  }[];
}

const Events: React.FC<UsersListProps> = (props) => {
  return (
    <Fragment>
      <div className="container grid-cols-8 items-center flex justify-evenly" >

      <h1 className="col-start-2 col-end-8 pb-4 text-2xl font-bold text-center">Events</h1>
      </ div>
      <div className="grid sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {props.events.map((event) => (
          <Event
            key={event.id}
            id={event.id}
            title={event.title}
            time={event.time}
            date={event.date}
            picture={event.picture}
            price={event.price}
            location={event.location}
            user={event.user}
          />
        ))}
      </div>


    </Fragment>
  );
};

export default Events;
