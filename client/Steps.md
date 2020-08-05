# Steps

**Install dendencies**


| Dependency | Command |
| - | - |
| react | npm i react |
| react-dom | npm i react-dom |

Note: This is not the final list. I will add dependencies as and when required.

Install dev dependencies


| Dependency | Command |
| - | - |
| typescript | `npm i -D typescript` |
| react types | `npm i -D @types/react @types/react-dom` |

Note:
I am installing only react & reactDOM as main depnendency cause we don't want typescript as our main dependeny it is just a development tool and not a project dependency. The typescript will convert your .ts/.tsx files into .js file using typescript compiler. This .js file contains your project dependencies(react & reactDOM for the moment ) and your code files(react components for the moment and later your server files) which will be served by your server. Thus, we don't require typescript when publishing the final output.

Again this is not final list of dev dependencies I will add it as and when required.

**Setup .gitignore**

Add `.gitignore` file to root directory. We want few folders/ files not be part of our git repository, thus setting up .gitignore. For now I will add only node_modules, going forward may add few more things. I will mention those file as and when required.

**Setup tsconfig**

Add `tsconfig.json` file into your root diretory. This will tell typescript compiler, how the output should look like. Checkout the config file for more details.

**Setup linting**

Add  linting to your project. This will keep your code in check for readability, maintainability and functionality errors. Initially I was planning on using tslint but they have roadmap to deprecate tslint and use eslint for both javascript and typescript.

In order to add eslinting add following dependencies

`npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks`

Add `.eslintrc.js` in your root diretory. Checkout file for more details.

Add `.eslintignore` in your root directory. Checkout file for more details.

make sure that you have eslint extention enabled.

**Sample Test**

Add test.ts files and check the compiler works as expectd.

**Reconfigure .gitignore**

.gitgnore: add dist & .vscode folder to list of gitignore

Completed typescript setup

---

**Setup React**

Remove the test.ts file.

For the react I am going to use following directory structure

<p>src/
       components/ 
                  screens -> pages of react app
                  parts -> common parts to pages. e.g Header
       assets/
                 images 
                 styles
       declarations/ -> custom declarations 
       index.tsx -> root component

create the directory structure

Add code for your root component in index.tsx and create a demo component Hello.tsx in parts

Include this Hello component in root component

Add index.html to your client folder and refer dist/index.js

Now compile the code using tsc, Check the output by opening index.html file. You'll get an error: Uncaught TypeError: Failed to resolve module specifier "react". Relative references must start with either "/", "./", or "../"

The reason behind the failure is, the typescript compiler just converted your .ts files into .js files and did not pull dependencies(react & react-dom) and pushed them into ./dist/ directory.
To avoid this we will add react & react-dom dependencies into our index.html and remove react & react-dom reference from ./dist/index.js & ./dist/Hello.js

Even after this your code won't work as your browser doesn't understand how to resovle Hello module dependency. You can read more about module resolution at https://www.typescriptlang.org/docs/handbook/module-resolution.html
To avoid this make an absolute reference to Hello module in ./dist/index.js file. Use

`import Hello from "/client/dist/components/parts/Hello.js";`
Now your code works.

---

**Webpack Setup**

There are few problems with pervious stage, 1. You need to always modify ./dist/_.js files after you run typescript compiler. 2. Another problem is that we have to include external dependencies in ./index.html, again this is a pain as our project might have hundreds of dependencies.
We need something that will look up in our ./dist/_.js files and automatically add the dependencies and perform module resolution.And that is the whole reason of webpack, in addition to above things it also provide lots of benifits as we will see.

Install webpack dev dependency

`npm install --save-dev webpack webpack-cli html-webpack-plugin ts-loader file-loader source-map-loader webpack-dev-server`

Note: It is a dev dependency and not a project one.

Create a webpack configuration file in root directory. Check what we are doing in this file.

Remove reference to dist/index.js  and to react & react-dom

Checkout webpack scripts in package.json

Note: when you'll run start:dev script, the output will not be stored in dist folder rather webpack generates it on the fly and server it directly on the given port. To get the dist, use npm run webpack

**Segregate Webpack**

Currently I have single webpack config and it is a better idea to segregate it into dev and prod, this is a common requirement to have sepearte configuration for development and production.This not very difficult in webpack.

Create three files in root folder.

webpack.common.js
webpack.dev.js
webpack.prod.js

Now move all common configurations in common, development specific in dev and production specific in prod.

Install webpack merge package to merge your config
`npm i -D webpack-merge`

Merge your development and production config with common.

Create two new run scripts for dev and prod in package.json
Notice in webpack.prod.js the output file name includes a content hash so your main.js file is always latest. However there is a problem if you make changes to one of your component new set of main.[contentHash].js & main.[contentHash].map.js is created to avoid that problem you need another dev dependency.
`npm i -D clean-webpack-plugin`

This will clear your previous main.[contentHash].js & main.[contentHash].map.js.
Make sure no other process is using your project when running prod webpack config as it might have permission issues.

---

I have reconfigured webpack.common.js to include css and styles. check it.

I have renamed dist to build as it suits better.

I have reconfigured webpack.common.js to include template file into build using copy-webpack-plugin so that I don't have to include them into any react component rather I will refer them into index.html.

Since my base framework is ready, I have added components into src/component folder. I have separated web pages and its parts into components so that I can reuse them.

At this point my landing page is ready with dummy data. Now its time to create backend using node. I will revisit this project once the backed is ready.

---
