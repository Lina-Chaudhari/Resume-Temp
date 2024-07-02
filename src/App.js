import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/register";
import Forget from "./components/forgotpass";
import Profile from "./components/profile";

import DataSci1 from "./All-Templates/Data Scientist/Temp21/Temp21";
import DataSci2 from "./All-Templates/Data Scientist/Temp22/Temp22";
import DataSci3 from "./All-Templates/Data Scientist/Temp23/Temp23";
import DataSci4 from "./All-Templates/Data Scientist/Temp24/Temp24";
import DataSci5 from "./All-Templates/Data Scientist/Temp25/Temp25";

import Account1 from "./All-Templates/Accounting/Account1/Tempone";
import Account2 from "./All-Templates/Accounting/Account2/Tempseven";

import Teacher1 from "./All-Templates/Teacher/Teacher1/Tech1";
import Teacher2 from "./All-Templates/Teacher/Teacher2/ResumeWrapper";

import SEngineer1 from "./All-Templates/Software Engineer/Temp4/Tempfour";
import SEngineer2 from "./All-Templates/Software Engineer/Temp5/tempfive";
import SEngineer3 from "./All-Templates/Software Engineer/Temp6/Tempsix";

import Manager1 from "./All-Templates/Product Manager/Manager1/Tempeight";
import Manager2 from "./All-Templates/Product Manager/Manager2/Temp9";
import Manager3 from "./All-Templates/Product Manager/Manager3/Temp10";
import Manager4 from "./All-Templates/Product Manager/Manager4/Temp11";
import Manager5 from "./All-Templates/Product Manager/Manager5/Temp12";

import Design1 from "./All-Templates/Designer/Design1/Temp13";
import Design2 from "./All-Templates/Designer/Design2/Temp14";
import Design3 from "./All-Templates/Designer/Design3/Temp15";

import Consulant1 from"./All-Templates/Consultant/Consulant1/Temp16";
import Consulant2 from"./All-Templates/Consultant/Consulant2/Temp17";
import Consulant3 from"./All-Templates/Consultant/Consulant3/Temp18";
import Consulant4 from"./All-Templates/Consultant/Consulant4/Temp19";

import BA1 from "./All-Templates/Business Analyst/Business1/Temp26";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { auth } from "./components/firebase";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
            <Route path="/" element={<BA1/>} />
              <Route
                path="/Login"
                element={user ? <Navigate to="/Resume" /> : <Login />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/ResetPassword" element={<Forget />} />
              <Route path="/Temp21" element={<DataSci1 />} />
              <Route path="/Temp22" element={<DataSci2/>} />
              <Route path="/Temp23" element={<DataSci3 />} />
              <Route path="/Temp24" element={<DataSci4 />} />
              <Route path="/Temp25" element={<DataSci5 />} />
              <Route path="/Temp1" element={<Account1/>} />
              <Route path="/Temp7" element={<Account2/>} />
              <Route path="/Temp2" element={<Teacher1/>} />
              <Route path="/Temp3" element={<Teacher2/>} />
              <Route path="/Temp4" element={<SEngineer1/>} />
              <Route path="/Temp5" element={<SEngineer2/>} />
              <Route path="/Temp6" element={<SEngineer3/>} />
              <Route path="/Temp8" element={<Manager1/>} />
              <Route path="/Temp9" element={<Manager2/>} />
              <Route path="/Temp10" element={<Manager3/>} />
              <Route path="/Temp11" element={<Manager4/>} />
              <Route path="/Temp12" element={<Manager5/>} />
              <Route path="/Temp13" element={<Design1/>} />
              <Route path="/Temp14" element={<Design2/>} />
              <Route path="/Temp15" element={<Design3/>} />
              <Route path="/Temp16" element={<Consulant1/>} />
              <Route path="/Temp17" element={<Consulant2/>} />
              <Route path="/Temp18" element={<Consulant3/>} />
              <Route path="/Temp19" element={<Consulant4/>} />
              <Route path="/Temp26" element={<BA1/>} />

             
              </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;