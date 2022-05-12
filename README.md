# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

## Install required package

In the project directory, you can run:

### `npm install`

This will install all required packages for this project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### `npm install -g serve`

Install the Static Server

### `serve -s build`

Sets up HTTP server so that a visitor to your site is served index.html

### `serve -s build -l [port] ` optional

This will help to change the port

<!-- Create a TODO app as a responsive, professionally-looking SPA with React, (mandatory) React
Hooks, (optionally) Redux, and Bootstrap. There will be no server component; so, store all state
locally. Let’s call this a UI prototype.
Note, setup the project using NPM instead of Yarn. We will not have Yarn installed and will
consider this exercise a failure if your submission requires Yarn  -->

## The project has created using `npm init react-app [appname]`

It includes two pages Login and Main. The email and password have stored locally using which user can log in

## Login details

email: admin@admin.com

password : admin123

username : (Note : username can be anything)

## Todo main

User can enter unlimited todo to the list  
 Added todo is visible below which has fields
1.ID 2. User ID 3. Title 4. Description 5. State
a. TODO
b. In Progress
c. Done

## Todo section

" = " is the Drag icon using which user can drag and sort the todo in the droppable area (Todo list)

Note : `npm i react-beautiful-dnd` is used to achieve drag functionality

User can Toggle the state between 'Todo' and "Done" by clicking the Title,State and Description fields

## Tools field

1)Play icon : user can toggle the state between 'Todo' and 'In progress' by clicking the 'Play icon' on the tools field

2)View icon : user can have a complete view with other field details

3)Edit icon : user can edit the particular todo and update

4)Delete icon : user can delete the particular todo

## Filter section

1. Title : sorts the todo list alphabetically with title value.
2. Todo : sorts the todo list which has a 'state : Todo'.
3. In progress : sorts the todo list which has a 'state : In progress'.
4. Done : sorts the todo list which has a 'state : Done'.
5. clear filter : clears the filter and updates original data.

The app is made responsive using `npm i bootstrap` and tools icons are added using `npm react-icons`

The development scripts
In project directory

### `npm install`

### `npm start`

The production scripts
In project directory

### `npm run build`

### `serve -s build`

Optional

### `serve -s build -l [port]`

About Ubuntu

### install npm `$ sudo apt install npm`

### `$ npm --version` To verify if the installation is completed successfully, check the npm version.

### create react app `$ sudo npm -g install create-react-app` Run this npm command to install the create-react-app utility

### `$ create-react-app [app-name]` creates the react app

cd into the app directory

### `$ npm install`

### `$ npm start` to start the app

### `$npm run build`

### `$serve -s build`
