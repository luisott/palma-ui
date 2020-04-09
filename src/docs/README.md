<h1 align="center">Palma UI</h1>

<div align="center">
Component library built in React and using <a href="https://material-ui.com">Material UI</a> components.

[![GitHub license](https://img.shields.io/github/license/luisott/palma-ui)](LICENSE)
[![issues](https://img.shields.io/github/issues/luisott/palma-ui)](https://github.com/luisott/palma-ui/issues)
[![version](https://img.shields.io/npm/v/palma-ui)](https://www.npmjs.com/package/palma-ui)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
![Size](https://badgen.net/bundlephobia/minzip/palma-ui)
[![Node.js CI](https://github.com/luisott/palma-ui/workflows/Node.js%20CI/badge.svg)](https://github.com/luisott/palma-ui/actions?query=workflow%3A%22Node.js+CI%22)
[![PeerDependencies](https://david-dm.org/luisott/palma-ui/master/peer-status.svg)](https://david-dm.org/luisott/palma-ui/master?type=peer)
[![Dependencies](https://david-dm.org/luisott/palma-ui/master/status.svg)](https://david-dm.org/luisott/palma-ui/master)
[![DevDependencies](https://david-dm.org/luisott/palma-ui/master/dev-status.svg)](https://david-dm.org/luisott/palma-ui/master?type=dev)


</div>

This library offers new components not present in Material like `RichTextEditor`, `FilterSelect`, `SearchBar`, 
`ButtonGroup`, `PhoneInput`. 
It also redefines some of the default styles (if used with provided theme) to offer a more modern and minimal design 
(e.g. less/simpler shadows, smoother transitions and less color changes in interactions). 

Palma UI needs to be used in addition to Material UI in your project as it's not meant to replace it, just compliment it with
new components and different styles.  

This library allows for tree shaking so that only the components you use end up in your bundle, read more 
[here](https://material-ui.com/guides/minimizing-bundle-size)

Inspiration for this library came from [Semantic UI](https://react.semantic-ui.com/), 
[Ant](https://ant.design/), [Atlassian](https://atlassian.design) and others.

## Why use this library
If your project is using Material UI and you need other components not provided by material or would like better looking
selects, dropdowns, toggles and appbar

## Why based on Material UI?
Material UI is one of the the most mature, popular, extensive, polished, accessible, and documented UI libraries out there. 
It also allows you to pull only components that you are using, read more about it [here](https://material-ui.com/guides/minimizing-bundle-size/), 
which helps keep the size of this library small.

## Live storybook
View a live version of the storybook [here](https://luisott.github.io/palma-ui)


## Installation
`npm install palma-ui`  

`yarn add palma-ui`

## Usage

### Add your own material theme
This library can be themed using material ui themes. You will at least want to add the primary an secondary
colors of your application (see a good starting theme [here](https://github.com/luisott/palma-ui/blob/master/src/styles/themes.js).  

To add a theme at the root component of your application do:
~~~js
import React from "react";

import {
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { Button } from "palma-ui";


const theme = createMuiTheme({
 themeName: "Light Theme",
 palette: {
   primary: {
     main: "#0847a5"
   },
   secondary: {
     main: "#424242"
   }
 }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Some label</Button>
    </ThemeProvider>
  );
}

export default App;

~~~

More information on Material UI themes and how to define them [here](https://material-ui.com/customization/theming/). 

### Styling components
Components can be styled just like in material-ui (using JSS, CSS or your preferred styled-components library). 
Read more about [here](https://material-ui.com/guides/interoperability/)


## Developing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

`npm test`

Runs tests

`npm test:watch`

Launches the test runner in the interactive watch mode.<br />

`npm run storybook`

Runs storybook on `http://localhost:9009`

`npm run build-storybook`

Builds a static page for storybook with index in `storybook-static/index.html`      

## License

Palma UI is [MIT licensed](LICENSE).