import express from 'express';
import routes from './routes';

const app = express();
const port = process.env.PORT || '8000';

app.use('/match', routes.match);
app.listen(port, (err) => {
  if (err) return console.error(err);
  return console.log(`Server is listening on ${port}`);
});
