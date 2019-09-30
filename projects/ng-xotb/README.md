## ng-xotb

xOTB - EDGE's design system. Designed for Designers and Developed for Engineers.
 
### Objective
 
xOTB establishes a common design language for our teams, hosts design assets and patterns for a unified experience, provides basic building blocks to accelerate development, and drafts high level guidelines for content and accessibility.
 
### The Clarity
 
The Clarity consists of predefined variables for basic design elements such as colour, typography, and iconography. With clearly authenticated guidelines and governance for design and content creation, we spend less time talking the guidelines to bring clarity for ourselves and more time creating designs and content that clearly serves our users.
 
### The Components
 
The Components provides a robust suite of Angular components out of the box to bootstrap experiences and ensure consistent interaction and style as well as accessibility optimizations. With components, we spend more time on crafting experiences that serve our users and less time on “reinventing the wheel”.

### Setup

#### Step 1: Installing packages

You can use either the `npm` or `yarn` tool to install packages.

```javascript
    npm install ng-xotb
    yarn add ng-xotb
```

#### Step 2: Adding styles

Including CSS files is required for your application to work correctly.
If you are using the Angular CLI, you need to add the following to the `styles` array of your `angular.json` file.

```javascript
    "styles": [
        "node_modules/ng-xotb/xotb-theme/css/styles.min.css",
        ... any other styles
    ],
```

