const app = require ('./config.js');
const Personnel = require('./models/personnel');

app.get('/personnels', async (req, res) => {
	const personnels = await Personnel.find();

	res.json(personnels);
});

app.post('/personnel/new', (req, res) => {
	const personnel = new Personnel({
		ID: req.body.ID,
        CIN: req.body.CIN,
        FullName: req.body.FullName,
        LastName: req.body.LastName,
        Job: req.body.Job,
        Password:req.body.Password
	})

	personnel.save();

	res.json(personnel);
});

app.delete('/personnel/delete/:id', async (req, res) => {
	const result = await Personnel.findByIdAndDelete(req.params.id);

	res.json({result});
});


app.put('/todo/update/:id', async (req, res) => {
	const personnel = await Personnel.findById(req.params.id);

    personnel.FullName= req.body.FullName,
    personnel.LastName= req.body.LastName,
    personnel.Job=req.body.Job,
    personnel.Password=req.body.Password

	personnel.save();

	res.json(personnel);
});

app.listen(3001);