import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({allSushi, onEatSushi}) {


const [sushiNumber, setSushiNumber] = useState(0);


  const renderedSushi = allSushi
    .slice(sushiNumber, sushiNumber + 4)
    .map( sushi => <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} /> )



  return (
    <div className="belt">
      {renderedSushi}
      <MoreButton setSushiNumber={setSushiNumber} />
    </div>
  );
}

export default SushiContainer;
