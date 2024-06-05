const express=require('express');
const router=express.Router();
const Personnel = require('../models/personnel');
const bcrypt = require('bcrypt');

// const handleErr=(err)=>{
//     console.log(err.message,err.code);
// }

router.get('/', async (req, res) => {
	try{
        const personnels = await Personnel.find().populate({
            path: 'Workspace',
            select: 'Name'
        });
        res.json(personnels);
} catch (error) {
    console.error("Error Fetching Data:", error.message);
    res.status(500).send("Error Fetching Data")
}
});
router.get('/get/:workspaceId', async (req, res) => {
    try {
        const { workspaceId } = req.params.workspaceId;
        const personnels = await Personnel.find({ workspace: workspaceId ,Job:"Teacher"});
        res.json(personnels);
    } catch (error) {
        console.error("Error Fetching Data:", error.message);
        res.status(500).send("Error Fetching Data");
    }
});

router.get('/:id', async (req, res) => {
	try {
    const result = await Personnel.findById(req.params.id);
	res.json({result});
} catch (error) {
    console.error("Data not Found:", error.message);
    res.status(404).send("Data not Found")
}
});
router.post('/new', async (req, res) => {
try {

const personnel = new Personnel({
        CIN: req.body.CIN,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Job: req.body.Job,
        Password:req.body.Password,
        Workspace:req.body.Workspace,
        PhoneNumber:req.body.PhoneNumber,
	})

	personnel.save();
    res.json(personnel);
} catch (error) {
    console.error("Error Adding Data:", error.message);
    res.status(500).send("Error Adding Data");
}
});

router.delete('/delete/:id', async (req, res) => {
	try {
        const result = await Personnel.findByIdAndDelete(req.params.id);
        res.json({result});
    } catch (error) {
        console.error("Error Deleting Data:", error.message);
        res.status(500).send("Error Deleting Data") 
    }
});


router.put('/update/:id', async (req, res) => {
    try {
        const personnel = await Personnel.findById(req.params.id);
        if(req.body.CIN){personnel.CIN= req.body.CIN;}
        if(req.body.FirstName){personnel.FirstName= req.body.FirstName;}
        if(req.body.LastName){personnel.LastName= req.body.LastName;}        
        if(req.body.Job){personnel.Job= req.body.Job;}
        if(req.body.Password){personnel.Password= req.body.Password;}
        if(req.body.PhoneNumber){personnel.PhoneNumber= req.body.PhoneNumber;}
        if(req.body.Workspace){personnel.Workspace= req.body.Workspace;}                
        personnel.save();
        res.json(personnel);    
    } catch (error) {
        console.error("Error Updating Data:", error.message);
        res.status(500).send("Error Updating Data")    
    }
	
});


router.post('/login',async (req,res)=>{
    try {
        var found=await Personnel.findOne({ ID:req.body.ID });
    console.log('First findOne:', found);
    if(found===null){
        try {
           found=await Personnel.findOne({ CIN:req.body.ID});
            console.log('Second findOne:', found);
        } catch (error) {
            console.log(error)
        }
        
    }
    if(!found){res.status(404).send("User not Found");}
    else{
        console.log('Request body:', req.body);
        console.log('Stored hashed password:', found.Password);

        const isPasswordMatch= await bcrypt.compare(req.body.Password,found.Password);
        console.log('Password match result:', isPasswordMatch);
        if(isPasswordMatch){
            res.json(found);
        }
        else{
        res.status(400).send("Wrong Password")        
    }    
}
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send("Internal Server Error"); 
    }
    });

module.exports=router
