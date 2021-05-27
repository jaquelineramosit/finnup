// const {getAll, getById, create, update, del } = require('../Services.js')
// module.exports = {

//     async getAll (request, response) {
//         await getAll('users', (err, results) => {
//             if(err) {
//                 console.log('erro')
//                 return response.status(500).json(err)
//             } 
//             console.log('ok')
//             return response.status(200).json(results)
//         })
//     },

//     async getById (request, response) {
//         const  { id }  = request.params;
//         await getById('users', id, (err, results) => {
//             if(err) {
//                 console.log('erro')
//                 return response.status(500).json(err)
//             } 
//             console.log('ok')
//             return response.status(200).json(results)
//         })
//     },
    
//     async create (request, response) {
//         const {
//             name, 
//             addressId, 
//             email,
//             cellphone, 
//             login, 
//             password, 
//             isactive, 
//             updatedate, 
//             updateuser, 
//             tokenid} = request.body;
        
//         const data = {
//             name, 
//             addressId, 
//             email,
//             cellphone, 
//             login, 
//             password, 
//             isactive, 
//             updatedate, 
//             updateuser, 
//             tokenid}
//             ;

//         await create('users', data, (err, results) => {
//             if(err) {
//                 console.log(err.message)
//                 return response.status(500).json(err)
//             } 
//             console.log('user has been created successfully!')
//             return response.status(200).json(results)
//         })
//     },

//     async update (request, response) {
//         const  { id }  = request.params;
//         const {
//             name, 
//             addressId, 
//             email,
//             cellphone, 
//             login, 
//             password, 
//             isactive, 
//             updatedate, 
//             updateuser, 
//             tokenid} = request.body;
        
//         const data = {
//             id,
//             name, 
//             addressId, 
//             email,
//             cellphone, 
//             login, 
//             password, 
//             isactive, 
//             updatedate, 
//             updateuser, 
//             tokenid}
//             ;

//         await update('users', data, (err, results) => {
//             if(err) {
//                 console.log(err.message)
//                 return response.status(500).json(err)
//             } 
//             console.log('user has been updated successfully!')
//             return response.status(200).json(results)
//         })
//     },

//     async delete (request, response) {
//         const  { id }  = request.params;
//         await del('users', id, (err, results) => {
//             if(err) {
//                 console.log('erro')
//                 return response.status(500).json(err)
//             } 
//             console.log('user has been updated successfully!')
//             return response.status(200).json(results)
//         })
//     }
// };