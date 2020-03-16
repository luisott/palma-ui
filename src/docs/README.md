<h1 align="center">Palma UI</h1>

<div align="center">
Component library built in React and using [Material UI](https://material-ui.com) components.

[![GitHub license](https://img.shields.io/github/license/luisott/palma-ui)](LICENSE)
[![issues](https://img.shields.io/github/issues/luisott/palma-ui)](https://github.com/luisott/palma-ui/issues)
[![version](https://img.shields.io/npm/v/palma-ui)](https://www.npmjs.com/package/palma-ui)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

</div>

This library offers new components not present in Material like `RichTextEditor`, `FilterSelect` and `SearchBar`. 
It also redefines some of the default styles to offer a more modern and minimal design (e.g. less/simpler shadows, 
smoother transitions and less color changes in interactions). 

This library should be used in addition to Material UI in your project as it's not meant to replace it, just compliment it with
new components and styles.

Inspiration for this library came from [Semantic UI](https://react.semantic-ui.com/), 
[Ant](https://ant.design/), [Atlassian](https://atlassian.design) and others.

## Live storybook
View a live version of the storybook [here](https://luisott.github.io/palma-ui)

## Why based on Material UI?
Material UI is one of the the most mature, popular, extensive, polished, accessible, and documented UI libraries out there. 
It also allows you to pull only components that you are using, read more about it [here](https://material-ui.com/guides/minimizing-bundle-size/), 
which helps keep the size of this library small.


## Installation
`npm install palma-ui`  

`yarn add palma-ui`

## Usage

`import {Button} from "palma-ui"`

You can import only the components you need to minimize bundle size. More information [here](https://material-ui.com/guides/minimizing-bundle-size)


### Add your own material theme (optional)
This library can be themed using material ui themes. At the root component of your application do:
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