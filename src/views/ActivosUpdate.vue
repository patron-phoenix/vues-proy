<template>
    <div class="container">
        <h1 class="mb-4">Editar Activo</h1>

        <form @submit.prevent="update()">
            <div class="mb-3">
                <label for="marca" class="form-label">Marca</label>
                <input type="text" class="form-control" id="marca" required v-model="payload.marca">
            </div>
            <div class="mb-3">
                <label for="modelo" class="form-label">Modelo</label>
                <input type="text" class="form-control" id="modelo" required v-model="payload.modelo">
            </div>

            <div class="mb-3">
                <label class="form-label">Estado</label>
                <select class="form-select " aria-label="Default select example" required v-model="payload.estado">
                    <!-- <option selected disabled>-- Seleccione -- </option> -->
                    <option value="Nuevo">Nuevo</option>
                    <option value="Usado">Usado</option>
                    <option value="En Desuso">En Desuso</option>
                </select>
            </div>



            <div class="mb-3">
                <label class="form-label">Área Id</label>
                <select class="form-select " aria-label="Default select example" required v-model="payload.areaId">
                    <!-- <option selected  disabled>-- Seleccione --</option> -->
                    <option :value="area.id" v-for="area in areas" :key="area.id">{{area.departamento}}</option>

                </select>
            </div>

            <button type="submit" class="btn btn-outline-success boton">Agregar</button>
            <router-link class="btn btn-outline-danger boton" to="/activos">Cancelar</router-link>

        </form>
    </div>
</template>

<script>
export default {
    name: 'ActivosUpdate',
    data() {
        const api = process.env.VUE_APP_API
        return {
            api,
            items: [],
            areas:[],
            payload: {
                marca: null,
                modelo: null,
                estado: null,
                areaId: null,
            }
        }
    },
    methods: {
        getOne() {
            this.axios({
                method: 'get',
                url: this.api + '/activos/' + this.$route.params.id
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
                    url: this.api + '/activos/' + this.$route.params.id,
                    data: this.payload
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
                this.limpiar()
            }
        },
        getListAreas() {
            this.axios({
                method: 'get',
                url: this.api + '/areas'
            }).then((response) => {
                this.areas = response.data;
            }).catch((error) => {
                console.log(error);
            })
        },
        limpiar() {

            this.payload.marca = "",
                this.payload.modelo = "",
                this.$router.push('/activos')

        }
    },
    mounted() {
        this.getOne(),
        this.getListAreas()
    }
}
</script>

<style>
.boton {
    margin-right: 15px;
    margin-top: 25px;

}
</style>