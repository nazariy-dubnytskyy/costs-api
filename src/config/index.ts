import devConfig from './config.dev';

let config: any;

function getConfig(): any {
  if (config) {
    return config;
  }

  switch (process.env.NODE_ENV || 'development') {
    // Overwrite default values for production if required
    case 'production':
//      config = live;
      break;
    case 'development':
      config = devConfig;
      break;
    case 'staging':
//      config = staging;
      break;
  }

  return config;
}

export default getConfig();
