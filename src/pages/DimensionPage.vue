<template>
  <div class="p-15 background-default">
    <table class="w-100">
      <thead class="background-dark text-white">
        <tr>
          <td>Variant</td>
          <td>HxWxL (cm)</td>
          <td>Kerb Weight (kg)</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(d, index) in dimensions" :key="index">
          <td class="variant">{{ d.variant }}</td>
          <td>{{ `${d.height}x${d.width}x${d.length}` }}</td>
          <td>{{ d.kerb_weight }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import apis from '../apis';
export default {
  name: 'dimension-page',
  data() {
    return {
      dimensions: []
    };
  },
  mounted: function() {
    const query = this.$route.query;
    apis.list('dimensions', query)
      .then(({ data }) => {
        if (data.dimensions) {
          this.$emit('sub-header:update', {
            year: query.year,
            make: query.make,
            model: query.model,
            minimums: data.minimums,
            maximums: data.maximums
          });
          data.dimensions.map(d => {
            this.dimensions.push(d);
          });
        }
      });
  }
}
</script>
<style scoped>
table > tbody > tr:nth-of-type(odd) {
  background-color: #c3c3c3;
}
table td {
  padding: 5px;
}
.variant {
  color: #cc5050;
  font-weight: 700;
}
</style>

