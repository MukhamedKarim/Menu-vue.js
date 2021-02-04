



var vm = new Vue({
    el: document.body,
    data: {
       
      a: 10,
      b: 12,
      c: 15,
      d: 20,
      f: 35,
      },
      computed: {
        total: function() {
            var total = this.extra + this.main ;
          return total-this.main<0?this.main:total;
    }
  }
});



