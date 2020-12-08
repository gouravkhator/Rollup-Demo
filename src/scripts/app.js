import { foo } from './foo.js';

console.log(`Hello {{version}} ${foo()}`);

//here cache can have version which will be replaced by rollup while build
async function cachesImplement() {
    const cache = await caches.open('App__{{version}}');
    console.log('cache opened');
    // the path will be /dist/static/images/....
    //or static/images/...
    // but not relative to this file app.js
    //so, we cannot have ../static/images/wallpaper.jpg
    await cache.addAll(['static/images/wallpaper.jpg']);
}

cachesImplement();
