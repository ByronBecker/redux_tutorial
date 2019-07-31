module.exports = {
    roots: ["<rootDir>/test/testing"],
    verbose: true,
    //Module name mapper is for mocking assets (i.e. css files)
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/assetMock.js",
        "\\.(css|less)$|typeface-source-sans-pro": "identity-obj-proxy"
    },
    setupFiles: ["<rootDir>/test/setupTests.js"],
    
    /**
     * If an imported node module has not been transpiled and jest complains, add it to the transformIgnorePatterns below,
     * using the following pattern matching regex
     * 
     * "node_modules/(?!(moduleA|moduleB|moduleC|...rest of untranspiled modules)/)"
     * 
     * https://jestjs.io/docs/en/configuration.html#transformignorepatterns-array-string
     */
    //Example: transformIgnorePatterns: ["node_modules/(?!(d3-sankey)/)"]
    
}