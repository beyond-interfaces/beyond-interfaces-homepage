<template>
  <section id="name" class="section__spacing" :style="styleObject">
    <div class="container" :class="{ inverted: bgColor }">
      <slot name="image" v-if="image">
        <component :is="'image'"></component>
      </slot>
      <article>
        <h2>
          <slot name="title"></slot>
        </h2>
        <p>
          <slot name="description"></slot>
        </p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props: ['bgColor', 'image'],
  data() {
    return {
      styleObject: {
        background: this.bgColor ? `var(--color-${this.bgColor})` : 'var(--color-white)'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
$section-min-height: 460px;

section {
  min-height: $section-min-height;

  & .container {
    padding: var(--spacing-m);

    &.inverted {
      color: var(--color-white);
    }

    @include breakpoint('m') {
      padding: va(--spacing-l) var(--spacing-xl);
    }
  }
}
</style>
