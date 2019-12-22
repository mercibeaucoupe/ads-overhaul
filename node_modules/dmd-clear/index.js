// see source for https://github.com/jsdoc2md/dmd-bitbucket

module.exports = function(){
    return {
        partial: __dirname + "/partials/**/*.hbs",
        helper: __dirname + "/helpers/**/*.js"
    };
};