<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'DoctorPage',
    components: {

    },
    data(){
        return{
            store,
            doctor: null,
        }
    },
    created(){
        this.getDoctor();
    },
    methods: {
        getDoctor(){
            axios.get(`${this.store.baseUrl}/api/doctor/${this.$route.params.slug}`).then((response)=>{
                this.doctor = response.data.response;
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
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    Dr. {{ this.doctor.user.name }} {{ this.doctor.user.surname }}
                </div>
            </div>
        </div>
    </div>
    
</template>
<style lang="">
    
</style>