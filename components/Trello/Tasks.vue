<template>
	<div>
		<v-flex xs12>
			<draggable class="overflow-x-auto" v-model="lists"
			style=" display:flex;" draggable=".item">
			<!-- @change="changeLista" -->
				<v-flex xs12 md4 lg3 v-for="(item,i) in lists" :key="i"
				class="pa-2 item" style="height:fit-content">
					<ItemList :item="item"/>
				</v-flex>
				<AddList :lists="lists" @onAddList="(item)=>lists.push(item)" />
			</draggable>
		</v-flex>
	</div>
</template>

<script>
import draggable from "vuedraggable";
import AddList from "@/components/Trello/Tasks/AddList.vue";
import ItemList from "@/components/Trello/Tasks/ItemList.vue";
export default {
	components:{
		draggable,
		AddList,
		ItemList
	},
	data(){
		return{
			lists:[],
		}
	}
}
</script>