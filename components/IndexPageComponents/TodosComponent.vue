<template>
  <div class="container mx-auto">
      <h3 class="font-extrabold my-5 text-2xl text-gray-700">Todo List</h3>
      <ul>
          <li @dblclick="onDbl(todo)" v-for="todo in todos" :key="todo.id">
            <div v-bind:class="[todo.completed ? 'bg-green-200' : 'bg-purple-200']"
                class="rounded-lg my-2 p-3 text-gray-700 text-lg capitalize
                cursor-pointer flex justify-between items-center hover:bg-pink-200">
              <span>
                {{todo.title}}
              </span>
              <span>
                <div @click="deleteTodo(todo.id)" class="remove bg-pink-400 hover:bg-pink-500">x</div>
              </span>
            </div>
          </li>
      </ul>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    name: 'TodosComponent',
    // async fetch({store}) {
    //     await store.dispatch('todos/fetchTodos');
    // },
    methods: {
        ...mapActions({
            fetchTodos: 'todos/fetchTodos',
            deleteTodo: 'todos/deleteTodo',
            updTodo: 'todos/updateTodos',
        }),
        onDbl(todo) {
            const updTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }
            this.updTodo(updTodo);
        }
    },
    computed: {
        ...mapGetters({
            todos: 'todos/allTodos'
        })
        // todos() {
        //     return this.$store.state.todos.todos;
        // }
    },
}
</script>

<style scoped>

li{
    box-shadow: 0 1px 3px 0 rgb(177 95 198 / 10%), 0 1px 2px 0 rgb(177 95 198, 0.06);
}
.remove{
    color: red;
    font-size: 1rem;
    padding: 1px 2px;
    font-weight: bold;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    text-align: center;
}

</style>
