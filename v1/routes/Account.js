const router = require('express').Router(),
    checkJWT = require('../middlewares/check-jwt'),
    Balance = require('../models/balance'),
    Account = require('../models/Account');


router.route('/account')
    .get(checkJWT, (req, res, next) => {
        Account.find({})
            .populate('user_id')
            .exec((err, account) => {
                res.json({
                    success: true,
                    data: account
                })
            })
    })
    .post(checkJWT, (req, res, next) => {


        let account = new Account();

        if (!req.body._id) {
            account._id = (req.body._id || null);
            account.user_id = req.body.user_id;
            account.balance = req.body.balance;
            account.requested_value = req.body.requested_value;
            account.state = req.body.state;
            account.date_to_pay = req.body.date_to_pay;
            account.paid_out = req.body.paid_out;
            account.save();
            res.json({
                success: true,
                message: 'Successfully  Account Added'
            });
        } else {
            Account.findOneAndUpdate({ _id: req.body._id }, {
                user_id: req.body.user_id,
                balance: req.body.balance,
                requested_value: req.body.requested_value,
                state: req.body.state,
                date_to_pay: req.body.date_to_pay,
                paid_out: req.body.paid_out
            }, (err) => {
                if (err) throw err;
                res.json({
                    success: true,
                    message: 'Successfully  Account Update'
                })
            });
        }
    });

router.route('/account/:user_id')
    .get(checkJWT, (req, res, next) => {
        Account.find({ user_id: req.params.user_id })
            .populate('user_id')
            .exec((err, account) => {
                if (account.length <= 0) {
                    res.json({
                        success: true,
                        message: "No se encuetra usuario con ese id",
                        data: []
                    });
                } else {
                    if (account[0].state == 'rechazado') {
                        res.json({
                            success: true,
                            data: false
                        });
                    } else {
                        res.json({
                            success: true,
                            data: true
                        })
                    }
                }
            })
    });

router.route('/balance')
    .get((req, res, next) => {
        Balance.find({}, (err, balance) => {
            res.json({
                success: true,
                data: balance
            })
        })
    })
    .post((req, res, next) => {
        let balance = new Balance();
        if (!req.body._id) {
            balance._id = (req.body._id || null);
            balance.balance = req.body.balance;
            balance.save();
            res.json({
                success: true,
                message: 'Successfully Balance  Added'
            });
        } else {
            Balance.findOneAndUpdate({ _id: req.body._id }, {
                balance: req.body.balance
            }, (err) => {
                if (err) throw err;
                res.json({
                    success: true,
                    message: 'Successfully  Balance Update'
                })
            });
        }
    });

module.exports = router;