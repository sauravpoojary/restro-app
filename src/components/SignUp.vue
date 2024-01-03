<template>
    <div class="main">
        <img class="logo" src="../assets/vue.svg" alt="vue" />
        <h1>Sign Up</h1>
        <div class="input-fields">
            <input type="text" v-model="name" placeholder="Enter Name" />
            <input type="text" v-model="email" placeholder="Enter Email" />
            <input type="password" v-model="password" placeholder="Enter Password" />
            <div class="button-container">
                <button @click="handleSignUp">Sign Up</button>
            </div>
        </div>

        <p>Already have an account? <router-link to="/login">Login</router-link></p>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "SignUp",
    data() {
        return {
            name: "",
            email: "",
            password: ""
        };
    },
    methods: {
        async handleSignUp() {
            let result = await axios.post("http://localhost:3000/user", {
                name: this.name,
                email: this.email,
                password: this.password
            })
            if (result.status == 201) {
                alert("Sign Up Successfull");
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({ name: "Home" });
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            console.log("User Already Logged In");
            this.$router.push({ name: "Home" });
        }
    }
};
</script>

<style scoped>
.logo {
    width: 100px;
}

.main {
    background-color: bisque;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.input-fields input {
    display: block;
    width: 300px;
    height: 40px;
    margin: 10px;
    border: 1px solid black;
    padding-left: 10px;
    border-radius: 5px;
}

.input-fields button {
    margin: 10px;
    width: 300px;
    height: 20px;
    border: 1px solid black;
    background-color: white;
    color: black;
    border-radius: 5px;

}

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
