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
            if (container.scrollLeft + container.clientWidth === container.scrollWidth) {
                
                container.scrollLeft = 0;
            } else {
                container.scrollLeft += 447;
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
    <div class="container-fluid bg-gray py-3 ">
        <div class="container raised-effect ">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center my-4">
                        <h1>Dr. {{ this.doctor.user.name }} {{ this.doctor.user.surname }}</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-6 mb-4 ">
                        <img class="raised-effect border" :src="doctor.image" :alt="doctor.user.name">
                        <div class="col-5 mt-3">
    
                            <label class="form-label ms-4" for="rating">Vuoi dare un voto a Dr. {{this.doctor.user.surname}}?</label>
                            <form action="http://127.0.0.1:8000/ratings/create" method="GET">
                                <div class="rating ms-3">
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
                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-sm btn-success" type="submit">Vota!</button>
                                </div>
                            </form>
                            
                        </div>
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
                            <strong>Curriculum: </strong> 
                            <a href="#" target="_blank">Visualizza Curriculum</a>  
                        </div>
                        <div class="container my-5">
                            <div class="row">
                                <div class="col-6 d-flex justify-content-center">
                                    <p class="mt-1">Prenota un appuntamento</p>
                                    <form action="http://127.0.0.1:8000/messages/create" method="GET">
                                        <input type="hidden" name="doctor_id" :value="this.doctor.id">
                                        <button class="btn btn-sm btn-success ms-3" type="submit"><i class="fa-solid fa-message" style="color: #ffffff;"></i></button>
                                    </form>
                                </div>
                                <div class="col-6 d-flex justify-content-center">
                                    <p class="mt-1">Lascia una recenzione</p>
                                    <form action="http://127.0.0.1:8000/reviews/create" method="GET">
                                        <input type="hidden" name="doctor_id" :value="this.doctor.id">
                                        <button class="btn btn-sm btn-success ms-3" type="submit"><i class="fa-solid fa-book-open" style="color: #ffffff;"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8" style="white-space: pre-line;">
                        <p class="text-center"><strong>Prestazioni</strong></p>
                        {{ this.doctor.services }}                       
                    </div>
                </div>
                <div class="row mt-5 position-relative ">
                    <h4 class="text-center mt-3"><strong>Recensioni</strong></h4>
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
                        <button @click="scrollLeft" class="scroll-button left"><i class="fa-solid fa-arrow-left" style="color: #ffffff;"></i></button>
                        <button @click="scrollRight" class="scroll-button right"><i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i></button>
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
.raised-effect {
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    transform: perspective(1000px);
    background-color: white;
}
.bg-gray{
    background-color: rgb(215, 213, 213);
}
.border{
    border-radius: 10%;
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
    background-color: #285a8c;
    border: 1px solid white;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    z-index: 2;
    bottom: 45%;
}

.left{
    left: 0%;
}
.right{
    right: 0%;
}
.message-text{
    font-size: 12px;
    color: grey;
}
</style>