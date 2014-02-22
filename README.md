# gulp-export 

module.export the contents of a file

## Getting Started
Install the module with: `npm install --save-dev gulp-export`

```javascript
var exportAsModule = require('gulp-export');

gulp.task('data', function() {
    return gulp.src('data/**/*.json')
        .pipe(exportAsModule())
        .pipe(gulp.dest('./src/js/data'));
});
```

This will transform a file like

```js

{
  'key': 'value'
}
```

to 

```js
module.exports = {
  'key': 'value'
}
```

so that you can use this file, e.g. in conjunction with browserify.

## License
Copyright (c) 2014 Matthew Conlen. Licensed under the MIT license.
