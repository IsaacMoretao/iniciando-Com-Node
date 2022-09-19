const http = require("http")

http
  .createServer((request, response) => {
 response.writeHead(200, {'content-Type' : 'application/json'})

 if (request.url === '/produto'){
  response.end(JSON.stringify({
    message: 'Rota de produto',

  }))

 }

 if (request.url === '/usuários'){
  response.end(JSON.stringify({
    message: "rota de usuário",

  }))
  
 }
  
}).listen(3550, () => console.log("Servidor está rodando na porta 3550"))