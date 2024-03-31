const app = require ('./config.js');
const Personnel = require('./models/personnel');
const Alumni=require('./models/alumni');

app.get('/personnels', async (req, res) => {
	try{
        const personnels = await Personnel.find();
        res.json(personnels);
} catch (error) {
    res.status(500).send("Error Fetching Data")
}
});
app.get('/personnel/:id', async (req, res) => {
	try {const result = await Personnel.findById(req.params.id);

	res.json({result});
} catch (error) {
    res.status(404).send("User not Found")
}
});
app.post('/personnel/new', (req, res) => {
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

app.delete('/personnel/delete/:id', async (req, res) => {
	try {
        const result = await Personnel.findByIdAndDelete(req.params.id);
        res.json({result});
    } catch (error) {
        res.status(404).send("User not Found")
    }
});


app.put('/personnel/update/:id', async (req, res) => {
	const personnel = await Personnel.findById(req.params.id);

    personnel.FirstName= req.body.FirstName;
    personnel.LastName= req.body.LastName;
    personnel.Job=req.body.Job;
    personnel.Password=req.body.Password;
    personnel.PhoneNumber=req.body.PhoneNumber;

	personnel.save();

	res.json(personnel);
});




/************************************************/



app.get('/alumnis', async (req, res) => {
	const alumnis = await Alumni.find();

	res.json(alumnis);
});
app.get('/alumni/:id', async (req, res) => {
	const result = await Alumni.findById(req.params.id);

	res.json({result});
});
app.post('/alumni/new', (req, res) => {
	const alumni = new Alumni({
		
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Age: req.body.Age,
        Spec:req.body.Spec
	})

	alumni.save();

	res.json(alumni);
});

app.delete('/alumni/delete/:id', async (req, res) => {
	const result = await Alumni.findByIdAndDelete(req.params.id);

	res.json({result});
});


app.put('/alumni/update/:id', async (req, res) => {
	const alumni = await Alumni.findById(req.params.id);

    alumni.FirstName= req.body.FirstName;
    alumni.LastName= req.body.LastName;
    alumni.Age=req.body.Age;
    alumni.Spec=req.body.Spec;

	alumni.save();

	res.json(alumni);
});
app.listen(3001);