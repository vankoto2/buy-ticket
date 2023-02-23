import React, { Fragment, useEffect, useState } from "react";

import Event from "../components/helper/Event";

interface EventsListProps {
  events: {
    id?: number | string;
    title?: string;
    time?: string;
    date?: string;
    picture?: string;
    price?: number;
    location?: string;
    user?: string;
    category?: string;
    ticketСeller?: string;
  }[];
}

const Events: React.FC<EventsListProps> = (props) => {
  const [eventsData, setEventsData] = useState(props.events);

  const [title, setName] = useState("");
  const [category, setCategory] = useState("0");

  useEffect(() => {
    const test = props.events.filter((event) => {
      if (category === "0") {
        return props.events;
      }

      if (category === "All") {
        return props.events;
      }

      return event.category == category;
    });
    setEventsData(test);
  }, [category]);

  useEffect(() => {
    const test = props.events.filter((event) => {
      if (title === "") {
        return props.events;
      }

      return event.title == title;
    });
    setEventsData(test);
  }, [title]);

  return (
    <Fragment>
      <div className="container grid-cols-8 items-center flex justify-evenly pt-5">
        <h1 className="col-start-2 col-end-8 pb-4 text-2xl font-bold text-center">
          Events
        </h1>
      </div>
      <div className=" grid place-items-center px-5 py-5">
        <div className="flex items-center mb-6">
          <div className="w-1/3">
            <label
              className="justify-self-end block text-gray-500 font-bold text-left mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Title
            </label>
          </div>
          <div className="w-2/3">
            <input
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
              id="title"
              type="text"
              placeholder="event name"
              value={title}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center mb-6">
          <div className="w-1/3">
            <label
              className="block text-gray-500 font-bold text-left mb-1 pr-4"
              htmlFor="grid-state"
            >
              Type
            </label>
          </div>

          <div className="w-2/3">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>All</option>
              <option>Concert</option>
              <option>Party</option>
              <option>Musical</option>
              <option>Sports Event</option>
              <option>Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
          </div>
        </div>
      </div>

      <div className="grid sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-10">
        {eventsData.map((event) => (
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
