/** Reminder Config Types
interface Config {
    readonly useMockApi: boolean          // NOTE: useMockApi should only be set to true for local development!
    readonly disableAnalytics: boolean    // NOTE: disableAnalytics should only be set to true for local development!
    readonly NODE_ENV: string             // NOTE: Use 'production' for production-optimized build.
    readonly googleAnalyticsKey: string   // NOTE: Is only used if disableAnalytics is false.
}
*/

/**TODO: set keys
const GA_KEYS = {
    local: '',
    dev: '',
    prod: ''
}
*/

//prod config
const prodConfig = {
    useMockApi: false,
    disableAnalytics: false,
    environment: 'production',
    //googleAnalyticsKey: GA_KEYS.prod 
};

//dev config
const devConfig = {
    useMockApi: false,
    disableAnalytics: false,
    environment: 'development',
    //googleAnalyticsKey: GA_KEYS.dev
}

//local config
const localConfig = {
    useMockApi: false,
    disableAnalytics: true,
    environment: 'local',
    //googleAnalyticsKey: GA_KEYS.local
}

const getNodeEnv = (environment) => {
    // Use 'production' for 'prod' and/or 'production'), and echo the given environment for anything else.
    if (environment === 'prod' || environment === 'production') {
        return 'production'
    } else {
        return environment
    }
}

/*  This method should be used to retreive google analytics key from environment variables for local development only. 
    Safeguards have been put in place to ensure this :) 
*/
const getGoogleAnalyticsKey = (environment, isAnalyticsDisabled) => {
    if ('prod' === environment) {
        throw new Error('Cannot dynamically set production Google Analytics key! Use static settings in prodConfig instead.')
    }
    else if ('dev' === environment) {
        throw new Error('Cannot dynamically set dev Google Analytics key! Use static settings in devConfig instead.')
    }
    else if ('local' === environment && !isAnalyticsDisabled) {
        return GA_KEYS.local
    } else {
        return undefined
    }
}

const getBooleanValue = (field, booleanEnv, defaultBoolean) => {
    if (undefined === booleanEnv) {
        return defaultBoolean
    }

    try {
        const booleanValue = JSON.parse(booleanEnv)
        if ('boolean' === typeof(booleanValue)) {
            return booleanValue
        }
        console.warn(`Tried to set boolean required ${field} to ${booleanEnv}, defaulting to ${field} = ${defaultBoolean}`)
        return defaultBoolean
    } catch (err) {
        console.warn(`Tried to set boolean required ${field} to ${booleanEnv}, defaulting to ${field} = ${defaultBoolean}`)
        return defaultBoolean
    }
}

const generateConfig = (env) => {
    const disableAnalytics = getBooleanValue('disableAnalytics', env.DISABLE_ANALYTICS, true) 
    console.log('getNo')
    return {
        environment: getNodeEnv(env.environment),
        disableAnalytics: disableAnalytics,
        useMockApi: getBooleanValue('useMockApi', env.USE_MOCK, false)
        //googleAnalyticsKey: getGoogleAnalyticsKey(env.ENV, disableAnalytics)
    }
}

module.exports = {
    generateConfig,
    prodConfig,
    devConfig,
    localConfig 
}