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
                    <h1>Dr. {{ this.doctor.user.name }} {{ this.doctor.user.surname }}</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-6 mb-4">
                    <img class="" :src="doctor.image" :alt="doctor.user.name">
                </div>
                <div class="col-6">
                    <div class="mb-3">
                        <strong>Email:</strong> 
                        {{ this.doctor.user.email }}     
                    </div>
                    <div class="mb-3">
                        <strong>Numero di telefono:</strong> 
                        {{ this.doctor.phone }}     
                    </div>
                    <div class="mb-3">
                        <strong>Città:</strong> 
                        {{ this.doctor.city }}     
                    </div>
                    <div class="mb-3">
                        <strong>Indirizzo:</strong> 
                        {{ this.doctor.user.address }}     
                    </div>
                    <div class="mb-3">
                        <strong>Prestazioni:</strong> 
                        {{ this.doctor.services }}     
                    </div>
                    <div class="mb-3">
                        <strong>Curriculum: </strong> 
                        <a :href="`${this.doctor.cv}`" target="_blank">Visualizza Curriculum</a>
                    </div>
                    <div class="container my-5">
                        <div class="row">
                            <div class="col-6">
                                <form action="http://127.0.0.1:8000/messages/create" method="GET">
                                    <input type="hidden" name="slug" :value="this.doctor.slug">
                                    <button class="btn btn-sm btn-success" type="submit"><i class="fa-solid fa-message" style="color: #ffffff;"></i></button>
                                </form>
                            </div>
                            <div class="col-6">
                                <form action="http://127.0.0.1:8000/reviews/create" method="GET">
                                    <input type="hidden" name="slug" :value="this.doctor.slug">
                                    <button class="btn btn-sm btn-success" type="submit"><i class="fa-solid fa-book-open" style="color: #ffffff;"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

img{
    width: 300px
}
</style>