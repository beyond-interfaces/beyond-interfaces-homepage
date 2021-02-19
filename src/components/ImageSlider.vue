<template>
  <div class="image-slider">
    <div class="image-slider__container">
      <div class="image-slider__track" :style="containerStyles">
        <div
          class="image-slider__slide"
          :class="{ active: activeSlide === i }"
          v-for="(slide, i) in slides"
          :key="slide"
        >
          <g-image class="image" :src="slide" :style="`width: ${sliderOptions.width}px`"></g-image>
        </div>
        <div
          class="image-slider__slide-clone"
          :class="{ active: activeSlide === i }"
          v-for="(slide, i) in slides"
          :key="slide"
        >
          <g-image class="image" :src="slide" :style="`width: ${sliderOptions.width}px`"></g-image>
        </div>
      </div>
    </div>

    <!-- <div class="image-slider__previous"></div>
    <div class="image-slider__next"></div> -->

    <div class="image-slider__navigation">
      <div v-for="(slide, i) in slides" :key="slide" class="slide-nav" @click="setSlide(i)"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        '/images/bif/bif_biking-720h.jpg',
        '/images/bif/bif_dom-720h.jpg',
        '/images/bif/bif_ngmeetup-720h.jpg',
        '/images/bif/bif_poolside-720h.jpg',
        '/images/bif/bif_techcampus-720h.jpg'
      ],
      sliderOptions: {
        width: 200
      },
      activeSlide: 0,
      containerStyles: {}
    };
  },
  watch: {
    activeSlide: function(index) {
      this.containerStyles = {
        width: `${this.slides.length * this.sliderOptions.width}px`,
        transform: `translate3D(${this.getSlidePosition(index)}px, 0px, 0px)`
      };
    }
  },
  mounted() {
    let counter = 0;
    setInterval(() => {
      this.activeSlide = counter;
      counter++;
      if (counter > this.slides.length) {
        counter = 1;
      }
    }, 2000);
  },
  methods: {
    setSlide(index) {
      this.activeSlide = index;
    },
    getSlidePosition(index) {
      return this.sliderOptions.width * index * -1;
    }
  }
};
</script>

<style lang="scss">
.image-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #333333;
  height: 650px;
  width: 2000px;
  overflow: hidden;

  &__previous,
  &__next {
    position: absolute;
    width: 40px;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 100;
    top: 0;
  }
  &__previous {
    left: 0;
  }
  &__next {
    right: 0;
  }

  &__container {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0 60px;
  }

  &__track {
    display: flex;
  }

  &__slide {
    height: 400px;
    transition: 2s;
  }

  &__navigation {
    position: absolute;
    width: 2000px;
    display: flex;
    justify-content: center;
    bottom: 50px;
  }

  .slide-nav {
    border: 2px solid var(--color-primary);
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s;

    &:not(:last-child) {
      margin-right: 40px;
    }

    &:hover {
      background: var(--color-primary);
    }
  }
}
</style>
