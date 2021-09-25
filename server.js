
//DEPENDENCIES
const {ApolloServer , gql} = require('apollo-server');


//TYPEDEFS
const typeDefs = gql`

schema {
query : Query
}

type Query {
    greeting:String
}
`

//console.log(typeDefs)


//RESOLVERS
const resolvers = {
    Query :{
        greeting : ()=> "Hello from Graphql"
    }
}


const server = new ApolloServer({typeDefs , resolvers})


server.listen({port : 9000})
.then(({url})=> console.log(url))
