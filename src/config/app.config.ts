//archivo de configuracion de las varibales de entorno

export const EnvConfiguration = () => ( {
    enviroment : process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002,
    defaultLimit: +process.env.DEFAULT_LIMIT || 7 
})

//aca mapeo mis variables de entorno a un objeto de configuracion de variables de entorno