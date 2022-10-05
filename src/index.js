import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import AddLoanForm from './Components/Loans/AddLoanForm';
import LoanList from './Components/Loans/LoanList';
import Notes from './Components/Notes/Notes'
import Questions from './Components/Notes/question';
import Login from './Components/Authentication/Login';


import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}>
            <Route path="/AddLoanForm" element={<AddLoanForm/>}/>
            <Route path="/LoanList" element={<LoanList/>}/>
            <Route path="/Notes" element={<Notes/>}/>
            <Route path="/Questions" element={<Questions/>}/>
            <Route path="/Login" element={<Login/>}/>
        </Route>
        
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
