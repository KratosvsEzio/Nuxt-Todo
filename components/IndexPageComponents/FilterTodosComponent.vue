import { mapActions } from 'vuex';
<template>
    <div class="container mx-auto">
        <div class="flex items-center">
            <h3 class="font-extrabold my-5 text-2xl text-gray-700">Filter Todos:</h3>
            <select @change="filter(selectedFilter)" v-model="selectedFilter" class="appearance-none ml-5 rounded">
                <option value="200">200</option>
                <option value="100">100</option>
                <option value="50">50</option>
                <option value="20">20</option>
                <option value="10">10</option>
                <option value="5">5</option>
            </select>
        </div>
    </div>
</template>

<script>
import  { mapActions } from 'vuex';

export default {
    name: 'FilterTodosComponent',
    data() {
        return {
            selectedFilter: 200
        }
    },
    methods: {
        ...mapActions({filter: 'todos/filterTodos'}),
    }
}
</script>

<style scoped>
    select{
        padding: 5px 10px;
        border: 1px solid purple;
        font-size: 14px;
    }
</style>
