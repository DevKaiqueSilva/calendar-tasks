<template>
	<v-app-bar app fixed color="transparent" height="50" class="elevation-0" style="border-bottom:2px solid #F36933 !important">
		<v-flex lg3>
			<v-btn fab class="small-radius pa-0 elevation-1 mr-3" height="40" width="40" :color="$route.path!='calendar'?'orangeL':'blueL'"
			to="task">
				<v-icon color="white">mdi-clipboard-list-outline</v-icon>
			</v-btn>
			<v-btn fab class="small-radius pa-0 elevation-1" height="40" width="40" :color="$route.path=='calendar'?'orangeL':'blueL'"
			to="calendar">
				<v-icon color="white">mdi-calendar</v-icon>
			</v-btn>
		</v-flex>
		<v-flex lg6>
			<div style="width:200px;height:50px;margin:auto">
				<v-img :src="require('@/assets/logo.png')"  contain/>
			</div>
		</v-flex>
		<v-flex lg3/>
	</v-app-bar>
</template>

<style scoped>
.small-radius{
    border-radius: 5px !important;
}
</style>