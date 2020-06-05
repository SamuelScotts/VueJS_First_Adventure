let searchedValue = null;

export default {
  name: 'app',
   data: function(){
    return{
      a: true,
      b: false,
      searchedValue: '',
    }
  },
  methods: {
    search: function() {
      console.log(this.searchedValue);
      this.b = true;
      this.a = false;
      }
    },
  template: /*html*/`
  <div v-if="a">
    <b-container class="bv-example-row">
          <b-row class="text-center">
            <b-col></b-col>

            <b-col cols="8">
              <div>
                <img src="./img/logo.png" id="logo">
              </div>

              <div>

                <div>

                  <b-input-group>
                
                    <b-form-input type="text" v-model="searchedValue"></b-form-input>
                
                    <b-input-group-append>
                      <b-button variant="outline-secondary" v-on:click="search">Search</b-button
                      v-bind:search = 'search'>
                    </b-input-group-append>

                  </b-input-group>

                </div>

              </div>
          
            </b-col>

            <b-col></b-col>
          </b-row>
        </b-container>
    </div>
    <div v-else-if="b"><results-data v-bind:searchedValue = searchedValue></results-data></div>`,
};

Vue.component('results-data', {
  props: ['searchedValue', 'search'],
  template: /*html*/`
  <div>
  <b-container class="bv-example-row">
        <b-row class="text-center">
          <b-col></b-col>

          <b-col cols="8">
            <div>
              <img src="./img/logo.png" id="logo">
            </div>

            <!-- <div>

            <b-input-group>
          
              <b-form-input type="text" v-model="searchedValue"></b-form-input>
          
              <b-input-group-append>
                <b-button variant="outline-secondary" v-on:click="search">Search</b-button>
              </b-input-group-append>

            </b-input-group>

          </div> -->

            <div>

              <h1>{{ searchedValue }}</h1>

            </div>
        
          </b-col>

          <b-col></b-col>
        </b-row>
      </b-container>
  </div>`,
})