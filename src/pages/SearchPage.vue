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
            specialization: '',
            surname: '',
            city: '',
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
                    surname: this.surname,
                    city: this.city
                }
            }).then((response)=>{
                if(Array.isArray(response.data.response)){
                    this.doctors = response.data.response;
                    console.log(this.doctors);
                }
                else{
                    this.doctors = [];
                    this.doctors.push(response.data.response);
                    console.log(this.doctors);
                }
            })
        },
        getSpecializations(){
            axios.get(`${this.store.baseUrl}/api/specializations`).then((response)=>{
                store.specializations = response.data.response;
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
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12 col-md-6">
                            <label for="specialization">In cosa vuoi sia specializzato il dottore?</label>
                            <select class="form-select" name="specialization" id="specialization" v-model="this.specialization" @change="getDoctors()">
                                <option value="" selected>Niente</option>
                                <option v-for="specialization, key in store.specializations" :value="specialization['slug']">{{specialization['name']}}</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <label for="city">Da che città cerchi il tuo dottore?</label>
                                <div class="input-group">
                                    <input class="form-control" name="city" type="text" v-model="this.city" @keyup.enter="getDoctors()" placeholder="Inserisci il nome di una città, completo o parziale (eg. 'Roma' o 'Ro')">
                                    <button class="btn btn-sm btn-success" type="submit" @click="getDoctors()">Cerca!</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label for="name">Conosci già il tuo dottore?</label>
                                <div class="input-group">
                                    <input class="form-control" name="surname" type="text" v-model="this.surname" @keyup.enter="getDoctors()" placeholder="Inserisci il cognome del dottore, completo o parziale (eg. 'Simone' o 'si')">
                                    <button class="btn btn-sm btn-success" type="submit" @click="getDoctors()">Cerca!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="this.doctors.length != 0" class="container my-5">
                    <div class="row m-2">
                        <DoctorCard v-for="doctor, index in this.doctors" :key="index" :doctor="doctor"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>