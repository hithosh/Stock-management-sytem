# Getting Started with Create React App
## About 
Designing stock system for Warehouse.
It has  major Product, Avalibilty check,Purchase Update ,Expire checker,Alert Outofstock.
It help to mange warehouse stock in effectively.

## Main operation in warehouse.
1)Daily how many count of product moving out.(1000) (400 to 1000)
2)Daily how many count of product moving in.(2000)
3)Keep record on each count in and out.(opeartion sytem logs)
4)Out of stock.
5)Intimate out of stock.Before reach day limit.
average day limit => 1000
(1500(6/03) -> out 1000(6/03),out 1000(6/04))
6)Expire of product.
7)Product availabilty 

				
## Pages 
1.Login page
  sub function: signin,signup
2.Dashboard page
  sub function: Menus, user details, Out of stock intimation.
3.Product List(List view columns productid,Product name, WarehouseId, RackId)
  sub function : count of products, Filter , Pagination
4.Deliver the product(Moving out),By list of productid
5.Procurement of product (Moving in), Product details
6.Check Capacity of warehouse.(return empty space from warehouse)
7.List the Expired product.
8.Warehouse Record book.(moving out and moving in logs)

## Model of stock management system.

  

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
