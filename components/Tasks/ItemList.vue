<template>
	<v-card color="blue" class="pa-2">
		<v-layout align-center class="font-weight-regular white--text mb-2">
			<v-flex class="handle">
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
			</v-flex>
			<v-spacer />
			<v-menu  v-model="showMenu" offset-y :nudge-width="130"
			:close-on-content-click="false">
				<template v-slot:activator="{ on, attrs }">
				<v-btn v-bind="attrs" v-on="on" text color="white" class="pa-0" x-small fab>
					<v-icon size="25">mdi-dots-horizontal</v-icon>
				</v-btn>
				</template>
				<v-card class="px-2 py-2">
					<div class="text-center"><b>Ações da lista</b></div>
					<v-divider></v-divider>
					<v-btn color="red" height="height" class="mt-2" small text block @click="onDelete">
						<v-icon class="mr-1">mdi-delete</v-icon>EXCLUIR
					</v-btn>
				</v-card>
			</v-menu>
		</v-layout>
		<draggable v-model="item.cards" group="card" class="list-group" draggable=".item2">
			<div class="my-2 item2 list-group-item" style="width:100%"
			v-for="(card,index) in item.cards" :key="index">
				<ItemCard :item="card" :list="item" @onDeleteCard="item.cards.splice(index, 1)" />
			</div>
		</draggable>
		<AddCard
			@onAddCard="item.cards.push($event)"
			:cards="item.cards"
			@onClose="showAddCard=false"
			v-if="showAddCard==true"
		/>
		<v-btn block text color="white"
		class="mt-2" @click="showAddCard=true"
		style="opacity:0.8;font-size:14px">
			<v-icon size="22" class="pr-2">mdi-plus</v-icon>Adicionar cartão
		</v-btn>
	</v-card>
</template>
<script>
import draggable from "vuedraggable";
import AddCard from "@/components/Tasks/List/AddCard.vue";
import ItemCard from "@/components/Tasks/List/ItemCard.vue";

export default {
	props:{
		item:{
			type: Object,
			required: true
		}
	},
	components:{
		draggable,
		AddCard,
		ItemCard
	},
	data(){
		return{
			newTitle: "",
			showMenu: false,
			showAddCard: false
		}
	},
	methods:{
		onDelete(){
			this.$store.dispatch("data/setConfirmMessage",{
				visible:true,
				message: "Confirma?",
				lblNo: "NÃO",
				lblYes: "SIM",
				onNo: ()=>{
					this.$store.dispatch("data/setConfirmMessage",{visible:false});
				},
				onYes: ()=>{
					this.$emit("onDelete");
				}
			});
		}
	}
}
</script>