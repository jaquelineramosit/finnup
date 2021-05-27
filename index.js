const express = require('express');
const app = express();
const routes = require('./routes');
const port = 3000
app.use(express.json());


app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});















//todos
// server.get('/usuarios', (req, res) => {
//     connection.select('*').table('usuario').then(data => {
//         console.log(data)
//         res.json(data);
//     }).catch(err => {
//         console.log(err)
//         return res.status(400).json(err);
//     });
// })
// //por id
// server.get('/usuarios/:id', (req, res) => {
//     const  { id }   = req.params;

//     if(id == undefined) {
//         return res.status(400).json('id undefined');
//     }

//     connection.where('id', id).select('*').table('usuario').then(data => {
//         console.log(data.where())
//         res.json(data);
//     }).catch(err => {
//         console.log(err)
//         return res.status(400).json(err);
//     });






//     const usuario = usuarios.find(function (element) {
//         return element.id == id;
//     });

//     if(!usuario) {
//         return res.status(400).json({ error: 'user does not exists' });
//     }
    
//     return res.json(usuario);    
// }) 


// function getAll (request, response) {
//     const users = connection('usuario').select('*');

//     return response.json(users);
// }

// const usuarios = [
//     {
//         id: 1,
//         name: 'Jaqueline',
//         lastname: 'Silva',
//         email: 'jaqueline@gmail.com'
//     },
//     {
//         id: 2,
//         name: 'Jacqueline',
//         lastname: 'Teixeira',
//         email: 'jacky@gmail.com'
//     },
//     {
//         id: 3,
//         name: 'Paulo',
//         lastname: 'Roberto',
//         email: 'paulo@outlook.com'
//     },
//     {
//         id: 4,
//         name: 'Maria',
//         lastname: 'Rita',
//         email: 'mrita@gmail.com'
//     }
// ];

// //todos
// server.get('/clientes', (req, res) => {
//     const clientes = connection('cliente').select('*');
//     //return res.json(users);
//     console.log(clientes)
//     return res.json(usuarios);
// })

// //por id
// server.get('/usuarios/:id', (req, res) => {
//     const  { id }   = req.params;

//     const usuario = usuarios.find(function (element) {
//         return element.id == id;
//     });

//     if(!usuario) {
//         return res.status(400).json({ error: 'user does not exists' });
//     }
    
//     return res.json(usuario);    
// }) 

// //inserir
// server.post('/usuarios/', (req, res) => {
//     var id = usuarios.reverse()[0].id;
//     console.log(id);
//     if(id != undefined) {
//         id += 1;
//     } else {
//         id = 1
//     }
//     const {name, lastname, email} = req.body; 
//     const usuario = {id, name, lastname, email}

//     usuarios.push(usuario); 
//     return res.json(usuario);    
// }) 

// server.put('/usuarios/:id', (req, res) => {
//     const { id } = req.params; 
//     // const { name, lastname, email } = req.body;

//     // usuarios[id] = {name, lastname, email};
//     return res.json("ops... not working yet");

//   });
  
// server.delete('/usuarios/:id', (req, res) => {
//     const { index } = req.params; 
//     usuarios.splice(id, 1); 
  
//     return res.send();
//   });
