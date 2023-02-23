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
  events: {
    id: number;
    title: string;
    time: string;
    date: string;
    picture: string;
    price: number;
    location: string;
    user: string;
    ticketСeller: string;
  }[];
}

const mockData: {
  id: number;
  title: string;
  date: string;
  time: string;
  picture: string;
  price: number;
  location: string;
  isActive: boolean;
  user: string;
  category: string;
}[] = [
  {
    id: 0,
    title: "Tomorrowland",
    date: "22.04.2023",
    time: "14:00",
    picture:
      "https://www.cornucopia-events.co.uk/wp-content/uploads/2016/02/tomorrowland-2015-videos-live-dj-sets.jpg",
    price: 50,
    location: "Varna",
    isActive: true,
    user: "test@gmail.com",
    category: "test",
  },
  {
    id: 1,
    title: "Disneyland ",
    date: "20.04.2023",
    time: "13:00",
    picture:
      "https://mickeyvisit.com/wp-content/uploads/2022/06/disneyland-after-dark-events.jpg",
    price: 150,
    location: "Burgas",
    isActive: true,
    user: "test2@gmail.com",
    category: "test1",
  },
  {
    id: 2,
    title: "The Lion King - Musical",
    date: "20.03.2023",
    time: "20:00",
    picture:
      "https://s1.ticketm.net/dam/a/db2/dd127bc9-1079-4bbc-9bab-c87acd27edb2_1844451_RETINA_LANDSCAPE_16_9.jpg",
    price: 100,
    location: "Sofia",
    isActive: true,
    user: "test3@gmail.com",
    category: "test3",
  },
  {
    id: 3,
    title: "Concert - Veselin Marinov",
    date: "28.07.2023",
    time: "19:00",
    picture:
      "https://signal.bg/wp-content/uploads/2021/07/VESELINMARINOV-1.jpg",
    price: 100,
    location: "Sofia",
    isActive: true,
    user: "test3@gmail.com",
    category: "test4",
  },
  {
    id: 4,
    title: "Concert - SNG",
    time: "21:00",
    date: "20.03.2023",
    picture:
      "data:image/jpeg;base64,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",
    price: 100,
    location: "Sofia",
    isActive: true,
    user: "test3@gmail.com",
    category: "test4",
  },
];

const App: React.FC = () => {
  const [eventsData, setEventsData] = useState([{}]);
  // Create events
  // Read events from firebase
  useEffect(() => {
    const q = query(collection(db, "events"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let eventsArr: {
        id: string;
      }[] = [];
      querySnapshot.forEach((doc) => {
        eventsArr.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      console.log(eventsArr);
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
        <Route path="/events" element={<Events events={mockData} />} />
        <Route path="/add-new" element={<AddNew />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route
          path="/event/:eventId"
          element={<EventInfo events={mockData} />}
        ></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
