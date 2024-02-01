const { GraphQLSchema,
    GraphQLBoolean,
    GraphQLEnumType,
    GraphQLFloat,
    GraphQLError,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLScalarType,

} = require('graphql');
const { users } = require('../data');
console.log(users);

//user type
const UserType = new GraphQLObjectType({
    name: "User",
    description: "It represent a single user",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),

        },
        firstName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        phone: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: GraphQLString
        }
    })
})

// Root query type
const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "Root query",
    fields: () => ({
        users: {
            type: new GraphQLList(UserType),
            resolve: () => {
                return users;
            }
        }
    })
})


module.exports = {
    RootQueryType,
    UserType
}