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
                    <img class='misura-logo ' src="../../public/logo.png" alt="">
                </router-link>
            </div>
                <div class="col-8 d-md-none text-end" >
                    <li class="dropdown list-unstyled ">
                        <a href="#" class="hamburger-size" role="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-size bg-dropdown text-center" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href=""><router-link class="text-white" :to="{ name: 'home' }">Home</router-link></a></li>
                            <li><hr></li>
                            <li><a class="dropdown-item" href=""><router-link class="text-white" :to="{ name: 'search' } ">I nostri Dottori</router-link></a></li>
                        </ul>
                    </li>
                </div>
            <div class="col-8 d-none d-md-block" >
                <ul class='float-end '>
                    <li>
                        <router-link class="text-white me-3" :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li>
                        <router-link class="text-white" :to="{ name: 'search' }">I nostri Dottori</router-link>
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
   
    @media (max-width: 767px) {
        .misura-logo {
            width: 100px; 
        }
    }
}
.bg-dropdown{
    background-color: #285a8c;
}
.hamburger-size{
    font-size: 30px;
}
.dropdown-size{
    width: 100vw;
}
</style>