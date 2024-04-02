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
                <div class="col-8">
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
        </div>
            <div class="container">
                <div class="row my-5">
                    <div class="col-12 d-flex justify-content-center">
                        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="card" style="width: 100%;" >
                                        <div class="card-body">
                                            <h5 class="card-title">Navigazione semplice e veloce</h5>
                                            <p class="card-text">Ho trovato il sito estremamente facile da usare per trovare un dottore specialista adatto alle mie esigenze. La barra di ricerca intuitiva e la possibilità di filtrare i risultati in base alla specializzazione, alla posizione e alle recensioni dei pazienti hanno reso il processo di selezione rapido e senza stress. Grazie alla struttura chiara e organizzata del sito, ho potuto prenotare una visita con il dottore giusto in pochi minuti. Consiglio vivamente questo sito a chiunque cerchi un modo semplice e conveniente per gestire la propria salute</p>
                                            <p class="card-text"><small class="text-muted">- Nome dell'Autore</small></p>
                                            <div class="d-flex">
                                              <span class="me-2">Voto:</span>
                                                <div class="rating">
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="card" style="width: 100%;" >
                                        <div class="card-body">
                                            <h5 class="card-title">Esperienza utente impeccabile</h5>
                                            <p class="card-text">La mia esperienza con questo sito è stata estremamente positiva grazie alla sua interfaccia utente intuitiva e ben progettata. La possibilità di cercare dottori per specializzazione e posizione ha reso la ricerca molto efficiente, mentre le schede dettagliate dei dottori con informazioni chiare e recensioni dei pazienti mi hanno aiutato a prendere una decisione informata. Inoltre, il processo di prenotazione online è stato rapido e senza intoppi. Grazie a questo sito, ho trovato il dottore perfetto per le mie esigenze in pochi clic.</p>
                                            <p class="card-text"><small class="text-muted">- Nome dell'Autore</small></p>
                                            <div class="d-flex">
                                              <span class="me-2">Voto:</span>
                                                <div class="rating">
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="card" style="width: 100%;" >
                                        <div class="card-body">
                                            <h5 class="card-title">Navigazione intuitiva e personalizzata</h5>
                                            <p class="card-text">Sono rimasto impressionato dalla facilità con cui ho potuto trovare un dottore specialista tramite questo sito. La sua interfaccia utente intuitiva mi ha permesso di cercare e filtrare i risultati in base alle mie esigenze specifiche, garantendomi di trovare rapidamente il dottore più adatto a me. Inoltre, ho apprezzato la funzionalità di salvataggio dei preferiti, che mi ha permesso di tenere traccia dei dottori che mi interessavano di più per confrontarli in seguito. Grazie alla sua navigazione fluida e personalizzata, questo sito si è dimostrato un prezioso strumento nella gestione della mia salute.</p>
                                            <p class="card-text"><small class="text-muted">- Nome dell'Autore</small></p>
                                            <div class="d-flex">
                                              <span class="me-2">Voto:</span>
                                                <div class="rating">
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="card" style="width: 100%;" >
                                        <div class="card-body">
                                            <h5 class="card-title">Interfaccia user-friendly e informativa</h5>
                                            <p class="card-text">Sono rimasto estremamente soddisfatto dell'esperienza di utilizzo di questo sito. La sua interfaccia user-friendly mi ha permesso di navigare facilmente attraverso le varie opzioni di ricerca per trovare il dottore specialista di cui avevo bisogno. Le schede dettagliate dei dottori, complete di informazioni sulla loro formazione, esperienza e recensioni dei pazienti, mi hanno aiutato a prendere una decisione informata. Inoltre, apprezzo la sezione delle domande frequenti e le risorse informative che il sito offre, che mi hanno fornito ulteriori dettagli sui diversi trattamenti e procedure disponibili. Consiglio vivamente questo sito a chiunque cerchi una piattaforma intuitiva e informativa per la ricerca di un dottore specialista.</p>
                                            <p class="card-text"><small class="text-muted">- Nome dell'Autore</small></p>
                                            <div class="d-flex">
                                              <span class="me-2">Voto:</span>
                                                <div class="rating">
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="card" style="width: 100%;" >
                                        <div class="card-body">
                                            <h5 class="card-title">Ricerca rapida e accurata, prenotazione senza sforzo</h5>
                                            <p class="card-text">Ho trovato il processo di ricerca e prenotazione di un dottore tramite questo sito incredibilmente semplice e diretto. La funzionalità di ricerca rapida mi ha permesso di trovare facilmente dottori in base alla loro specializzazione e posizione, mentre i filtri aggiuntivi per valutazioni dei pazienti e disponibilità degli appuntamenti hanno affinato ulteriormente i risultati. Una volta scelto il dottore desiderato, la procedura di prenotazione è stata altrettanto semplice e senza sforzo. In breve, questo sito ha reso il processo di trovare e prenotare un dottore un'esperienza piacevole e priva di stress. Lo consiglio vivamente a chiunque cerchi una soluzione conveniente e efficiente per le proprie esigenze mediche.</p>
                                            <p class="card-text"><small class="text-muted">- Nome dell'Autore</small></p>
                                            <div class="d-flex justify-content-center">
                                              <span class="me-2">Voto:</span>
                                                <div class="rating">
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                    <span class="fa fa-star checked" style="color: #cda434;"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden ">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
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

.carousel-control-prev,
.carousel-control-next {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>