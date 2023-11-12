const path = require('path');

const express = require('express');

const router = express.Router();

const userController = require('../controller/index');



router.get('/', userController.indexPage);

router.post('/expense', userController.postExpenseLoginData);

router.get('/showallusers', userController.showallusers);

//router.get('/loadUsers', userController.loadUsers);

router.get('/list', userController.list);

router.delete('/deleteexpense/:id', userController.deleteexpense);


module.exports = router;
