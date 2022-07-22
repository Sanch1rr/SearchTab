import React, { useState } from "react";
import "./styles.css";

function App() {
  const [data, setData] = useState(["asdas", "asdasda", "asdsad"]);
  const [vali, setVali] = useState(true);
  function aa(e) {
    let data1 = data;
    data1.push(e.target[0].value);
    setData(data);
    console.log(data1);
    e.preventDefault();
    console.log("aa");
    setVali(!vali);
  }
  return (
    <div className="App">
      {data.map((e) => {
        return <div className="tag">{e}</div>;
      })}

      <form action="" onSubmit={aa}>
        <input
          type="search"
          name="search-bar"
          id="search-bar"
          placeholder="Search..."
        />
      </form>
      {/* <input type="search" name="search-bar" id="search-bar2" /> */}
    </div>
  );
}

export default App;
