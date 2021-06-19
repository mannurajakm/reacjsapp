
import React from 'react';

function App(){
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
return(
		<>
		<div>
	  <h1>Hello Sir,<span style={cssstly}>{gerting}</span></h1>
	  </div>
	  </>
	);
}


export default App;
