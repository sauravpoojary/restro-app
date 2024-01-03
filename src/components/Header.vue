<template>
    <div class="main-header">
        <div>User : {{ this.username }}</div>
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add</router-link>
        <a @click="handleLogout" href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ['username'],
    methods: {
        handleLogout() {
            localStorage.clear();
            this.$router.push({ name: 'Login' });
        }
    }
}
</script>

<style scoped>
.main-header {
    background-color: #333;
    color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    height: 50px;
}

.main-header a {
    color: white;
    text-decoration: none;
    font-size: large;
    cursor: pointer;
}

.main-header a:hover {
    color: black;
    background-color: white;
}
</style>