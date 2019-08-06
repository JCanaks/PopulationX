# PopulationX
**PopulationX** is a simple and easy-to-use Population Management API built with GraphQL. The system provides information about various locations such as the total number of residents in each location broken down by gender, and the sum total of residents in a location.

The API enables users to:

* Create a new location containing data on the total number of male and female residents within it (locations can be nested within other locations).

* List all available locations and their population summaries (total male residents, total female residents, sum total residents). The parent location and child (nested) locations for each location can also be viewed in addition to the summaries.

* Update data for a specific location

* Delete a specified location.



## Technologies Used
* [graphql-yoga](https://github.com/prisma/graphql-yoga): which is based on the following libraries and tools:
    * [apollo-server](https://github.com/apollographql/apollo-server)
    * [subscriptions-transport-ws](https://github.com/apollographql/subscriptions-transport-ws) (graphql Subscriptions)
    * [graphql-tools](https://github.com/apollographql/graphql-tools)
    * [graphql-playground](https://github.com/graphcool/graphql-playground)
* [Prisma](https://www.prisma.io/)
* [Node](https://nodejs.org/)
* [validatorjs](https://www.npmjs.com/package/validatorjs)

## Getting Started
### Dependencies
The following needs to be installed on your system to setup up the application:
* [Nodejs](https://nodejs.org/en/download/current/)
* [Git](https://git-scm.com/downloads)
* [Docker](https://www.docker.com/products/container-runtime) (To deploy Prisma locally)
### Setup
The following steps can be taken to setup this application locally
#### 1. Clone the Repository
```
git clone https://github.com/JCanaks/PopulationX.git
```

#### 2. Move into the project directory
```
cd populationx
```

#### 3. Create an env file and update env variables
Run the following command to create an env file using the example env file provided 
```
cp .env.example .env
```
You can now update the values for env variables used in the application
#### 4. Install Dependencies
```
npm install
```
#### 5. Install the Prisma CLI
```
npm install -g prisma
```

#### 6. Deploy Prisma and database
[Prisma](https://www.prisma.io/) powers the database layer of the application and connects to the GraphQL Server via the [Prisma Client](https://www.prisma.io/docs/prisma-client).

In this application Prisma is deployed locally using a Postgres database (Note: You would need Docker installed in order to set this up. See `docker-compose.yml` file at the root of this project). 

To achieve this, run the following command below to start up Prisma and launch the connected database according to the specifications in the `docker-compose.yml` file at the root of this project.

```
docker-compose up -d
```


Once that is completed, deploy the prisma datamodel by running the following command:  

```
prisma deploy
```
Prisma  is now connected to a local database and runs on `http://localhost:4477`
You can use the [Prisma Admin](https://www.prisma.io/docs/prisma-admin/overview-el3e/) to view and edit the data in your database. To access the Prisma Admin use the following url -- `http://localhost:4477/_admin`

##### Prisma Admin view
![Prisma Admin view](docs/prisma-admin.png?raw=true "Prisma Admin view")

For more details on setting up Prisma locally please click [here](https://www.prisma.io/docs/1.34/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/) to view setup details in the Prisma Docs

**Note:** Prisma can also be deployed using a free demo database that is hosted in Prisma Cloud. Click [here](https://www.prisma.io/docs/get-started/01-setting-up-prisma-demo-server-JAVASCRIPT-a001/) to learn more about deploying Prisma using Prisma Cloud.  

#### 7. Start the server and launch the Graphql Playground
Run the following command to start the GraphQL server:
```
npm start
```

Navigate to `http://localhost:4000` to test the GraphQL API with the GraphQL playground and you are good to go :tada::tada:.

##### GraphQL playground with a sample signup query

![GraphQL playground with a sample signup query](docs/signup-query.png?raw=true "GraphQL playground with a sample signup query")

### Run Tests
To run tests locally ensure that the prisma server is started by running the command:
```
docker-compose up -d
```
After that, run the command below to run tests and view coverage report

```
npm test
```

### API Docs
The GraphQL Playground is a powerful GraphQl IDE that helps you work interactively with the GraphQL API. One of its cool features is the documentation explorer which enables you visualize the structure of the GraphQL schema. This self documenting GraphQL feature enables you to easily understand the schema structure of the application and the structure of the data to be returned when writing GraphQL queries. This documentation can be accessed by clicking on the `DOCS` tab on the right side of the playground 

##### API Docs showing the structure of the Location model
![API Docs](docs/api-docs.png?raw=true "API Docs")

The schema of the application can also be viewed by clicking on the `SCHEMA` tab on the right side of the playground 

##### App schema

![App schema](docs/schema-docs.png?raw=true "App schema")

### Author
- Jane C. Anaekwe - [@JCanaks](https://github.com/JCanaks)