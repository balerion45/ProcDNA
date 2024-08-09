import express from 'express';
import authRoute from "./routes/auth.route.js"
import clinicalTrialRoute from './routes/clinicalTrial.route.js'

const app = express();

app.use(express.json())


app.use('/api/auth',authRoute);
app.use('/api/clinicalTrials', clinicalTrialRoute);




app.listen(8000,() => {console.log('server is running')});