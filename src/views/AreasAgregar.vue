<template>
    <div class="container">
        <h1 class="mb-4">Registro de Área</h1>

        <form @submit.prevent="nuevo()">
            <div class="mb-3">
                <label for="departamento" class="form-label">Departamento/Área</label>
                <input type="text" class="form-control" id="departamento" required v-model="payload.departamento">
            </div>
            <div class="mb-3">
                <label for="encargado" class="form-label">Encargado</label>
                <input type="text" class="form-control" id="encargado" required v-model="payload.encargado">
            </div>
            <div class="mb-3">
                <label for="funcionarios" class="form-label">N° Funcionarios</label>
                <input type="number" class="form-control" id="funcionarios" min="0" required v-model="payload.funcionario">
            </div>
            <!-- <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> -->

            <button type="submit" class="btn btn-outline-success boton">Agregar</button>
            <router-link class="btn btn-outline-danger boton" to="/areas">Cancelar</router-link>

        </form>
    </div>
</template>

<script>
export default {
    name: 'AreasAgregar',
    data() {
        const api = process.env.VUE_APP_API
        return {
            api,
            items: [],
            payload: {
                departamento: null,
                encargado: null,
                funcionario: null
            }
        }
    },
    methods: {

        nuevo() {
            this.axios({
                method: 'post',
                url: this.api + '/areas',
                data: this.payload
            }).then((response) => {
                // this.getList();
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
            this.limpiar()
        },
        limpiar() {

            this.payload.departamento = "",
                this.payload.encargado = "",
                this.payload.funcionario = "",
                this.$router.push('/areas')

        }
    },
    mounted() {
        // this.getList();
    }
}
</script>

<style>
.boton {
    margin-right: 15px;
    margin-top: 25px;

}
</style>