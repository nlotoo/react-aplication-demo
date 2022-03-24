const { Router } = require("express");
router = Router();


const authService = require('../service/authService.js')




router.get('/home', async (req, res) => {

    try {

        authService.firstFunc()

    } catch (err) {
        console.log(err)
    }
})



router.get('/', async (req, res) => {
    try {
        let data = await authService.getAllPosts()
        console.log(data)
    }   
    catch (err) {
        console.log(err)

    }
})



module.exports = router