<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-4">
    <div class="container-fluid ">
            <a class="navbar-brand logo" href="#">F&F</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">                     
                        <router-link class="nav-link active" to="/">Inicio</router-link>
                    </li>
                    <li class="nav-item">
 
                        <router-link class="nav-link " to="/areas">Departamentos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/activos">Activos</router-link>
                    </li>
                </ul>
            </div>
        </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>