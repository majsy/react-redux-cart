# Redux Shopping Cart

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

To install dependencies, use the package manager [Yarn](https://yarnpkg.com/en/):

```
yarn
```

To start a development server:

```
yarn start
```

## Process

## Styles + Responsive Layout

Since this is a small app I set up a minimal scss structure with base styles including reusable ui styles and global variabes, as well as a separate style sheet for each component to keep things isolated.

My approach for the layout was to add height/width to the wrapping container elements and give the child elements fluid sizes so I mainly had to update the size of the container elements depending on the breakpoint.


## Redux + React

When building a react/redux app I try to start off with a list of all the states that the included actions will mutate. This helps me to structure my app better and write more efficient code. 

I aim to keep my components 'dumb' and keep all redux action calls and connect functionality inside of the containers.

The cart item quantity buttons were a fun challenge since they include multiple states and I needed to add conditional functionality for the reduce quantity button and different conditionals for the buttons diabled checks. 
See [quantity buttons code](https://github.com/majsy/react-redux-cart/blob/972529384d58543616acf3f5e0723bf5605a2046/src/containers/CartItem.js#L25-L37).

To calculate the total amount of items to display on the cart icon I created a `getTotalItems` reducer which combines the `getAddedIds`and `getQuantity`reducers. 
See [reducer code](https://github.com/majsy/react-redux-cart/blob/972529384d58543616acf3f5e0723bf5605a2046/src/reducers/index.js#L28-L34).

 
## API

After replacing the static json with the api call I logged the fetched json object to get the updated structure of the product object so that I could replace the product title key and price value throughout the app.