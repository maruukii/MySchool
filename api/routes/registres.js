const Registre=require('../models/registre');
const express=require('express');
const router=express.Router();

router.get('/', async (req, res) => {
    try{
        const registres = await Registre.find().populate(['Teaching','Alumni']);
	    res.json(registres);
} catch (error) {
    console.error("Error Fetching Data:", error.message);
    res.status(500).send("Error Fetching Data")
}
});
router.get('/:id', async (req, res) => {
try {
    const result = await Registre.findById(req.params.id);
	res.json({result});
} catch (error) {
    console.error("Data not Found:", error.message);
        res.status(404).send("Data not Found")
    }
});
router.post('/new', (req, res) => {
    try {
        const registre = new Registre({
            Teaching: req.body.teaching,
            Alumni:req.body.alumni
        })
        registre.save();
        res.json(registre);    
    } catch (error) {
        console.error("Error Adding Data:", error.message);
        res.status(500).send("Error Adding Data")   
    }
	
});

router.delete('/delete/:id', async (req, res) => {
try {	
    const result = await Registre.findByIdAndDelete(req.params.id);
	res.json({result});
} catch (error) {
    console.error("Error Deleting Data:", error.message);
    res.status(500).send("Error Deleting Data") 
}
});


router.put('/updateUp/:id', async (req, res) => {
    try {
        const registre = await Registre.findById(req.params.id);
        registre.AbsenceCount+=1;
        const date = new Date();
        registre.AbsenceDate.push(date.toLocaleString());
        registre.save();
        res.json(registre);   
    } catch (error) {
        console.error("Error Updating Data:", error.message);
        res.status(500).send("Error Updating Data")        
    }
	
});
router.put('/updateDown/:id', async (req, res) => {
    try {
        const registre = await Registre.findById(req.params.id);
        registre.AbsenceCount-=1;
        const date = new Date();
        registre.AbsenceDate.pop();
        registre.save();
        res.json(registre);   
    } catch (error) {
        console.error("Error Updating Data:", error.message);
        res.status(500).send("Error Updating Data")        
    }
	
});

module.exports=router;