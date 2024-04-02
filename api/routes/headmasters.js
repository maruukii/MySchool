const express=require('express');
const router=express.Router();
const Headmaster = require('../models/headmaster');

router.get('/', async (req, res) => {
	try{
        const headmasters = await Headmaster.find().populate('Personnel');
        res.json(headmasters);
} catch (error) {
    console.error("Error Fetching Data:", error.message);
    res.status(500).send("Error Fetching Data")
}
});
router.get('/:id', async (req, res) => {
	try {
    const result = await Headmaster.findById(req.params.id).populate('Personnel');
    //console.log(result.Personnel.FirstName);
	res.json({result});
} catch (error) {
    console.error("Data not Found:", error.message);
    res.status(404).send("Data not Found")
}
});
router.post('/new', async (req, res) => {
try {
const headmaster = new Headmaster({
		Personnel: req.body._id,
	})

	headmaster.save();
	res.json(headmaster);
} catch (error) {
    console.error("Error Adding Data:", error.message);
    res.status(500).send("Error Adding Data");
}
});

router.delete('/delete/:id', async (req, res) => {
	try {
        const result = await Headmaster.findByIdAndDelete(req.params.id);
        res.json({result});
    } catch (error) {
        console.error("Error Deleting Data:", error.message);
        res.status(500).send("Error Deleting Data") 
    }
});


// router.put('/update/:id', async (req, res) => {
//     try {
//         const headmaster = await Headmaster.findById(req.params.id);
//         headmaster.Rank= req.body.Rank;
//         headmaster.Subject= req.body.Subject;
//         headmaster.save();
//         res.json(headmaster);    
//     } catch (error) {
//         console.error("Error Updating Data:", error.message);
//         res.status(500).send("Error Updating Data")    
//     }
	
// });




module.exports=router
