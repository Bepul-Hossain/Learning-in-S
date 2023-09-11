module.exports = {
    // async create(req, res) {
    //     try {
    //         let params = req.allParams();
    //         if (!params.name) {
    //             return res.badRequest({ err: "name is required field" })
    //         }

    //         const results = await Company.create({
    //             name: params.name,
    //             city: params.city,
    //             address: params.address
    //         })
    //         return res.ok(results);
    //     }
    //     catch (err) {
    //         return res.serverError(err)
    //     }

    // },
    async find(req, res) {

        try {
            const results = await Company.find()
            return res.ok(results);
        } catch (err) {
            return res.serverError(err)
        }
    },
    async findOne(req, res) {

        try {
            const {id} = req.params;
            const results = await Company.find({ where: { id : id }})
            return res.ok(results);
        } catch (err) {
            return res.serverError(err)
        }
    },
    async updateFn(req, res) {
        try {
            
            let params = req.allParams();
            let attributes = {};
            if(params.name){
                attributes.name = params.name
            }
            if(params.city){
                attributes.city = params.city
            }
            if(params.address){
                attributes.address = params.address
            }


            const updatedResult = await Company.update({id: req.params.id}, attributes)
            console.log(updatedResult);
            return res.ok(updatedResult);

        } catch (err) {
            return res.serverError(err)
        }
    },

    async delete(req, res) {
        try {
            const result = await Company.destroy({id: req.params.id})
            console.log(result);
            return res.ok(result);

        } catch (err) {
            return res.serverError(err)
        }
    }
}