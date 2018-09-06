const data = {
  name: 'Yoshi'
}

Vue.component('greeting', {
  template: '<p>Hey there, I am a {{ name }}. <button v-on:click="changeName">Change name</button></p>',
  data: function() {
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName: function() {
      this.name = 'Mario'
    }
  }
});

new Vue({
  el: "#vue-app-one",
  data: {
    title: 'Vue App One'
  }
});

new Vue({
  el: "#vue-app-two",
  data: {
    title: 'Vue App Two'
  }
});
