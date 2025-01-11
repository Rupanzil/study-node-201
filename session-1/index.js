// creating an http server
// http is preinstalled in the node.js runtime
const http = require('http')
const PORT = 8082

const server = http.createServer((req, res) => {
  console.log('request received')
  // stream started
  // we can only send a string
  //   res.writeHead(200, {
  //     'content-type': 'application/json',
  //   })
  //   const crioServer = {
  //     name: 'Crio-Server',
  //     version: '1.0.0',
  //   }

  //   res.write(JSON.stringify(crioServer))

  const html = `<h1>Data Sent from server</h1>`
  res.writeHead(200, {
    'content-type': 'text/html',
  })
  res.write(html)
  // stream ended
  res.end()
})

server.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})
