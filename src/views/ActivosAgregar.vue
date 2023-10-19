<template>
    <div class="container">
        <h1 class="mb-4">Registro de Activo</h1>

        <form>
            <div class="mb-3">
                <label for="marca" class="form-label">Marca</label>
                <input type="text" class="form-control" id="marca" required>
            </div>
            <div class="mb-3">
                <label for="modelo" class="form-label">Modelo</label>
                <input type="text" class="form-control" id="modelo" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Estado</label>
                <select class="form-select " aria-label="Default select example">
                <option selected>-- Seleccione --</option>
                <option value="1">Nuevo</option>
                <option value="2">Usado</option>
                <option value="3">En Desuso</option>
            </select>
            </div>

            <div class="mb-3">
                <label for="area" class="form-label">Área</label>
                <input type="number" class="form-control" id="area" required>
            </div>
            <!-- <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> -->

            <button type="submit" class="btn btn-outline-success boton">Agregar</button>
            <router-link class="btn btn-outline-danger boton" to="/activos">Cancelar</router-link>

        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.boton {
    margin-right: 15px;
    margin-top: 25px;

}
</style>