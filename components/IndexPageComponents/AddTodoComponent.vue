import { mapActions } from 'vuex';
<template>
    <div class="container mx-auto">
      <h3 class="font-extrabold my-5 text-2xl text-gray-700">Add Todo</h3>
      <div class="">
        <form @submit="onSubmit">
            <input type="text" v-model="title" placeholder="Add todo..." class="focus:outline-none focus:ring focus:border-blue-300">
            <input type="submit">
        </form>
      </div>
      <!-- {{title}} -->
    </div>
</template>

<script>
import { mapActions} from 'vuex';
export default {
    name: 'AddTodo',
    data() {
        return {
            title: '',
        }
    },
    methods: {
        ...mapActions({newTodo: 'todos/newTodo'}),
        onSubmit(e) {
            e.preventDefault();
            this.newTodo(this.title);
        }
    },
}
</script>

<style scoped>
form{
    display: flex;
}
bg
input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid purple;
    outline: 0;
}

input[type="submit"]{
    flex: 2;
    background-color: purple;
    color: white;
    border: 1px solid purple;
    cursor: pointer;
}
</style>
