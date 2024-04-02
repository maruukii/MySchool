const express=require('express');
const router=express.Router();
const Teacher = require('../models/teacher');

router.get('/', async (req, res) => {
	try{
        const teachers = await Teacher.find().populate('Personnel');
        res.json(teachers);
} catch (error) {
    console.error("Error Fetching Data:", error.message);
    res.status(500).send("Error Fetching Data")
}
});
router.get('/:id', async (req, res) => {
	try {
    const result = await Teacher.findById(req.params.id).populate('Personnel');
    //console.log(result.Personnel.FirstName);
	res.json({result});
} catch (error) {
    console.error("Data not Found:", error.message);
    res.status(404).send("Data not Found")
}
});
router.post('/new', async (req, res) => {
try {
const teacher = new Teacher({
		Personnel: req.body._id,
        Rank:req.body.rank,
        Subject:req.body.subject
	})

	teacher.save();
	res.json(teacher);
} catch (error) {
    console.error("Error Adding Data:", error.message);
    res.status(500).send("Error Adding Data");
}
});

router.delete('/delete/:id', async (req, res) => {
	try {
        const result = await Teacher.findByIdAndDelete(req.params.id);
        res.json({result});
    } catch (error) {
        console.error("Error Deleting Data:", error.message);
        res.status(500).send("Error Deleting Data") 
    }
});


router.put('/update/:id', async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);
        teacher.Rank= req.body.Rank;
        teacher.Subject= req.body.Subject;
        teacher.save();
        res.json(teacher);    
    } catch (error) {
        console.error("Error Updating Data:", error.message);
        res.status(500).send("Error Updating Data")    
    }
	
});




module.exports=router
