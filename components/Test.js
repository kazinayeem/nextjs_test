import React from "react";


function Test() {
  console.log("props is passing ");
  return <div>Test</div>;
} 


export default  React.memo(Test)