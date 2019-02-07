 <template>
  <div>
<h1>server</h1>
<input type="text" v-model="inputMessage"/>
<button @clicl="sendMessage()">Send</button>
</div>

</template>

<script>
import Ws from '@adonisjs/websocket-client'
const ws = Ws('ws://localhost:3333')
export default{
	name: 'app',

	components:{

	},
	async created(){
ws.connect()
	}, 
	data: () =>({
		ws:null,
		inputMessage:"Hello World"
	}),
	methods:{
		sendMessage: async function() {
			
		},
		receiveMessage: async function(){
		
		}
	
			
		}
	
	
}

</script>
