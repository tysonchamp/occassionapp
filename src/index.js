import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// admin common
import AdminCommon from "./admin/common/Common";
import AdminLogin from "./admin/Login";
import ForgotPassword from "./admin/ForgotPassword";
// frontend common
import FrontCommon from "./front/common/Common";

// global variables
import AppContext from './components/GlobalVars';
const testApi = 'http://127.0.0.1:8000';
const liveApi = 'https://occassionapp.excelwebtechnology.com';
AppContext.apiUrl = testApi+"/api/";
AppContext.uploadUrl = testApi+"/";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<FrontCommon />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/reset-password" element={<ForgotPassword />} />
          <Route path="/admin/*" element={<AdminCommon />} />
        </Routes>
      </Router>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
