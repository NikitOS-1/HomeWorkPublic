import { useState } from "react";
import "./App.css";

function App() {
  function Login() {
    return <div>Login</div>;
  }
  function About() {
    return <div>About</div>;
  }
  function Contact() {
    return <div>Contact</div>;
  }

  const componentsMap = new Map([
    ["Login", <Login />],
    ["About", <About />],
    ["Contact", <Contact />],
    ["Contact", <Contact />],
    ["Contact", <Contact />],
    ["Con2tact", <Contact />],
    ["Contact", <Contact />],
    ["Conta4ct", <Contact />],
    ["Contact3", <Contact />],
  ]);
  const [currentComponentKey, setCurrentComponentKey] = useState("Login");

  const goToNextPage = () => {
    const keys = Array.from(componentsMap.keys());
    const currentIndex = keys.indexOf(currentComponentKey);
    const nextIndex = (currentIndex + 1) % keys.length;
    setCurrentComponentKey(keys[nextIndex]);
  };

  return (
    <div>
      {componentsMap.get(currentComponentKey)}
      <button onClick={goToNextPage}>Next</button>
    </div>
  );
}

export default App;
