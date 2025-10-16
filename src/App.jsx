import "./App.css";
import React, {useState} from "react";
import Tech from "./components/tech";
import Mybutton from "./components/mybutton";

const App = () => {

  const tectStack = ["react", "mongodb", "nodeJs", "Express"];
  const userData = {
    imgurl: "https://avatars.githubusercontent.com/u/194325824?v=4",
    imghand : "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png",
    nama: "mipan",
    lastName: "Pok3",
  }

  const [getNavValue , setNavValue] = useState("")


  const clicked = () => {
    setNavValue('True')
  }

  return (
    <>
      <center className="container">
        <img
          className="imgUser"
          src={userData.imgurl}
          alt="imgUser"
          width={100}
        />
        <h1 className="userName">{userData.nama + userData.lastName}</h1>
        <p>Hi There <img src={userData.imghand} width={30} alt="hand" /></p>
      </center>
      <center>
        <div>My tech</div>
      </center>
      <center>
        <div>
          <ul>
            <Tech Techs={tectStack} random={getNavValue} />
          </ul>
        </div>
      </center>
      <center>
        <Mybutton clicked={clicked}/>
      </center>
    </>
  );
};

export default App;
