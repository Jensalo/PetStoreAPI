function fn() {
  var env = karate.env; // obtiene el valor de la propiedad del sistema 'karate.env'
  karate.log('karate.env seleccionado fue:', env);
  
  if (!env) {
    env = 'dev'; // valor por defecto cuando ningún env está especificado
  }
  
  var config = {
    env: env,
    baseUrl: 'https://petstore.swagger.io/v2'
  };
  
  if (env == 'dev') {
    config.baseUrl = 'https://petstore.swagger.io/v2';
  } else if (env == 'test') {
    config.baseUrl = 'https://petstore.swagger.io/v2';
  } else if (env == 'prod') {
    config.baseUrl = 'https://petstore.swagger.io/v2';
  }
  
  karate.log('configuracion final:', config);
  return config;
}
