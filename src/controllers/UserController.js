const knex = require('../database/connection')
var requestify = require('requestify'); 
require('dotenv').config()


module.exports = {
    async index(req, res, next) {
        try{
            const results = await knex('form')
        
            return res.json(results)
        }catch (error){
            next(error)
        }

    },
    async create(req,res, next) {

        try{
            const { username } = req.body
            await knex('form').insert({
                username
            })
            
            return res.status(201).send()
        }catch (error){
            next(error)
        }
    },
    async update(req, res, next){
        try{
            const { username } = req.body
            const { id } = req.params

            await knex('form')
            .update( { username })
            .where({ id })

            return res.send()
        }
        catch (error){
            next(error)
        }
    },
    async delete(req, res, next){
        try{
            const { id } = req.params

            await knex('form')
            .where({ id })
            .del()

            return res.send()
        }
        catch (error){
            next(error)
        }
    },
    async barcode(req, res, next){
        try{
            const { code } = req.params
            const api_key = process.env.API_KEY
            const url = `https://api.barcodelookup.com/v2/products?barcode=${code}&formatted=y&key=` + api_key
            const response = await requestify.get(url)
        
            return res.json(JSON.parse(response.body))
        }
        catch (error){
            next(error)
        }
    }
}