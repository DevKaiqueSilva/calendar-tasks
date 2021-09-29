<template>
	<div>
		<v-layout align-center class="my-2 mt-3">
			<v-icon size="25" class="mr-1" color="#212121">mdi-checkbox-marked-outline</v-icon>
			<v-text-field :solo="titleEdit==false" style="color:#212121"
				@focus="titleEdit=true" :background-color="titleEdit?'white':'transparent'"
				hide-details :outlined="titleEdit" :flat="titleEdit==false"
				class="subtitle-1 font-weight-medium" ref="titulo" dense
				placeholder="Título" @keyup.enter="$refs.titulo.blur()"
				v-model="item.titulo"
			/>
			<v-spacer />
			<v-btn color="rgba(0,0,0,0.2)" small class="elevation-0" @click="$emit('onDelete')">
				EXCLUIR
			</v-btn>
		</v-layout>
		<v-layout align-center class="my-2 mt-3">
			<span style="opacity:0.7" class="body-2 mx-2">{{completedList(item)}}%</span>
			<v-progress-linear class="ml-2" :value="completedList(item)"></v-progress-linear>
		</v-layout>
		<v-card flat class="px-1 cardCheck" color="transparent">
			<v-layout v-for="(check,i) in item.list" :key="i" align-center class="my-2 mt-3 py-1">
				<v-checkbox class="ma-0 pa-0" hide-details v-model="check.checked"/>
				<div class="ml-2 subtitle-2">{{check.titulo}}</div>
				<v-spacer />
				<a @click="item.list.splice(i, 1)">
					<v-icon size="20">mdi-delete</v-icon>
				</a>
			</v-layout>
		</v-card>
		<div style="margin-left:40px" class="mt-2">
			<FieldEdit 
				v-if="showAddCheck" placeholder="Adicione uma descrição..."
				@onClose="showAddCheck=false" :textEdit="newCheck"
				@textChange="onAddItem" dense
			/>
			<v-btn v-else color="rgba(0,0,0,0.2)" small
			height="35" @click="addItem" class="elevation-0">
				Adicionar um item
			</v-btn>
		</div>
 	 </div>
</template>

<script>
import axios from "axios";
import FieldEdit from "@/components/UI/FieldEdit.vue";
export default {
	props: {
		item:{
			type: Object,
			required: true
		}
	},
	components: {
		FieldEdit,
	},
	data() {
		return {
			newCheck: "",
			titleEdit: false,
			showAddCheck: false,
		};
	},
	methods: {
		onAddItem(v) {
			let obj = {
				titulo: v,
				checked: false,
			};
			this.item.list.push(obj);
			this.showNovoItem = false;
		},
		addItem() {
			this.newCheck = "";
			this.showAddCheck = true;
			setTimeout(() => {
				document.getElementById("fieldLine").focus();
			}, 300);
		},
		completedList(item) {
			if (item.list.length == 0) {
				return 0;
			} else {
				return (
				(item.list.filter((item2) => {
					return item2.checked;
				}).length *100) / item.list.length
				);
			}
		},
	},
};
</script>

<style>
	.cardCheck:hover {
	background-color: rgba(0, 0, 0, 0.1) !important;
	}
</style>