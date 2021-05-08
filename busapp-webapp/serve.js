const express = require ('express');
const path = require ('path');
const app = express();
app.use (express.static (path.join ( __dirname, 'src', 'client', 'build' )));
app.get ('/*', ( req, res, next ) => {
	res.sendFile (path.join ( __dirname, 'src', 'client', 'build', 'index.html'))
});

app.listen(8001, () => console.log ('Frontend is running on port 8001'))