const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId: 'hova9ace', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2023-01-09'
})