import React, { useRef } from "react";
import { useParams } from "react-router-dom";

import { useReactToPrint } from "react-to-print";
import EventDetails from "../components/helper/EventDetails";

const EventInfo = (props: {
  events: {
    id?: number;
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
  // const [isChat, setIsChat] = useState(true);
  const paramsObj = useParams();
  const params = Number(paramsObj.eventId);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  console.log(props);
  

  return (
    <>
      <div ref={componentRef}>
        <EventDetails
          id={props.events[params].id}
          title={props.events[params].title}
          time={props.events[params].time}
          date={props.events[params].date}
          picture={props.events[params].picture}
          price={props.events[params].price}
          location={props.events[params].location}
        ></EventDetails>
      </div>
      <div className="container grid grid-cols-6">
        <button className="col-start-3 col-end-3 place-self-center px-4 py-1 text-sm text-orange font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-orange hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2">
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
