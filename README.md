# UI Components
Component library built in React and using [Material UI](https://material-ui.com) components.

This library attempts to provide a more modern, minimalistic and out-of-the-box functionality that when using only 
Material UI. 

This is done by wrapping some of the already provided components in Material with predefined configurations and styles to result in 
less/simpler shadows, smoother transitions and better looking components. 

It includes new components and pre-built layouts that are common to most applications. New components like a 
`RichTextEditor`, `PhoneInput`, `CreditCardInput` and new layouts like login/signup and account settings.

UI Components is a complementary UI library and should be used together with Material UI in your project 
(since it doesn't wrap every single component that Material provides, just those that I felt needed a better look, 
functionality and developer experience).

Inspiration implementing this library come from [Semantic UI](https://react.semantic-ui.com/), 
[Ant](https://ant.design/), [Atlassian](https://atlassian.design) and others.


## Why based on Material UI?
Material UI is one of the the most mature, popular, extensive, polished, and documented UI libraries out there, and it has been for a 
long time. It provides components with functionality that require lots of time to implement from scratch (e.g. dropdown
 menus that will open up when there is no room on the bottom of the screen, accessibility features, etc).


And why build something that has been done and tested already? Better spend the time building new/innovative features 
that add value to your users.

## Installation [WIP]
`npm install ui-components --save`  

`yarn add ui-components --save`

## Usage [WIP]

`import {Button} from "ui-components"`

You can import only the components you need to minimize bundle size. More information [here](https://material-ui.com/guides/minimizing-bundle-size)


### Add your own material theme (optional)
This library can be themed using material ui themes. At the root component of your application (e.g. `App.js`) do:
~~~js
import React from "react";

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";

import { yourTheme } from "<location for your theme>";

const theme = responsiveFontSizes(createMuiTheme(yourTheme));

function App() {
  return (
    <ThemeProvider theme={theme}>
      {}
    </ThemeProvider>
  );
}

export default App;

~~~

More information on Material UI themes and how to define them [here](https://material-ui.com/customization/theming/). 

# Developing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`npm run analyze`

Analyze bundle size

`npm run storybook`

Runs storybook on `http://localhost:9009`

`npm run build-storybook`

Builds a static page for storybook with index in `ui-components/.out/index.html`      
      