const http= require('http')

const server= http.createServer((req,res)=>{
  res.write('<h1>welcome to our233 page</h1>')
  res.end()
})
server.listen(5000)