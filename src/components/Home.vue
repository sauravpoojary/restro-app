<template>
    <Header :username="username" />
    <div class="heading-container">
        <h1>RESTRO APP</h1>
    </div>
    
    <div class="table-container">
        <table id="restraunt">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Rating</th>
                <th>Action</th>
            </tr>
            <tr v-for="restraunt in restraunts" :key="restraunt.id">
                <td>{{ restraunt.id }}</td>
                <td>{{ restraunt.name }}</td>
                <td>{{ restraunt.address }}</td>
                <td>{{ restraunt.rating }}</td>
                <td><router-link :to="`/update/${restraunt.id}`">Update</router-link></td>
            </tr>
        </table>
    </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
    name: "Home",
    components: {
        Header,
    },
    data() {
        return {
            username: "Welcome",
            restraunts: [],
        };
    },
    async mounted() {
        console.log("Home Component Mounted");
        const userInfo = localStorage.getItem("user-info");
        if (userInfo) {
            this.username = JSON.parse(userInfo).name;
        } else {
            this.$router.push({ name: "SignUp" });
        }

        let restrauntsResponse = await axios.get(
            "http://localhost:3000/restraunts"
        )
        console.log(restrauntsResponse.data)
        if (restrauntsResponse.status == 200) {
            this.restraunts = restrauntsResponse.data
        }
    },
};
</script>

<style scoped>

.heading-container {
    margin: 30px;
    text-align: center;
}
.table-container {
    margin: 10px;
}
#restraunt {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    /* margin: 10px; */
}

#restraunt td,
#restraunt th {
    border: 1px solid #ddd;
    padding: 8px;
}

#restraunt tr:nth-child(odd) {
    background-color: #eeb1b1;
}

#restraunt th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #003d8d;
    color: white;
}
</style>
