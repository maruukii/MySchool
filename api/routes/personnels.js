const express=require('express');
const router=express.Router();
const Personnel = require('../models/personnel');
// const handleErr=(err)=>{
//     console.log(err.message,err.code);
// }

router.get('/', async (req, res) => {
	try{
        const personnels = await Personnel.find();
        res.json(personnels);
} catch (error) {
    console.error("Error Fetching Data:", error.message);
    res.status(500).send("Error Fetching Data")
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
		ID: req.body.ID,
        CIN: req.body.CIN,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Job: req.body.Job,
        Password:req.body.Password,  
        PhoneNumber:req.body.PhoneNumber,
	})

	personnel.save();
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
        personnel.FirstName= req.body.FirstName;
        personnel.LastName= req.body.LastName;
        personnel.Job=req.body.Job;
        personnel.PhoneNumber=req.body.PhoneNumber;
        personnel.save();
        res.json(personnel);    
    } catch (error) {
        console.error("Error Updating Data:", error.message);
        res.status(500).send("Error Updating Data")    
    }
	
});


router.post('/login',async (req,res)=>{
    try {
        let found=await Personnel.findOne({ ID:req.body.ID });
    console.log('First findOne:', found);
    if(!found){
        try {
           let cin=Number(req.body.ID);
           found=await Personnel.findOne({ CIN:cin});
            console.log('Second findOne:', found);
        } catch (error) {
        }
        
    }
    if(!found){res.status(404).send("User not Found");}
    else{
        const isPasswordMatch=await bcrypt.compare(req.body.password,found.Password);
        if(isPasswordMatch){
        res.status(200).send("Logged in Successfully")}
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