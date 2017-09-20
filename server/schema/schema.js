const graphql = require('graphql')

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt
} = graphql

//this tells graphQL what a User Object is
const UserType = new GraphQLObjectType({
	name: 'User', //require property that is a string that describes the type
	fields: { // required property that tells graphQL all the properties the user has
		id: { type: GraphQLInt},
		firstName: { type: GraphQLString},
		lastName: { type: GraphQLString},
		email: { type: GraphQLString},
		password: { type: GraphQLString}
	}
})

// A RootQuery is how we jump into our data
const RootQuery = new GraphQLObjectType({
	// this can be summarized by saying we can ask for a "user" by "id" and I'll give you back a
	//type "UserType," which is defined above
	name: 'RootQueryType',
	fields: {
		user: {
			type: UserType,
			args: {id: {type: GraphQLInt}}, //these are the arguments required to get the UserType.
			resolve(parentValue, args){ // this is were HTTP requests are made to DB or third-party API
				//args is an object that will reflect the properties defined on the args above
			}
		}
	}
})