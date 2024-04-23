import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homecards from "./Components/homecards/Homecards";
import Jobs from "./Components/Jobs/Jobs";
import Chatpage from "./Components/Chatpage/Chatpage";
import NotificationPanel from "./Components/NotificationPanel/NotificationPanel";
import MyNetwork from "./Components/MyNetwork/MyNetwork";
import ServiceProfile from "./Components/ServiceProfile/ServiceProfile";
import Profile from "./Components/Profile/Profile";
// // import NotificationPanel from "./Components/NotificationPanel/NotificationPanel";
// import Navbar from "./Components/Navbar/Navbar";
// import Postcard from "./Components/postcard/Postcard";
// import Profilesidebar from "./Components/aside1/Profilesidebar";
// import Activefriendssidebar from "./Components/aside2/Activefriendssidebar";
// import Homecards from "./Components/homecards/Homecards";
// import Chatpage from "./Components/Chatpage/Chatpage";

// import ServiceProfile from "./Components/ServiceProfile/ServiceProfile";

// import ServiceSidebar from "./Components/ServiceProvided/ServiceSidebar";

// import ServiceProvided from "./Components/ServiceProvided/ServiceProvided";

// import Profile from "./Components/Profile/Profile";

// import Jobs from "./Components/Jobs/Jobs";

// import MyNetwork from "./Components/MyNetwork/MyNetwork";

const App = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Homecards />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/chats" element={<Chatpage />} />
          <Route path="/notification" element={<NotificationPanel />} />
          <Route path="/network" element={<MyNetwork />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cv" element={<ServiceProfile />} />
        </Routes>
      </Router>
      {/* <ServiceProfile /> */}
      {/* <ServiceProvided /> */}
      {/* <ServiceSidebar /> */}
      {/* <Profile /> */}
      {/* <Jobs /> */}
      {/* <MyNetwork /> */}
      {/* <Chatpage /> */}
      {/* <Navbar />
      <Homecards /> */}
      {/* <div className=" text-center flex flex-col">
        <Profilesidebar />
        <Postcard />
        <Activefriendssidebar /> */}
      {/* <NotificationPanel /> */}
    </div>
  );
};

export default App;
