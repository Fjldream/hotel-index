<template>
  <div class="home">
<!--    上面写不需要this的 -->
<!--    <button @click="add" style="width:7.50rem;height: 1rem">{{$store.state.count}}{{count}}</button>-->
    {{mycount}}{{city}}{{count}}{{mymsg}}
  </div>
</template>

<script>
  import {mapState} from 'vuex';
// @ is an alias to /src0
export default {
  name: 'Home',
  components: {
  },
  data(){
    //防止意外修改 放在computed里面
    return{
      msg:'sdsd'
    }
  },
  computed:{
    mymsg(){
      return this.msg.toUpperCase();
     },
    ...mapState({
          count:state=>state.count,
          city:'city',
          mycount(){
    return this.$store.state.count;
  }
  }),
  },

  mounted() {

  },
  methods:{
    add(){
      this.$store.state.count++;
    }
  }
}

</script>
