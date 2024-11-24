<script>
export default {
    name: 'Navbar',
    data() {
        return {
            logo: 'src/assets/logo.png',
            userName: 'Camilo Orozco',
            initialsColor: '#333'
        }
    },
    computed: {
        initials() {
            const names = this.userName.split(' ');
            return names[0].charAt(0) + names[1].charAt(0);
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
            <span class="navbar-brand">
                <img :src="logo" alt="Logo" width="150" class="d-inline-block align-text-top">
            </span>

            <!-- Toggle button -->
            <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> -->

            <div class="collapse navbar-collapse" id="navbarNavDropdown">  
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item dropdown d-flex align-items-center"> <!-- Añadir d-flex y align-items-center -->
                        <div class="avatar-circle">
                            <span class="text-white bg-primary rounded-circle fs-6 p-2">{{ initials }}</span>
                        </div>
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            {{ userName }}
                        </a>

                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item">Mi Perfil</a></li>
                            <li><a class="dropdown-item">Configuración</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item">Cerrar Sesión</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
