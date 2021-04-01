//Import The Database Connection
const mongoose = require("./connection")

///////////////////////////////////////////
// IMPORT YOUR MODELS BELOW
///////////////////////////////////////////
const Product = require("../models/products")
///////////////////////////////////////////
// DO YOUR DATABASE OPERATIONS IN BELOW FUNCTION
///////////////////////////////////////////

const seed = async () => {
  const newProducts =
    [
      {
        name: 'Charizard',
        description: 'Fire/Flying Pokémon introduced in Generation I. It evolves from Charmeleon starting at level 36. It is the final form of Charmander',
        img: 'https://i.imgur.com/ln3eSKI.png',
        price: 50,
        qty: 99
      }, {
        name: 'Dragonite',
        description: `Grass/Dragon Pokémon introduced in Generation VIII. It evolves from Applin when exposed to a Tart Apple. It is one of Applin's final forms, the other being Appletun`,
        img: 'https://i.imgur.com/klYyX83.png',
        price: 25,
        qty: 0
      }, {
        name: 'Houndoom',
        description: 'Dark/Fire Pokémon introduced in Generation II. It evolves from Houndour starting at level 24.',
        img: 'https://i.imgur.com/LvCb41j.png',
        price: 7000,
        qty: 1
      },{
        name: 'Pikachu',
        description: 'Small, mouse-like Pokémon that have short, yellow fur with brown markings covering their backs and parts of their tails.',
        img: 'https://i.imgur.com/hnkE2bx.png',
        price: 7,
        qty: 12
      },{
        name: 'Zapdos',
        description: 'Electric/Flying Legendary Pokémon introduced in Generation I. It is not known to evolve into or from any other Pokémon.',
        img: 'https://i.imgur.com/xWDEB4v.png',
        price: 7,
        qty: 12
      }, {
        name: 'Mew',
        description: 'Pink, bipedal Pokémon with mammalian features. It has a rounded, wide snout; triangular ears; and large, blue eyes',
        img: 'https://i.imgur.com/JM6bDRc.png',
        price: 50,
        qty: 99
      }, {
        name: 'Mewtwo',
        description: `Pokémon that was created by genetic manipulation`,
        img: 'https://i.imgur.com/fKLgWSZ.png',
        price: 25,
        qty: 0
      }, {
        name: 'Venusaur',
        description: 'Grass/Poison Pokémon introduced in Generation I. It evolves from Ivysaur starting at level 32.',
        img: 'https://i.imgur.com/V2JIK06.png',
        price: 7000,
        qty: 1
      },{
        name: 'Psyduck',
        description: 'Constantly stunned by its headache and is unable to think very clearly. It usually stands immobile, trying to calm its headache.',
        img: 'https://i.imgur.com/YlHpnd8.png',
        price: 7,
        qty: 12
      },{
        name: 'Snorlax',
        description: 'Huge, bipedal, dark blue-green Pokémon with a cream-colored face, belly, and feet.',
        img: 'https://i.imgur.com/eHyeRTs.png',
        price: 7,
        qty: 12
      },{
        name: 'Blaziken',
        description: `Fire/Fighting Pokémon introduced in Generation III. It evolves from Combusken starting at level 36.`,
        img: 'https://i.imgur.com/PEP4ei2.png',
        price: 25,
        qty: 0
      }, {
        name: 'Articuno',
        description: 'Large avian Pokémon with predominantly blue plumage and wings said to be made of ice.',
        img: 'https://i.imgur.com/IfxDG2H.png',
        price: 7000,
        qty: 1
      },{
        name: 'Tyranitar',
        description: 'Large, bipedal, dinosaurian Pokémon with a green, armor-like hide covering its body.',
        img: 'https://i.imgur.com/zcPJIif.png',
        price: 7,
        qty: 12
      },{
        name: 'Lugia',
        description: 'Pokémon that resembles a dragon, a plesiosaur, and a bird. It is primarily silver-white, but it has blue undersides with slightly varying tones.',
        img: 'https://i.imgur.com/7bbdqzt.png',
        price: 7,
        qty: 12
      },{
        name: 'Heracross',
        description: 'Bug/Fighting type Pokémon introduced in Generation 2 . It is known as the Single Horn Pokémon.',
        img: 'https://i.imgur.com/3obImd8.png',
        price: 7,
        qty: 12
      },{
        name: 'Sceptile',
        description: `Has seeds growing on its back. They are said to be bursting with nutrients that revitalize trees. ... The leaves growing on Sceptile's body are very sharp edged.`,
        img: 'https://i.imgur.com/1zXXJGh.png',
        price: 7,
        qty: 12
      }
    ]

  try {
    const seedItems = await Product.create(newProducts)
    console.log(seedItems)
  } catch (err) {
    console.log(err)
  }
}

// Run Seed Function
seed()