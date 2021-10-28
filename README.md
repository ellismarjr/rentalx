<h1 align="center">
  RentX API
  <p align="center">
  <img height="20" src="https://app.travis-ci.com/ellismarjr/rentalx.svg?branch=master">
</p>
</h1>

<h4 align="center">
  API build with NodeJS with Typescript
</h4>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :rocket: Technologies

This project was developed in the studies purpose with the following technologies:

- [Typescript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en/)
- [SOLID]()
- [Jest](https://jestjs.io/pt-BR/)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [csv-parse](https://csv.js.org/parse/)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [swagger](https://swagger.io/)

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Yarn v1.22.4](https://yarnpkg.com/) or higher installed on your computer. From your command line:

```bash
# Download postgres DB
$ docker run --name rentx -e POSTGRES_DB=rentx -e POSTGRES_PASSWORD=rentx -p 5432:5432 -d rentx

# Clone this repository
$ git clone https://github.com/ellismarjr/rentalx.git

# Go into the repository
$ cd rentalx

# Install dependencies
$ yarn

# Run server
$ yarn dev

```


