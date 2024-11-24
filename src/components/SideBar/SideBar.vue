<script>
import { menu } from '/src/data/menu.js';
import SidebarItems from './SidebarItems.vue';

export default {
    name: 'Sidebar',
    components: { SidebarItems },
    data() {
        return {
            isCollapsed: true,
            logo: 'src/assets/logo.png',
            menuItems: menu.menuItems
        };
    },
    methods: {
        toggleSidebar() {
            this.isCollapsed = !this.isCollapsed;
            if (this.isCollapsed) {
                this.menuItems.forEach(item => item.isOpen = false);
            }
        },
        toggleSubmenu(values) {
            if (!this.isCollapsed) {
                values.isOpen = !values.isOpen;
            }
        }
    }
};
</script>

<template>
    <nav id="sidebar" :class="[
        'bg-dark',
        'd-flex',
        'flex-column',
        'transition-all',
        isCollapsed ? 'w-16 align-items-center' : 'w-64',
        'h-screen',
        'overflow-hidden',
        'sm:w-16',
        'lg:w-64'
    ]">
        <div class="sidebar-header d-flex align-items-center gap-5 px-3 py-3">
            <button class="btn btn-outline-light" @click="toggleSidebar">
                <i class="bi bi-list"></i>
            </button>
            <img v-show="!isCollapsed" width="100" :src="logo" alt="Logo" class="img-fluid sidebar-logo" />
        </div>

        <ul class="list-unstyled">
            <SidebarItems v-for="(items, index) in menuItems" :key="index" :values="items" :isCollapsed="isCollapsed"
                :toggleSubmenu="toggleSubmenu" />
        </ul>
    </nav>
</template>
