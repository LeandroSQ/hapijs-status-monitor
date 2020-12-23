const defaultConfig = require('./default-config');

module.exports = (config) => {
  const cfg = config;

  if (!cfg) {
    return defaultConfig;
  }

  // Maps every property inside the strings object
  if (!cfg.strings) cfg.strings = {};
  for (let property in defaultConfig.strings) {
    if (!defaultConfig.strings.hasOwnProperty(property)) continue;

    if (typeof cfg.strings[property] !== 'string') {
      cfg.strings[property] = defaultConfig.strings[property];
    }
  }

  if (typeof cfg.title !== 'string') {
    cfg.title = defaultConfig.title;
  }

  if (typeof cfg.path !== 'string') {
    cfg.path = defaultConfig.path;
  }

  if (typeof cfg.spans !== 'object') {
    cfg.spans = defaultConfig.spans;
  }

  if (typeof cfg.routeConfig !== 'object') {
    cfg.routeConfig = defaultConfig.routeConfig;
  }

  if (typeof cfg.websocket !== 'object') {
    cfg.websocket = defaultConfig.websocket;
  }

  return cfg;
};
