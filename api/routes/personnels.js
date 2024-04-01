const express=require('express');
const router=express.Router();
const Personnel = require('../models/personnel');

router.get('/', async (req, res) => {
	try{
        const personnels = await Personnel.find();
        res.json(personnels);
} catch (error) {
    res.status(500).send("Error Fetching Data")
}
});
router.get('/:id', async (req, res) => {
	try {const result = await Personnel.findById(req.params.id);

	res.json({result});
} catch (error) {
    res.status(404).send("User not Found")
}
});
router.post('/new', (req, res) => {
	const personnel = new Personnel({
		ID: req.body.ID,
        CIN: req.body.CIN,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Job: req.body.Job,
        Password:req.body.Password,
        PhoneNumber:req.body.PhoneNumber,
	})

	personnel.save();

	res.json(personnel);
});

router.delete('/delete/:id', async (req, res) => {
	try {
        const result = await Personnel.findByIdAndDelete(req.params.id);
        res.json({result});
    } catch (error) {
        res.status(404).send("User not Found")
    }
});


router.put('/update/:id', async (req, res) => {
	const personnel = await Personnel.findById(req.params.id);

    personnel.FirstName= req.body.FirstName;
    personnel.LastName= req.body.LastName;
    personnel.Job=req.body.Job;
    personnel.Password=req.body.Password;
    personnel.PhoneNumber=req.body.PhoneNumber;

	personnel.save();

	res.json(personnel);
});


module.exports=router
