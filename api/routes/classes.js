const Class=require('../models/class');
const express=require('express');
const router=express.Router();

router.get('/', async (req, res) => {
    try{
        const classes = await Class.find();
	    res.json(classes);
} catch (error) {
    console.error("Error Fetching Data:", error.message);
    res.status(500).send("Error Fetching Data")
}
});
router.get('/:id', async (req, res) => {
try {
    const result = await Class.findById(req.params.id);
	res.json({result});
} catch (error) {
    console.error("Data not Found:", error.message);
        res.status(404).send("Data not Found")
    }
});
router.post('/new', (req, res) => {
    try {
        const classe = new Class({
            ClassName: req.body.ClassName,
            AlumnisNumber: req.body.AlumnisNumber,
        })
        classe.save();
        res.json(classe);    
    } catch (error) {
        console.error("Error Adding Data:", error.message);
        res.status(500).send("Error Adding Data")   
    }
	
});

router.delete('/delete/:id', async (req, res) => {
try {	
    const result = await Class.findByIdAndDelete(req.params.id);
	res.json({result});
} catch (error) {
    console.error("Error Deleting Data:", error.message);
    res.status(500).send("Error Deleting Data") 
}
});


router.put('/update/:id', async (req, res) => {
    try {
        const classe = await Class.findById(req.params.id);
        classe.ClassName= req.body.ClassName;
        classe.AlumnisNumber= req.body.AlumnisNumber;
        classe.save();
        res.json(classe);   
    } catch (error) {
        console.error("Error Updating Data:", error.message);
        res.status(500).send("Error Updating Data")        
    }
	
});

module.exports=router;