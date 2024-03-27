<script>
import { store } from '../store.js';
export default {
    name: 'DoctorCard',
    props: {
        doctor: Object,
    },
    data() {
        return {
            store,
        }
    }
}
</script>
<template lang="">
    <div class="col-12 col-md-6 col-lg-3">
        <router-link class="text-decoration-none " :to="{name: 'doctor', params: {slug: doctor.slug}}">
            <div class="mb-3 card color-card">
                <img class="my-img" :src="doctor.image" :alt="doctor.user.name">
                <div class="card-body text-white">
                    <h3>
                        {{doctor.user.name}}
                        {{doctor.user.surname}}
                    </h3>
                    <p>{{doctor.city}}</p>
                    <!-- <p>Specializzazioni: {{specialization.name}}</p> -->
                </div>
            </div>
        </router-link>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.my-img{
    width: 100%;
    height: 15rem;
    object-fit: cover;
    object-position: 25% 25%; 
    border-top-right-radius:16px;
    border-top-left-radius:16px;
}
.color-card{
    background-color: #285a8c;
    border-radius: 20px;
    border: 0px;
    

    &:hover{
        border: 4px solid #66cc99;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        
    } 
}
</style>