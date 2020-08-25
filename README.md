# Angular Reference

This repository holds the source code of a **reference** for the development of a **Angular 2+** written mainly in javascript.

## Table of content

-   [Overview](#overview)
-   [Installation](#installation)
-   [Examples](#examples)
-   [Builder](#builder)
-   [Deployment](#deployment)


## Overview

The redux like implementation is on the way! Coming soon!

The architecture uses the following structure:

-   /components: Handle DOM rendering.
    -   *.js: Component definition
    -   *.module.sass: Style files
-   /models: Interfaces that reprecent the data that the application manages
-   /services: Handle API connections


## Installation

-   Clone this repository.
-   Install dependencies.
```bash
npm install
```

-   Run server.
```bash
ng serve
```

## Examples

-   Request example. 
```bash
GET http://localhost:4200
```

## Builder

Coming soon


## Deployment

### AWS - Elastic Beanstalk

Coming soon!

# On the ng command

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
