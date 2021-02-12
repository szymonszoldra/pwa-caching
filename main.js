if ('serviceWorker' in navigator){
  navigator.serviceWorker.register('/serviceWorker.js')
    .then(reg => console.log('Service worker registered!', reg))
    .catch(err => console.log('Failed!', err));
}

const icons = [
  '/assets/postgre.png',
  '/assets/python.png',
  '/assets/react.png',
  '/assets/next.png',
  '/assets/redux.png',
  '/assets/js.png',
  '/assets/docker.png',
  '/assets/gatsby.png',
  '/assets/typescript.png',
  '/assets/github.png',
  '/assets/serverless.png',
  '/assets/css.png',
  '/assets/jira.png',
  '/assets/html5.png',
  '/assets/terminal.png',
  '/assets/git.png',
  '/assets/graphql.png',
  '/assets/sass.png',
  '/assets/jwt.png',
  '/assets/aws.png',
  '/assets/linux.png',
  '/assets/webpack.png',
  '/assets/mongodb.png',
  '/assets/arch.png',
  '/assets/express.png',
  '/assets/redis.png',
  '/assets/node-js.png',
  '/assets/firebase.png'
];

const fragment = document.createDocumentFragment();

icons.forEach(iconSrc => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = iconSrc;
  img.alt = 'icon';
  li.appendChild(img);
  fragment.appendChild(li);
});

document.querySelector('ul').appendChild(fragment);