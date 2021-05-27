// const connection = require('../../database/database.js')

// module.exports = {

//     getAll: (table, callBack) => {
        
//         connection(table).select('*').then((results) => {
//             return callBack(null, results)
//         }).catch(function(err) {
//             return callBack(err)
//         })        
//     },
//     getById: (table, data, callBack) => {
        
//         connection(table).where('id', data).select('*').first().then((results) => {
//             return callBack(null, results)
//         }).catch(function(err) {
//             return callBack(err)
//         })        
//     }      
// }
