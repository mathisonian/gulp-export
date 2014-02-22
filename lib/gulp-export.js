/*
 * gulp-transform
 * https://github.com/mathisonian/gulp-transform
 *
 * Copyright (c) 2014 Matthew Conlen
 * Licensed under the MIT license.
 */

'use strict';

var through = require('through2');

module.exports = function() {

    var transform = function(file, env, cb) {
        file.contents = new Buffer('module.exports = ' + file.contents);
        cb(null, file);
    };

    return through.obj(transform);
};
