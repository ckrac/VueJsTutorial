new Vue({
  el: "#vue-app",
  data: {
    name: "Clark",
    job: "Ninja",
    website: "https://www.youtube.com",
    websiteTag: '<a href="https://www.youtube.com">Youtube</a>'
  },
  methods: {
    greet: function(time) {
      return `Good ${time} ${this.name}`;
    }
  }
});