import React from "react";
import Time from "../svg/clock-icon.svg";
import Date from "../svg/schedule-calendar-icon.svg";
import Location from "../svg/location-svgrepo-com.svg";
import Price from "../svg/usd-icon.svg";

const EventDetails = (props: {
  id: number;
  title: string;
  time: string;
  date: string;
  picture: string;
  price: number;
  location: string;
}) => {
  return (
    <div className="container md:flex xl:flex justify-center">
      <div
        key={props.id}
        className=" sm:w-full md:w-80 lg:w-90 grid place-items-center px-4 my-4"
      >
        <img src={props.picture} alt="#" className="w-full object-cover "></img>
      </div>
      <div className="container place-items-center sm: w-auto px-4">
        <div className=" pt-4 ">
          <h2
            className="col-start-1  font-bold col-end-6 text-2xl text-center"
            key={props.id}
          >
            {props.title}
          </h2>
        </div>
        <div className="grid grid-cols-6 place-items-center content-center pt-1">
          <img
            src={Time}
            alt="logo"
            className="w-5 h-5 col-start-1 font-medium text-2xl"
          />
          <h4
            className="text-sm justify-self-start col-span-5 pl-5 text-center py-1"
            key={props.id}
          >
            {props.time}
          </h4>
        </div>
        <div className="grid grid-cols-6 place-items-center pt-1">
          <img
            src={Date}
            alt="logo"
            className="w-5 h-5 col-start-1 font-medium text-2xl"
          />
          <h4
            className="text-sm justify-self-start col-span-5 pl-5 text-left py-1"
            key={props.id}
          >
            {props.date}
          </h4>
        </div>
        <div className="grid grid-cols-6 place-items-center pt-1">
          <img
            src={Location}
            alt="logo"
            className="w-5 h-5 col-start-1 font-medium text-2xl"
          />
          <h4
            className="text-sm justify-self-start col-span-5 pl-5 text-left py-1"
            key={props.id}
          >
            {props.location}
          </h4>
        </div>
        <div className="grid grid-cols-6 place-items-center pt-1">
          <img
            src={Price}
            alt="logo"
            className="w-5 h-5 col-start-1 font-medium text-2xl"
          />
          <h4
            className="text-sm justify-self-start col-span-5 pl-5 text-left py-1"
            key={props.id}
          >
            {props.price} $
          </h4>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
