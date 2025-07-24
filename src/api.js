import axios from 'axios';

export default axios.create({
  baseURL: 'https://nodejs-serverless-function-express-ruby-rho.vercel.app/api', // Pointing to backend
});
