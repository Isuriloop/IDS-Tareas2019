
<template>
  <div>
      <div align="center">

  <table class="table">
  <thead >
    <tr>
      <th></th>
       <th> ID</th>
       <th > Nombre</th>
       <th > Nombre de la Base de Datos</th>
       <th > Usuario</th>
       <th > Contraseña</th>
       <th > Puerto</th>
       <th > IP</th>
       <th > Fecha</th>
       <th> Hora</th>

       <th></th>   <th></th> 
        <th>Opciones</th>    
        <th><button type="button" class="btn btn-primary" @click="Nuevo()">Nuevo</button></th>
    </tr>
  </thead>

  <tbody>


    <tr v-for="datos of datas" :key="datos.id" class="">
      <th></th>
        <th class="active"> {{ datos.id}} </th>
        <th class="success"> {{ datos.name}} </th>
        <th> {{ datos.nameBd}}  </th>
        <th> {{ datos.userBd}} </th>
        <th> {{ datos.password}}  </th>
        <th> {{ datos.port}}  </th>
        <th> {{ datos.ip}}  </th>
        <th> {{ datos.date}}  </th>
        <th> {{ datos.time}}  </th>
        <th> {{ datos.status}}  </th>
        <th><button type="button" class="btn btn-success" @click="sendMessage(datos)">Respaldar</button></th>
        <th><button type="button" class="btn btn-primary" @click="dataid(datos)">Actualizar</button></th>
        <th><button type="button" class="btn btn-danger" @click="deleteKeep(datos)">Eliminar</button></th>
       
        
        

    </tr>
  </tbody>
</table>
<br><br>

  </div>
  </div>
</template>

<script>

import {API} from '../Servicios/axios';
import Ws from '@adonisjs/websocket-client'
const ws = Ws('ws://localhost:3333')
import Push from 'push.js'


export default {
  
  props: {
    msg: String
  },

   async created(){
    this.initializeWs();
    this.mounted()

  },

  data() {
    return {
      chat : null,
      message: "Message",
      status: 1,
      dialog: false,
      drawer: null,
      datas: []
    };
  },   
  methods: {
        mounted() {
    API.get("settings").then(response => {
      this.datas = response.data;
      console.log(response.data)

    });
  },

dataid(datos){

    localStorage.setItem('id',datos.id),
    localStorage.setItem('name',datos.name),
    localStorage.setItem('nameBd',datos.nameBd),
    localStorage.setItem('userBd',datos.userBd),
    localStorage.setItem('password',datos.password),
    localStorage.setItem('port',datos.port),
    localStorage.setItem('ip',datos.ip),
    localStorage.setItem('date',datos.date),
    localStorage.setItem('time',datos.time)

    this.$router.push("/Update")
    },  

deleteKeep(datos){
 alert(datos.id)
API.delete("settings/"+datos.id)
}, 

Nuevo(){
   this.$router.push("/registrar")
},

   sendMessage : async function(datos){
      this.chat.emit('message',datos.id )
      Push.create('Backup creado con exito')
    },

    initializeWs: async function(){
      ws.connect();
      this.chat = ws.subscribe('chat');
      let chat = this.chat;
      chat.on('message', (event)=>{
          // eslint-disable-next-line
        console.log(event);
      })
    },
  },
}
</script>





<style >
</style>
