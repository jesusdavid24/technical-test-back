import express from 'express';
import ConfigExpress from './config/express';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3005;

ConfigExpress(app);
routes(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});