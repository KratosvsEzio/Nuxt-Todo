<template>
    <div class="container mx-auto">
        <div class="flex justify-around items-center">
            <p>Double Click for Completed Task</p>
            <div class="flex items-center justify-center">
                <span class="not-completed-legend bg-purple-200"></span>
                <p>Not Complete</p>
            </div>
            <div class="flex items-center justify-center">
                <span class="completed-legend bg-green-200"></span>
                <p>Completed</p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'LegendsComponent'
}
</script>

<style scoped>
    .not-completed-legend, .completed-legend{
        display: inline-block;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        margin-right: 5px;
    }
</style>
