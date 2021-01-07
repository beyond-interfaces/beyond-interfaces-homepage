export const mobileDetection = {
  methods: {
    isMobile() {
      if (process.browser) {
        return window.screen.width < 960;
      }
      return false;
    }
  }
};
