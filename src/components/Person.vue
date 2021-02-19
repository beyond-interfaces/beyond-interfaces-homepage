<template>
  <div class="person">
    <div class="person__image" v-if="!!imagePath">
      <g-image :src="require('!!assets-loader!~/assets/images' + imagePath)" />
    </div>

    <div class="person__container">
      <article>
        <h2>{{ fullName }}</h2>
        <p>{{ description }}</p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'fullName', 'description', 'imagePath']
};
</script>

<style lang="scss">
.person {
  display: flex;
  column-gap: var(--spacing-xl);

  &__image {
    img {
      border: 2px solid var(--color-primary);
      width: 200px;
      height: 200px;
    }
  }

  &__container {
    flex: 1 1 100%;

    @include breakpoint('m') {
      flex-basis: 50%;
    }
  }
}
</style>
