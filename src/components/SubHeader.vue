<template>
  <div class="sub-header p-15 background-default">
    <h1 class="title">{{ computed_title }}</h1>
    <div class="description">{{ computed_description }}</div>
  </div>
</template>
<script>
export default {
  name: 'sub-header',
  props: {
    title: {
      type: String,
      default: 'Car Dimensions'
    },
    description: {
      type: String,
      default: `Ever wanted to know the dimensions of a car? It's useful to determine if a car will fit into your garage, for parking and car park restrictions and to know if there is space in the car for all your daily needs. We have provided the dimensions for a wide range of makes and models by year for you to easily and quickly view all you need to know.`
    },
    payload: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    computed_title: function() {
      const payload = {...this.payload};
      if (Object.keys(payload).length > 0) {
        return `${payload.year} ${payload.make} ${payload.model} Car Dimensions`;
      } else {
        return this.title;
      }
    },
    computed_description: function() {
      const payload = {...this.payload};
      if (Object.keys(payload).length > 0) {
        return `The dimensions shown below are the height, width and length of each variant for the ${payload.make} ${payload.model} ${payload.year}. Accessories not included. The height measured from the ground to the top of the car, ranges from ${payload.minimums.height}cm to ${payload.maximums.height}cm depending on the variant. The width ranges from ${payload.minimums.width}cm to ${payload.maximums.width}cm. The length ranges from ${payload.minimums.length}cm to ${payload.maximums.length}cm.`
      } else {
        return this.description;
      }
    }
  }
}
</script>
<style scoped>
  
</style>
