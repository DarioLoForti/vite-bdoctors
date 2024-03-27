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
            specializations: []
        }
    },
    created(){
        this.getSpecializations();
    },
    methods: {
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
        <div class="jumbotron d-none d-md-block">
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
                <div class="col-12 col-md-4">
                    <img class="me-5" src="../../public/doctor-4.png" alt="">
                </div>
            </div>
            <div class="row my-5">
                <div class="col-12">
                    <div class="bg-grey p-3">
                        <h3>Le specializzazioni più richieste:</h3>
                        <ul class="list-unstyled d-flex flex-wrap">
                            <li v-for="specialization, index in specializations" class="me-2"> {{specialization.name}} </li>
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
                                <button class="btn btn-sm btn-color mt-3 fs-5">Scopri i profili business</button>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="container">
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
                <div class="row my-5">
                    <div id="carouselExampleDark" class="carousel carousel-dark slide">
                        <div class="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                          <div class="carousel-item active d-flex justify-content-center" >
                            <div class="card my-5" style="width: 18rem;">
                                <div class="card-body">
                                  <h5 class="card-title">1</h5>
                                  <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="#" class="card-link">Card link</a>
                                  <a href="#" class="card-link">Another link</a>
                                </div>
                              </div>
                            <div class="carousel-caption d-none d-md-block">

                            </div>
                          </div>
                          <div class="carousel-item d-flex justify-content-center">
                            <div class="card my-5" style="width: 18rem;">
                                <div class="card-body">
                                  <h5 class="card-title">2</h5>
                                  <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="#" class="card-link">Card link</a>
                                  <a href="#" class="card-link">Another link</a>
                                </div>
                              </div>
                            <div class="carousel-caption d-none d-md-block">
                              
                            </div>
                          </div>
                          <div class="carousel-item d-flex justify-content-center">
                            <div class="card my-5" style="width: 18rem;">
                                <div class="card-body">
                                  <h5 class="card-title">3</h5>
                                  <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="#" class="card-link">Card link</a>
                                  <a href="#" class="card-link">Another link</a>
                                </div>
                              </div>
                            <div class="carousel-caption d-none d-md-block">
                              
                            </div>
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
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