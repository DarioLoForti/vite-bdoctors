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
        },
        scrollLeft() {
            const container = this.$el.querySelector('.my-card-col');
            if (container.scrollLeft === 0) {
                
                container.scrollLeft = container.scrollWidth - container.clientWidth;
            } else {
                container.scrollLeft -= 442;
            }
        },

        scrollRight() {
            const container = this.$el.querySelector('.my-card-col');
            const scrollAmount = 100; // Imposta la quantità di scorrimento

            if ('ontouchstart' in window || navigator.maxTouchPoints) {
                // Se il dispositivo supporta il touch
                container.scrollLeft += scrollAmount; // Incrementa il valore di scorrimento
            } else {
                // Altrimenti, usa la logica esistente per il desktop
                if (container.scrollLeft + container.clientWidth === container.scrollWidth) {
                    container.scrollLeft = 0;
                } else {
                    container.scrollLeft += 447;
                }
            }
        },
        stars(vote){
            const numStars = (vote).toFixed(0);
            return '★'.repeat(numStars) + '☆'.repeat(5 - numStars);
        },
        
    }
}
</script>
<template lang="">
    <div class=" container-fluid bg-green py-3  ">
        <div class="container raised-effect borderadius mt-5 ">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center my-4">
                        <h1 class="title-color testo-bianco">Dr. {{ this.doctor.user.name }} {{ this.doctor.user.surname }}</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 mb-4 ">
                        <div class="d-flex justify-content-center align-items-center">
                            <div class="image-container raised-effect  justify-content-center">
                                <img :src="doctor.image" :alt="doctor.user.name">
                            </div>
                        </div>

                        <div class="col-12 mt-3 text-center">
    
                            <label class="form-label mt-3 testo-bianco " for="rating">Vuoi dare un voto a Dr. {{this.doctor.user.surname}}?</label>
                            <form action="http://127.0.0.1:8000/ratings/create" method="GET">
                                <div class="rating">
                                    <input type="hidden" name="doctor_id" :value="this.doctor.id">
                                    <input type="radio" id="star5" name="rating" value="5" />
                                    <label for="star5" title="5 stelle">&#9733;</label>
                                    <input type="radio" id="star4" name="rating" value="4" />
                                    <label for="star4" title="4 stelle">&#9733;</label>
                                    <input type="radio" id="star3" name="rating" value="3" />
                                    <label for="star3" title="3 stelle">&#9733;</label>
                                    <input type="radio" id="star2" name="rating" value="2" />
                                    <label for="star2" title="2 stelle">&#9733;</label>
                                    <input type="radio" id="star1" name="rating" value="1" />
                                    <label for="star1" title="1 stella">&#9733;</label>
                                </div>
                                <div class="d-flex justify-content-center mt-2">
                                    <button class="btn btn-sm btn-cerca" type="submit">Vota!</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mt-5 mt-md-3">
                        <div class="mb-3 d-flex justify-content-between justify-content-md-between  align-items-center testo-bianco">
                            <strong>Email:</strong> 
                            {{ this.doctor.user.email }}     
                        </div>
                        <hr class="d-md-none">
                        <div class="mb-3 d-flex justify-content-between justify-content-md-between align-items-center testo-bianco">
                            <strong>Numero di telefono:</strong> 
                            {{ this.doctor.phone }}     
                        </div>
                        <hr class="d-md-none">
                        <div class="mb-3 d-flex justify-content-between justify-content-md-between align-items-center testo-bianco">
                            <strong>Città:</strong> 
                            {{ this.doctor.city }}     
                        </div>
                        <hr class="d-md-none">
                        <div class="mb-3 d-flex justify-content-between justify-content-md-between align-items-center testo-bianco">
                            <strong>Indirizzo:</strong> 
                            {{ this.doctor.user.address }}     
                        </div>
                        <hr class="d-md-none">
                        <div class="mb-3 d-flex justify-content-between justify-content-md-between align-items-center testo-bianco">
                            <strong>Curriculum: </strong> 
                            <a class="btn btn-sm btn-cerca" :href="`${this.store.baseUrl}/storage/${ this.doctor.cv }`" target="_blank"><i class="fa-solid fa-eye" ></i></a>  
                        </div>
                        <hr class="d-md-none">
                        <div class="container my-3 my-md-5">
                            <div class="row">
                                <div class="col-6 d-flex justify-content-center">
                                    <h6 class="mt-1 d-none d-md-block ">Prenota un appuntamento</h6>
                                    <form action="http://127.0.0.1:8000/messages/create" method="GET" class="posizione-button">
                                        <input type="hidden" name="doctor_id" :value="this.doctor.id">
                                        <button class="btn btn-sm btn-cerca ms-3" type="submit"><i class="fa-solid fa-message " ></i></button>
                                    </form>
                                </div>
                                <div class="col-6 d-flex justify-content-center">
                                    <h6 class="mt-1 d-none d-md-block">Lascia una recenzione</h6>
                                    <form action="http://127.0.0.1:8000/reviews/create" method="GET" class="posizione-button">
                                        <input type="hidden" name="doctor_id" :value="this.doctor.id">
                                        <button class="btn btn-sm btn-cerca ms-3" type="submit"><i class="fa-solid fa-book-open" ></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div class="row mt-4 mt-md-0">
                    <div class="col-md-2"></div>
                    <div class="col-12 col-md-8" style="white-space: pre-line;">
                        <h4 class="text-center testo-bianco mb-4"><strong>Prestazioni</strong></h4>
                        <div class="justify testo-bianco">
                            {{ this.doctor.services }}                       
                        </div>
                    </div>
                </div>
                <div class="row mt-5 position-relative d-none d-md-block">
                    <h4 class="text-center mt-3 testo-bianco"><strong>Recensioni</strong></h4>
                    <div class="my-card-col">
                        <div class="my-card my-2 px-2" v-for="review, index in this.doctor.reviews" :key="index">      
                            <div class="flip-card my-4" >
                                <div class="flip-card-inner">
                                    <div class="flip-card-front mx-3">
                                        <span class=""><strong>{{review.name}}</strong> </span><br>
                                        <span class="message-text ">{{ new Date(review.created_at).toLocaleString('it-IT', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }) }}</span><br>
                                        <span class="">{{review.text}}</span><br>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <button @click="scrollLeft" class="d-none d-md-block scroll-button left ms-2"><i class="fa-solid fa-arrow-left" style="color: #ffffff;"></i></button>
                        <button @click="scrollRight" class="d-none d-md-block scroll-button right  me-2"><i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i></button>
                        <!-- <button @click="scrollLeft" class="d-none d-md-block scroll-button left btn-blue"><i class="fa-solid fa-arrow-left" style="color: #ffffff;"></i></button> -->
                    </div>
                </div>
                <div class="row my-5 position-relative d-md-none">
                    <h4 class="text-center mt-3 testo-bianco"><strong>Recensioni</strong></h4>
                    <div class="col-12 testo-bianco mb-3" v-for="review, index in this.doctor.reviews" :key="index">
                        <h5> {{review.name}}</h5>
                            <span class="fs-6"> {{ new Date(review.created_at).toLocaleString('it-IT', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }) }}</span>
                            <h6> {{review.text}}</h6>   
                    </div>
                </div>
                
            </div>
            <hr class="mt-5" style="color: white">
        </div>
        
    
    
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
div{
    font-size: 18px;
}
span{
    font-size: 20px;
}
.bg-green{
    // background-color:#285a8c;
    background-image: linear-gradient(to bottom, #66cc99, #285a8c);
}
.title-color{
    color: #285a8c;
}
@media (max-width: 763px) {
    
    img {
        width: 100%;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    }
    .my-card {
        width: 100%;
    }
    .btn-cerca:hover{
        border: 1px solid white;
        color: white;
    }
    .bg-green{
    // background-color:#285a8c;
    background-image: white;
    }
    .testo-bianco{
        color: white;
    }
}
.posizione-button{
    align-content: center;
    display: flex;
    padding: 9px;
}
img{
    width: 90%;
}
.image-container {
        width: 300px; /* larghezza desiderata */
        height: 300px; /* altezza desiderata */
        overflow: hidden; /* assicura che l'immagine non fuoriesca dai limiti del contenitore */
        border-radius: 50%; /* rende il contenitore circolare */
        border: 5px solid #285a8c;
    }

    .image-container img {
        width: 100%; /* riempie l'intera larghezza del contenitore */
        height: 100%; /* riempie l'intera altezza del contenitore */
        object-fit: cover; /* scala l'immagine per coprire tutto il contenitore mantenendo le proporzioni e tagliando eventuali parti in eccesso */
        object-position: top; /* allinea l'immagine partendo dall'alto */
    }

.justify{
    text-align: justify;
}

.rating {
    unicode-bidi: bidi-override;
    direction: rtl;
    text-align: center;
    position: relative;
}
.rating > input {
    display: none;
}
.rating > label {
    display: inline-block;
    padding: 5px;
    font-size: 30px;
    color: #ccc;
    cursor: pointer;
}
.rating > label:hover,
.rating > label:hover ~ label,
.rating > input:checked ~ label {
    color: #f39c12;
}
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label,
.rating > label:hover ~ input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label:hover ~ label {
    color: #f1c40f;
}
/* Aggiungi regole per gestire l'hover sui dispositivi mobili */


@media (min-width: 763px) {
    .raised-effect {
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
        transform: perspective(1000px);
        background-color: white;
        
    }
    .bg-gray{
        background-color: rgb(215, 213, 213);
    }
    .borderadius{
        border-radius: 20px;
    }
    .btn-cerca:hover{
        border: 1px solid #66cc99;
        color: #66cc99;
    }
}


.my-card-col {
    display: flex;
    overflow-x: hidden;
    white-space: nowrap;
   
    
}
.my-card{
    flex: 0 0 auto;
    width: calc(100%/3);
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
    overflow-y: hidden; 
    white-space: pre-line;
  }

  .scroll-button {
    position: absolute;
    position: absolute;
    height: 350px;
    width: 80px;
    z-index: 2;
    
    color:  white;
    border: 0px;   
}

.left{
    left: 0%;
    background: linear-gradient(to right, rgba(120, 120, 120, 0.198), transparent);
    border-top-left-radius: 20px ;
    border-bottom-left-radius: 20px;
    &:hover{
        background: linear-gradient(to right, rgba(45, 45, 45, 0.198), transparent);
       
    }
    
}
.right{
    right: 0%;
    background: linear-gradient(to left,rgba(120, 120, 120, 0.198), transparent);
    border-top-right-radius: 20px ;
    border-bottom-right-radius: 20px;
    &:hover{
        background: linear-gradient(to left, rgba(45, 45, 45, 0.198), transparent);
       
    }
    
}
.message-text{
    font-size: 12px;
    color: grey;
}

.btn-cerca{
    background-color: #66cc99;
    color: white;
    
}


.btn-blue{
    
    background-color: rgba(40, 90, 140 , 0.6);
    color:  white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 
    &:hover{

        background-color: #285a8c;
        color:  white;
    }
}
</style>