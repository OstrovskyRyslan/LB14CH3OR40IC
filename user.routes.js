const Router = require('express');
const router = new Router();
const userController = require('./user.controller');

router.post('/', userController.createUser); 
router.get('/', userController.getUsers); 
router.get('/:id', userController.getOneUser); 
router.put('/:id', userController.updateUser); 
router.delete('/:id', userController.deleteUser); 

module.exports = router;
