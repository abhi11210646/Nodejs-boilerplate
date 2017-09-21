module.exports = {
    development: {
        db: process.env.DB_DEV
    },
    production: {
        db: process.env.DB_LIVE
    },
}[process.env.NODE_ENV || 'development'];
