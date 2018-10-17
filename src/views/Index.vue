<template lang="html">
  <div class="container">
    <div class="row">
      <!-- Content section -->
            <div class="container">
                  <div class="row justify-content-center">
                      <div class="col-lg-1"></div>
                      <div class="col-sm ">
                          <div>
                              <h3>Bebida:</h3>
                              <b-form-select v-model="data.bebida" class="custom-select" id="Tipo_Vaso">
                                  <option :value="null">Elige...</option>
                                  <option value="coca cola">Coca Cola</option>
                                  <option value="sprite">Sprite</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                </b-form-select>
                          </div>
                      </div>
                      <div class="col-sm h-100 justify-content-center align-items-center">

                              <div class="form-group ">
                                      <h3>Proporción:</h3>
                                      <input v-model="data.proporcion" type="range" class="form-control-range" min="0" max="100" step="1" id="formControlRange">
                              </div>
                      </div>
                      <div class="col-sm">
                          <div>
                              <h3>Alcohol:</h3>
                              <b-form-select v-model="data.alcohol" class="custom-select" id="Tipo_Vaso">
                                  <option :value="null">Elige...</option>
                                  <option value="vodka">Vodka</option>
                                  <option value="pisco">Pisco</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                </b-form-select>
                          </div>
                      </div>
                      <div class="col-lg-1"></div>


                  </div>
                  <br><br>
                  <!--Aqui iran las opciones de vasos y hielos-->
                  <div class="form-row">
                      <div class="col-sm-2"></div>
                      <div class="col">
                        <h3>Tipo de vaso:</h3>
                        <b-form-select v-model="data.vaso" class="custom-select" id="Tipo_Vaso">
                            <option :value="null">Elige...</option>
                            <option value="enfermo">Vaso 1 Lt.</option>
                            <option value="grande">Vaso 500 cc.</option>
                            <option value="medio">Vaso 250 cc.</option>
                            <option value="chico">Vaso 200 cc.</option>
                          </b-form-select>
                      </div>
                      <div class="col-sm-1"></div>
                      <div class="col">
                        <h3>Cantidad de hielos:</h3>
                        <select v-model="data.hielos" class="custom-select" id="Cant_Hielos">
                            <option value="0">Sin hielo</option>
                            <option value="1">1 hielo</option>
                            <option value="2">2 hielos</option>
                            <option value="3">3 hielos</option>
                            <option value="4">4 hielos</option>
                          </select>
                      </div>
                      <div class="col-sm-2"></div>
                  </div>
                  <br><br>
                  <div>
                      <button :class="{'disabled': busy}" @click="sirve" type="submit" class="btn btn-dark btn-lg btn-block">Sírvemelo!</button>
                  </div>
            </div>

          <!-- Image Section - set the background image for the header in the line below -->
          <section class="py-5 bg-image-full" style="background-image: url('https://unsplash.it/1900/1080?image=1078');">
            <!-- Put anything you want here! There is just a spacer below for demo purposes! -->
            <div style="height: 200px;"></div>
          </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {

  },
  data(){
    return {
      data: {
        bebida:null,
        proporcion: 0,
        alcohol: null,
        vaso: null,
        hielos: 0,
        percentAlcohol:0,
        percentBebida:0,
      },
      busy:false
    }
  },
  created(){

  },
  mounted(){

  },
  methods: {
    sirve(){
      this.busy=true;
      this.data.percentAlcohol = parseInt(this.data.proporcion);
      this.data.percentBebida = 100-this.data.percentAlcohol;
      console.log(this.data);
      /*
      axios.post('/api/sirvemelo', this.data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
       console.error(err);
      })
      .then(() => {
        this.busy=false;
      });
      */
      this.busy=false;
    }
  }
}
</script>

<style lang="css">
</style>
