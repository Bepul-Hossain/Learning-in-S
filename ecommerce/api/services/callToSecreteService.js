const {callToSecreteRepo} = require('../repo/callToSecreteRepo')

const callToSecreteService = (decodedId)=>{
    return callToSecreteRepo(decodedId);
}

module.exports = {
    callToSecreteService
}