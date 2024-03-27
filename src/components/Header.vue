<script>
export default {
    mounted() {

const dropdowns = document.querySelectorAll('.dropdown-toggle');
dropdowns.forEach(dropdown => {
    new bootstrap.Dropdown(dropdown);
});
}

}
</script>
<template lang="">
 <header>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-4">
                <router-link :to="{ name: 'home' }">
                    <img class='misura-logo' src="../../public/1.png" alt="">
                </router-link>
            </div>
                <div class="col-8 d-md-none" >
                    <ul>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" role="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href=""><router-link :to="{ name: 'home' }">Home</router-link></a></li>
                                <li><a class="dropdown-item" href=""><router-link :to="{ name: 'search' } ">Dottori</router-link></a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="http://127.0.0.1:8000/login">Login</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            <div class="col-8 d-none d-md-block" >
                <ul class='float-end '>
                    <li>
                        <router-link :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'search' } ">Dottori</router-link>
                    </li>
                    <li>
                        <a href="http://127.0.0.1:8000/login" > Login</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
 </header>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
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
                color: black;
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