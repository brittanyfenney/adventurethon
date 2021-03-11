import React from 'react';

export default  class World extends React.Component {


  render() {
    class Item {
      constructor(name, state) {
        this.name = name;
        this.state = state;
      }
    }

    class Weapon extends Item {
      constructor(name, dmg, state) {
        super(name, state);
        this.damage = dmg;
      }
    }

    class Wallet extends Item {
      constructor(name, gold, silver, copper, state) {
        super(name, state);
        this.gold = gold;
        this.silver = silver;
        this.copper = copper;
      }
    }

    let sword = new Weapon("two-handed sword", 5, 1);
    let axe = new Weapon("battle axe", 4, 2);
    let pouch = new Wallet("leather pouch", 1, 0, 1, 3);
    let liquorice = new Item("liquorice", 0);
    let helmet = new Item("rusty helmet", 3);
    let boots = new Item("snake-skin boots", 3);

    sword.description =
      "Everything a great warrior needs. Or is it 'a great worrier?'";
    axe.description = "A double axe with iron blades and a wooden handle.";
    pouch.description = "Your father's pouch, made of Spanish leather.";
    liquorice.description = "A half-eaten piece of liquorice.";
    helmet.description = "Why do you keep stuff like that anyway?";
    boots.description = "Made of real anaconda skin—or so said the merchant.";

    const allItems = [sword, axe, pouch, liquorice, helmet, boots]

    var inventory = [];

    for (let i of allItems) {
      if (i.state === 3) {
        inventory.push(i.name);
      }
    }

    return { inventory };
  }
}
