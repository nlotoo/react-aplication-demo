const { Router } = require("express");
router = Router();


const authService = require('../service/authService.js')



router.get('/', async (req, res) => {
    try {
        let data = await authService.getAllPosts()
       res.status(200).json(data);
    }   
    catch (err) {
        res.status(401).json({ message: err })
    }
})



module.exports = router