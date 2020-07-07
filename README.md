<div align="center">
    <img 
        src="https://github.com/luizsandoval/appizza/blob/master/app/src/assets/logo.svg" width="100" 
        height="160" 
    />
</div>
<br />

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT"/>
  <img src="https://img.shields.io/static/v1?label=Netlify&message=deploy&color=blue&style=for-the-badge&logo=netlify"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
</p>

> Status: Finished :heavy_check_mark:

### Summary 

:man_teacher: [Overview](#overview-man_teacher)

:bulb: [Functionalities](#functionalities-bulb)

:rocket: [Preview](#preview-rocket)

:wrench: [Running locally](#running-locally-wrench)

:package: [Technologies Used](#technologies-used-package)

## Overview :man_teacher:

<p align="justify">
  Who doesn't love pizza :pizza: :heart:? 
  <br />
  <br />
  But, did you ever gave up on ordering a pizza or cancelled your order because you had to call to the pizza place, wait to be attended and then make your order? :fearful:
  <br />
  <br />
  So, put a smile on your face because I have great news for you :dancer:!
  <br />
  <br />
   Appizza simulates an environment where you can make and follow up your order in just a few clicks, without any headache :relaxed:.
</p>

## Functionalities :bulb:

:heavy_check_mark: User register & login

:heavy_check_mark: Responsive layout

:heavy_check_mark: Manage pizza orders

:heavy_check_mark: Manage pizzas (insert, read, edit and even delete)

## Preview :rocket:

A demonstration of Appizza is available on the link below. Feel free to access and play with it:

:link: [Appizza](https://appizza.netlify.app)


## Running locally :wrench:

You can also run it locally if you want, these at the steps that you need to take first:

### Requirements

- :warning: [Node](https://nodejs.org/en/download/)
- :warning: [Yarn](https://yarnpkg.com)

<i>You can use NPM, but I recommend using Yarn because the project lockfile was generated using it</i>

### Cloning the repo

On the terminal, run the following command: 

```
git clone https://github.com/luizsandoval/appizza.git
```

### Installing dependencies

After cloning the repo, open it on your terminal and you will find two folders:

- api: that's the application backend.
- app: that's the application frontend.

You will need to install dependencies for both parts of the app.

#### Backend

On the terminal, make sure you are on the repository root folder and run the following command:

```
    cd api
```

Once inside the `api` folder, install the necessary dependencies:

<b>Recommended</b>
```
    yarn install
```

or

```
    npm install
```

As we use [SQLite](https://www.sqlite.org/index.html) as database, we need to setup it before running our api. Fortunately, I have made this easy for you, just run the following command:

```
    yarn database
```

or 

```
    npm database
```

Before executing the api, you will need to create a `.env` file on the root of the `api` folder, with the following content:

```
    IMAGES_URL=http://localhost:3333/uploads
    SECRET_JWT=<your secret here>
    NODE_ENV=DEV
    PORT=3333
```

:warning: <b>Don't forget to setup your secret to guarantee that JWT will work as expected</b>

Finally, we can start the api by simple running:

```
    yarn start:dev
```

or

```
    npm run start:dev
```

Now, let's setup the frontend.

#### Frontend

Ensure that you are at the repository root folder and enter on the `app` folder:

```
    cd app
```

Once there, run the following command to install the necessary dependencies:

```
    yarn install
```

or

```
    npm install
```

Now, before executing the application, you need to create a `.env` file on the root of the `app` folder, with the following content:

```
    REACT_APP_API_URL=http://localhost:3333
```

Once you create that file, you are ready to go :sunglasses:! Just run:

```
    yarn start
```

or

```
    npm start
```

And your default browser will open the app at http://localhost:3000.

## Technologies used :package:

### Backend
- [Express](https://expressjs.com)
- [Knex](http://knexjs.org)
- [SQLite](https://www.sqlite.org/index.html)

### Frontend
- [React](https://reactjs.org)
- [Styled Components](https://styled-components.com)
- [React Dropzone](https://react-dropzone.js.org)
- [React Hook Form](https://react-hook-form.com)

## Developer :octocat:

| [<img src="https://avatars1.githubusercontent.com/u/26174441?s=400&u=44492cf071f1eb84049c856cf3930f3e073b05b9&v=4" width=115><br><sub>Luiz Sandoval</sub>](https://github.com/luizsandoval)
| :---: 

## License

The [MIT License](https://opensource.org/licenses/MIT) (MIT)

Copyright :copyright: 2020 - Appizza - App for pizza places.