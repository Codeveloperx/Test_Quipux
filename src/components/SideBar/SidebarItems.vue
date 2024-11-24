<script setup>
import { computed } from 'vue';

const props = defineProps({
    values: {
        type: Object,
        required: true
    },
    isCollapsed: {
        type: Boolean,
        required: true
    },
    toggleSubmenu: {
        type: Function,
        required: true
    }
});

const isOpen = computed(() => props.values?.isOpen && !props.isCollapsed);
</script>

<template>
    <li class="mb-2">
        <a class="text-white d-flex align-items-center justify-content-between px-3 py-2 text-decoration-none"
            @click.prevent="toggleSubmenu(values)">
            <div class="d-flex align-items-center gap-3">
                <i :class="values.icon" style="font-size: 1.5rem;"></i>
                <span v-show="!isCollapsed">{{ values.title.toUpperCase() }}</span>
            </div>
            <i v-show="!isCollapsed && values.submenu"
                :class="['bi', values.isOpen ? 'bi-chevron-down' : 'bi-chevron-right']"></i>
        </a>

        <ul v-if="values.submenu" class="list-unstyled ms-3" :class="{ 'd-none': !isOpen }">
            <li v-for="(subItem, index) in values.submenu" :key="index">
                <router-link :to="{ path: values.path }"
                    class="text-white d-flex align-items-center justify-content-between px-3 py-2 text-decoration-none">
                    <span v-show="!isCollapsed">{{ values.title }}</span>
                </router-link>
            </li>
        </ul>
    </li>
</template>
