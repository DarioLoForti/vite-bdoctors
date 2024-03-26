<script>
import { store } from '../store.js';
import axios from'axios';

export default {
    name: 'SearchPage',
    components: {

    },
    data(){
        return{
            store,
            doctors: [],
        }
    },
    created(){
        this.getDoctors();
    },
    methods: {
        getDoctors(){
            axios.get(`${this.store.baseUrl}/api/doctors`).then((response)=>{
                this.doctors = response.data.results;
                console.log(this.doctors);
            })
        }
    }
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center my-4">
                    <h1>BDoctors; Be Doctors!</h1>
                </div>
                <div v-for="doctor, index in this.doctors">
                    {{doctor.user.name}}
                    {{doctor.user.surname}}
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>