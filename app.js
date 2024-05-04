const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
//const { graphql } = require('graphql');
const {buildSchema} = require ('graphql');

const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
    schema: buildSchema(`

    type RootQuery {

    }

    type RootMutation {
        
    }
    schema {
        query:
        mutation:
    }
    `),
    rootValue: {}

})); 

app.listen(3000);