<script>
export default {
    

}
</script>
<template lang="">
 <header>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-4">
                <router-link :to="{ name: 'home' }">
                    <img class='misura-logo' src="../../public/4.jpeg" alt="">
                </router-link>
            </div>
            <div class="col-8">
                <ul class='float-end '>
                    <li>
                        <router-link :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'search' } ">Dottori</router-link>
                    </li>
                    <li>
                        <a href="http://127.0.0.1:8000/login" > Login</a>
                        <!-- <a @click="redirectToLogin">Login</a> -->
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
 </header>
</template>
<style lang="scss" scoped>
header{
    width: 100%;
    background-color: #285a8c;
  
    ul{
        display: flex;
        list-style: none;
        li{
            font-size: 25px;
            line-height: 50px;
            margin-right: 10px;
            padding: 5px 4px;
            

            a{
                text-decoration: none;
                color: white;
                padding: 5px 4px;
                
                &:hover{
                    color: #003366;                    
                }
            }
        }
    }
    .misura-logo{
        width: 150px;
        
    }
}
</style>