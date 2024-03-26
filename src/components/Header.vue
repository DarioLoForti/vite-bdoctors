<script>
export default {
    
}
</script>
<template lang="">
 <header>
    <div class="container">
        <div class="row">
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
    padding-top: 20px;
  
    ul{
        display: flex;
        list-style: none;
        li{
            line-height: 50px;
            color: black;
            margin-right: 10px;
            padding: 5px 4px;

            a{
                text-decoration: none;
                color: black;
                padding: 5px 4px;
                
                &:hover{
                    color: rgb(63, 63, 63);
                    border-radius: 5px;

                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
                    
                }
            }
        }
    }
    .misura-logo{
        width: 150px;
        
    }
}
</style>