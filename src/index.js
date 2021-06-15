import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
let currentdate=new Date();
currentdate=currentdate.getHours();
let gerting='';
const cssstly={ }
if(currentdate>=1 &&currentdate<=12)
{
gerting='Good Morning';
cssstly.color='green';
}
else if(currentdate>12 && currentdate<=19){
	gerting='Good Afternoon';
	cssstly.color='orange';
}
else{
	gerting='Good Night';
	cssstly.color='black';
}
ReactDOM.render(
	<>
	<div>
  <h1>Hello Sir,<span style={cssstly}>{gerting}</span></h1>
  </div>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
