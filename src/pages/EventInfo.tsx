import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

import { useReactToPrint } from "react-to-print";
import EventDetails from "../components/helper/EventDetails";

const EventInfo = (props: {
  events: {
    id?: React.Key | null | undefined | number | string;
    title?: string;
    time?: string;
    date?: string;
    picture?: string;
    price?: number;
    location?: string;
    user?: string;
    ticketСeller?: string;
  }[];
}) => {
  const [numberOfTikets, setNumberOfTikets] = useState("");

  const navigate = useNavigate();

  const paramsObj = useParams();
  const params = paramsObj.eventId;
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const test = props.events.filter((event) => {
    return event.id == params;
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await addDoc(collection(db, "wish-list"), {
      key: Math.random(),
      title: test[0].title,
      date: test[0].date,
      time: test[0].time,
      location: test[0].location,
      // category: test[0].category,
      price: test[0].price,
      ticketСeller: test[0].ticketСeller,
      picture: test[0].picture,
      numberOfTikets,
    });

    navigate("/events");
  };

  return (
    <>
      <div ref={componentRef}>
        <EventDetails
          id={test[0].id}
          title={test[0].title}
          time={test[0].time}
          date={test[0].date}
          picture={test[0].picture}
          price={test[0].price}
          location={test[0].location}
        ></EventDetails>
      </div>
      <div className=" grid place-items-center px-5 py-5">

        <div className="flex items-center mb-6">
          <div className="w-1/3">
            <label
              className="block text-gray-500 font-bold text-left mb-1 pr-4"
              htmlFor="price"
            >
              Number of tikets
            </label>
          </div>
          <div className="w-2/3">
            <input
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
              id="price"
              type="number"
              placeholder="event price"
              value={numberOfTikets}
              onChange={(e) => setNumberOfTikets(e.target.value)}
            />
          </div>
        </div>
        </div>
      <div className="container grid grid-cols-6">
        <button
          onClick={handleSubmit}
          className="col-start-3 col-end-3 place-self-center px-4 py-1 text-sm text-orange font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-orange hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
        >
          Add
        </button>
        <button
          onClick={handlePrint}
          className="col-start-4 col-end-4 place-self-center px-4 py-1 text-sm text-orange font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-orange hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
        >
          Print
        </button>
      </div>
    </>
  );
};

export default EventInfo;
