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
        },
        scrollLeft() {
            const container = this.$el.querySelector('.my-card-col');
            container.scrollLeft -= 300; 
        },
        scrollRight() {
            const container = this.$el.querySelector('.my-card-col');
            container.scrollLeft += 300;
        },
        stars(vote){
            const numStars = (vote).toFixed(0);
            return '★'.repeat(numStars) + '☆'.repeat(5 - numStars);
        },
    }
}
</script>
<template lang="">
    <main>
        <div class="jumbotron d-none d-md-block">
            <div class="my-container d-flex justify-content-between">
                <img class='image' src="../../public/doctor-7.png" alt="" >
                    <div class="pt-5">
                        <h1 class="fs-1 my-text">Il tuo dottore a portata di un Click!</h1>
                        <p class=" text-light fs-5">Filtra le tue ricerche per città e/o specializzazioni. <br>
                            Leggi le recensioni, osserva i profili e scegli il meglio per te!
                        </p>
                    </div>
                <img class='image' width: src="../../public/doctor-6.png" alt="" style="height: 50%">
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
                <div class="col-12 col-md-8">
                    <div class="ms-5">
                        <h2>Sei un Medico o un Centro medico?</h2>
                        <p>Iscriviti e raggiungi nuovi pazienti</p>
                        <p>Più di 2 milioni di pazienti cercano ogni mese il loro Medico su BDoctors,<br> il <strong>primo sito in Italia</strong> per visitatori e numero di prenotazioni.</p>
                        <p>Con BDoctors:</p>
                        <ul>
                            <li>Ricevi prenotazioni da nuovi pazienti</li>
                            <li>Migliori la tua visibilità e la tua reputazione online</li>
                            <li>Organizzi al meglio il tuo lavoro con una suite completa di strumenti dedicati</li>
                            <li>Puoi usare la nostra App multipiattaforma dedicata</li>
                            <li>Hai il nostro staff sempre disponibile ad aiutarti</li>
                        </ul>
                            <div class="d-flex justify-content-start mt-3">
                                <a class="btn btn-color-blu m-4" href="http://127.0.0.1:8000/login">Login</a>
                                <a class="btn btn-color-blu m-4" href="http://127.0.0.1:8000/register" > Registrati</a>
                            </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 d-none d-md-block">
                    <img class="me-5" src="../../public/doctor-4.png" alt="">
                </div>
            </div>

            <div class="row my-5">
                <div class="col-12">
                    <div class="bg-grey p-3">
                        <h3>Le specializzazioni più richieste:</h3>
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-sm-6" v-for="(specialization, index) in store.specializations" :key="index">
                                <span class="my-text">
                                    <router-link class="text-decoration-none" :to="{name: 'search'}" @click="store.specrequest = specialization.slug; console.log(store.specrequest);">
                                        {{ specialization.name }}
                                    </router-link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        </div>
        <div class="containar-fluid">
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
        <div class="container  rel">
            <div class="row my-5">
                <div class="col-12 col-md-8">
                    <div class="ms-5">
                        <h2>Dicono di noi</h2>
                        <p>Oltre il 99% di pazienti soddisfatti</p>
                        <p>BDoctors è il primo sito in Italia di prenotazioni di visite mediche ed esami diagnostici</p>
                        <p>Crediamo nell'importanza dell'informazione e della trasparenza per aiutare i pazienti a scegliere il medico giusto.</p>
                        <p>Per questo su BDoctors, solo i pazienti che hanno prenotato attraverso il sito e svolto la prestazione possono rilasciare un feedback sul medico: una garanzia sull'affidabilità..</p>
                    </div>
                </div>
                <div class="col-12 col-md-4 ">
                    <img src="../../public/gruppo.png" alt="" class="img-fluid me-5">
                </div>
            </div>
        </div>
            <div class="container">
                <div class="row my-5">
                    <div class="my-card-col">
                        <div class="my-card my-2 px-2" v-for="reviews, index in store.review" :key="index">      
                            <div class="flip-card my-4" >
                                <div class="flip-card-inner">
                                    <div class="flip-card-front mx-3">
                                        <h5> {{ reviews.titolo }}</h5>
                                        <p> {{ reviews.testo }}</p>
                                        <h6> {{ reviews.autore }}</h6>
                                        <div class="voto"> 
                                            <h6>Voto: <span class="stars">{{ stars(reviews.voto) }}</span></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <button @click="scrollLeft" class="scroll-button-left"><i class="fa-solid fa-circle-arrow-left"></i></button>
                        <button @click="scrollRight" class="scroll-button-right"><i class="fa-solid fa-circle-arrow-right"></i></button>
                    </div>
                </div>
            </div>
    </main>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
main{
    position: relative;
}
    .jumbotron{
        background-color: #66cc99;

        .my-container{
            max-width: 80%;
            margin: 0 auto;
            padding-top: 50px;
        }
        .image{
            width: 25%;
            
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

.my-card-col {
    display: flex;
    overflow-x: hidden;
    white-space: nowrap;
    
}
.my-card{
    flex: 0 0 auto;
    width: 500px;
    margin-right: 10px;
    overflow-y: hidden;
    max-height: 600px; 
    
   }
   .stars{
    color: gold;
   }
   
   .flip-card {
    background-color: transparent;
    width: 100%;
    max-height: 400px;
    perspective: 1000px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }


 
  .flip-card-inner {
   
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    flex: 1; 
    display: flex; 
    flex-direction: column;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  .flip-card-inner::-webkit-scrollbar {
    display: none; 
}

 
  .flip-card-front, .flip-card-back {
   
    width: 90%;
    height: 100%;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: white;
    color: black;
    overflow-x: hidden;
    overflow-y: hiddenl; 
    white-space: pre-line;
  }

  .scroll-button-left {
    position: absolute;
    bottom: 7%;
    left: 10%;
    background-color: #66cc99;
    border: 1px solid black;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    z-index: 2;
}
.scroll-button-right {
    position: absolute;
    bottom: 7%;
    right: 10%;
    background-color: #66cc99;
    border: 1px solid black;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    z-index: 2;
}

</style>