# Cookie Clicker

In this project, I created a simple web app called Cookie Clicker for my Introduction to Coding students in the 2022-2023 school year. It combines various aspects of HTML, CSS, and JavaScript, making it a good tool to learn these subjects in an interactive way. 

## HTML Concepts

1. **HTML (Hypertext Markup Language)**: HTML is the language used to create web pages. It provides the structure and content of a webpage. In our code, we use HTML tags like `<html>`, `<head>`, `<meta>`, etc. Understanding the purpose and usage of these tags is crucial.
2. **Linking CSS (Cascading Style Sheets)**: We link an external CSS file using the `<link>` tag with the attribute `rel="stylesheet"`. This file, called "styles.css," defines the styles for different HTML elements.
3. **Linking JavaScript**: We also link an external JavaScript file called "script.js" using the `<script>` tag with the attribute `src="js/script.js"`. This file contains the JavaScript code responsible for handling the click event and updating the cookie count.

## CSS Concepts

1. **CSS (Cascading Style Sheets)**: CSS is the language used to style web pages. It controls the visual appearance of elements. In our code, we use various CSS rules and properties such as `@import`, `:root`, `html`, etc.
2. **CSS Custom Properties**: We define custom properties (also known as CSS Variables) like `--c-cookie-color` and `--c-chip-color` to store reusable values that we can use throughout our CSS code.
3. **Box Model**: The Box Model defines how elements are laid out on a web page. It includes properties like margin, padding, and border. We use the `box-sizing` property with the values `border-box` and `inherit` to control the box model behavior.
4. **Media Queries**: Media Queries allow us to apply different styles based on the screen size or device type. In our code, we use a media query with the `@media` rule and the condition `screen and (min-width: 768px)` to make the layout responsive.
5. **Background Images**: We set a background image using the `background` property and the value `url('/img/cookies.jpg') no-repeat center center/cover fixed`.
6. **Font Styling**: We use properties like `font-size`, `font-family`, `color`, and `-webkit-text-stroke` to control the appearance of text.
7. **Selectors**: Selectors target specific elements to apply styles. For example, the `.btn` selector selects elements with the class "btn" and applies specific styles to them.
8. **Transitions**: Transitions create smooth animations when a property changes. In our code, we use the `transition` property with a duration of 0.1 seconds to create smooth transitions for different properties.
9. **Pseudo-classes**: Pseudo-classes select elements based on their state or position in the document. We use the `:focus` and `:active` pseudo-classes to define styles when the button is in focus or active state.
10. **Animation and Transitions**: We define an animation called `cookie-path` using the `@keyframes` rule. This animation is applied to elements with the `.cookie` class and creates a visual effect with different keyframes at different percentages of the animation duration. We also use the `transition` property for a smooth transition effect.
11. **Positioning**: We use the `position` property with the value `absolute` to position elements relative to their closest positioned ancestor or the containing block.
12. **Flexbox**: Flexbox is a layout model that helps align and distribute space among elements in a container. In our code, we use properties like `display`, `flex-direction`, `justify-content`, and `align-items` to achieve a flexible layout.
13. **Responsive Design**: We use the `max-width` property to limit the width of the `.container` element, making it responsive and adaptable to different screen sizes and devices.

## JavaScript Concepts

1. **JavaScript**: JavaScript is a programming language used for making web pages interactive and dynamic. In our code, we use JavaScript syntax, variables, functions, and event listeners.
2. **DOM Manipulation**: The Document Object Model (DOM) is a programming interface that represents the structure of HTML documents. We use DOM manipulation methods like `document.querySelector()`, `document.createElement()`, `element.classList.add()`, `element.appendChild()`, and `element.remove()` to create, modify, and remove elements from the page.
3. **Variables**: We use variables declared with the `const` and `let` keywords to store and manipulate data.
4. **Functions**: We define functions like `makeCookie()`, `incrementCount()`, `deleteCookie()`, `rng()`, and `posOrNeg()` to encapsulate reusable blocks of code. Some of these functions are written using function expressions or arrow function syntax.
5. **Math Operations**: We perform mathematical operations like addition, subtraction, and random number generation using methods like `Math.floor()` and `Math.random()`.
6. **Event Listeners**: We use event listeners to respond to user interactions. In our code, we attach an event listener to the `mkCookie` element, listening for the click event. When the button is clicked, the `makeCookie()` and `incrementCount()` functions are called.
