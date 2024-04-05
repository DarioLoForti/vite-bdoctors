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
            sponsored: [],
            specialization: store.specrequest,
            namestring: '',
            city: '',
            reviewOrder: "DESC",
            ratingOrder: "DESC", 
            success: null,
        }
    },
    created(){
        this.getDoctors();
        this.getSpecializations();
    },
    methods: {
        getDoctors() {
            axios.get(`${this.store.baseUrl}/api/doctors`, {
    params: {
        specialization: this.specialization,
        namestring: this.namestring.split(" ").join(""),
        city: this.city,
        reviewOrder: this.reviewOrder,
        ratingOrder: this.ratingOrder,
    }
}).then((response) => {
    if (response.data.success) {
        this.success = true;
        this.doctors = response.data.doctors;
        this.sponsored = response.data.sponsored;

        // Aggiungi i medici non sponsorizzati ai risultati
        let nonSponsoredDoctors = this.doctors.filter(doctor => !this.sponsored.some(sponsoredDoctor => sponsoredDoctor.id === doctor.id));

        // Unisci i medici sponsorizzati e non sponsorizzati senza duplicati
        this.doctors = this.sponsored.concat(nonSponsoredDoctors);
    } else {
        this.success = false;
    }
}).catch((error) => {
    console.error("Error fetching doctors:", error);
});
    },
        getSpecializations(){
            if(store.specializations = []){
                axios.get(`${this.store.baseUrl}/api/specializations`).then((response)=>{
                    store.specializations = response.data.response;
                })
            }
        },
    }
}
</script>
<template lang="">
    <div class="bg-green">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center my-4">
                    <h1 class="title-color mt-4 ">Cerca il tuo medico</h1>
                </div>
        <div class="row row-ricerca">
            <div class="form-group mb-3">
                <div class="dropdown mb-2">
                    <a class="btn btn-ricerca dropdown-toggle " href="#search_filter" role="button"
                        data-bs-toggle="collapse" aria-controls="search_filter" aria-expanded="true">
                        Ricerca e Filtraggio
                    </a>
                </div>
                <div id="search_filter" class="collapse multi-collapse m-1">
                    <div class="row align-items-center">
                        <div class="col-12 my-3">
                            <div class="btn" @click="this.reviewOrder == 'DESC' ? this.reviewOrder = 'ASC' : this.reviewOrder = 'DESC'; getDoctors()" :class="this.reviewOrder == 'DESC' ? 'btn-white' : 'btn-danger'">
                                Recensioni:
                                <span v-if="this.reviewOrder == 'DESC'">
                                    <i class="fa-solid fa-arrow-down" style="color: #285a8c;"></i>
                                </span>
                                <span v-else>
                                    <i class="fa-solid fa-arrow-up" style="color: #ffffff;"></i>
                                </span>
                            </div>
                            <div class="btn mx-1" @click="this.ratingOrder == 'DESC' ? this.ratingOrder = 'ASC' : this.ratingOrder = 'DESC'; getDoctors()" :class="this.ratingOrder == 'DESC' ? 'btn-white' : 'btn-danger'">
                                Media Voti:
                                <span v-if="this.ratingOrder == 'DESC'">
                                    <i class="fa-solid fa-arrow-down" style="color: #285a8c;"></i>
                                </span>
                                <span v-else>
                                    <i class="fa-solid fa-arrow-up" style="color: #ffffff;"></i>
                                </span>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <label class="ms-1 mb-2 text-white fs-5" for="specialization">In cosa vuoi sia specializzato il dottore?</label>
                            <select class="form-select" name="specialization" id="specialization" v-model="this.specialization" @change="getDoctors()">
                                <option value="" selected>Scegli la Specializzazione</option>
                                <option v-for="specialization, key in store.specializations" :value="specialization['slug']">{{specialization['name']}}</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="form-group">
                                <label for="city" class="ms-1 mb-2 text-white fs-5">In che città cerchi il tuo dottore?</label>
                                <div class="input-group">
                                    <input class="form-control" name="city" type="text" v-model="this.city" @keyup.enter="getDoctors()" placeholder="Inserisci il nome di una città, completo o parziale (eg. 'Roma' o 'Ro')">
                                    <button class="btn btn-sm btn-cerca" type="submit" @click="getDoctors()">Cerca!</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="form-group">
                                <label for="name" class="ms-1 mb-2 text-white fs-5">Conosci già il tuo dottore?</label>
                                <div class="input-group">
                                    <input class="form-control" name="namestring" type="text" v-model="this.namestring" @keyup.enter="getDoctors()" placeholder="Inserisci il cognome del dottore, completo o parziale (eg. 'Simone' o 'Si')">
                                    <button class="btn btn-sm btn-cerca" type="submit" @click="getDoctors()">Cerca!</button>
                                </div>
                            </div>
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
    background-color: #285a8c;
    color: white;
    border: 2px solid #285a8c;
    &:hover{
        color: white;
        background-color: rgb(24, 69, 114);
    }
}
.bg-green{
    // background-color: #66cc99;
    background-image: linear-gradient(to bottom, #66cc99, #a3efc9);
}
.title-color{
    color: white;
}

.btn-ricerca{
    color: white;
    background-color: #285a8c;
    &:hover{
        color: white;
        background-color: rgb(24, 69, 114);
    }
}

.btn-white{
    background-color: white;
    color: #285a8c;
    &:hover{
        color: #285a8c;
        background-color: rgb(227, 227, 227);
    }
}
    
</style>