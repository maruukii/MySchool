const express=require('express');
const router=express.Router();
const Supervisor = require('../models/supervisor');

router.get('/', async (req, res) => {
	try{
        const supervisors = await Supervisor.find().populate('Personnel');
        res.json(supervisors);
} catch (error) {
    console.error("Error Fetching Data:", error.message);
    res.status(500).send("Error Fetching Data")
}
});
router.get('/:id', async (req, res) => {
	try {
    const result = await Supervisor.findById(req.params.id).populate('Personnel');
    //console.log(result.Personnel.FirstName);
	res.json({result});
} catch (error) {
    console.error("Data not Found:", error.message);
    res.status(404).send("Data not Found")
}
});
router.post('/new', async (req, res) => {
try {
const supervisor = new Supervisor({
		Personnel: req.body._id,
        Rank:req.body.rank,
	})

	supervisor.save();
	res.json(supervisor);
} catch (error) {
    console.error("Error Adding Data:", error.message);
    res.status(500).send("Error Adding Data");
}
});

router.delete('/delete/:id', async (req, res) => {
	try {
        const result = await Supervisor.findByIdAndDelete(req.params.id);
        res.json({result});
    } catch (error) {
        console.error("Error Deleting Data:", error.message);
        res.status(500).send("Error Deleting Data") 
    }
});


router.put('/update/:id', async (req, res) => {
    try {
        const supervisor = await Supervisor.findById(req.params.id);
        supervisor.Rank= req.body.Rank;
        supervisor.save();
        res.json(supervisor);    
    } catch (error) {
        console.error("Error Updating Data:", error.message);
        res.status(500).send("Error Updating Data")    
    }
	
});




module.exports=router
