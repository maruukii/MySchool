const Teaching=require('../models/teaching');
const express=require('express');
const router=express.Router();

router.get('/', async (req, res) => {
    try{
        const teachings = await Teaching.find().populate(['Teacher','Class','Subject']);
	    res.json(teachings);
} catch (error) {
    console.error("Error Fetching Data:", error.message);
    res.status(500).send("Error Fetching Data")
}
});
router.get('/:id', async (req, res) => {
try {
    const result = await Teaching.findById(req.params.id);
	res.json({result});
} catch (error) {
    console.error("Data not Found:", error.message);
        res.status(404).send("Data not Found")
    }
});
router.post('/new', (req, res) => {
    try {
        const teaching = new Teaching({
            Class: req.body.class,
            Subject:req.body.subject,
            Teacher:req.body.teacher,
        })
        teaching.save();
        res.json(teaching);    
    } catch (error) {
        console.error("Error Adding Data:", error.message);
        res.status(500).send("Error Adding Data")   
    }
	
});

router.delete('/delete/:id', async (req, res) => {
try {	
    const result = await Teaching.findByIdAndDelete(req.params.id);
	res.json({result});
} catch (error) {
    console.error("Error Deleting Data:", error.message);
    res.status(500).send("Error Deleting Data") 
}
});


router.put('/update/:id', async (req, res) => {
    try {
        const teaching = await Teaching.findById(req.params.id);
        if(req.body.class){teaching.Class= req.body.class;}
        if(req.body.teacher){teaching.Teacher= req.body.teacher;}
        if(req.body.subject){teaching.Subject= req.body.subject;}
        teaching.save();
        res.json(teaching);   
    } catch (error) {
        console.error("Error Updating Data:", error.message);
        res.status(500).send("Error Updating Data")        
    }
	
});


module.exports=router;