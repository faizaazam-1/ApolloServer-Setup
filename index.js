const { ApolloServer }  = require('apollo-server');
const mongoose = require('mongoose');

//typedEF DEFINE THE graphQL schema, specifying the types, queries, mutations available in the api
const typeDefs = require('./graphql/typeDefs');

//Such functions handle the logic for queries and mutations
const resolvers = require('./graphql/resolvers');

//MongDB conncetion string
const MONGODB = "mongodb+srv://admin:coopercodes@apolloserversetup.n9ghj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//New instance of ApolloServer is being created here
const server = new ApolloServer({
    typeDefs,
    resolvers
});

//Connecting to the MongoDB database using moongoose
mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB Connected");
        return server.listen({port: 5000});
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    });