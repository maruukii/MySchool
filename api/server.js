const app = require ('./config.js');
const PORT=3001;

//Routes
const personnelRoute=require('./routes/personnels.js')
const alumniRoute=require('./routes/alumnis.js')
const SubjectRoute=require('./routes/subjects.js')
const ClassRoute=require('./routes/classes.js')
const TeacherRoute=require('./routes/teachers.js')
const HeadmasterRoute=require('./routes/headmasters.js')
const SupervisorRoute=require('./routes/supervisors.js')
const TimetableRoute=require('./routes/timetables.js')

app.use("/personnels",personnelRoute);
app.use("/alumnis",alumniRoute);
app.use("/classes",ClassRoute);
app.use("/subjects",SubjectRoute);
app.use("/teachers",TeacherRoute);
app.use("/headmasters",HeadmasterRoute);
app.use("/supervisors",SupervisorRoute);
app.use("/timetables",TimetableRoute);

app.listen(PORT,()=>{
    console.log("Server running");
});