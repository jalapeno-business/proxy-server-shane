const app = require('./app.js');

const PORT = process.env.PORT || 8082;

app.listen(PORT, (error) => {
  if (error) {
    console.log('Server startup failed', error);
  } else {
    console.log('Server running on port', PORT);
  }
});
