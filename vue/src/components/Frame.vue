<template>
  <div>
    
    <form class="form-registrar">
            <div id="input">
                <br><br>
        <span>Crea una Nueva Backup !</span><br><br>
             <b-form-input v-model="name" type="text" placeholder="Nombre"></b-form-input><br>
             <b-form-input v-model="nameBd" type="text" placeholder="Nombre de la base de datos"></b-form-input><br>
             <b-form-input v-model="userBd" type="text" placeholder="Usuario"></b-form-input><br>
             <b-form-input v-model="password" type="password" placeholder="Password"></b-form-input><br>
             <b-form-input v-model="port" type="text" placeholder="Puerto"></b-form-input><br>
             <b-form-input v-model="ip" type="text" placeholder="IP"></b-form-input><br>
             <b-form-input v-model="date" type="text" placeholder="Fecha"></b-form-input><br>
             <b-form-input v-model="time" type="text" placeholder="Hora"></b-form-input><br>
             <b-form-input v-model="status" type="text" placeholder="status"></b-form-input><br>
             
             
           
             <button type="button" class="boton btn-lg btn-block" @click="save()">Hacer Backup</button><br> 
       
                   
            </div>
    </form>
  </div>
</template>

<script>
import { API } from "../Servicios/axios";
export default {
   data() {
    return {
     name:"",
     nameBd:"",
     userBd:"",
     password:"",
     port:"",
     ip:"",
     date:"",
     time:"",
     status:"",
    };
  },

  props: {
   source: String 
  },
   methods: {
save(){
        API.post('http://127.0.0.1:3333/api/v1/settings', {
     name:this.name,
     nameBd:this.nameBd,
     userBd:this.userBd,
     password:this.password,
     port:this.port,
     ip:this.ip,
     date:this.date,
     time:this.time,
     status:this.status

    
    }
    )
    .then(response =>{
                alert("Te has registrado con Exito!",response)
     this.name=null,
     this.nameBd=null,
     this.userBd=null,
     this.password=null,
     this.port=null,
     this.ip=null,
     this.date=null,
     this.time=null,
     this.status=null

            }).catch (error =>{
                alert("error", error)
            })
}
  },
}
</script>








<style >
.body-registrar{
    background: rgb(247, 247, 247) !important;

}
.form-registrar{
    width: 500px;
    height: 540px;
    background: rgb(255, 255, 255);
    margin: 0 auto;
}

</style>
