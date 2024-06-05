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
router.get('/get', async (req, res) => {
    const { Specialty, Level } = req.query;

    try {
        console.log(req.query)
        if (!Specialty || !Level) {
            return res.status(400).send("Both specialty and class level are required");
        }

        const classes = await Subject.find({ 
            Spec: Specialty,
            Level: Level
        });
        res.json(classes);
    } catch (error) {
        console.error("Data not Found:", error.message);
            res.status(404).send("Data not Found")
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
        var spec=null
        if(req.body.Spec==null){spec="No Specialty"}
        else{spec=req.body.Spec}
        if(req.body.Coef==0){spec="No Specialty"}
        const subject = new Subject({
            SubjectName: req.body.SubjectName,
            Level:req.body.Level,
            Spec:spec,
            Coef: req.body.Coef,
            CoefDC: req.body.CoefDC,
            CoefDS: req.body.CoefDS,
            CoefTP: req.body.CoefTP,
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
        if(req.body.SubjectName){subject.SubjectName= req.body.SubjectName;}
        if(req.body.Spec){subject.Spec=req.body.Spec;}
        if(req.body.Level){subject.Level=req.body.Level;}        
        if(req.body.Coef){subject.Coef=req.body.Coef;}        
        if(req.body.CoefDC){subject.CoefDC=req.body.CoefDC;}        
        if(req.body.CoefTP){subject.CoefTP=req.body.CoefTP;}        
        if(req.body.CoefDS){subject.CoefDS=req.body.CoefDS;}
        subject.save();
        res.json(subject);   
    } catch (error) {
        console.error("Error Updating Data:", error.message);
        res.status(500).send("Error Updating Data")        
    }
	
});

module.exports=router;