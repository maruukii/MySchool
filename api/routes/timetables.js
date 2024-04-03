const express=require('express');
const router=express.Router();
const Timetable = require('../models/timetable');

router.get('/', async (req, res) => {
	try{
        const timetables = await Timetable.find().populate(['Personnel','Class','Subject']);
        res.json(timetables);
} catch (error) {
    console.error("Error Fetching Data:", error.message);
    res.status(500).send("Error Fetching Data")
}
});
router.get('/:id', async (req, res) => {
	try {
    const result = await Timetable.findById(req.params.id).populate(['Personnel','Class','Subject']);
    //console.log(result.Personnel.FirstName);
	res.json({result});
} catch (error) {
    console.error("Data not Found:", error.message);
    res.status(404).send("Data not Found")
}
});
router.post('/new', async (req, res) => {
try {
const timetable = new Timetable({
		Personnel: req.body._id,
        Subject:req.body.subject,
        Class:req.body.class,
        Hours:req.body.hours,
	})

	timetable.save();
	res.json(timetable);
} catch (error) {
    console.error("Error Adding Data:", error.message);
    res.status(500).send("Error Adding Data");
}
});

router.delete('/delete/:id', async (req, res) => {
	try {
        const result = await Timetable.findByIdAndDelete(req.params.id);
        res.json({result});
    } catch (error) {
        console.error("Error Deleting Data:", error.message);
        res.status(500).send("Error Deleting Data") 
    }
});


router.put('/update/:id', async (req, res) => {
     try {
        const timetable = await Timetable.findById(req.params.id);
        if(req.body.hours){
            timetable.Hours+=req.body.hours;
        }
        if(req.body.timetable){
            timetable.Timetable= req.body.timetable;
        }
        timetable.save();
         res.json(timetable);    
     } catch (error) {
         console.error("Error Updating Data:", error.message);
        res.status(500).send("Error Updating Data")    
         }
	
});




module.exports=router
