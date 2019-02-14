<template>
  <div>
    <span :class="className" :style="className === 'check' ? 'background:' + activeColor : 'background: ' +inactiveColor">
      <input type="checkbox" @change="changeParVal" :value="value" @click="changeValue">
    </span>
  </div>
</template>
<script>
export default {
  props: ['activeColor', 'inactiveColor', 'value1'],
  data () {
    return {
      value: true,
      className: 'check'
    };
  },
  methods: {
    changeValue () {
      this.className === 'check' ? this.className = 'uncheck' : this.className = 'check';
      this.value = !this.value;
    },
    changeParVal () {
      this.$emit('change', this.value);
    }
  },
  model: {
    prop: 'value1',
    event: 'change'
  }
};
</script>

<style scoped>
  div {
    display: flex;
  }
  span {
    display: flex;
    width: 40px;
    height: 20px;
    border-radius: 10px;
    position: relative;
  }
  span::after {
    position: absolute;
    height: 18px;
    width: 18px;
    background: #fff;
    content: '';
    border-radius: 9px;
    margin-top: 1px;
  }
  span.check {
    background: cornflowerblue;
  }
  span.uncheck {
    background: aqua;
  }
  span.check::after {
    right: 2%;
  }
  span.uncheck::after {
    left: 2%;
  }
  input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
</style>