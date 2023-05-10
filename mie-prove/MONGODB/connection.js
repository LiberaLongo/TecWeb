//tutorial seguito: https://www.mongodb.com/developer/languages/javascript/node-connect-mongodb/

//import mongoClient
const { MongoClient } = require('mongodb');

//for uri
const cluster = "freecluster.vm6qtyy.mongodb.net";
const dbname = "animal";
const credentials = {
	username: "liberalongo",
	password: "ihavetousemongodb"
};
//the uri
const uri = `mongodb+srv://${credentials.username}:${credentials.password}@${cluster}/${dbname}?retryWrites=true&w=majority`;
console.log(uri);

//list the databases in our cluster
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

//create our Main Function
async function main() {
	//create an instance of MongoClient
	const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
	try{
		//connect to our cluster
		await client.connect();
		//We can now interact with our database.
		await listDatabases(client);
	} catch (err) {
		console.error(err);
	} finally {
    await client.close();
	}
}
//call the main function
main().catch(console.error);

