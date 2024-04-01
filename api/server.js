const app = require ('./config.js');
const PORT=3001;
const personnelRoute=require('./routes/personnels.js')
const alumniRoute=require('./routes/alumnis.js')
const SubjectRoute=require('./routes/subjects.js')
const ClassRoute=require('./routes/classes.js')

app.use("/personnels",personnelRoute);
app.use("/alumnis",alumniRoute);
app.use("/classes",ClassRoute);
app.use("/subjects",SubjectRoute);


app.listen(PORT,()=>{
    console.log("Server running");
});