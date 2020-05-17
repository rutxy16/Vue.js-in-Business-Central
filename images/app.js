Vue.component('color-selector', {
  data: function() {
    return { r:0, g:0, b:0 };
  }, 
  watch:{
    r: function() {
        console.log(this.r);
        this.$emit('color',`rgb(`+ this.r +`,`+ this.g +`,`+ this.b + `)`);
    },
    g: function() {
        this.$emit('color',`rgb(`+ this.r +`,`+ this.g +`,`+ this.b + `)`);
    },
    b: function() {
        this.$emit('color',`rgb(`+ this.r +`,`+ this.g +`,`+ this.b + `)`); 
    },
}, 
template: `<div style="border:solid; display:flex;">
          <div style="'background-color: #000; width:110px; height:110px;'"></div>
            <div style="display:flex; flex-direction:column; padding:10px;"> 
              <div>R: <input type="range" min=0 max=255 v-model="r"> {{r}} </div> 
              <div>G: <input type="range" min=0 max=255 v-model="g"> {{g}} </div> 
              <div>B: <input type="range" min=0 max=255 v-model="b"> {{b}} </div> 
            </div> 
          </div>`, 
});

const app = new Vue({
    el: '#app',
    data: {color:null},
    watch:{
      color: function(){
        console.log(this.color);
      }
    },
    template: [
      `<div style="border:solid red; display:felx;">
        <color-selector v-on:color="color = $event"></color-selector>
        <div v-bind:style="'color:' + color">TU COLOR ES ESTE</div>    
      </div>`
    ].join(''),

  });


