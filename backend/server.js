import express, { Router } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {signup} from './api/signup.js'
import {login} from './api/login.js'
import {addProfile, getProfile} from './api/profiles.js'
import {verifyToken} from './api/verifyToken.js'

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000


app.use(cors());
app.use(express.json());

app.use('/api/signup', signup)
app.use('/api/login', login)
app.use('/api/getprofile', getProfile)
app.use('/api/addprofile', addProfile)
app.use('/api/verifyToken', verifyToken)

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default Router;