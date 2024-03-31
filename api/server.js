const app = require ('./config.js');
const Personnel = require('./models/personnel');

app.get('/personnels', async (req, res) => {
	const personnels = await Personnel.find();

	res.json(personnels);
});
app.get('/personnel/:id', async (req, res) => {
	const result = await Personnel.findById(req.params.id);

	res.json({result});
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
	const result = await Personnel.findByIdAndDelete(req.params.id);

	res.json({result});
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

app.listen(3001);