require('dotenv').config()
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const expressGraphQL = require('express-graphql') // the glue between express server & graphql

const app = module.exports = express()
app.use(cors())
app.use(bodyParser.json())

//using middleware to have graphql requests filter into expressGraphQL
app.use('/graphql', expressGraphQL({
	graphql: true //This is only for development
}))



//webpack configuration only for development ENV
const webpackMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config')
app.use(webpackMiddleware(webpack(webpackConfig)))

app.listen(process.env.PORT || 3030, () => (console.log('Listening on 3030')))
