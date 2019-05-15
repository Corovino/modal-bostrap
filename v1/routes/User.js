const router = require('express').Router(),
    User = require('../models/bank'),
    checkJWT = require('../middlewares/check-jwt');


router.route('/custumer')
    .get((req, res, next) => {
        User.find({}, (err, users) => {
            res.json({
                success: true,
                data: users
            })
        })
    })
    .post(checkJWT, (req, res, next) => {
        let user = new User();

        if (!req.body._id) {
            user._id = (req.body._id || null);
            user.name = req.body.name;
            user.email = req.body.email;
            user.number_id = req.body.number_id;
            user.role = "custumer";
            user.password = req.body.password;
            user.save();
            res.json({
                success: true,
                message: 'Successfully Added the Customer'
            });
        } else {
            User.findOneAndUpdate({ _id: req.body._id }, {
                user_id: req.decode.user._id,
                name: req.body.name,
                email: req.body.email,
                number_id: req.body.number_id,
                role: req.body.role,
                password: req.body.password
            }, (err) => {
                if (err) throw err;
                res.json({
                    success: true,
                    message: 'Successfully Update the Customer'
                })
            })
        }
    });

module.exports = router;