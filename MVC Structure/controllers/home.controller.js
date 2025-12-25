const homePage = (req, res) => {
    return res.render('home');
}

const aboutPage = (req, res) => {
    return res.render('about');
}

const contactPage = (req, res) => {
    return res.render('contact');
}

module.exports = {homePage, aboutPage, contactPage}