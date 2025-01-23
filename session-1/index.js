// creating an http server
// http is preinstalled in the node.js runtime
const http = require('http')
const currenciesJson = require('./currencies.json')

const PORT = 8082

/* const server = http.createServer((req, res) => {
  console.log('request received')
  // stream started

  //   res.write(JSON.stringify(crioServer))

  // const html = `<h1>Data Sent from server</h1>`
  // res.writeHead(200, {
  //   'content-type': 'text/html',
  // })
  // res.write(html)

  // we can only send a string
  res.writeHead(200, {
    'content-type': 'application/json',
  })
  const serverInfo = {
    name: 'Crio-Server',
    version: '1.0.0',
    currentDate: new Date().toDateString(),
    currentTime: new Date().toTimeString(),
  }

  // conditional statement for

  res.write(JSON.stringify(serverInfo))

  // stream ended
  res.end()
}) */

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.writeHead(200, {
        'content-type': 'text/html',
      })
      res.end(`<h1>Currency Database</h1>`)
      break
    case '/currencies':
      res.writeHead(200, {
        'content-type': 'application/json',
      })
      res.end(JSON.stringify(currenciesJson))
      break
    default:
      res.writeHead(404)
      res.end(JSON.stringify())
  }
})

server.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})
