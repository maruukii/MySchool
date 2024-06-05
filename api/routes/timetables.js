const express=require('express');
const Subject=require('../models/subject');
const Classes=require('../models/class');
const router=express.Router();
const Timetable = require('../models/timetable');
const strings = [];
const room=require('../models/classroom');

for (let i = 1; i <= 16; i++) {
    strings.push('s' + i);
}
router.get('/', async (req, res) => {
	try{
        const timetables = await Timetable.find().populate(['Personnel','Class','Subject']);
        res.json(timetables);
} catch (error) {
    console.error("Error Fetching Data:", error.message);
    res.status(500).send("Error Fetching Data")
}
});
router.get('/:id', async (req, res) => {
	try {
    const result = await Timetable.findById(req.params.id).populate(['Personnel','Class','Subject']);
    //console.log(result.Personnel.FirstName);
	res.json({result});
} catch (error) {
    console.error("Data not Found:", error.message);
    res.status(404).send("Data not Found")
}
});
router.get('/get/:id', async (req, res) => {
    try {
        
        const classes = await Timetable.find({ Personnel: req.params.id });
        
        
        res.json(classes);
    } catch (error) {
        console.error("Data not Found:", error.message);
        res.status(500).send("An error occurred while fetching data");
    }
});
router.post('/new', async (req, res) => {
try {
const timetable = new Timetable({
		Personnel: req.body.teacher,
	})

	timetable.save();
	res.json(timetable);
} catch (error) {
    console.error("Error Adding Data:", error.message);
    res.status(500).send("Error Adding Data");
}
});

router.delete('/delete/:id', async (req, res) => {
	try {
        const result = await Timetable.findByIdAndDelete(req.params.id);
        res.json({result});
    } catch (error) {
        console.error("Error Deleting Data:", error.message);
        res.status(500).send("Error Deleting Data") 
    }
});


router.put('/update/:id', async (req, res) => {
     try {
        console.log(req.params.id)
        console.log(req.body)
        const timetable = await Timetable.findById(req.params.id);
        
        if(req.body.endtime){
            const subject = await Subject.findById(req.body.Subject);
            const clas = await Classes.findById(req.body.class);
            const classroom=await room.findById(req.body.Classroom);
            const group = req.body.group;
            const day = req.body.Day;
            const start = req.body.starttime;
            const end = req.body.endtime;
            console.log("d5alna")
           let sessions =(parseInt(end, 10)- parseInt(start, 10))/50
           let a=0
           if(parseInt(start, 10)<1200) {a=((parseInt(start, 10)-parseInt("800", 10))/50)}
            else  {a=((parseInt(start, 10)-parseInt("800", 10))/50)-3}
                for (let j = a; j < a+sessions; j++) {
                 timetable.Timetable[parseInt(day, 10)][j]= subject.SubjectName+" - "+clas.ClassName+" - "+group+" - "+classroom.Type+"-"+classroom.Number;
                 console.log(timetable.Timetable[parseInt(day, 10)][j])
                }
            }
         timetable.save();
         res.json(timetable);    
     } catch (error) {
         console.error("Error Updating Data:", error.message);
        res.status(500).send("Error Updating Data")    
         }
	
});




module.exports=router
