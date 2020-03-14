# Palma UI
Component library built in React and using [Material UI](https://material-ui.com) components.

This library offers new components not present in Material like `RichTextEditor`, `FilterSelect` and `SearchBar`. 
It also redefines some of the default styles to offer a more modern and minimal design (e.g. less/simpler shadows, 
smoother transitions and less color changes in interactions). 

This library should be used in addition to Material UI in your project as it's not meant to replace it, just compliment it with
new components and styles.

Inspiration for this library came from [Semantic UI](https://react.semantic-ui.com/), 
[Ant](https://ant.design/), [Atlassian](https://atlassian.design) and others.


## Why based on Material UI?
Material UI is one of the the most mature, popular, extensive, polished, accessible, and documented UI libraries out there. 
It also allows you to pull only components that you are using, read more about it [here](https://material-ui.com/guides/minimizing-bundle-size/), 
which helps keep the size of this library small.


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
      