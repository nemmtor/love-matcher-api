import app from './app';

const port = process.env.PORT || '8000';

app.listen(port, (err) => {
  if (err) return console.error(err);
  return console.log(`Server is now listening on ${port}`);
});
