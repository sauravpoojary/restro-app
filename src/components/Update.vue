<template>
    <Header />
    <div class="heading-container">
        <h1>Update A Restraunt</h1>
    </div>

    <div class="form-container">
        <form class="input-fields">
            <input type="text" v-model="name" placeholder="Enter Name" />
            <input type="text" v-model="address" placeholder="Enter Address" />
            <input type="number" v-model="rating" placeholder="Enter Rating" />
            <div class="button-container">
                <button type="button" @click="handleUpdate">Add</button>
            </div>
        </form>
    </div>
</template>

<script>
import Header from './Header.vue';
import axios from "axios";
export default {
    name: 'Update',
    components: {
        Header
    },
    data() {
        return {
            username: 'Welcome',
            name: '',
            address: '',
            rating: ''
        }
    },
    async mounted() {
        console.log('Update Component Mounted');
        const userInfo = localStorage.getItem('user-info');
        if (userInfo) {
            this.username = JSON.parse(userInfo).name;
        }else {
            this.$router.push({ name: 'SignUp' });
        }

        let restrauntDetails = await axios.get(`http://localhost:3000/restraunts/${this.$route.params.id}`);
        console.log(restrauntDetails);
        this.name = restrauntDetails.data.name;
        this.address = restrauntDetails.data.address;
        this.rating = restrauntDetails.data.rating;
    },
    methods: {
        async handleUpdate() {
            let restrauntDetails = await axios.put(`http://localhost:3000/restraunts/${this.$route.params.id}`, {
                name: this.name,
                address: this.address,
                rating: this.rating
            })

            console.log(restrauntDetails);

            if (restrauntDetails.status == 200) {
                this.$router.push({ name: 'Home' });
            }
        }
    }
}
</script>

<style scoped>

.heading-container {
    margin: 30px;
    text-align: center;
}

.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
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
    color: white;
    border-radius: 5px;
    background-color: #333;
    height: 30px;

}

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>