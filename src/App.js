import { useEffect, useState, createContext } from "react";
import CategoryCard from "./components/CategoryCard";
import "./styles.css";
import Showjoke from "./components/Showjoke";
export const jokeContext = createContext();
export default function App() {
  const [categories, SetCategories] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [joke, setJoke] = useState("");
  const [gotJoke, setGotjoke] = useState(false);
  const [displayjokeBox, setDisplayJokeBox] = useState("none");
  useEffect(() => {
    setIsloading(true);
    fetch("https://api.chucknorris.io/jokes/categories#")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetCategories(data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const findjoke = (categoryName) => {
    fetch("https://api.chucknorris.io/jokes/random?category=" + categoryName)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setJoke(data);
        setGotjoke(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(displayjokeBox);
  return (
    <div className="App">
      <h2>Chuck Norries</h2>
      {isloading && <div>Loading data...</div>}
      <jokeContext.Provider
        value={{
          joke,
          setJoke,
          setGotjoke,
          findjoke,
          displayjokeBox,
          setDisplayJokeBox
        }}
      >
        <div id="cateogries">
          {!isloading &&
            categories.map((category, idx) => {
              return <CategoryCard key={idx} categoryName={category} />;
            })}
        </div>
        {gotJoke && <Showjoke jokedata={joke.categories[0]} />}
      </jokeContext.Provider>
    </div>
  );
}
