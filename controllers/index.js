const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
//const profileRoutes = require('./profileRoutes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
//router.use('/api', profileRoutes);

module.exports = router;
