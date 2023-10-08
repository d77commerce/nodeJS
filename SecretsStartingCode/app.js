// Import necessary modules
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

// Create an instance of the Express application
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Specify the directory where your EJS templates are located
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.set('views', path.join(__dirname, 'views'));


// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use bodyParser middleware for handling form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route that renders an EJS template
app.get('/', (req, res) => {
  res.render('home');
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
