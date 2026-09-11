const express = require('express');
const {engine} = require('express-handlebars');

const PORT = process.env.PORT || 8000;

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// app.set('views', './views');

app.get('/', (req, res) => {
    let menu = {
        'main_dish': 'Kalapuikot',
        'vegetarian_dish': 'Kasvispihvi',
        'sides': 'Keitetyt perunat'
    }
    res.render("index.handlebars")
});

app.listen(PORT);
console.log("Started");