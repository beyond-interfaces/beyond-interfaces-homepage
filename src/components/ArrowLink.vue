<template>
  <g-link :to="href" class="arrow-link" :style="styleObject">
    <ArrowRight /><span>{{ text }}</span>
  </g-link>
</template>

<script>
import ArrowRight from '~/assets/icons/icon_arrow--right.svg?inline';

export default {
  components: { ArrowRight },
  props: ['text', 'href', 'color'],
  data() {
    return {
      styleObject: {
        color: this.color || 'var(--color-grey)',
        fill: this.color || 'var(--color-grey)'
      }
    };
  }
};
</script>

<style lang="scss">
.arrow-link {
  display: flex;
  align-items: top;
  font-weight: 700;
  margin-bottom: var(--spacing-m);
  span {
    margin-top: 1px;
    line-height: 24px;
  }
  svg {
    width: 30px;
    height: 26px;
    margin-right: 10px;
  }
}
</style>
