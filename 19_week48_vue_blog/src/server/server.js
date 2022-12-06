import mongoose from 'mongoose';
import { app } from './app/app.js';

const PORT = process.env.PORT || 7777;
const mongoURI = process.env.MONGO_URI;

app.listen(PORT, () => console.log('Server is running on port: ' + PORT));

mongoose.connect(mongoURI, (err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log('Connected to DB');
});
