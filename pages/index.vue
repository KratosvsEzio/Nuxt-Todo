<template>
  <div>
    <AddTodoComponent/>
    <FilterTodosComponent/>
    <LegendsComponent />
    <TodosComponent />
  </div>
</template>

<script>
import TodosComponent from '@/components/IndexPageComponents/TodosComponent';
import AddTodoComponent from '@/components/IndexPageComponents/AddTodoComponent';
import LegendsComponent from '@/components/IndexPageComponents/LegendsComponent';
import FilterTodosComponent from '@/components/IndexPageComponents/FilterTodosComponent';


export default {
  components: {
    TodosComponent, AddTodoComponent, LegendsComponent, FilterTodosComponent
  },
  async fetch({store}) {
    await store.dispatch('todos/fetchTodos');
  },
  data() {
    return {
      todos: []
    }
  },
  head() {
    return {
      title: "Welcome to Todo App",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Never forget your important tasks anymore."
        }
      ]
    };
  }
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap');

*{
  font-family: 'Quicksand', sans-serif;
}
</style>
