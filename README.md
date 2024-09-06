# Contact Management App

This project aims to have the user manage contacts where he/she could add new contacts, edit and delete contacts and have the data of every contact on the home screen. Apart from this user could able to see charts and map related to Covid-19 pandemic to really get the idea about it.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Description](#description)
- [Learn More](#learnmore)
- [License](#license)

## Installation
1. Clone the repository.
2. Install the dependencies using `npm`:

   ```shell
   npm install

## Usage

In the project directory, you can run:
1. Build the project using `npm`:

   ```shell
   npm build
2. Run the project using `npm`:

   ```shell
   npm start
3. Test the project using `npm`:

   ```shell
   npm test
4. Eject the project using `npm`:

   ```shell
   npm eject

## Dependencies 

1. @reduxjs/toolkit
2. @tanstack/react-query
3. @tanstack/react-query-devtools
4. axios
5. chart.js
6. leaflet
7. postcss
8. react-chartjs-2
9. react-leaflet
10. react-query
11. react-redux
12. react-router-dom
13. redux
14. tailwindcss
15. typescript

## Description

### On Home Screen 

1. We've a text of 'Contacts' and 'Add New Contacts' and after clicking on 'Add New Contacts' you'll get routed to 'add' route where you can add the contact details and will redirected to home screen.

2. We've 'Edit' and 'Delete' button on existing contacts where we can edit and delete the contacts respectively.

### In Sidebar

1. In left side we've a hamburger menu icon which will open Sidebar where we've options like -
- Contacts : It'll leads you to home screen where we can add, edit and delete contacts.
- Charts and Maps : After clicking on it you'll get 2 more options like 'Covid Cases Line Chart' and 'Covid Cases Map'. 
- Covid Cases Line Chart : On clicking the option 'Covid Cases Line Chart' you'll be redirected to chart route where you can see the line graph on Covid-19 cases and able to see the numbers on also when you'll tap on any specific point on line.
- Covid Cases Map : On clicking the option 'Covid Cases Map' you'll be redirected to map route where you can see the map of whole world of Covid-19 cases where you can see other data when you'll tap on any specific country on a popup.
- Close Icon (X) : On clicking on it it'll close the Sidebar.

Note - When Sidebar is open other content like 'Contacts' or 'Line Graph' or 'Map' won't see so you've to close the Sidebar to see the content.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

## License

This project is licensed under the MIT License.