const express=require('express');
const Classroom=require('../models/classroom');
const router=express.Router();

router.get('/', async (req, res) => {
    try{
        const classes = await Classroom.find();
	    res.json(classes);
} catch (error) {
    console.error("Error Fetching Data:", error.message);
    res.status(500).send("Error Fetching Data")
}
});

router.get('/:id', async (req, res) => {
try {
    const result = await Classroom.findById(req.params.id);
	res.json({result});
} catch (error) {
    console.error("Data not Found:", error.message);
        res.status(404).send("Data not Found")
    }
});
router.post('/new', (req, res) => {
    try {
        const classe = new Classroom({
            Type: req.body.Type,
            Number:req.body.Number,
            Capacity:req.body.Capacity,        })
        classe.save();
        res.json(classe);    
    } catch (error) {
        console.error("Error Adding Data:", error.message);
        res.status(500).send("Error Adding Data")   
    }
	
});

router.delete('/delete/:id', async (req, res) => {
try {	
    const result = await Classroom.findByIdAndDelete(req.params.id);
	res.json({result});
} catch (error) {
    console.error("Error Deleting Data:", error.message);
    res.status(500).send("Error Deleting Data") 
}
});


router.put('/update/:id', async (req, res) => {
    try {
        const classe = await Classroom.findById(req.params.id);
        if(req.body.Type){classe.Type= req.body.Type;}
        if(req.body.Number){classe.Number= req.body.Number;}
        if(req.body.Capacity){classe.Capacity= req.body.Capacity;}
        classe.save();
        res.json(classe);   
    } catch (error) {
        console.error("Error Updating Data:", error.message);
        res.status(500).send("Error Updating Data")        
    }
	
});


module.exports=router;