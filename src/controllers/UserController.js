const knex = require('../database/connection')
var requestify = require('requestify'); 
require('dotenv').config()


module.exports = {
    async index(req, res, next) {
        try{
            const results = await knex('products')
        
            return res.json(results)
        }catch (error){
            next(error)
        }

    },
    async create(req,res, next) {

        try{
            const { barcode_number } = req.body
            const { barcode_type } = req.body
            const { product_name } = req.body
            const { category } = req.body
            const { publisher } = req.body
            const { description } = req.body
            const { images } = req.body
            const { stores } = req.body
            const { brand } = req.body
            const { title } = req.body
            const { author } = req.body
            const { mpnm } = req.body
            const { model } = req.body
            const { asin } = req.body
            const { manufacturer } = req.body
            const { label } = req.body
            const { length } = req.body
            const { width } = req.body
            const { height } = req.body
            const { weight } = req.body
            const { features } = req.body        

            await knex('products').insert({
                barcode_number,
                barcode_type,
                product_name,
                category,
                publisher,
                description,
                images,
                stores,
                brand,
                title,
                author,
                mpnm,
                model,
                asin,
                manufacturer,
                label,
                length,
                width,
                height,
                weight,
                features,
            })
            
            return res.status(201).send()
        }catch (error){
            next(error)
        }
    },
    async update(req, res, next){
        try{
            //const { username } = req.body
            const { id } = req.params
            //const data = req['body']

            await knex('products')
            .update( req['body'] )
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

            await knex('products')
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
