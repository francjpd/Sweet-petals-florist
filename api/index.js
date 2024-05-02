import express from 'express'
import { products } from './mock-products.js'
// import fs from 'fs'
import cors from 'cors'
const app = express()
const port = 3000

// SSL certificate
// const privateKey = fs.readFileSync('server.key', 'utf8')
// const certificate = fs.readFileSync('server.cert', 'utf8')
// const credentials = { key: privateKey, cert: certificate }

app.use(cors())

// Serve static files from the 'images' directory
app.use('/images', express.static('api/images'))

// Endpoint to get the list of products
app.get('/product', (req, res) => {
  res.json(products)
})

// Endpoint to get a product by id
app.get('/product/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404).send('Product not found')
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Mock server listening at http://localhost:${port}`)
})
// // Create HTTPS server
// const httpsServer = https.createServer(credentials, app);

// // Start the server
// httpsServer.listen(port, () => {
//     console.log(`Mock server listening over HTTPS at https://localhost:${port}`);
// });
