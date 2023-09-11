module.exports = {
    exits: {
        success: {
            responseType: "busSuccessResponse"
        },
        somethingIsWrong: {
            responseType: "busErrorResponse"
        }
    },

    fn: async function () {
        console.log("============================");
        try {
            let params = req.allParams();
            console.log("params: ", params);
            if (!params.name) {
                return res.badRequest({ err: "name is required field" })
            }

            const results = await Company.create({
                name: params.name,
                city: params.city,
                address: params.address
            })
            return res.ok(results);
        }
        catch (err) {
            console.log(err);
            return res.serverError(err)
        }
    }
};
