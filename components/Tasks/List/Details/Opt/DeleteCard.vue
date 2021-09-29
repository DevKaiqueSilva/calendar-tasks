<template>
	<v-menu v-model="menu" offset-y :nudge-width="130" :close-on-content-click="false">
		<template v-slot:activator="{ on, attrs }">
			<v-btn v-bind="attrs" v-on="on" class="my-2 elevation-0"
				small height="33" block	color="rgba(0,0,0,0.2)"
			>
				<v-icon size="20" class="mr-2">mdi-delete</v-icon>Excluir
			</v-btn>
		</template>
		<v-card class="pa-2">
		<v-layout style="color:#424242" class="my-1" align-center justify-space-between>
			<div/>
			Confirma exclusão?
			<v-btn tile @click="menu=false" class="elevation-0"
			color="transparent" fab width="20" height="20"
			>
				<v-icon color="#424242" size="20">mdi-close</v-icon>
			</v-btn>
		</v-layout>
		<v-divider />
		<div class="my-2">
			<v-btn class="white--text" color="red" height="40" block @click="onDelete">EXCLUIR</v-btn>
		</div>
		</v-card>
	</v-menu>
</template>
<script>
export default {
	data() {
		return {
		menu: false,
		};
	},
	methods: {
		onDelete() {
			this.$emit("onDelete");
			this.menu = false;
		},
	},
};
</script>