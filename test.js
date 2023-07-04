//Problem 1: multer => upload.single() => two or more file upload problem


// MulterError: Unexpected field
//     at wrappedFileFilter (/home/bepul/Learning-in-S/auth-crud-assign/node_modules/multer/index.js:40:19)
//     at Multipart.<anonymous> (/home/bepul/Learning-in-S/auth-crud-assign/node_modules/multer/lib/make-middleware.js:107:7)
//     at Multipart.emit (node:events:513:28)
//     at HeaderParser.cb (/home/bepul/Learning-in-S/auth-crud-assign/node_modules/busboy/lib/types/multipart.js:358:14)
//     at HeaderParser.push (/home/bepul/Learning-in-S/auth-crud-assign/node_modules/busboy/lib/types/multipart.js:162:20)
//     at SBMH.ssCb [as _cb] (/home/bepul/Learning-in-S/auth-crud-assign/node_modules/busboy/lib/types/multipart.js:394:37)
//     at feed (/home/bepul/Learning-in-S/auth-crud-assign/node_modules/streamsearch/lib/sbmh.js:248:10)
//     at SBMH.push (/home/bepul/Learning-in-S/auth-crud-assign/node_modules/streamsearch/lib/sbmh.js:104:16)
//     at Multipart._write (/home/bepul/Learning-in-S/auth-crud-assign/node_modules/busboy/lib/types/multipart.js:567:19)
//     at writeOrBuffer (node:internal/streams/writable:391:12)