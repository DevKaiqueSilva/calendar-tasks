<template>
	<div>
		<v-flex xs12>
			<draggable class="overflow-x-auto" v-model="lists"
			style=" display:flex;" handle=".handle">
			<!-- draggable=".item" handle=".handle" -->
				<v-flex xs12 md4 lg3 xl2 v-for="(item,i) in lists" :key="i"
				class="pa-2 item" style="height:fit-content">
					<ItemList :item="item" @onDelete="lists.splice(i,1)"/>
				</v-flex>
				<AddList :lists="lists" @onAddList="(item)=>lists.push(item)" />
			</draggable>
		</v-flex>
	</div>
</template>

<script>
import draggable from "vuedraggable";
import AddList from "@/components/Tasks/AddList.vue";
import ItemList from "@/components/Tasks/ItemList.vue";
export default {
	components:{
		draggable,
		AddList,
		ItemList
	},
	data(){
		return{
			lists:[{
				title: "TO DO",
				order: 1,
				cards: [],
			}]
		}
	},
	beforeDestroy(){
		this.$store.dispatch("data/setTasks", this.lists);
	}
}
</script>