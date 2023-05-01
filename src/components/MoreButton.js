import React from "react";

function MoreButton({setSushiNumber}) {

  function handleMoreSushiClick () {
    setSushiNumber(sushiNumber => sushiNumber + 4)
  }

  return <button onClick={handleMoreSushiClick}>More sushi!</button>;
}

export default MoreButton;
