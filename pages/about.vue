<template>
  <div>
    <h1>This is about page</h1>
    <radial-progress-bar 
      :diameter="20"
      :completed-steps="completedSteps"
      :total-steps="totalSteps"
      :start-color="startColor"
      :stop-color="stopColor"
      :inner-stroke-color="innerStrokeColor"
      :stroke-width="strokeWidth"
      :inner-stroke-width="innerStrokeWidth"
      :is-clock-wise="true"
    >
  </radial-progress-bar>

  <button @click="start(10)" class="start-Btn">Start</button>
  </div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress';

export default{
  
  head() {
    return {
      title: "About Todo App",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Never forget your important tasks anymore."
        }
      ]
    };
  },
  data () {
    return {
      completedSteps: 0,
      totalSteps: 100,
      startColor: '#1a99aa',
      stopColor: '#1a99aa',
      innerStrokeColor: '#d8d8d8',
      strokeWidth: 2,
      innerStrokeWidth: 2,
      strokeLinecap: 'round',
      animateSpeed: 1000
    }
  },
  methods: {
    start(progress) {
      setTimeout( ()=> {
        this.completedSteps += 10;
      }, 1000)
      // this.completedSteps = progress;
      console.log(this.completedSteps);
    }
  },
  components: {
    RadialProgressBar
  }
};
</script>

<style scoped>
.start-Btn {
  background-color: aqua;
  padding: 3px 5px;
  margin: 10px;
}
</style>