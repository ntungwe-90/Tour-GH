<template>
    <div>
        <header>
            <nav>
                <router-link to="/" class="logo"><span>Tour-GH<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                            fill="white" class="bi bi-apple apple1" viewBox="0 0 16 16">
                            <path
                                d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                            <path
                                d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                        </svg></span></router-link>
                <ul class="nav-menu">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">About_Us</router-link>
                    </li>
                    <li class="nav-item"><a href="/contact" class="nav-link">Contact_Us</a></li>
                    <li class="nav-item"><a href="/login" class="nav-link">Login</a></li>
                    <li class="nav-item"><a href="/register" class="nav-link">Register</a></li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style scoped>
header {
    background-color: rgb(89, 186, 210);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
}

header:hover {
    opacity: 0.5
}

.logo {
    margin-left: 7rem;
    padding-top: 1rem;
    font-size: 30px;
    color: #fff;
    text-decoration: none;
    font-family: 'Brush Script MT', cursive;
    ;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    top: 0;
    left: 0;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

.nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-link {
    font-size: 1.11em;
    font-weight: 400;

    text-decoration: none;
}

.nav-item a {
    margin-left: .5rem;
    color: #fff;
}

.nav-item a:hover {
    border-bottom: 5px solid black;
    color: rgb(79, 3, 61);
}
</style>