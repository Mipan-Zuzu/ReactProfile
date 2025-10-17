import "./App.css";
import React from "react";

const App = () => {
  const userData = {
    imgurl: "https://avatars.githubusercontent.com/u/194325824?v=4",
    imghand:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png",
    nama: "mipan",
    lastName: "Pok3",
  };

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
        <p>
          Hi There <img src={userData.imghand} width={30} alt="hand" />
        </p>
      </center>
      <div className="Sosial">
        <a href="https://www.linkedin.com/in/kadek-isaka/">
          <img
            src="https://img.shields.io/badge/LinkedIn-4a7766?style=for-the-badge&logo=linkedin&logoColor=white"
            alt="LinkedIn-Mipan-Zuzu"
          />
        </a>
        <a href="https://github.com/Mipan-Zuzu?tab=followers">
          <img
            alt="followers"
            title="Follow me on Github"
            src="https://custom-icon-badges.demolab.com/github/followers/Mipan-Zuzu?color=4a7766&labelColor=ece7e2&style=for-the-badge&label=Followers&logoColor=white"
          />
        </a>

        <a href="https://discord.com/users/858201924795629569">
          <img
            src="https://img.shields.io/badge/Discord-4a7766?style=for-the-badge&logo=discord&logoColor=white"
            alt="Discord-Mipan-Zuzu"
          />
        </a>
      </div>
      <div className="flex">
        <img
          src="https://skillicons.dev/icons?i=js,react,nodejs,vite,next"
          alt="learning"
          width={200}
        />
      </div>
      <div className="flex activity">
        <img src="https://camo.githubusercontent.com/513d51f582152ba39edce66a1161cb7689dc775d054864dd7b19bfaffedf2d9d/68747470733a2f2f6769746875622d70726f66696c652d73756d6d6172792d63617264732e76657263656c2e6170702f6170692f63617264732f70726f66696c652d64657461696c733f757365726e616d653d4d6970616e2d5a757a75267468656d653d6461726b" width={455} alt="activity" />
      </div>
    </>
  );
};

export default App;
