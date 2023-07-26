const {callToSecreteRepo} = require('../../repo/admin/callToSecreteRepo')

const callToSecreteService = (decodedId)=>{
    return callToSecreteRepo(decodedId);
}

module.exports = {
    callToSecreteService
}