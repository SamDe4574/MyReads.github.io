# MyReads
This is my solution for the first project for Udacity's React nanodegree I started with started code provided by Udacity.

## Getting Started

`npm install`

When everything is downloaded and installed, stay in the same directory run the following command to get the application running.

`npm start`

That's it! You can now access the web application in your web browser via this url:

`http://localhost:3000` 

### Main Page
- [X] The home page shows 3 shelves for books
- [X] Main page show a control that allow users to move book between shelves.
- [X] Using BookAPI.js file to keep data when refresh the page.

### Search page
- [X] The search page has a search input field where the user types and the list of books is displayed on the page.
- [x] Search results are allow to categorized each book “currently reading”, “want to read”, or “read”.
- [x] The new categorize is show in the Main page.

## Backend Server

[`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:

* `getAll` - returns a collection of book objects
* `update` - returns a Promise which resolves to a JSON object containing the response data of the POST request.
* `search` - returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.

# create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). More information on how to perform common tasks can be found [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Concepts Learned by doing this project 
`React Router, function way of writing js using Es6, Lifecycle Methods , State Management `