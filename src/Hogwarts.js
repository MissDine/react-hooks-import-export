import React from "react";
import whoseHouse from "./houses/whoseHouse";

function Hogwarts() {
  whoseHouse(); // => "HAGRID'S HOUSE!"

  return <h1>Welcome to Hogwarts!</h1>;
}
import aDifferentName from "./houses/whoseHouse";

function Hogwarts() {
  aDifferentName(); // => "HAGRID'S HOUSE!"

  return <h1>Welcome to Hogwarts!</h1>;
}
import React from "react";
import Hufflepuff from "./houses/Hufflepuff";

function Hogwarts() {
  return (
    <div>
      <Hufflepuff />
    </div>
  );
}

export default Hogwarts;
import { colors, gryffMascot } from "./houses/Gryffindor";

console.log(colors);
// => 'Scarlet and Gold'

gryffMascot();
// => 'The Lion'
import * as GryffFunctions from "./houses/Gryffindor";

console.log(GryffFunctions.colors);
// > 'Scarlet and Gold'

GryffFunctions.gryffMascot();
// => 'The Lion'

GryffFunctions.values();
// => Attempted import error
import { colors, gryffMascot } from "./houses/Gryffindor";

console.log(colors);
// > 'Scarlet and Gold'

gryffMascot();
// > 'The Lion'
import { colors as houseColors, gryffMascot as mascot } from "./houses/Gryffindor";

console.log(houseColors);
// > 'Scarlet and Gold'

mascot();
// > 'The Lion'
