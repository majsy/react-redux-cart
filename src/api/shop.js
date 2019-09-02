/**
 * Mocking client-server processing
 */
// import _products from './products.json'

const URL = "http://tech.work.co/shopping-cart/products.json";

export default {
  // getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  getProducts: (cb) => fetch(URL).then(response => response.json())
    .then(json => {cb(json)}),
  buyProducts: (cb) => fetch(URL).then(response => response.json())
  .then(json => {cb(json)})
}
