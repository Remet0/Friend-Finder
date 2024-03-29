//set up dependancies
const express = require('express');
const path = require('path');



//set-up for express
const app = express();
const PORT = process.env.PORT || 3000;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.use(express.static(path.join(__dirname, '/static')));


app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
