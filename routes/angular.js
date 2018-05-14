module.exports.serverRouter = (req, res, next) => {
    if (req.url.startsWith('/users')) return next();

    res.render('index', { req, res });
}
