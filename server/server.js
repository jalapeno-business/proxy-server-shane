const app = require('./app.js');

const PORT = process.env.PORT || 8082;

app.listen(PORT, (error) => {
  if (error) {
    console.error('Server startup failed');
  } else {
    console.log('Server startup failed');
  }
});
