const Product = require('../models/products')

const sortItems = (a, b) => {
  return a.price - b.price
}

const index = async (req, res) => {
  const unsortedProducts = await Product.find({})
  const products = unsortedProducts.sort(sortItems)
  console.log(products)
  res.render("index", {products})
}

const showPokemonByName = async (req, res) => {
  try {
    const pokemonName = req.params.name
    console.log(pokemonName)
    const product = await Product.findOne({name: pokemonName})
    console.log(product)
    res.render("show", {product})
  } catch(error) {
    console.log(error)
  }
}

const newPokeMon = async (req, res) => {
  const lists = await Product.find({});
  res.render("new", { lists });
}

const createPokemon = async (req, res) => {
  const product = req.body
  await Product.create(product, (error, result)=> {
    if(error) {
      console.log(error)
    }
    res.redirect("/products")
  }) 
}

const editPokemon = async (req, res) => {
  try {
    const pokemonName = req.params.name
    console.log(pokemonName)
    const product = await Product.findOne({name: pokemonName})
    console.log(product)
    res.render("edit", {product})
  } catch(error) {
    console.log(error)
  }
}

const updatePokemon = async (req, res) => {
  // save the param in a variable
  const id = req.params.id
  // delete the todo
  await Product.findByIdAndUpdate(id, req.body, {new: true} , (error, result) => {
  // redirect back to main page
  res.redirect("/products")
  })
  
}

const deletePokemon = async (req, res) => {
  // save the param in a variable
  const id = req.params.id
  // delete the todo
  await Product.findByIdAndDelete(id)
  // redirect back to main page
  res.redirect("/products")
}

const buyPokemon = async (req, res) => {
  const pname = req.params.name
  const product = await Product.findOne({name: pname})
  const id = product._id
  console.log('here', id)
  await Product.findByIdAndUpdate(id, {qty: product.qty - 1}, (error, result) => {
    console.log(error)
    // redirect back to main page
    res.redirect(`/products/${product.name}`)
    })
}

module.exports = {
    index,
    show : showPokemonByName,
    new : newPokeMon,
    create: createPokemon,
    edit: editPokemon,
    update: updatePokemon,
    delete: deletePokemon,
    buy: buyPokemon
}