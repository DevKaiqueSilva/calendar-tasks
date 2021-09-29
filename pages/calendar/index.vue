<template>
    <div>
        <div class="pa-4">
            <Filtros :refCalendar="!!refCalendar?refCalendar:{}" :type="type" :titulo="load==false?refCalendar.title:''"
            @onPrev="$refs.calendar.prev()" @onNext="$refs.calendar.next()" @onChangeType="type=$event"/>
        </div>
		<v-flex xs12 style="height:85vh">
            <v-calendar ref="calendar" v-model="focusDate" color="primary"
            :events="tasks" :event-color="(event)=>{return event.color}"
            :type="type" locale="pt-br"
            @click:event="onDetalhes" @click:more="onDay"
            @click:date="onDay"
            />
            <!-- <v-menu v-model="showItemAgendamento" :close-on-content-click="false"
            :activator="taskTarget" offset-x :nudge-top="-20" >
                <ItemAgendamento :item="details" @onClose="showItemAgendamento=false" @onDetalhes="onDetalhesPed(detalhes)" />
            </v-menu> -->
		</v-flex>
	</div>
</template>

<script>
import Filtros from "@/components/Calendar/Filtros.vue";

export default {
    components:{
        Filtros
    },
    data(){
        return {
            tab:0,
            load:true,
            type:"month",
            focusDate: "",
            details:{},
            taskTarget: null,
            colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
        }
    },
    methods:{
        onDetalhes(){

        },
        onDay({ date }){
            this.focusDate = date;
            this.type = 'day';
        },
        randomNumberInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        },
    },
    computed:{
        tasks(){
            let tasks = [];
            this.$store.state.data.tasks.map(item=>{
                tasks = tasks.concat(item.cards.filter(item2=>{
                    return !!item2.deliveryDate
                }));
            });
            console.log(tasks);
            tasks = tasks.map(item=>({
                name: item.titulo,
                start: new Date(item.createdAt.substring(0,16)),
                end: new Date(item.deliveryDate.substring(0,16)),
                color: this.colors[this.randomNumberInt(0,6)],
                timed:true,
                ...item
            }));
            return tasks
        },
        refCalendar(){
            return this.load==false?this.$refs.calendar:undefined;
        }
    },
    created(){
        setTimeout(() => {
            this.load=false
        }, 100);
    }
}
</script>