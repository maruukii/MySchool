const Alumni=require('../models/alumni');
const express=require('express');
const router=express.Router();

router.get('/', async (req, res) => {
	const alumnis = await Alumni.find();

	res.json(alumnis);
});
router.get('/:id', async (req, res) => {
	const result = await Alumni.findById(req.params.id);

	res.json({result});
});
router.post('/new', (req, res) => {
	const alumni = new Alumni({
		
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Age: req.body.Age,
        Spec:req.body.Spec
	})

	alumni.save();

	res.json(alumni);
});

router.delete('/delete/:id', async (req, res) => {
	const result = await Alumni.findByIdAndDelete(req.params.id);

	res.json({result});
});


router.put('/update/:id', async (req, res) => {
	const alumni = await Alumni.findById(req.params.id);

    alumni.FirstName= req.body.FirstName;
    alumni.LastName= req.body.LastName;
    alumni.Age=req.body.Age;
    alumni.Spec=req.body.Spec;

	alumni.save();

	res.json(alumni);
});

module.exports=router;