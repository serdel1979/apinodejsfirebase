const app =require('./app');

app.listen(app.get('port'));
console.log(`Run in port ${app.get('port')}`);