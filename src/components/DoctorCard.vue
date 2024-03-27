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
    <div class="col-3">
        <div>
            Dr. {{doctor.user.name}} {{doctor.user.surname}}
        </div>
        <div>
            pratica a {{doctor.city}}.
        </div>
        <div>
            Specializzato in: 
            <span v-for="specialization, index in doctor.specializations">
                {{specialization.name.toLowerCase()}}<span v-if="index == doctor.specializations.length-1">.</span>
            </span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
</style>