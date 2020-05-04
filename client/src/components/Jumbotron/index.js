import React from "react";
import bgimage from "../../images/jumbo-bg.jpg";
function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 250,
        clear: "both",
        paddingTop: 100,
        textAlign: "center",
        backgroundImage: `url(${bgimage})`,
        color: "forestgreen"
      }}
      className="jumbotron jumbotron-fluid"
    >
      <container>
      {children}
      </container>
    </div>
  );
}

export default Jumbotron;

