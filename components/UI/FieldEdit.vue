<template>
  	<div @blur="onBlur">
		<v-textarea
		v-if="tipo=='textarea'"
		rows="3"
		ref="fieldArea"
		@blur="onBlur"
		id="fieldArea"
		@focus="focused=true"
		:placeholder="placeholder"
		:outlined="focused"
		:solo="focused==false"
		:flat="focused==false"
		:background-color="focused==false?'rgba(0,0,0,0.2)':'white'"
		v-model="text"
		hide-details
		/>
		<v-text-field
		v-else
		ref="fieldLine"
		id="fieldLine"
		@blur="onBlur"
		:dense="dense"
		@focus="focused=true"
		:placeholder="placeholder"
		:outlined="focused"
		:solo="focused==false"
		:flat="focused==false"
		:background-color="focused==false?'rgba(0,0,0,0.2)':'white'"
		v-model="text"
		hide-details
		/>
		<v-layout class="mt-2" align-center v-if="focused">
			<v-btn color="green" height="35" class="white--text" @click="onSave">SALVAR</v-btn>
			<v-btn height="30" text color="#212121" @click="onClose">
				<v-icon size="25">mdi-close</v-icon>
			</v-btn>
		</v-layout>
	</div>
</template>

<script>
export default {
	props: {
		placeholder:{
			type: String, 
			default: ""
		},
		tipo:{
			type: String,
			default: ""
		},
		tipo:{
			type: String,
			default: ""
		},
		dense:{
			type: Boolean,
			default:false
		}
	},
	data() {
		return {
			text: "",
			textTemp: "",
			focused: false,
		};
	},
	methods: {
		onBlur() {
			setTimeout(() => {
				this.focused = false;
				this.$emit("onClose");
			}, 200);
		},
		onClose() {
			this.focused = false;
			this.$emit("onClose");
		},
		onSave() {
			this.$emit("textChange", this.text);
			this.focused = false;
		},
	},
	created() {
		this.text = this.textEdit;
	},
	watch: {
		focused() {
			if (this.focused == true && this.textTemp != "") {
				this.text = this.textTemp;
			} else if (this.focused == true) {
				this.text = this.textEdit;
			}
			if (this.focused == false) {
				this.textTemp = this.text;
				setTimeout(() => {
					this.text = this.textEdit;
				}, 100);
			}
		},
	},
};
</script>
