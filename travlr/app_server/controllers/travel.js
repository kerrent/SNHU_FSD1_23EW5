const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));  //Note to self:  Not best practice.  Cache in memory at start up time better.

/*GET travel view*/
/*const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', {title: pageTitle, trips});
};*/
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips });
   };
   

module.exports = {
    travel
};


