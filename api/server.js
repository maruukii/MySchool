const app = require ('./config.js');
const PORT=3001;
const personnelRoute=require('./routes/personnels.js')
const alumniRoute=require('./routes/alumnis.js')

app.use("/personnels",personnelRoute);
app.use("/alumnis",alumniRoute);


app.listen(PORT,()=>{
    console.log("Server running");
});