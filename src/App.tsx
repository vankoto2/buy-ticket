import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/layout/Navigation";
import Events from "./pages/Events";
import AddNew from "./pages/AddNew";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import "./App.css";
import Footer from "./components/layout/Footer";
import EventInfo from "./pages/EventInfo";
import {
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "./firebase";

interface EventsListProps {
  id?: number;
  title?: string;
  time?: string;
  date?: string;
  picture?: string;
  price?: number;
  location?: string;
  user?: string;
  ticketСeller?: string; 
}

const App: React.FC = () => {
  const [eventsData, setEventsData] = useState<EventsListProps[]>([]);
  // Create events
  // Read events from firebase
  useEffect(() => {
    const q = query(collection(db, "events"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let eventsArr = [{}];
      querySnapshot.forEach((doc) => {
        eventsArr.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setEventsData(eventsArr);
    });
    return () => unsubscribe();
  }, []);
  // Update events in firebase
  // Delete events

  return (
    <div className="App container mx-auto w-full">
      <Navigation />
      <Routes>
        <Route path="/events" element={<Events events={eventsData} />} />
        <Route path="/add-new" element={<AddNew />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route
          path="/event/:eventId"
          element={<EventInfo events={eventsData} />}
        ></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
