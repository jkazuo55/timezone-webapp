# timezone-webapp

WebApp with React. This application consists of a form where an hour (“time”) and a time zone (“timezone”) are entered, with these data a request is made to the following service:

**POST:** https://spring-format-transformet-serv.herokuapp.com/api/transform-time/json

**Body:**

&nbsp; {

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "time":"12:00:00",

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "timezone":"-4"

&nbsp; }

The service will return the time converted to UTC format in json format with the following structure:

&nbsp; {

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "response": {

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "time": "18:43:00",

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "timezone": "utc"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp; }

You will need to display the returned time (response.time) in your form.

Result

https://github.com/jkazuo55/timezone-webapp/blob/main/resultado.gif

# Getting Started with Create React App

This project was bootstrapped with React and Typescript [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run: for install dependencies

### `yarn install`

In the project directory, you can run: to lift the project
### `yarn run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Technologies

List of technologies:

1. [ReactJS](https://reactjs.org)
2. [Tailwind](https://tailwindcss.com)
3. [Axios](https://axios-http.com/)
4. [React-hook-form](https://react-hook-form.com/)
5. [Yup](https://github.com/jquense/yup/tree/pre-v1)
6. [Moment](https://momentjs.com/)
7. [TimePicker](https://react-component.github.io/time-picker/)
