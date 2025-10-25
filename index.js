// import express from 'express';
// import {dirname} from 'path';
// import { fileURLToPath } from 'url';
// import bodyparser from 'body-parser';
// const __dirname = dirname(fileURLToPath(import.meta.url))


// const app = express();

// // using parser middleware
// app.use(bodypa\rser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/public/index.html")
//     // console.log('req.rawHeaders')
//     // res.send('<h1>home page</h1>')
// })
// app.post('/submit', (req, res) => {
//     console.log(req.body)
// })
// // app.post('/register', (req, res) => {
// //     res.sendStatus(201)
// // })
// // app.put('/user/angela', (req, res) => {
// //     res.sendStatus(200)
// // })
// // app.patch('/user/angela', (req, res) => {
// //     res.sendStatus(200)
// // })
// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`server running on port ${PORT}`)
// })



// MORGAN MIDDELWARE
// import express from 'express';
// import morgan from 'morgan';

// const app = express(); 

// app.use(morgan('tiny'));


// app.get('/', (req, res) => {
//     res.send('Hello world')
// })


// const port = 5000;
// app.listen(port,() => {
//     console.log(`server running on port ${port}`)
// })

// import express from 'express';

// const app = express(); 
// const port = 5000;

// function logger(req, res, next) {
//     console.log("Request Method: ", req.method);
//     console.log("Request URL: ", req.url);
//     next();
// }
// app.use(logger);


// app.get('/', (req, res) => {
//     res.send('Hello world')
// })


// app.listen(port,() => {
//     console.log(`server running on port ${port}`)
// })


// BAND GENERATOR APP 
// import express from 'express';
// import { dirname} from 'path';
// import { fileURLToPath } from 'url';
// import bodyparser from 'body-parser';

// const app = express();
// const port = 4000
// let bandName = "";

// const __dirname = dirname(fileURLToPath(import.meta.url))
// app.use(bodyparser.urlencoded({extended: true}))

// function bandNameGenerator(req, res, next) {
//     console.log(req.body);
//     bandName = req.body['street'] + req.body['pet'];
//     next();
// }

// app.use(bandNameGenerator);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// });

// app.post("/submit", (req, res) => {
//     res.send(`<h1>Your band name is:</h1><h2>${bandName}</h2>`)
// })

// app.listen(port, () => {
//     console.log(`server running on port ${port}`)
// })
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyparser from 'body-parser';

const app = express();
const port = 4000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyparser.urlencoded({ extended: true }));

let bandName = "";

// Only use middleware for POST /submit
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body.street + req.body.pet;
  next();
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', bandNameGenerator, (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}</h2>`);
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
