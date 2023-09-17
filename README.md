# Weather Widget Application

## Description
The Weather Widget application is a simple web app implemented using Node.js, TypeScript and React. It displays basic weather information (temperature, humidity, wind) for a Danish city. By default, the city is set to Copenhagen. 

## Installation and Running the App
Follow these steps to get the application running on your local machine:

1. Clone the repository to your local machine using: 
```bash
git clone https://github.com/vino-dk/weather_widget.git
```
2. Navigate to the project directory in the terminal/command prompt.
3. Run `npm install` to install the dependencies and devDependencies of the project.
4. Once all the dependencies are installed, start the applications. 
5. In the frontend, run "npm run dev" and open the URL.
6. In the backend folder, run "nodemon server.ts" to start the express server. 

## Future work
 * Users can share the widget for any other Danish city by updating the URL parameters.
 * Running the App with Disabled JavaScript
   * The application should continue to function even if JavaScript is disabled in the web browser. In such cases, full page reloads are allowed. Follow the same URL conventions as described above to view weather data for particular cities.
 * Unit Testing