const dynamoDB = require("../dynamoDB/dynamo");
const mapperResponse = require("../mapper/mapperResponse");
const mapperResponseDynamo = require("../mapper/mapperDynamo");

exports.getRate = async ()=>{
    console.log("getRate services");
    try {

        const rates =  await dynamoDB.getRates();
        const deserializedRates = rates.Items.map(rate => {
        
          return mapperResponseDynamo.getRow(rate);
        });

        console.log("response services:");
        console.log(deserializedRates);

        return mapperResponse.responseSuccess(deserializedRates);
      

    } catch (error) {
        console.error("Error getRate services:");
        console.log(error);
        return mapperResponse.responseTecnicalError();
    }
}