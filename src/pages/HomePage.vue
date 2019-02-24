<template>
  <div class="home-page p-15 background-default">
    <div class="p-30 background-primary">
      <label class="text-white"><b>Search Dimensions</b></label>
      <div class="filter-container d-flex justify-content-between">
        <div>
          <select class="w-100" name="make" required v-model="filter.make_id">
            <option value="">Select Make<sup>*</sup></option>
            <option :value="make.id" v-for="make in makes" :key="make.id">{{ make.name }}</option>
          </select>
        </div>
        <div>
          <select class="w-100" name="model" required v-model="filter.model_id">
            <option value="">Select Model<sup>*</sup></option>
            <option :value="model.id" v-for="model in models" :key="model.id">{{ model.name }}</option>
          </select>
        </div>
        <div>
          <select class="w-100" name="year" required v-model="filter.year">
            <option value="">Select Year<sup>*</sup></option>
            <option :value="year" v-for="year in years" :key="year">{{ year }}</option>
          </select>
        </div>
        <div>
          <button class="w-100" @click="getAllDimensions()">Show Dimensions</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import apis from '../apis';

export default {
  name: 'home-page',
  data() {
    return {
      makes: [],
      models: [],
      years: [],
      filter: {
        make_id: '',
        model_id: '',
        year: ''
      }
    };
  },
  watch: {
    // it triggers the change of models
    // set both model_id and year to be empty
    'filter.make_id': function() {
      this.years = [];
      this.filter = Object.assign({}, this.filter, {
        model_id: '',
        year: ''
      });
      this.getAll('models');
    },
    // it triggers the change of years
    // set year to be empty
    'filter.model_id': function(newVal) {
      if (newVal != '') {
        this.filter.year = '';
        this.getAll('years');
      }
    }
  },
  methods: {
    getAll: function(resource, page = 1) {
      switch (resource) {
        case 'makes':
          apis.list('makes', { page })
            .then(data => {
              if (data.data) {
                data.data.map(d => {
                  this.makes.push(d);
                });
              }
              if (data.next_page_url != null) {
                this.getAll('makes', ++page);
              }
            });
          break;
        case 'models':
          apis.list('models', { make_id: this.filter.make_id, page })
            .then(data => {
              if (data.data) {
                this.models = data.data;
              }
            });
          break;
        case 'years':
          apis.list('vehicles/years', { make_id: this.filter.make_id, model_id: this.filter.model_id })
            .then(data => {
              if (data.data) {
                this.years = data.data.sort();
              }
            });
          break;
        default:

      }
    },
    getAllDimensions: function() {
      const make = this.makes.find(make => {
        return make.id == this.filter.make_id;
      });
      if (! make) {
        alert('Please select the make.');
        return;
      }

      const model = this.models.find(model => {
        return model.id == this.filter.model_id;
      });
      if (! model) {
        alert('Please select the model.');
        return;
      }

      const year = this.years.find(year => {
        return year == this.filter.year;
      })
      if (! year) {
        alert('Please select the year.');
        return;
      }

      this.$router.push(`dimension?make=${make.name}&model=${model.name}&make_seo=${make.name_seo}&model_seo=${model.name_seo}&year=${this.filter.year}&cleanse=true`);
    }
  },
  mounted: function() {
    this.$emit('sub-header:update', {});
    // init the makes array after mounted
    this.getAll('makes');
  }
}
</script>
<style scoped>
  .filter-container > div {
    width: 23%;
  }
  .filter-container > div > select,
  .filter-container > div > button {
    height: 40px;
  }
  .filter-container > div > button {
    font-weight: 700;
    color: white;
    border-radius: 5px;
    border-color: maroon;
    background-color: maroon;
  }
  @media screen and (max-width: 768px) {
    .filter-container {
      flex-direction: column;
    }
    .filter-container > div {
      width: 100%;
    }  
  }
</style>
