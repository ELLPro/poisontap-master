app.set('port', process.env.PORT || 8080);
app.set('host', process.env.HOST || '0.0.0.0');

http.createServer(app).listen(app.get('port'), app.get('host'), function(){
  console.log("Express server listening on port " + app.get('port'));
});