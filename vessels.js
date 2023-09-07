/* Assignment
Background - You are the admiral of a mighty space fleet of 50 vessels. Your fleet consists of two major types of vessels - support craft and offensive craft. Vessels can all receive a command that tells them to move to given coordinates.
There are three different types of support craft - refueling, mechanical assistance and cargo. They all carry a medical unit. Each vessel can receive orders related to each of the tasks it can carry out.
There are also three different types of offensive craft - battleships, cruisers and destroyers. Battleships have 24 cannons, destroyers have 12 and cruisers have 6. Each offensive craft can receive an attack command, which will fire all its cannons. They can also be instructed to raise their shields.
Finally, the fleet has a command ship, which is where you are. The command ship is one of the battleships, and there is only one per fleet.
Task 1 - Define a set of data structures to accurately reflect this fleet. Make sure that new types of vessels can be added to your fleet with minimal effort.
*/
// Fleet
// - Support Craft
// - - Refuelling
// - - Mechanical Assistance
// - - Cargo
// - Offensive Craft
// - - Battleship
// - - - Command Ship
// - - Cruiser
// - - Destroyer
// - - - Cannon
// - - - Shield

// Base Vessel class
class Vessel {
  constructor(name, type, position) {
    this.name = name;
    this.type = type;
    this.position = position;
  }
  move(position) {
    this.position = position;
  }
}

// - S. Support Craft
class SupportCraft extends Vessel {
  constructor(name, type, position) {
    super(name, type, position);
    this.medicalUnit = true;
  }
  performTask(task) {
    this.task = task;
  }
}

// - - S1. Refuelling Craft
class RefuellingCraft extends SupportCraft {
  constructor(name, type, position) {
    super(name, type, position);
    this.refuel = true;
  }
}

// - - S2. Mechanical Assistance Craft
class MechanicalAssistanceCraft extends SupportCraft {
  constructor(name, type, position) {
    super(name, type, position);
    this.mechanicalAssistance = true;
  }
}

// - - S3. Cargo Craft
class CargoCraft extends SupportCraft {
  constructor(name, type, position) {
    super(name, type, position);
    this.cargo = true;
  }
}

// - O. Offensive Craft
class OffensiveCraft extends Vessel {
  constructor(name, type, position) {
    super(name, type, position);
  }
  attack() {
    this.fire = true;
  }
  raiseShields() {
    this.shields = true;
  }
}

// - - O1. Battleship
class Battleship extends OffensiveCraft {
  constructor(name, type, position) {
    super(name, type, position);
    this.cannons = 24;
    this.commandShip = false; // The default is false, since there is only one command ship
  }
}

// - - O2. Cruiser
class Cruiser extends OffensiveCraft {
  constructor(name, type, position) {
    super(name, type, position);
    this.cannons = 6;
  }
}

// - - O3. Destroyer
class Destroyer extends OffensiveCraft {
  constructor(name, type, position) {
    super(name, type, position);
    this.cannons = 12;
  }
}

module.exports = {
  RefuellingCraft,
  MechanicalAssistanceCraft,
  CargoCraft,
  Battleship,
  Cruiser,
  Destroyer
}
