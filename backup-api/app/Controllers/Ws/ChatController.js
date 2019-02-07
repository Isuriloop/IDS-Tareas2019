'use strict'
const exec = require('child_process').exec
const Setting = use('App/Models/Setting')

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
    
  }
  onMessage (message) {
   
  this.socket.broadcastToAll('message', message)
  this.show(message)

}
 async show(message){
 let setting = await Setting.findOrFail(message)
 console.log(setting.userBd);
 console.log(setting.name);
 console.log('mysqldump' + ' --user='+ setting.$originalAttributes.userBd + ' --password='+setting.$originalAttributes.passwordBd+ ' -h 127.0.0.1 ' + setting.$originalAttributes.nameBd+ ' > ' + 'C:/Users/Ibraham Jimenez/Documents/respaldos/'+setting.$originalAttributes.name+'.sql')
exec('mysqldump' + ' --user='+ setting.$originalAttributes.userBd + ' --password='+setting.$originalAttributes.passwordBd+ ' -h 127.0.0.1 ' + setting.$originalAttributes.nameBd+ ' > ' + 'C:/Users/Ibraham Jimenez/Documents/respaldos/'+setting.$originalAttributes.name+'.sql')
console.log("Backup creado con exito")


}




}



module.exports = ChatController
