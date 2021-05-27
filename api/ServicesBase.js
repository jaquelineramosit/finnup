const connection = require('../database/database')

module.exports = {

    getAll: (table, callBack) => {
        
        connection(table).select('*').then((results) => {
            return callBack(null, results)
        }).catch(function(err) {
            return callBack(err)
        })        
    },
    
    getById: (table, data, callBack) => {
        
        connection(table).where('id', data).select('*').first().then((results) => {
            return callBack(null, results)
        }).catch(function(err) {
            return callBack(err)
        })        
    },
    create: (table, data, callBack) => {
        
        connection(table).insert(data).then((results) => {
            return callBack(null, results)
        }).catch(function(err) {
            return callBack(err)
        })        
    },
    update: (table, data, callBack) => {
        
        connection(table).where('id', data.id).update(data).then((results) => {
            return callBack(null, results)
        }).catch(function(err) {
            return callBack(err)
        })        
    },
    del: (table, data, callBack) => {
        
        connection(table).where('id', data).delete().then((results) => {
            return callBack(null, results)
        }).catch(function(err) {
            return callBack(err)
        })        
    },
}
