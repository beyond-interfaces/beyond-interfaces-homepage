export const mobileDetection = {
  methods: {
    isMobile() {
      if (process.isServer) {
        return false
      }
      return window.screen.width < 960;
    }
  }
};
