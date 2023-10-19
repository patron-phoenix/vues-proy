<template>
    <div class="container">
        <h1 class="mb-4">Editar Área</h1>

        <form @submit.prevent="update()">
            <div class="mb-3">
                <label for="departamento" class="form-label">Departamento/Área</label>
                <input type="text" class="form-control" id="departamento" v-model="payload.departamento">
            </div>
            <div class="mb-3">
                <label for="encargado" class="form-label">Encargado</label>
                <input type="text" class="form-control" id="encargado" v-model="payload.encargado">
            </div>
            <div class="mb-3">
                <label for="funcionarios" class="form-label">N° Funcionarios</label>
                <input type="number" class="form-control" id="funcionarios" min="0" v-model="payload.funcionario">
            </div>

            <button type="submit" class="btn btn-outline-success boton">Guardar</button>
            <router-link class="btn btn-outline-danger boton" to="/areas">Cancelar</router-link>

        </form>
    </div>
</template>

<script>
export default {
    name: 'AreasUpdate',
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
        getOne() {
            this.axios({
                method: 'get',
                url: this.api + '/areas/' + this.$route.params.id
            }).then((response) => {
                this.payload = response.data;
            }).catch((error) => {
                console.log(error);
            })
        },
        update() {
            if (confirm('deseas guardar los cambios realizados?')) {
                this.axios({
                    method: 'patch',
                    url: this.api + '/areas/' + this.$route.params.id,
                    data: this.payload
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
                this.limpiar()
            }
        },
        limpiar() {

            this.payload.departamento = "",
            this.payload.encargado = "",
            this.payload.funcionario = "",
            this.$router.push('/areas')

        }
    },
    mounted() {
        this.getOne()
    }
}
</script>

<style>
.boton {
    margin-right: 15px;
    margin-top: 25px;
}
</style>