const STATIC_CACHE = 'v1';
const DYNAMIC_CACHE = 'dv1';

const icons = [
  'assets/postgre.png',
  'assets/python.png',
  'assets/react.png',
  'assets/next.png',
  'assets/redux.png',
  'assets/js.png',
  'assets/docker.png',
  'assets/gatsby.png',
  'assets/typescript.png',
  'assets/github.png',
  'assets/serverless.png',
  'assets/css.png',
  'assets/jira.png',
  'assets/html5.png',
  'assets/terminal.png',
  'assets/git.png',
  'assets/graphql.png',
  'assets/sass.png',
  'assets/jwt.png',
  'assets/aws.png',
  'assets/linux.png',
  'assets/webpack.png',
  'assets/mongodb.png',
  'assets/arch.png',
  'assets/express.png',
  'assets/redis.png',
  'assets/node-js.png',
  'assets/firebase.png'
];

const filesToChache = [
  '',
  'index.html',
  'main.js',
  'style.css',
  'pages/offline.html',
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap',
  ...icons
];


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        cache.addAll(filesToChache);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(keys => {
        if (keys.length) {
          console.log('Cached successfully!');
        }
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(res => {
        return res ? res : (
          fetch(event.request).then(async result => {
            try {
              const cache = await caches.open(DYNAMIC_CACHE);
              if(event.request.url.match("^(http|https)://")) {
                cache.put(event.request.url, result.clone());   
                return result;
              }
            } catch (error) {
              console.log('Error', error);
            }
          })
        )
      }).catch(() => {
        const isNotAnIcon = event.request.url.indexOf('.html') !== -1;
        if (isNotAnIcon) return caches.match('.pages/offline.html');
      })
  );
});
