<template>
    <div class="text-center mb-5">
        <h1 class="display-4 text-primary mb-3">¿Que quieres buscar?</h1>
        <p class="text-muted mb-4">Encuentra la información que desees consultar ...</p>

        <div class="row justify-content-center mb-4">
            <div class="col-md-10">
                <div class="input-group">
                    <select class="form-select" style="max-width: 200px;">
                        <option selected>Todos los servicios</option>
                    </select>
                    <input type="text" class="form-control" placeholder="Que servicio quieres consultar">
                    <button class="btn btn-primary">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Search'
}
</script>