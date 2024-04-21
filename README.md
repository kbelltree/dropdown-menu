# @k-bell/k-bell-dropdown-menu-practice

This NPM package is developed as part of a tutorial from [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-dynamic-user-interface-interactions), aimed at creating dynamic, single-level dropdown menus using **JavaScript** only or including **CSS**. For an in-depth guide, refer to [the lesson on 'Dropdown Menus'](https://www.theodinproject.com/lessons/node-path-javascript-dynamic-user-interface-interactions#drop-down-menus).

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Preview](#preview)
- [Enhanced Example Preview](#enhanced-example-preview)
- [Final Thoughts](#final-thoughts)

## Description

The `@k-bell/k-bell-dropdown-menu-practice` simplifies the implementation of single-level dropdown menus on webpages. By initializing once, the package enables all dropdowns to toggle visibility seamlessly. This tool is designed for handling multiple dropdowns without the need for individual configurations.

> **Note**: This package is intended for **private and educational use**, tailored to specific project requirements.

### Features

1. [**`attachDropdownEffectOnLoad`**](#attachdropdowneffectonload-function-and-k-bell-dropdowncss-file):

   - Attaches _click_ event listeners to dropdown triggers globally on page load. This function activates the dropdown effect for all menus simultaneously.

2. [**`addDropdownToEachMenuAEl`**](#adddropdowntoeachmenuael-function):

   - Dynamically inserts a structured dropdown list (`<ul><li><a>Link</a></li></ul>`) under each `<a>Menu Title</a>`. It is capable of targeting multiple anchor elements at once.

3. **`k-bell-dropdown.css`**:
   - Provides essential styles for the functioning of the dropdown effects and includes basic styling that can be easily adapted or extended.

## Installation

Use the following command line to install.

```bash
npm install @k-bell/k-bell-dropdown-menu-practice
```

## Usage

### attachDropdownEffectOnLoad Function and k-bell-dropdown.css File

This function initializes dropdown effects on page load, applying them to all configured dropdowns.

### Usage Example

**HTML Basic Structure**
<br>
Construct a menu and its dropdown elements, adding `class="k-bell-dropdown"` to the menu title anchor (`<a>`) element.

```html
<!-- Navigation Bar Example -->
<ul>
  <li>
    <a href="#" class="k-bell-dropdown">Menu</a>
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
    </ul>
  </li>
  <!-- Add more dropdown menus as needed -->
</ul>
```

**JavaScript**

```js
import { attachDropdownEffectOnLoad } from "@k-bell/k-bell-dropdown-menu-practice";
import "@k-bell/k-bell-dropdown-menu-practice/src/k-bell-dropdown.css"; // IMPORTANT: Ensure the stylesheet is imported.

// Initialize the dropdown effect.
attachDropdownEffectOnLoad();
```

***
### addDropdownToEachMenuAEl Function

This function dynamically adds dropdown content to specified menu anchors identified by unique IDs.

### Usage Example

**HTML Basic Structure**

Create your navigation bar with menu titles. Ensure each menu title anchor (`<a>`) element has a unique `id`.

```html
<!-- Navigation Bar Setup -->
<ul>
  <li><a href="#" id="menu-id">Menu Title</a></li>
  <!-- Additional menus with unique IDs -->
  <li><a href="#" id="menu-id2">Menu Title 2</a></li>
  <li><a href="#" id="menu-id3">Menu Title 3</a></li>
</ul>
```

**JavaScript**

Set up the dropdown menus by configuring dynamic content settings. Begin by importing the function from the package, and then specify the dropdown contents using a JavaScript object. If needed, refer to the [Configuration Template below](#configuration-template) for a pre-defined setup example.or copy and overwrite.

```js
import { addDropdownToEachMenuAEl } from "@k-bell/k-bell-dropdown-menu-practice";

// Define the dropdown menu configuration
const dropdownMenuConfig = [
  {
    menuId: "#menu-id", // Selector format to match the ID of the Menu Title
    contentArray: [
      { url: "https://www.google.com", title: "Google" },
      { url: "https://www.facebook.com", title: "Facebook" },
    ],
  },
  {
    menuId: "#menu-id2",
    contentArray: [
      { url: "https://github.com", title: "GitHub" },
      { url: "https://www.theodinproject.com", title: "The Odin Project" },
    ],
  },
  // Add more configurations as needed
];

// Execute the function to add dropdowns
addDropdownToEachMenuAEl(dropdownMenuConfig);
```
***
### Comprehensive Usage:

This comprehensive example demonstrates how to dynamically add dropdown content to specific menu anchors and apply dropdown effects across all configured dropdowns on a webpage.

### Usage Example

**HTML Basic Structure**

```html
<!-- Navigation Bar Setup -->
<ul>
  <li><a href="#" id="menu-id" class="k-bell-dropdown">Menu Title</a></li>
  <!-- Additional menus with unique IDs -->
  <li><a href="#" id="menu-id2" class="k-bell-dropdown">Menu Title 2</a></li>
  <li><a href="#" id="menu-id3" class="k-bell-dropdown">Menu Title 3</a></li>
</ul>
```

**JavaScript**

```js
import {
  addDropdownToEachMenuAEl,
  attachDropdownEffectOnLoad,
} from "@k-bell/k-bell-dropdown-menu-practice";
import "@k-bell/k-bell-dropdown-menu-practice/src/k-bell-dropdown.css"; // Ensure the stylesheet is imported.

// Define the dropdown menu configuration
const dropdownMenuConfig = [
  {
    menuId: "#menu-id", // Use selector format to match the ID of the Menu Title
    contentArray: [
      { url: "https://www.google.com", title: "Google" },
      { url: "https://www.facebook.com", title: "Facebook" },
    ],
  },
  {
    menuId: "#menu-id2",
    contentArray: [
      { url: "https://github.com", title: "GitHub" },
      { url: "https://www.theodinproject.com", title: "The Odin Project" },
    ],
  },
  // Add more configurations as needed
];

// Add dropdowns and initialize dropdown effects
addDropdownToEachMenuAEl(dropdownMenuConfig);
attachDropdownEffectOnLoad();
```
***
### Configuration Template

Below is a template for configuring the dropdown menus to copy and paste:

```javascript
// Example configuration for '@k-bell/k-bell-dropdown-menu-practice'
const dropdownMenuConfig = [
  {
    menuId: "#menu-id1",
    contentArray: [
      { url: "https://example.com", title: "Example Title 1" },
      { url: "https://example.com", title: "Example Title 2" },
    ],
  },
  {
    menuId: "#menu-id2",
    contentArray: [
      { url: "https://anotherexample.com", title: "Another Title 1" },
      { url: "https://anotherexample.com", title: "Another Title 2" },
    ],
  },
  // Add additional menu configurations as needed
];
```
***
### Update Styling Rules

**CSS**

The CSS below is from `k-bell-dropdown.css` included in the package. To customize the styles, copy the selectors into your own stylesheet and override the rules as needed.

> **Note: The structure of the selectors `.k-bell-dropdown + ul` and `.k-bell-dropdown + ul.is-active` is critical for the JavaScript functionality. You may modify their CSS properties (e.g., color, background), but do not alter the selectors themselves or their relationships (such as `+` and `.is-active`).**

```css
/* k-bell-dropdown.css */

ul {
  list-style: none;
  padding-inline-start: 0;
}

a {
  text-decoration: none;
}

.k-bell-dropdown {
  position: relative; /* Essential for positioning nested elements */
}

/* IMPORTANT: Do not change this selector. Hides the dropdown content by default */
.k-bell-dropdown + ul {
  display: none;
  position: absolute;
}

/* IMPORTANT: Do not change this selector. Shows the dropdown content when active */
.k-bell-dropdown + ul.is-active {
  display: block;
}
```

**JavaScript**

To ensure your custom styles take precedence and maintain essential functionality, import your stylesheet after `k-bell-dropdown.css`.

```js
import "@k-bell/k-bell-dropdown-menu-practice/src/k-bell-dropdown.css"; // Base styles
import "your-style.css"; // Your custom styles
```

## Preview

Here’s what the default setup looks like:

<div align="center"> 
        <img src="https://github.com/kbelltree/dropdown-menu/blob/main/k-bell-dropdown-menu-preview.gif?raw=true" alt="Dropdown Menu Practice Installation Preview by Keiko S. 2024" width=30% height=30%>
    </a>
</div>

## Enhanced Example Preview

See how the package can be transformed with a bit of customization:
<div align="center"> 
        <img src="https://github.com/kbelltree/dropdown-menu/blob/main/k-bell-dropdown-menu-package-example-with-added-styling.gif?raw=true" alt="Practice Drop-down Menu NPM Package Customized Look Demo by Keiko S. 2024" width=80% height=80%>
    </a>
</div>

```css
/* my-customized-style.css */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

ul {
    padding-inline-start: 0;
}

a {
    color: black;
}

ul.nav-container {
    display: flex;
    justify-content: space-around;
    background: whitesmoke; 
    padding: 8px; 
}

.k-bell-dropdown::after  {
    content: '▾'; 
    font-size: 16px;
    padding-left: 5px; 
}

.k-bell-dropdown + ul {
    translate: 0 8px; 
    background: gainsboro;
    min-width: 150px;
    z-index: 1; 
}

.k-bell-dropdown + ul li {
    width: 100%; 
    padding: 8px;
}

.k-bell-dropdown + ul li:hover {
    background: lemonchiffon;
}

/* This setup makes the entire area of each list item clickable, improving usability for navigation. Makes <a> tags fill the entire space of their parent <li>. */
.k-bell-dropdown + ul li a {
    display: block; 
    width: 100%;
    height: 100%;
}

  ```

## Final Thoughts

Throughout the development of this npm package, I encountered several challenges that not only tested my technical skills but also deepened my understanding of effective web development practices. Here’s a recap of the major learning points and the solutions I crafted:

### 1. Managing Dropdown Display
**Problem**: Choosing the optimal method to control the visibility of dropdown contents.
- **Reflection**: I opted for a CSS-centric approach with minimal DOM manipulation to manage dropdown visibility. This decision was influenced by the principle of separation of concerns, aiming for efficiency and cleaner code.

### 2. Event Handling for User Interaction
**Problem**: Deciding on the interaction model for triggering the dropdown—whether through hover, click, or both.
- **Reflection**: After evaluating user interaction patterns and considering the complexity involved, I settled on using the click event. This method not only simplifies the interaction but also improves accessibility, particularly for mobile environments where hover states can be problematic and for users who rely on assistive technologies.

### 3. Improving UX with Outside Click Detection
**Problem**: Ensuring intuitive usability by closing the dropdown when clicking outside of it.
- **Reflection**: I implemented a document-level listener to detect clicks outside the dropdown, a common UX practice that enhances the interface's responsiveness and user engagement.

### 4. Balancing Functionality and Simplicity
**Problem**: Determining the right amount of functionality to include without compromising simplicity and usability.
- **Reflection**: Still exploring the best practices in npm package development, I chose a minimalist approach. The functions were designed to perform effectively with a single invocation, supplemented by CSS for basic styling and adjustments, allowing users flexibility without complexity.

These experiences have not only contributed to my professional growth but also shaped my approach to software development, emphasizing the importance of user-centric design and clean coding practices. While I strive to fully incorporate these principles, I recognize that mastering them is an ongoing process. Each challenge I encountered has been a stepping stone in understanding and implementing these crucial aspects more effectively. 


