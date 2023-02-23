import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";

const AddNew = () => {
  const [title, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("Concert");
  const [price, setPrice] = useState("");
  const [ticketСeller, setТicketСeller] = useState(String);
  const [picture, setPicture] = useState(String);

  const navigate = useNavigate();
  const [isPendig, setIsPendig] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const blog = {};

    setIsPendig(true);
    console.log(blog);

    await addDoc(collection(db, "events"), {
      key: Math.random(),
      title,
      date,
      time,
      location,
      category,
      price: +price,
      ticketСeller,
      picture,
    });
    setIsPendig(false);

    navigate("/events");
  };

  return (
    <div className="grid place-items-center px-5 py-5">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
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
              htmlFor="inline-full-name"
            >
              Date
            </label>
          </div>
          <div className="w-2/3">
            <input
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
              id="inline-full-name"
              type="text"
              placeholder="event date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center mb-6">
          <div className="w-1/3">
            <label
              className="block text-gray-500 font-bold text-left mb-1 pr-4"
              htmlFor="inline-full-name"
            >
              Time
            </label>
          </div>
          <div className="w-2/3">
            <input
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
              id="inline-full-name"
              type="text"
              placeholder="event time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center mb-6">
          <div className="w-1/3">
            <label
              className="block text-gray-500 font-bold text-left mb-1 pr-4"
              htmlFor="location"
            >
              Location
            </label>
          </div>
          <div className="w-2/3">
            <input
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
              id="location"
              type="text"
              placeholder="event location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center mb-6">
          <div className="w-1/3">
            <label
              className="block text-gray-500 font-bold text-left mb-1 pr-4"
              htmlFor="location"
            >
              Picture
            </label>
          </div>
          <div className="w-2/3">
            <input
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
              id="picture"
              type="text"
              placeholder="event link to picture"
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center mb-6">
          <div className="w-1/3">
            <label
              className="block text-gray-500 font-bold text-left mb-1 pr-4"
              htmlFor="price"
            >
              Price
            </label>
          </div>
          <div className="w-2/3">
            <input
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
              id="price"
              type="number"
              placeholder="event price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center mb-6">
          <div className="w-1/3">
            <label
              className="justify-self-end block text-gray-500 font-bold text-left mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Celler
            </label>
          </div>
          <div className="w-2/3">
            <input
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
              id="inline-full-name"
              type="text"
              placeholder="event celler's name"
              value={ticketСeller}
              onChange={(e) => setТicketСeller(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center mb-6 w-full">
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
              <option>Concert</option>
              <option>Party</option>
              <option>Musical</option>
              <option>Sports Event</option>
              <option>Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/3"></div>
          <div className="w-2/3">
            {!isPendig && (
              <button
                className="shadow bg-orange hover:bg-red-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Create
              </button>
            )}
            {isPendig && (
              <button
                disabled
                className="shadow bg-orange hover:bg-red-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Create
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNew;
