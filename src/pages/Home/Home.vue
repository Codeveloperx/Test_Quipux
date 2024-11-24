<!-- Home.vue -->
<template>
    <div class="container py-4">
        <!-- Search form -->
        <Search />

        <!-- Servicios -->
        <div class="row g-4">
            <Card />
        </div>
    </div>
</template>

<script>
import Search from '/src/components/Search/Search.vue'
import Card from '/src/components/Card/Card.vue'
export default {
    name: 'Home',
    components: { Search, Card },
}
</script>