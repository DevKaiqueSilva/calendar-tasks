<template>
	<v-menu v-model="menu" offset-y :nudge-width="130" :close-on-content-click="false">
		<template v-slot:activator="{ on, attrs }">
		<v-btn v-bind="attrs" v-on="on" class="my-2 elevation-0"
			small height="33" block color="rgba(0,0,0,0.2)"
		>
			<v-icon size="20" class="mr-2">mdi-calendar</v-icon>Data Entrega
		</v-btn>
		</template>
		<v-card class="pa-2">
		<v-layout style="color:#424242" class="my-1" align-center justify-space-between>
			<div/>
			Data de Entrega
			<v-btn tile @click="menu=false" class="elevation-0"
			color="transparent" fab width="20" height="20"
			>
				<v-icon color="#424242" size="20">mdi-close</v-icon>
			</v-btn>
		</v-layout>
		<v-divider />
			<v-form ref="entregaValid" class="my-2">
				<v-layout>
					<v-flex xs6 class="pr-1">
					<span>Data</span>
					<DatePickerMenu
						:date="date"
						@resetarDate="date = $event"
						outlined
						dense
						placeholder="Data Entrega"
						:rules="[rules.required,rules.date]"
						backgroundColor="white"
						validate-on-blur
					/>
					</v-flex>
					<v-flex xs6 class="pl-1">
					<span>Hora</span>
					<TimePickerMenu
						:time="hour"
						dense
						@resetTime="hour = $event"
						outlined
						placeholder="Hora Entrega"
						:rules="[rules.required,rules.hour]"
						backgroundColor="white"
						validate-on-blur
					/>
					</v-flex>
				</v-layout>
			</v-form>
			<v-layout justify-end align-center>
				<v-btn text small color="red" height="35" @click="menu=false">CANCELAR</v-btn>
				<v-btn class="white--text" color="green" height="35" small @click="onAddDate">ADICIONAR</v-btn>
			</v-layout>
		</v-card>
	</v-menu>
</template>
<script>
import DatePickerMenu from "@/components/UI/DatePickerMenu.vue";
import TimePickerMenu from "@/components/UI/TimePickerMenu.vue";
import moment from "moment";

export default {
	components: {
		DatePickerMenu,
		TimePickerMenu,
	},
	data() {
		return {
			menu: false,
			date: "",
			hour: "",
			rules: {
				required: (v) => !!v || "Preencha o campo",
				date: (v) => v.length == 10 || "Data fora do padrão",
				hour: (v) => v.length == 5 || "Hora fora do padrão",
			},
		};
	},
	methods: {
		onAddDate() {
			let obj = this.date + " " + this.hour;
			console.log(obj);
			this.$emit("onAddDate", obj);
			this.menu = false;
		},
	},
	watch: {
		menu() {
			if (this.menu == false) {
			} else {
				if(!!this.date==false)
					this.date = moment().format().substring(0,10);
				if(!!this.hour==false)
					this.hour = moment().format().substring(11,16);
			}
		},
	},
};
</script>