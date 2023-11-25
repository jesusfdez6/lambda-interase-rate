const { DynamoDBClient,ScanCommand } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient } =require("@aws-sdk/lib-dynamodb");
const {getParameters} = require('../parameters/parameters');


exports.getRates = async () => {
    
    console.log("getRates dynamoDB:");
    const parameters = getParameters();
    
    return new Promise(async (resolve, reject) => {
    
        const client = new DynamoDBClient({ region: 'us-east-1' });
        const ddbDocClient = DynamoDBDocumentClient.from(client);

        const params = {
            TableName: parameters[process.env.TABLE_DYNAMO]
        }

        try {
            const rates = await ddbDocClient.send(new ScanCommand(params));
            resolve(rates);

        } catch (error) {
            reject(error);
        }
    });
};