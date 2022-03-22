const { Router } = require("express");
router = Router();


const authService = require('../service/authService.js')




router.get('/', async (req, res) => {

    try {

        authService.firstFunc()

    } catch (err) {
        console.log(err)
    }
})


module.exports = router