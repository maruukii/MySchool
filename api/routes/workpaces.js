const Workspace=require('../models/workspace');
const express=require('express');
const router=express.Router();

router.get('/', async (req, res) => {
    try{
        const workspaces = await Workspace.find();
	    res.json(workspaces);
} catch (error) {
    console.error("Error Fetching Data:", error.message);
    res.status(500).send("Error Fetching Data")
}
});

router.get('/:id', async (req, res) => {
try {
    const result = await Workspace.findById(req.params.id);
	res.json({result});
} catch (error) {
    console.error("Data not Found:", error.message);
        res.status(404).send("Data not Found")
    }
});
router.post('/new', (req, res) => {
    try {
        const classe = new Workspace({
            Code: req.body.Code,
            Name:req.body.Name,
        })
        classe.save();
        res.json(classe);    
    } catch (error) {
        console.error("Error Adding Data:", error.message);
        res.status(500).send("Error Adding Data")   
    }
	
});

router.delete('/delete/:id', async (req, res) => {
try {	
    const result = await Workspace.findByIdAndDelete(req.params.id);
	res.json({result});
} catch (error) {
    console.error("Error Deleting Data:", error.message);
    res.status(500).send("Error Deleting Data") 
}
});


router.put('/update/:id', async (req, res) => {
    try {
        const classe = await Workspace.findById(req.params.id);
        if(req.body.Code){classe.Code= req.body.Code;}
        if(req.body.Name){classe.Name= req.body.Name;}
        classe.save();
        res.json(classe);   
    } catch (error) {
        console.error("Error Updating Data:", error.message);
        res.status(500).send("Error Updating Data")        
    }
	
});
router.put('/updateUsersUp/:id', async (req, res) => {
    try {
        const classe = await Workspace.findById(req.params.id);
        classe.Users+=1;
        classe.save();
        res.json(classe);   
    } catch (error) {
        console.error("Error Updating Data:", error.message);
        res.status(500).send("Error Updating Data")        
    }
	
});
router.put('/updateUsersDown/:id', async (req, res) => {
    try {
        const classe = await Workspace.findById(req.params.id);
        classe.Users-=1;
        classe.save();
        res.json(classe);   
    } catch (error) {
        console.error("Error Updating Data:", error.message);
        res.status(500).send("Error Updating Data")        
    }
	
});
module.exports=router;