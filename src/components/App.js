import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";


function App() {

  const [allSushi, setAllSushi] = useState([]);
  const [wallet, setWallet] = useState(100);

  useEffect( () => {
    fetch(API)
    .then(r => r.json())
    .then( json => {
      const newSushiArr = json.map( sushi => {
       return {...sushi, eaten: false} ;
      });
      setAllSushi(newSushiArr);
    });
  }, []);

  function handleEatSushi (clickedSushi) {
    if (wallet >= clickedSushi.price) {
      const newSushiArr = allSushi.map( sushi => {
        if (sushi.id === clickedSushi.id) {
          return {...sushi, eaten: true};
        }
        return sushi;
      });
      setAllSushi(newSushiArr);
      setWallet(wallet => wallet - clickedSushi.price);
    }; 
  };

  const eatenSushi = allSushi.filter( sushi => sushi.eaten === true);


  return (
    <div className="app">
      <SushiContainer allSushi={allSushi} onEatSushi={handleEatSushi} />
      <Table eatenSushi={eatenSushi} wallet={wallet}/>
    </div>
  );
}

export default App;
