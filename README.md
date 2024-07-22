# Portfolio <img src="https://erickgolos.com/images/logo.svg" alt="erick golos" width="20px" /> [![GitHub](https://img.shields.io/github/license/lurrik/portfolio?color=blue)](https://github.com/Lurrik/portfolio/blob/develop/LICENSE.md) ![GitHub stars](https://img.shields.io/github/stars/lurrik/portfolio) ![GitHub forks](https://img.shields.io/github/forks/lurrik/portfolio)

I created this portfolio for myself, but I wanted to share it with other developers in case it might be useful to you ! 😉

## Features

🎯 Modern UI Design + Reveal Animations\
🎯 One Page Layout and mulitple on mobile\
🎯 Fully Responsive\
🎯 Progressive Web App\
🎯 Valid HTML5 & CSS3\
🎯 Optimized with Quasar\
🎯 SEO (Search Engine Optimization)

To view the demo (my website): **[click here](https://erickgolos.com/)**

---

## Why do you need a portfolio? ☝️

- Professional way to showcase your work
- Increases your visibility and online presence

## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.

```
node@v18.12.1 or higher
npm@8.19.2 or higher
```

Note: I recommande you to use [nvm](https://github.com/coreybutler/nvm-windows) to manage your node versions

## How To Use 🔧

From your command line, first clone Portfolio:

```bash
# Clone the repository
$ git clone https://github.com/lurrik/portfolio

# Move into the repository
$ cd portfolio

# Remove the current origin repository
$ git remote remove origin
```

After that, you can install the dependencies either using NPM or Yarn.

Using NPM: Simply run the below commands.

```bash
# Install dependencies
$ npm install

# Start the development server (spa)
$ npm run dev

# Start the development server (pwa)
$ npm run pwa

### Build the app for production (spa)
$ npm run build

### Build the app for production (pwa)
$ npm run build-pwa

```

Using Yarn: Be aware of that you'll need to delete the `package-lock.json` file before executing the below commands.

```bash
# Install dependencies
$ yarn

# Start the development server
$ yarn start
```

**NOTE**:
If your run into issues installing the dependencies with NPM, use this below command:

```bash
# Install dependencies with all permissions
$ sudo npm install --unsafe-perm=true --allow-root
```

## Technologies used 🛠️

- [Vue 3](https://vuejs.org/) - Frontend framework
- [Quasar](https://quasar.dev/) - Front-end framework with VueJS
- [Pinia](https://pinia.vuejs.org/) - State management
- [Typescript](https://www.typescriptlang.org/) - Extends JavaScript by adding types to the language
- [Sass](https://sass-lang.com/documentation) - CSS extension language

## Authors

- **Erick Golos** - [https://github.com/lurrik](https://github.com/lurrik)

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
