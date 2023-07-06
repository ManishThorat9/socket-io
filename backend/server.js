const app = require('express')(); 
// create a app and inition of app // import express

const server = require('http').createServer(app);
// const httpServer = createServer();
// const io = new Server(httpServer, { /* options */ });
const io = require('socket.io')(server,{
  cors:{
    origin:"*",
    
  }
})


io.on("connection", (socket) =>{
  console.log(`New user connected`);
  console.log('What is socket: ',socket);

  socket.on("chat", (payload) =>{
    console.log("what is payload",payload);
    io.emit("chat" , payload);
  })
})

// app.listen(5000,()=> console.log('server is active...')); 


server.listen(5000,()=> console.log('server is listing at port 5000...'));
