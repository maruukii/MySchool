const Alumni=require('../models/alumni');
const express=require('express');
const router=express.Router();

router.get('/', async (req, res) => {
    try{
        const alumnis = await Alumni.find();
	    res.json(alumnis);
} catch (error) {
    console.error("Error Fetching Data:", error.message);
    res.status(500).send("Error Fetching Data")
}
});
router.get('/:id', async (req, res) => {
try {
    const result = await Alumni.findById(req.params.id);
	res.json({result});
} catch (error) {
    console.error("Data not Found:", error.message);
        res.status(404).send("Data not Found")
    }
});
router.post('/new', (req, res) => {
    try {
        const alumni = new Alumni({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Age: req.body.Age,
            Spec:req.body.Spec
        })
    
        alumni.save();
    
        res.json(alumni);    
    } catch (error) {
        console.error("Error Adding Data:", error.message);
        res.status(500).send("Error Adding Data")   
    }
	
});

router.delete('/delete/:id', async (req, res) => {
try {	
    const result = await Alumni.findByIdAndDelete(req.params.id);
	res.json({result});
} catch (error) {
    console.error("Error Deleting Data:", error.message);
    res.status(500).send("Error Deleting Data") 
}
});


router.put('/update/:id', async (req, res) => {
    try {
        const alumni = await Alumni.findById(req.params.id);
        alumni.FirstName= req.body.FirstName;
        alumni.LastName= req.body.LastName;
        alumni.Age=req.body.Age;
        alumni.Spec=req.body.Spec;
    
        alumni.save();
    
        res.json(alumni);   
    } catch (error) {
        console.error("Error Updating Data:", error.message);
        res.status(500).send("Error Updating Data")        
    }
	
});

module.exports=router;