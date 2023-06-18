/*GET homepage */
//TODO:  Stuff in comment is what I had, new stuff is for testing only.
/*
const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways'});
};
module.exports = {
    index
};
*/
const fs = require('fs');
// read the JSON data file
const blogs = JSON.parse(fs.readFileSync('./data/blogs.json', 'utf8'));       // not best practice, expensive
const sidebarItems = JSON.parse(fs.readFileSync('./data/index_sidebar_links.json', 'utf8'));       // not best practice, expensive

const index = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Home';
    res.render('index', {title: pageTitle, blogs, sidebarItems});
}

module.exports = {
    index
}