import { useState, useContext } from "react";
import { jokeContext } from "../App";
import "./showjoke.css";
const Showjoke = (props) => {
  const setjoke = useContext(jokeContext);
  return (
    <>
      {setjoke.joke && (
        <div id="jokebox" style={{ display: setjoke.displayjokeBox }}>
          <div id="upperpart">
            <h2>{setjoke.joke.categories[0]}</h2>
            <button
              onClick={() => {
                setjoke.setDisplayJokeBox("none");
              }}
            >
              close
            </button>
          </div>
          <div id="body">
            {!setjoke.joke && <p>Finding Joke</p>}
            {setjoke.joke && <p id="joke">{setjoke.joke.value}</p>}
            <button onClick={() => setjoke.findjoke(props.jokedata)}>
              Next Joke
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Showjoke;
