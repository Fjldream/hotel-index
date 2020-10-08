<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="count++" style="width:7.50rem;height: 1rem">{{count}}</button>
    <h1>{{upperMsg}}</h1>
    <h1>{{skillLength}}</h1>
    <h1>{{gettersMsg}}</h1>
    <ul>
      <li v-for="(value,index) in myskill" :key="value">{{value}}{{index}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'About',
    components: {
    },
    data(){
      return {
        count:10
      }
    },
    computed:{
      // upperMsg(){
      //   return this.$store.state.msg.toUpperCase();
      // }
      upperMsg(){
        return this.$store.getters.upperMsg;
      },
      skillLength(){
        return this.$store.getters.skillLength;
      },
      gettersMsg(){
        return this.$store.getters.gettersMsg;
      },
      // myskill(){
      //
      //   return this.$store.state.skill.filter(ele=>ele.includes('vue'));
      // }
      myskill(){
        return this.$store.getters.filterSkillByMsg('x');
      }
    }
  }
</script>
