# ApolloServerSetup
## Features  
**GraphQL API:**  Provides queries and mutations for messages.  
**Apollo Server:** A GraphQL server implementation.  
**MongoDB:** Database for storing messages.  
**Mongoose:** ODM for MongoDB.  


## Prerequisites  
Ensure you have **Node.js** installed (v12 or higher recommended).  
You need access to a **MongoDB** instance. You can use MongoDB Atlas or run a local MongoDB server.  


#### Clone the repository:
git clone https://github.com/yourusername/your-repo-name.git  
cd your-repo-name  


#### Install dependencies:  
npm install  


#### Add MongoDB connection string:
MONGODB_URI = mongodb+srv://username:password@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority *(sample string)*  

**Note:**  
Make sure to add it correctly:  
Go to your MongoAtlas account --> Create a cluster --> Select the "Database" option from left pannel --> Select "Connect" option --> Copy the connection string from there

#### Run the application:
npm start  
The server will start on http://localhost:5000.

### Project Description
This project serves as a tutorial on setting up a backend using Node.js, Apollo Server, GraphQL, and MongoDB. The main focus is on configuring the backend infrastructure, including setting up Apollo Server for handling GraphQL queries and mutations, connecting to a MongoDB database using Mongoose, and implementing authentication middleware.  


As an example to demonstrate the functionality of the backend setup, a simple message schema is included. This example allows for creating and retrieving messages, showcasing how to define GraphQL types, inputs, queries, and mutations, as well as how to handle data storage and retrieval with MongoDB.
