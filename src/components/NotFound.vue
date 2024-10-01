<template>
   <header>
  </header>
    <div class="title">404 erreur</div>
    <div class="parent">
        <img class="img" src="/src/components/imageerror404.png" alt="404">
        <div class="ho">
            <div class="child1">Veuillez redémarrer votre connexion</div>
            <br>
            <div class="child2">Cette page est temporairement invalide</div>
            <li><router-link to="/">retourner a la page principale</router-link></li>
            <br>
        </div> 
    </div> 
    <RouterView></RouterView> 
</template>
<script>
   export default {
    name: 'NotFound'
  };
</script>
<style>
   *{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.title{
    padding: 10px;
    position: relative;
    font-size: 20px;

}
.img{
    height: 220px;
    width: 400px;
    position: relative;
    top: 280px;
    overflow: hidden;

}
.parent{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
   overflow: hidden;
   overflow: hidden;

}
.ho{
    display: flex;
    flex-direction: column;
}
 .child1{
    font-size: 65px;
    width: 300px;
    letter-spacing: 1px;
    font-weight: 700;
    line-height: 106px;
    position: relative;
    top: 100px;
    right: 120px;
    overflow: hidden;
}
.child2{
    width: 283px;
    position: relative;
    top: 150px;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: 2px;
    left: -114px;
    color: #4f4f4f;

}
.btn{
    background-color: #333;
    border: none;
    color: white;
    width: 250px;
    height: 70px;
    position: relative;
    top: 180px;
    left: -111px;
    padding: 10px;
    text-align: center;



}
.end{
    text-align: center;
    position: relative;
    top: 400px;
}
</style>