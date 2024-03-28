<script>
import DoctorCard from '../components/DoctorCard.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'SearchPage',
    components: {
        DoctorCard,
    },
    data(){
        return{
            store,
            doctors: [],
            specialization: store.specrequest,
            namestring: '',
            city: '',
            success: null,
        }
    },
    created(){
        this.getDoctors();
        this.getSpecializations();
    },
    methods: {
        getDoctors(){
            axios.get(`${this.store.baseUrl}/api/doctors`,
            {
                params:{
                    specialization: this.specialization,
                    namestring: this.namestring.split(" ").join(""),
                    city: this.city
                }
            }).then((response)=>{
                if(response.data.success){
                    this.success = true;
                    this.doctors = [];
                    this.doctors = response.data.response;
                }
                else{
                    this.success = false;
                }
            })
        },
        getSpecializations(){
            if(store.specializations = []){
                axios.get(`${this.store.baseUrl}/api/specializations`).then((response)=>{
                    store.specializations = response.data.response;
                })
            }
        }
    }
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center my-4">
                    <h1>Cerca il tuo medico</h1>
                </div>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12 col-md-4">
                            <label class="ms-1 mb-2" for="specialization">In cosa vuoi sia specializzato il dottore?</label>
                            <select class="form-select" name="specialization" id="specialization" v-model="this.specialization" @change="getDoctors()">
                                <option value="">Niente</option>
                                <option v-for="specialization, key in store.specializations" :value="specialization['slug']">{{specialization['name']}}</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="form-group">
                                <label for="city" class="ms-1 mb-2">Da che città cerchi il tuo dottore?</label>
                                <div class="input-group">
                                    <input class="form-control" name="city" type="text" v-model="this.city" @keyup.enter="getDoctors()" placeholder="Inserisci il nome di una città, completo o parziale (eg. 'Roma' o 'Ro')">
                                    <button class="btn btn-sm btn-cerca" type="submit" @click="getDoctors()">Cerca!</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="form-group">
                                <label for="name" class="ms-1 mb-2">Conosci già il tuo dottore?</label>
                                <div class="input-group">
                                    <input class="form-control" name="namestring" type="text" v-model="this.namestring" @keyup.enter="getDoctors()" placeholder="Inserisci il cognome del dottore, completo o parziale (eg. 'Simone' o 'Si')">
                                    <button class="btn btn-sm btn-cerca" type="submit" @click="getDoctors()">Cerca!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="this.doctors.length != 0 && this.success" class="container my-5">
                    <div class="row g-2">
                        <DoctorCard v-for="doctor, index in this.doctors" :key="index" :doctor="doctor"/>
                    </div>
                </div>
                <div v-else class="my-5">
                    Nessun medico trovato che soddisfi la ricerca.
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.btn-cerca{
    background-color: #66cc99;
    color: white;
}
    
</style>