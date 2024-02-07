import { useState } from "react";
import { Smile } from "./components/Smile/Smile";
import { ButtonStyled, SmilesStyled, Winner, Wrapper } from "./styled";

export function App() {
  const [smileys, setSmileys] = useState([
    { id: 1, name: "😊", count: 0 },
    { id: 2, name: "😄", count: 0 },
    { id: 3, name: "😁", count: 0 },
    { id: 4, name: "😆", count: 0 },
    { id: 5, name: "😍", count: 0 },
    { id: 6, name: "🥰", count: 0 },
    { id: 7, name: "😎", count: 0 },
    { id: 8, name: "😜", count: 0 },
    { id: 9, name: "😇", count: 0 },
    { id: 10, name: "😋", count: 0 },
  ]);
  const [showResults, setShowResults] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleClick = (id) => {
    const updatedSmileys = smileys.map((smiley) =>
      smiley.id === id ? { ...smiley, count: smiley.count + 1 } : smiley
    );
    setSmileys(updatedSmileys);
  };

  const handleShowResults = () => {
    const maxCount = Math.max(...smileys.map((smiley) => smiley.count));
    const winningSmiley = smileys.find((smiley) => smiley.count === maxCount);
    setWinner(winningSmiley);
    setShowResults(true);
  };

  return (
    <Wrapper>
      <SmilesStyled>
        {smileys.map(({ id, name, count }) => (
          <div key={id}>
            <Smile
              id={id}
              name={name}
              count={count}
              handleClick={handleClick}
            />
          </div>
        ))}
      </SmilesStyled>
      <ButtonStyled onClick={handleShowResults}>Show Results</ButtonStyled>
      {showResults && (
        <Winner>
          <h2>Winner</h2>
          {winner && (
            <div>
              <p>{winner.name}</p>
              <span>count = {winner.count}</span>
            </div>
          )}
        </Winner>
      )}
    </Wrapper>
  );
}
