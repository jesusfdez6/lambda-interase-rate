const {NAME_LAMBDA} = require("./constants");
const mapperResponse = require("./mapper/mapperResponse");
const parameters = require("./parameters/parameters");
const service = require("./services/service");

exports.handler = async (event) => {

  try {
    console.log("iniciando lambda:", NAME_LAMBDA);
    console.log(event);
    await parameters.getParametersInAws();
    const responseService = await service.getRate();
    return  responseService;

  } catch (error) {

    console.log("Error handler");
    console.log(error);
    return  mapperResponse.responseTecnicalError();

    
  }

};
  