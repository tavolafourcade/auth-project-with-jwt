import Product from '../models/Product.js'

export const createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body
  console.log(req.body)
  const newProduct = new Product({name, category, price, imgURL})
  const productSaved = await newProduct.save()
  res.status(201).json(productSaved)
}

export const getProducts = (req, res) => {
  res.json('get products')
}

export const getProductById = (req, res) => {
  res.json('get product by id')
}

export const updateProductById = (req, res) => {
  res.json('update product by id')
}

export const deleteProductById = (req, res) => {
  res.json('delete product by id')
}