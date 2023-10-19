<template>
    <div class="container contenedor-bienvebido">
        <img src="../assets/logo.png" alt="logo">
        <h1 class="titulo">F<span>&</span>F</h1>
        <h2 class="bienvenido">Bienvenido al Sistema</h2>
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
</style>