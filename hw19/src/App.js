import { useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";

function App() {
  const menuItem = ["Home", "Product", "About", "Contact"];
  const [currentItem, setCurrentItem] = useState(menuItem[0]);

  return (
    <div className="App">
      <header className="header">
        <div>Logo</div>
      </header>
      <main className="main">
        <div className="nav">
          <ul>
            {menuItem.map((el, i) => (
              <li key={i} onClick={() => setCurrentItem(el)}>
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className="content">
          <Content currentItem={currentItem} />
        </div>
      </main>
      <footer className="footer">Home work 19. Nikita Puzyrenko</footer>
    </div>
  );
}

export default App;
