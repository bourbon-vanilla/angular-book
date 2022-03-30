# BookMonkey

## Read (work-) progress info

The page to continue with is <b>290</b> PDF page (book page is smaller by ~30).


## Angular Project

### Elastic-Stack Logging

Please see the description [here](./README-elastic.md).

### Create and run Docker Container

```bash
# To build a docker image for this angular application run:
docker build -t account/book-monkey-image:latest .

# To spin a container up from the created image run:
docker run -d -p 8080:80 --name book-monkey account/book-monkey-image:latest

# You can also run the container for the image using docker-compose file:
docker compose up -d

# If due to changes in your application you want to force build you have you can do it like so:
docker compose build

# Afterwards you can spin up the docker compose as usual.
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
