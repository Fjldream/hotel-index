<template>
  <div id="app">
    <transition name="component-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>

</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
html{
  scroll-behavior: smooth;
}
@font-face {
  font-family: SanFranciscoDisplay-Bold;
  src: url("assets/font/SANFRANCISCODISPLAY-BOLD-4.TTF");
}
@font-face {
    font-family: PingFang-SC-Bold;
  src: url("assets/font/PINGFANG BOLD.TTF");
}
@keyframes myfirst {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-moz-keyframes myfirst {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }

}

@-webkit-keyframes myfirst {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-o-keyframes myfirst {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
  /* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
