<template>
  <section :id="name" class="section__spacing" :class="{ 'section--shifted': shifted }" :style="styleObject">
    <div class="container" :class="{ inverted: inverted, flex: image }">
      <div class="logo">
        <slot name="image"></slot>
      </div>
      <article>
        <h2>
          <slot name="title"></slot>
        </h2>
        <slot name="description"></slot>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props: ['bgColor', 'name', 'image', 'inverted', 'shifted'],
  data() {
    return {
      styleObject: {
        'background-color': this.bgColor ? this.bgColor : 'var(--color-white)'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
$section-paragraph-width: 65%;

section {
  &.section--shifted {
    @include breakpoint('m') {
      .container > article {
        margin-left: calc(12 * var(--spacing-m));
      }
    }
  }

  & .container {
    padding: var(--spacing-m);

    &.inverted {
      color: var(--color-white);
    }

    &.flex {
      display: flex;
    }

    @include breakpoint('m') {
      padding: var(--spacing-xl) var(--spacing-xl);

      > article {
        width: $section-paragraph-width;
        margin-left: var(--spacing-m);
      }
    }
  }
}
</style>
