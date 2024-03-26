<script>
import { store } from '../store.js';
import axios from'axios';

export default {
    name: 'SearchPage',
    components: {

    },
    data(){
        return{
            store,
            doctors: [],
        }
    },
    created(){

    },
    methods: {
        /* getDoctors(){
            axios.get(``,{

            }).then((response)=>{

            })
        } */
    }
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center my-4">
                    <h1>BDoctors; Be Doctors!</h1>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>