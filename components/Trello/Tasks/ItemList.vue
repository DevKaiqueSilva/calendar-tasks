<template>
	<v-card color="blue" class="pa-2">
		<v-layout align-center class="font-weight-regular white--text mb-2">
			<v-card flat tile v-if="newTitle==''" color="transparent"
			@click="newTitle=item.title" class="white--text"
			min-width="150px" max-width="200px">
				{{item.title}}
			</v-card>
			<v-text-field v-else outlined class="elevation-0"
			background-color="rgba(255,255,255,0.7)" hide-details
			single-line dense placeholder="Título"
			@keyup.enter="()=>{item.title=newTitle;newTitle='';}"
			v-model="newTitle" @blur="()=>{item.title=newTitle;newTitle='';}"
			/>
			<v-spacer />
			<v-menu  v-model="showMenu" offset-y :nudge-width="130"
			:close-on-content-click="false">
				<template v-slot:activator="{ on, attrs }">
				<v-btn v-bind="attrs" v-on="on" text color="white" class="pa-0" x-small fab>
					<v-icon size="25">mdi-dots-horizontal</v-icon>
				</v-btn>
				</template>
				<v-card class="pa-2">
						<!-- @click="excluirList(item,i)" -->
					<div class="my-2">
						<v-btn class="white--text" color="red" height="40" block>
							EXCLUIR
						</v-btn>
					</div>
				</v-card>
			</v-menu>
		</v-layout>
		<draggable v-model="item.cards" group="card" class="list-group" draggable=".item2">
			<!-- @change="changeCard" -->
			<div class="my-2 item2 list-group-item" style="width:100%"
			v-for="(card,index) in item.cards" :key="index">
				<!-- <CardItem @onDetalhe="onDetalhes(card,index,item,i)" :item="card" /> -->
			</div>
		</draggable>
		<v-btn block text color="white"
		class="mt-2" @click="item.showAddCard=true"
		style="opacity:0.8;font-size:14px"
		>
			<v-icon size="22" class="pr-2">mdi-plus</v-icon>Adicionar cartão
		</v-btn>
	</v-card>
</template>
<script>
import draggable from "vuedraggable";

export default {
	props:{
		item:{
			type: Object,
			required: true
		}
	},
	components:{
		draggable
	},
	data(){
		return{
			newTitle:"",
			showMenu:false,
		}
	}
}
</script>