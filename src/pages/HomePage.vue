<script>
import { store } from '../store.js';
import axios from'axios';

export default {
    name: 'HomePage',
    components: {

    },
    data(){
        return{
            store,
            doctors: [],
            specializations: []
        }
    },
    created(){
        this.getDoctors();
        this.getSpecializations();
    },
    methods: {
        getDoctors(){
            axios.get(`${this.store.baseUrl}/api/doctors`).then((response)=>{
                this.doctors = response.data.results;

            })
        },
        getSpecializations(){
            axios.get(`${this.store.baseUrl}/api/specializations`).then((response)=>{
                this.specializations = response.data.response;

            })
        }
    }
}
</script>
<template lang="">
    <main>
        <div class="jumbotron">
            <div class="my-container d-flex justify-content-between">

                <img class='ms-5' src="../../public/doctor-2.png" alt="">
                <div>
                    <h1 class="fs-1 my-text">Il tuo dottore a portata di un Click!</h1>
                    <p class=" text-light fs-5">Filtra le tue ricerche per città e/o specializzazioni. <br>
                        Leggi le recensioni, osserva i profili e scegli il meglio per te!
                    </p>
                </div>
                <img class='me-5' src="../../public/doctor-1.png" alt="">
            </div>
        </div>
        <div class="container">
            <div class="row my-5">
                <div class="col-12">
                    <h2>I dottori</h2>
                </div>
                <div class="col-4 my-3" v-for="doctor, index in this.doctors">
                    <div class="card">
                        <img class="my-img" :src="doctor.image" :alt="doctor.user.name">
                        <div class="card-body">
                            <h3>
                                {{doctor.user.name}}
                                {{doctor.user.surname}}
                            </h3>
                            <p>{{doctor.city}}</p>
                            <!-- <p>Specializzazioni: {{specialization.name}}</p> -->
                        </div>
                    </div>
                </div>
            </div>
            <hr class="my-5">
            <div class="row my-5">
                <div class="col-3">
                    <h3>Cerca i dottori per città</h3>
                    <span>Scegli tra oltre 200 000 medici di medicina generale e specialisti. Leggi le recensioni di altri pazienti.</span>
                </div>
                <div class="col-3">
                    <h3>Prenota le tue visite direttamente dal portale</h3>
                    <span>Scegli la data che preferisci, inserisci i tuoi dati e conferma… la visita è prenotata! Non comporta costi aggiuntivi.</span>
                </div>
                <div class="col-3">
                    <h3>Prescrizioni mediche</h3>
                    <span>Richiedi prescrizioni e condividi i risultati di test ed analisi con il tuo medico di medicina generale.</span>
                </div>
                <div class="col-3">
                    <h3>Ricorda i tuoi appuntamenti tramite SMS</h3>
                    <span>Ricorderai sempre le tue visite future! Ti ricorderemo della tua visita tramite email e sms.</span>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss">
    .jumbotron{
        background-color: #66cc99;

        .my-container{
            max-width: 80%;
            margin: 0 auto;
            padding-top: 50px;
        }
    }

    .my-text{
        color: #285a8c;
    }

    .my-img{
        width: 100%;
        max-height: 250px
    }
</style>