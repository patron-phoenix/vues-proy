<template>
  <div class="container mb-">
    <h1 class="mb-4">Listado de Areas</h1>

    <div class="buscar-filtrar mb-4">
      <router-link class="btn btn-outline-success mb-4" to="/areasAgregar">Nuevo Registro</router-link>
      <!-- <button class="btn btn-outline-success mb-4">Agregar</button> -->

    </div>

    <form class="d-flex mb-4" role="search" @submit.prevent="getList()">
      <input class="form-control me-2 buscar" type="search" placeholder="Buscar..." aria-label="Search" v-model="search" @search="getList()">
    </form>

    <table class="table ">
      <thead>
        <tr>
          <th>#</th>
          <th>Departamento</th>
          <th>Encargado</th>
          <th>N° Funcionarios</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items" :key="item.id">
          <th>{{ item.id }}</th>
          <td>{{ item.departamento }}</td>
          <td>{{ item.encargado }}</td>
          <td>{{ item.funcionario }}</td>
          <td>
            <div class="acciones">
              <!-- <router-link class="btn btn-outline-info  boton" to="/areasUpdate">Editar</router-link> -->
              <a class="btn btn-outline-info boton " @click="update(item.id )">Editar</a>
              <a class="btn btn-outline-danger boton " @click="eliminar(item.id )">Eliminar</a>
              <!-- <a class="btn btn-outline-danger boton " ">Eliminar</a> -->
            </div>
          </td>
        </tr>
      </tbody>

    </table>

  </div>
</template>

<script>
export default {
  name: 'AreasView',
  data() {
    const api = process.env.VUE_APP_API
    return {
      api,
      items: [],
      search:'',
      tofilter:''
      
    }
  },
  methods: {
    filter(name, value) {
      this.toFilter = value === '' ? '' : '&' + name + '=' + value;
      this.getList();
    },
    getList() {
      this.axios({
        method: 'get',
        url: this.api + '/areas?q='+this.search+this.tofilter
      }).then((response) => {
        this.items = response.data;
      }).catch((error) => {
        console.log(error);
      })
    },
    eliminar(id) {
      if (confirm('Realmente deseas eliminar el registro')) {
        this.axios({
          method: 'delete',
          url: this.api + '/areas/' + id
        }).then((response) => {
          this.getList();
        }).catch((error) => {
          console.log(error);
        })
      }
    },
    update(id){
      this.$router.push('/areas/'+id)
    }
  },
  mounted() {
    this.getList();
    this.filter();
  }

}
</script>

<style>
.buscar-filtrar {
  display: flex;
  justify-content: space-between;
}

.buscar {
  width: 400px;
}

.acciones a {
  margin: 0 10px;
}

.boton {
  width: 90px;
}
</style>