<template>
  <div class="container mb-">
    <h1 class="mb-4">Listado de Activos</h1>

    <div class="buscar-filtrar mb-4">
      <router-link class="btn btn-outline-success mb-4" to="/activosAgregar">Agregar</router-link>
      <!-- <button class="btn btn-outline-success mb-4">Agregar</button> -->

      <div class="dropdown mb-4">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Filtrar
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>

    </div>

    <form class="d-flex mb-4" role="search">
      <input class="form-control me-2 buscar" type="search" placeholder="Buscar..." aria-label="Search">
      <button class="btn btn-outline-secondary" type="submit">Buscar</button>
    </form>

    <table class="table ">
      <thead>
        <tr>
          <th>#</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Estado</th>
          <th>Área</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>1</th>
          <td>hp</td>
          <td>hp</td>
          <td>nuevo</td>
          <td>1</td>
          <td>
            <div class="acciones">
              <router-link class="btn btn-outline-info  boton" to="/activosUpdate">Editar</router-link>
              <!-- <a class="btn btn-outline-info boton ">Editar</a> -->
              <a class="btn btn-outline-danger boton ">Eliminar</a>
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