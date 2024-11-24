<template>
    <div class="container py-4">
        <div class="row g-4">
            <div class="col-md-4" v-for="(card, index) in services" :key="index">
                <div class="card h-100 border">
                    <div class="card-body">
                        <h2 class="card-title h4">{{ card.title }}</h2>
                        <p class="card-text text-muted">{{ card.description }}</p>
                        <button class="btn btn-outline-success">{{ card.buttonText }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { services } from '/src/data/services.js';
export default {
    name: "Card",
    data() {
        return {
            services: services
        };
    },
};
</script>