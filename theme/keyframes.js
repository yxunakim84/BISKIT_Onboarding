const keyframes = {
  fadeIn: {
    from: {
      opacity: "0",
    },
    to: {
      opacity: "1",
    },
  },
  fadeOut: {
    from: {
      opacity: "1",
    },
    to: {
      opacity: "0",
    },
  },
  bounceAnimation: {
    "0%, 20%, 50%, 80%, 100%": {
      transform: "translateY(0)",
    },
    "40%": {
      transform: "translateY(-20px)",
    },
    "60%": {
      transform: "translateY(-10px)",
    },
  },
  infiniteScroll: {
    from: { transform: "translateX(0)" },
    to: { transform: "translateX(-100%)" },
  },
};

module.exports = keyframes;
