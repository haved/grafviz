# Grafviz

A website for visualizing a few different graph based data structures and algorithms.  
Built using Vue and Typescript.

### Try it out
I will host it once it can show something :)

### Setup
Install dependencies
```
yarn install
```

Start a local server with hot-reloading
```
yarn serve
```

Or build a production build with
```
yarn build
```

### How it was made
First made a vue project, being careful about removing old global node_modules
folders lying around, and having `~/.yarn/bin` in PATH.
``` sh
yarn global add @vue/cli @vue/cli-service-global
vue create grafviz
```

My create looked like this:
```
Vue CLI v4.3.1
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, CSS Pre-processors, Linter
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Basic
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
```
