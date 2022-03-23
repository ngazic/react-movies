# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
API KEY is in .env file. To protect api keys, they should start with **"REACT_APP_"**. For the sake of this demo, we didn't keep them so hidden.

## Live app

[Go to the app](https://react-movies-and-shows.netlify.app)

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


## Guides

Testing is guided by these principles: [Official React testing Library guide](https://testing-library.com/docs/guiding-principles).
Simple guide from testing Vue JS apps: [Know what to test](https://vuejsdevelopers.com/2019/08/26/vue-what-to-unit-test-components/) 

### Add redux 

```
npm install -S redux react-redux redux-thunk redux-devtools-extension @types/react-redux
```

### Add Sass preprocessor

```
npm install node-sass@4.14.1
```

### Add Router

```
npm i react-router-dom @types/react-router-dom
```

### Add Redux mock store for development

```
npm i redux-mock-store -D
```

## Useful resources
[Free code camp: Start testing using react testing library](https://www.freecodecamp.org/news/8-simple-steps-to-start-testing-react-apps-using-react-testing-library-and-jest/).

## App goals

Application:
+ application is running without errors
+ solution requirements have been met
+ application is responsive
- javascript with sourcemaps (debug can be handled better) 
- design off application is poor, no template was used, not used potential of Ant design

Source codes:
+ BEM naming convention for CSS
+ UI Test Navigation of tsx component by JEST
- didn't used composeWithDevTools for debug and release build
- many hardcoded strings and resources
- not clear structure of application, in the root are helpers, pngs., source codes, csss all together
- redux structure is not clear, it is only one Actions file containing all operations
- direct call of fetch on API in useEfect component
- weak use of potential of functional components, not optimized,by useMemo and useCallback
- not used useSelector ( mapStateToProps is too old) 
-  code is not uniform, somewhere is used Type, somewhere Interface, somewhere React F.C and otherwhere FunctionComponent
