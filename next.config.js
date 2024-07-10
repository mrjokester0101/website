module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, { dev, isServer }) => {
    config.cache = {
      type: 'filesystem',
    };

    return config;
  },
};
