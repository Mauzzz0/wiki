<template lang='pug'>
  v-snackbar.nav-notify(
    :color='notification.style'
    top
    multi-line
    v-model='notificationState'
    :timeout='2000'
    )
    .text-left
      v-icon.mr-3(dark) mdi-{{ notification.icon }}
      span {{ notification.message }}
</template>

<script>
import { get, sync } from 'vuex-pathify'

export default {
  data() {
    return { }
  },
  computed: {
    notification: get('notification'),
    notificationState: sync('notification@isActive')
  }
}
</script>

<style lang='scss'>
.nav-notify {
  top: -64px;
  padding-top: 0;
  z-index: 999;

  .v-snack__wrapper {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    position: relative;
    margin-top: 0;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: rgba(255,255,255,.4);
      position: absolute;
      bottom: 0;
      left: 0;
      animation: nav-notify-anim 2s linear;
    }
  }
}

@keyframes nav-notify-anim {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
</style>
