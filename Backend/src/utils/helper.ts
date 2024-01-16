import log from "./logger"
export const info = () => {
    log.info(`📦 Env: ${process.env.APP_ENV}`)
    log.info(`🚀 Rolling on ${process.env.PORT}`)
}