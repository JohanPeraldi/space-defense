// Import the required modules
const {
  RefuellingCraft,
  MechanicalAssistanceCraft,
  CargoCraft,
  Battleship,
  Cruiser,
  Destroyer
} = require('./vessels.js');

// An array to store the fleet
const fleet = [];

// The fleet is made up of an equal number of offensive and support ships, totalling 50 vessels
// We will create 8 vessels of each type and add the command ship and an extra destroyer
for (let i = 1; i <= 8; i++) {
  fleet.push(new RefuellingCraft(`Refuelling Craft ${i}`, 'Refuelling', [0, 0]));
  fleet.push(new MechanicalAssistanceCraft(`Mechanical Assistance Craft ${i}`, 'Mechanical Assistance', [0, 0]));
  fleet.push(new CargoCraft(`Cargo Craft ${i}`, 'Cargo', [0, 0]));
  fleet.push(new Battleship(`Battleship ${i}`, 'Battleship', [0, 0]));
  fleet.push(new Cruiser(`Cruiser ${i}`, 'Cruiser', [0, 0]));
  fleet.push(new Destroyer(`Destroyer ${i}`, 'Destroyer', [0, 0]));
}

// Since we need two more vessels to make up the fleet, we'll add them here,
// one of them being the command ship...
fleet.push(new Battleship('Command Ship', 'Battleship', [0, 0]));
// ...and the other being a destroyer
fleet.push(new Destroyer('Destroyer 9', 'Destroyer', [0, 0]));
// We change the command ship's commandShip property to true
fleet[fleet.length - 2].commandShip = true;

// Output the fleet
console.log(fleet);

// Output the number of vessels in the fleet
console.log(`The fleet has ${fleet.length} vessels.`);
