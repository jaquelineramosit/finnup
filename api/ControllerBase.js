const {getAll, getById, create, update, del } = require('./ServicesBase')
module.exports = {

    async getAll (request, response) {
        const  { table }  = request.params;
        await getAll(table, (err, results) => {
            if(err) {
                console.log('erro')
                return response.status(500).json(err)
            } 
            console.log('ok')
            return response.status(200).json(results)
        })
    },

    async getById (request, response) {
        const  { table, id }  = request.params;
        await getById(table, id, (err, results) => {
            if(err) {
                console.log('erro')
                return response.status(500).json(err)
            } 
            console.log('ok')
            return response.status(200).json(results)
        })
    },
    
    async create (request, response) {
        const  { table }  = request.params;
        const {
            name, 
            addressId, 
            email,
            cellphone, 
            login, 
            password, 
            isactive, 
            updatedate, 
            updateuser, 
            tokenid} = request.body;
        
        const data = {
            name, 
            addressId, 
            email,
            cellphone, 
            login, 
            password, 
            isactive, 
            updatedate, 
            updateuser, 
            tokenid}
            ;

        await create(table, data, (err, results) => {
            if(err) {
                console.log(err.message)
                return response.status(500).json(err)
            } 
            console.log('user has been created successfully!')
            return response.status(200).json(results)
        })
    },

    async update (request, response) {
        const  { table, id }  = request.params;
        const {
            name, 
            addressId, 
            email,
            cellphone, 
            login, 
            password, 
            isactive, 
            updatedate, 
            updateuser, 
            tokenid} = request.body;
        
        const data = {
            id,
            name, 
            addressId, 
            email,
            cellphone, 
            login, 
            password, 
            isactive, 
            updatedate, 
            updateuser, 
            tokenid}
            ;

        await update('users', data, (err, results) => {
            if(err) {
                console.log(err.message)
                return response.status(500).json(err)
            } 
            console.log('user has been updated successfully!')
            return response.status(200).json(results)
        })
    },

    async delete (request, response) {
        const  { table, id }  = request.params;
        await del(table, id, (err, results) => {
            if(err) {
                console.log('erro')
                return response.status(500).json(err)
            } 
            console.log('user has been updated successfully!')
            return response.status(200).json(results)
        })
    }
};