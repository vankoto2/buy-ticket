import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState, useRef } from "react";
import EventDetails from "../components/helper/EventDetails";
import { db } from "../firebase";
import { useReactToPrint } from "react-to-print";

interface EventsListProps {
  id?: number | string;
  title?: string;
  time?: string;
  date?: string;
  picture?: string;
  price?: number;
  location?: string;
  user?: string;
  ticketСeller?: string;
  category?: string;
  numberOfTikets?: string;
}

const WishList = () => {
  const componentRef = useRef();

  const [eventsData, setEventsData] = useState<EventsListProps[]>([]);
  // Create events
  // Read events from firebase

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    const q = query(collection(db, "wish-list"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let eventsArr = [{}];
      querySnapshot.forEach((doc) => {
        eventsArr.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      eventsArr.shift();
      setEventsData(eventsArr);
    });

    return () => unsubscribe();
  }, []);
  console.log(eventsData);
  return (
    <>
      <div ref={componentRef}>
        {eventsData.map((event) => (
          <EventDetails
            id={event.id}
            title={event.title}
            time={event.time}
            date={event.date}
            picture={event.picture}
            price={event.price}
            location={event.location}
            numberOfTikets={event.numberOfTikets}
          ></EventDetails>
        ))}
      </div>
      <div className="grid place-content-center w-full pb-10">
        <button
          onClick={handlePrint}
          className="col-start-4 col-end-4   justify-self-center px-4 py-1 text-sm text-orange font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-orange hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
        >
          Print
        </button>
      </div>
    </>
  );
};

export default WishList;
