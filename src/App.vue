<template>
  <div id="app">
    <SwitchEle v-model="value1" activeColor="#13ce66" inactiveColor="#ff4949" @change="readVal"/>
    <SwitchEle v-model="value2" activeColor="#007766" inactiveColor="#000049" @change="readVal"/>
  </div>
</template>

<script>
import SwitchEle from './components/Switch';
export default {
  name: 'App',
  components: {SwitchEle},
  data () {
    return {
      value1: true,
      value2: false
    };
  },
  methods: {
    readVal () {
      console.log(this.value1);
    }
  }
};
</script>
<style>
</style>
