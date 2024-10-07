# nuxt-vue-test

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.



### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.
you can create many file inside layouts and call it inside screen page

More information about the usage of this directory in [the documentation](https://nuxt.com/docs/guide/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically and can contain a dynamic route.

More information about the usage of this directory in [the documentation](https://nuxt.com/docs/getting-started/routing).


### `plugins`

The plugins directory contains TypeScript plugins that you want to run before instantiating the root Vue.ts Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxt.com/docs/guide/directory-structure/plugins).


### `public`

This directory contains your public folder contain assets folder.

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

Example:
`/public/assets/fonts` contain custom font family.
`/public/assets/styles` contain the override file for antd design.
`/public/assets/transition` contain global styles (transition) can use inside all project.

More information about the usage of this directory in [the documentation](https://nuxt.com/docs/guide/directory-structure/public).


### `server`

This directory contains your pinia store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxt.com/docs/guide/directory-structure/server).


### `src`

The src directory contains your components and your types (declarations). Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxt.com/docs/guide/directory-structure/components).


### `app.vue`

The app.vue contain your Vue.ts components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxt.com/docs/guide/directory-structure/app)

