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
        <router-link :to="{name: 'doctor', params: {slug: doctor.slug}}">
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
}
</style>