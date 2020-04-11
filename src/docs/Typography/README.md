# Typography
All text content in paragraphs and headings should be wrapped in a `Typography` component. The usage is just like in [material UI](https://material-ui.com/api/typography/).

The font family in these stories use system fonts to achieve a consistent experience between the application and the user's operating system.  

Use your own font styles when defining your theme with:
~~~js
const theme = {
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', 'Roboto', 'Oxygen',\n" +
      "    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n" +
      "    sans-serif",
    }
};
~~~