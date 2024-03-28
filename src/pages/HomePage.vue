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
        }
    },
    created(){
        this.getSpecializations();
    },
    methods: {
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
    <main>
        <div class="jumbotron d-none d-md-block">
            <div class="my-container d-flex justify-content-between">

                <img class='ms-5' src="../../public/doctor-2.png" alt="">
                <div>
                    <h1 class="fs-1 my-text">Il tuo dottore a portata di un Click!</h1>
                    <p class=" text-light fs-5">Filtra le tue ricerche per città e/o specializzazioni. <br>
                        Leggi le recensioni, osserva i profili e scegli il meglio per te!
                    </p>
                    <h2 class=" text-light text-center  mt-5">Sei un Medico?</h2>
                    <div class="d-flex justify-content-around mt-5">
                        <a class="btn btn-color-blu mt-4" href="http://127.0.0.1:8000/login">Login</a>
                        <a class="btn btn-color-blu mt-4" href="http://127.0.0.1:8000/register" > Registrati</a>
                    </div>
                </div>
                <img class='me-5' src="../../public/doctor-1.png" alt="">
            </div>
        </div>
        <div class="jumbotron d-md-none">
            <div class="container d-flex text-center flex-column py-5">
                    <h1 class="fs-1 my-text">Il tuo dottore a portata di un Click!</h1>
                    <p class=" text-light fs-5">Filtra le tue ricerche per città e/o specializzazioni. <br>
                        Leggi le recensioni, osserva i profili e scegli il meglio per te!
                    </p>
                </div>   
        </div>
        <div class="container">
            <div class="row my-5">
                <div class="col-12">
                    <div class="bg-grey p-3">
                        <h3>Le specializzazioni più richieste:</h3>
                        <ul class="list-unstyled d-flex flex-wrap">
                            <li v-for="specialization, index in store.specializations" class="me-2"> 
                                <span class="my-text">
                                    <router-link class="text-decoration-none" :to="{name: 'search'}" @click="store.specrequest = specialization.slug; console.log(store.specrequest);">
                                        {{specialization.name}}
                                    </router-link>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-5">
            <div class="row my-5">
                <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-3">
                    <h3>Cerca i dottori per città</h3>
                    <span>Scegli tra oltre 200 000 medici di medicina generale e specialisti. Leggi le recensioni di altri pazienti.</span>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-3">
                    <h3>Prenota le tue visite direttamente dal portale</h3>
                    <span>Scegli la data che preferisci, inserisci i tuoi dati e conferma… la visita è prenotata! Non comporta costi aggiuntivi.</span>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-3">
                    <h3>Prescrizioni mediche</h3>
                    <span>Richiedi prescrizioni e condividi i risultati di test ed analisi con il tuo medico di medicina generale.</span>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-3">
                    <h3>Ricorda i tuoi appuntamenti tramite SMS</h3>
                    <span>Ricorderai sempre le tue visite future! Ti ricorderemo della tua visita tramite email e sms.</span>
                </div>
            </div>
            <div class="row my-5 bg-sponsor">
                <div class="col-12 col-md-5">
                    <img src="../../public/doctor-3.png" alt="" class="img-fluid">
                </div>
                <div class="col-12 col-md-7 mt-md-5 mt-3">
                    <h2>Sei un professionista nel settore?</h2>
                    <h3>Crea il tuo profilo e raggiungi i pazienti nella tua città.</h3>
                    <ul>
                        <li>Ricevi messaggi diretti dai tuoi pazienti</li>
                        <li>Prenotazione visite h24 7/7</li>
                        <li>Crescita professionale con sistema di recensioni</li>
                    </ul>
                    <div class="text-center pb-5">
                        <button class="btn btn-sm btn-color mt-3 fs-5">Scopri i profili business!</button>

                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

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

    .bg-sponsor{
        background-color:  #66cc99;
    }

    .bg-grey{
        background-color: #f7f9fa;
    }

    .btn-color{
        
        background-color: #66cc99;
        color:  white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); 
        &:hover{

            background-color: white;
            color:  #66cc99;
        }
    }

    .btn-color-blu{
    
        background-color: #285a8c;
        color:  white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); 
        &:hover{

            background-color: white;
            color:  #285a8c;
        }
    }
</style>