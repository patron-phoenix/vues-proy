<template>
    <div class="container contenedor-bienvebido">
        <img src="../assets/logo.png" alt="logo">
        <h1 class="titulo">F<span>&</span>F</h1>
        <h2 class="bienvenido">Bienvenido al Sistema</h2>
        <p class="desarrollado">Desarrollado por: <span>IVAN SUXO CHOQUE</span> </p>
    </div>
</template>

<script>


export default {
    name: 'inicio',
    components: {

    }
}
</script>

<style>
.titulo {
    color: #41b883;
    font-size: 90px;
    font-weight: 800;
}

.titulo span {
    color: #35495e;
}

.bienvenido {
    color: #35495e;
    font-weight: 600;
}

.contenedor-bienvebido {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.desarrollado{
    font-size: 18px;
    margin: 50px 0;
    font-weight: 700;
    background: #35495e;
    padding: 15px 25px;
    border-radius: 8px;
    color: #fff;
}
.desarrollado span{
    color: #50e09f;
}
</style>