<template>
    <div class="wrapper">
        <!-- Sidebar -->
        <SideBar />
        <div id="content">
            <!-- Navbar -->
            <Navbar />
            <!-- Main Content -->
            <div class="content-body">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../components/SideBar/SideBar.vue';
import Navbar from '../components/Navbar/Navbar.vue';

export default {
    name: 'Layout',
    components: {
        Navbar,
        SideBar,
    },
    data() {
        return {
            isCollapsed: false
        }
    },
    methods: {
        toggleSidebar() {
            this.isCollapsed = !this.isCollapsed;
        }
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    width: 100%;
    min-height: 100vh;
}

#content {
    flex: 1;
    transition: all 0.3s;
}
</style>