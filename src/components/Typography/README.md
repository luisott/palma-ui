## Typography
All text content in paragraphs and headings should be wrapped in a `Typography` component. The usage is just like in [material UI](https://material-ui.com/api/typography/).

The fonts are wrapped in `responsiveFontSizes` to resize fonts for different screen sizes. Read more [here](https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme). 

The font family uses system fonts to achieve a consistent experience between the application and the user's operating system. These are: 
~~~css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", 
"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", 
"Helvetica Neue", sans-serif;
~~~