<template>
    <v-snackbar
        top 
        centered
        :color="color"
        :value="visible"
        :timeout="4000"
    >
      {{ text }}
    </v-snackbar>
</template>

<script>
export default {
    watch:{
        visible(){
            if(this.visible==true){
                setTimeout(() => {
                    this.$store.dispatch("data/setSnackbar",{
                        visible:false,
                        text: "",
                        color: ""
                    })
                }, 4000);
            }
        }
    },
    computed:{
        snackbar(){
            if(!!this.$store.getters["data/snackbar"]){
                return this.$store.getters["data/snackbar"];
            }else{
                return {
                    visible:false,
                    text: "",
                    color: ""
                }
            }
        },
        visible(){
            return !!this.snackbar.visible?this.snackbar.visible:false;
        },
        color(){
            return !!this.snackbar.color?this.snackbar.color:"";
        },
        text(){
            return !!this.snackbar.text?this.snackbar.text:"";
        }
    }
}
</script>

<style>

</style>