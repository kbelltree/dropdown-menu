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
