const Subject=require('../models/subject');
const express=require('express');
const router=express.Router();

router.get('/', async (req, res) => {
    try{
        const subjects = await Subject.find();
	    res.json(subjects);
} catch (error) {
    console.error("Error Fetching Data:", error.message);
    res.status(500).send("Error Fetching Data")
}
});
router.get('/:id', async (req, res) => {
try {
    const result = await Subject.findById(req.params.id);
	res.json({result});
} catch (error) {
    console.error("Data not Found:", error.message);
        res.status(404).send("Data not Found")
    }
});
router.post('/new', (req, res) => {
    try {
        const subject = new Subject({
            SubjectName: req.body.SubjectName,
            Coef: req.body.Coef,
        })
        subject.save();
        res.json(subject);    
    } catch (error) {
        console.error("Error Adding Data:", error.message);
        res.status(500).send("Error Adding Data")   
    }
	
});

router.delete('/delete/:id', async (req, res) => {
try {	
    const result = await Subject.findByIdAndDelete(req.params.id);
	res.json({result});
} catch (error) {
    console.error("Error Deleting Data:", error.message);
    res.status(500).send("Error Deleting Data") 
}
});


router.put('/update/:id', async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.id);
        subject.SubjectName= req.body.SubjectName;
        subject.Coef= req.body.Coef;
        subject.save();
        res.json(subject);   
    } catch (error) {
        console.error("Error Updating Data:", error.message);
        res.status(500).send("Error Updating Data")        
    }
	
});

module.exports=router;