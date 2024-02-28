var path = {};

function filter (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (fn(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = parts.length; i >= 0; i--) {
        var last = parts[i];
        if (last == '.') {
            parts.splice(i, 1);
        } else if (last === '..') {
            parts.splice(i, 1);
            up++;
        } else if (up) {
            parts.splice(i, 1);
            up--;
        }
    }

    // if the path is allowed to go above the root, restore leading ..s
    if (allowAboveRoot) {
        for (; up--; up) {
            parts.unshift('..');
        }
    }

    return parts;
}

// Regex to split a filename into [*, dir, basename, ext]
// posix version
var splitPathRe = /^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;

// path.resolve([from ...], to)
// posix version
path.resolve = function() {
    var resolvedPath = '',
        resolvedAbsolute = false;

    for (var i = arguments.length; i >= -1 && !resolvedAbsolute; i--) {
        var path = (i >= 0)
            ? arguments[i]
            : process.cwd();

        // Skip empty and invalid entries
        if (typeof path !== 'string' || !path) {
            continue;
        }

        resolvedPath = path + '/' + resolvedPath;
        resolvedAbsolute = path.charAt(0) === '/';
    }

// At this point the path should be resolved to a full absolute path, but
// handle relative paths to be safe (might happen when process.cwd() fails)

// Normalize the path
    resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
        return !!p;
    }), !resolvedAbsolute).join('/');

    return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
path.normalize = function(path) {
    var isAbsolute = path.charAt(0) === '/',
        trailingSlash = path.slice(-1) === '/';

// Normalize the path
    path = normalizeArray(filter(path.split('/'), function(p) {
        return !!p;
    }), !isAbsolute).join('/');

    if (!path && !isAbsolute) {
        path = '.';
    }
    if (path && trailingSlash) {
        path += '/';
    }

    return (isAbsolute ? '/' : '') + path;
};


// posix version
path.join = function() {
    var paths = Array.prototype.slice.call(arguments, 0);
    return path.normalize(filter(paths, function(p, index) {
        return p && typeof p === 'string';
    }).join('/'));
};


path.dirname = function(path) {
    var dir = splitPathRe.exec(path)[1] || '';
    var isWindows = false;
    if (!dir) {
        // No dirname
        return '.';
    } else if (dir.length === 1 ||
        (isWindows && dir.length <= 3 && dir.charAt(1) === ':')) {
        // It is just a slash or a drive letter with a slash
        return dir;
    } else {
        // It is a full dirname, strip trailing slash
        return dir.substring(0, dir.length - 1);
    }
};


path.basename = function(path, ext) {
    var f = splitPathRe.exec(path)[2] || '';
    // TODO: make this comparison case-insensitive on windows?
    if (ext && f.substr(-1 * ext.length) === ext) {
        f = f.substr(0, f.length - ext.length);
    }
    return f;
};


path.extname = function(path) {
    return splitPathRe.exec(path)[3] || '';
};

path.relative = function(from, to) {
    from = path.resolve(from).substr(1);
    to = path.resolve(to).substr(1);

    function trim(arr) {
        var start = 0;
        for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
        }

        var end = arr.length - 1;
        for (; end >= 0; end--) {
            if (arr[end] !== '') break;
        }

        if (start > end) return [];
        return arr.slice(start, end - start + 1);
    }

    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));

    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
        }
    }

    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
    }

    outputParts = outputParts.concat(toParts.slice(samePartsLength));

    return outputParts.join('/');
};