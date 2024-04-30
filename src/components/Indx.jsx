import React, { useState, useEffect } from "react";
import Namaste from "./Namaste";

function Indx() {
  const [showComponent, setShowComponent] = useState(true); // Initial state

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(false);
    }, 10500); // time interval

    return () => clearTimeout(timeout); // Cleanup function to avoid memory leaks
  }, []); // Emptying dependency array to ensures useEffect runs only once after mount

  return (
    <section id="indx">
      {showComponent && <Namaste />}
      {!showComponent && (
        <div id="main-indx">
          <h2>Hello World!</h2>
          <p>This is Vishwas Karode.</p>
        </div>
      )}
    </section>
  );
}

export default Indx;
