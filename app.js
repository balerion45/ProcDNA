import express from 'express';

const app = express();

app.use(express.json())


app.use('/api/auth',authRoute);
app.use('/api/clinicalTrials', clinicalTrialRoute);




app.listen(8000,() => {console.log('server is running')});