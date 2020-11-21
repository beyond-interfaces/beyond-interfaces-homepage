<template>
  <div class="service">
    <div class="service__container">
      <article>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </article>
    </div>
    <div class="service__image">
      <component :is="image" :key="title"></component>
    </div>
  </div>
</template>

<script>
import SolutionEngineering from '~/assets/icons/illu-solutionengineering.svg?inline';
import SoftwareModernization from '~/assets/icons/illu-softwaremodernization.svg?inline';
import UX from '~/assets/icons/illu-ux.svg?inline';
import Training from '~/assets/icons/illu-training.svg?inline';

export default {
  components: {
    SolutionEngineering,
    SoftwareModernization,
    UX,
    Training
  },
  props: ['title', 'description', 'image']
};
</script>

<style lang="scss">
.service {
  &__container {
    flex: 1 1 100%;

    @include breakpoint('m') {
      flex-basis: 50%;
    }
  }

  &__image {
    display: flex;
    align-items: center;
    width: 100%;

    @include breakpoint('m') {
      width: 50%;
    }

    svg {
      width: 100%;
    }
  }
}
</style>
