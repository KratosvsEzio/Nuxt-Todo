import axios from 'axios';

export const state = () => ({
    todos: [
        // {
        //     id: 1,
        //     title: 'asdsd'
        // },
        // {
        //     id: 2,
        //     title: 'ewsvcd'
        // }
    ]
});

export const getters = {
    allTodos(state) {
        return state.todos
    }
};

export const actions = {
    async fetchTodos({commit}) {
        // console.log('helloo');
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        // console.log(res.data);
        // console.log('todos');

        commit("setTodos", res.data);
    },

    async newTodo({ commit }, title) {
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false});
        // console.log(res.data);
        commit("newTodo", res.data);
    },

    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        // console.log(id);
        commit("removeTodo", id);
    },

    async filterTodos({ commit }, filter) {
        const limit = +filter;
        const  res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        // console.log(limit);
        commit("setTodos", res.data);
    },

    async updateTodos({ commit }, updTodo) {
        const  res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo);
        console.log(res.data);
        commit("updateTodo", res.data);
    }
};

export const mutations = {
    setTodos(state, payload) {
      state.todos = payload;
    },
    newTodo(state, payload) {
      state.todos.unshift(payload);
    },
    removeTodo(state, payload) {
        state.todos = state.todos.filter( todo => {
            return todo.id !== payload;
        });
    },
    updateTodo (state, payload){
        const index = state.todos.findIndex(todo => todo.id === payload.id);
        if( index !== -1) {
            state.todos.splice(index, 1, payload);
        }
    }
};