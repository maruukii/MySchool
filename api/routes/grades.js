const Grade=require('../models/grade');
const express=require('express');
const router=express.Router();

router.get('/', async (req, res) => {
    try{
        const grades = await Grade.find().populate(['Alumni','Teacher','Subject']);
	    res.json(grades);
} catch (error) {
    console.error("Error Fetching Data:", error.message);
    res.status(500).send("Error Fetching Data")
}
});
router.get('/:id', async (req, res) => {
try {
    const result = await Grade.findById(req.params.id);
	res.json({result});
} catch (error) {
    console.error("Data not Found:", error.message);
        res.status(404).send("Data not Found")
    }
});
router.post('/new', (req, res) => {
    try {
        const grade = new Grade({
            Alumni: req.body.alumni,
            Subject:req.body.subject,
            Teacher:req.body.teacher,
            DC_grade:req.body.dc,
            DS_grade:req.body.ds,
            TP_grade:req.body.tp,
        })
        grade.save();
        res.json(grade);    
    } catch (error) {
        console.error("Error Adding Data:", error.message);
        res.status(500).send("Error Adding Data")   
    }
	
});

router.delete('/delete/:id', async (req, res) => {
try {	
    const result = await Grade.findByIdAndDelete(req.params.id);
	res.json({result});
} catch (error) {
    console.error("Error Deleting Data:", error.message);
    res.status(500).send("Error Deleting Data") 
}
});


router.put('/update/:id', async (req, res) => {
    try {
        const grade = await Grade.findById(req.params.id);
        grade.DC_grade= req.body.dc;
        grade.DS_grade= req.body.ds;
        grade.TP_grade= req.body.tp;
        grade.save();
        res.json(grade);   
    } catch (error) {
        console.error("Error Updating Data:", error.message);
        res.status(500).send("Error Updating Data")        
    }
	
});


module.exports=router;