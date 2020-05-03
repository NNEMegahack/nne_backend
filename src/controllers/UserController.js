const knex = require('../database/connection')
var requestify = require('requestify'); 
require('dotenv').config()


module.exports = {
    async index(req,res) {
        const results = await knex('form')
        
        return res.json(results)
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
    async barcode(req, res){
        const { code } = req.params
        console.log(code)
        //const proxyurl = "https://cors-anywhere.herokuapp.com/"; // Use a proxy to avoid CORS error
        const api_key = process.env.API_KEY;
        const url = `https://api.barcodelookup.com/v2/products?barcode=${code}&formatted=y&key=` + api_key;
        requestify.get(url).then(function(response) {
            // Get the response body (JSON parsed - JSON response or jQuery object in case of XML response)
            console.log(response.getBody())

            // Get the response raw body
            console.log(response.body)
        })
    }
}