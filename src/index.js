const app =require('./app');

const PORT = process.env.PORT || 3000;
app.listen(3000);
console.log(`Run in port ${PORT}`);