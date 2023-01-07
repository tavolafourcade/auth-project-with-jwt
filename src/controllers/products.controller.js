import Product from '../models/Product.js'

export const createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body
  console.log(req.body)
  const newProduct = new Product({name, category, price, imgURL})
  const productSaved = await newProduct.save()
  res.status(201).json(productSaved)
}

export const getProducts = async (req, res) => {
  const products = await Product.find()
  res.json(products)
}

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id)
  res.status(200).json(product)
}

export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }) // Por defecto se devuelve el dato viejo, agregar new:true para que retorne el dato nuevo
  res.status(200).json(updatedProduct)
}

export const deleteProductById = async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id)
  res.status(204).json() // Con el 204 no devuelve nada pero ya nos confirma que es satisfactorio
}