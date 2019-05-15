const router = require('express').Router(),
    jwt = require('jsonwebtoken'),
    config = require('../config'),
    User = require('../models/bank');


router.post('/login', (req, res, next) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) throw err;

        if (!user) res.json({ success: false, message: 'Authenticated failed, User not found' });

        if (user) {
            let validPassword = user.comparePassword(req.body.password);
            if (!validPassword) {
                res.json({ success: false, message: 'Authentication failed. Wrong password' })
            } else {
                let token = jwt.sign({ user: user }, config.secret, { expiresIn: '7d' });
                //send_mail();
                res.json({ success: true, message: 'token created successfully', token: token })
            }
        }

    });
});

module.exports = router;