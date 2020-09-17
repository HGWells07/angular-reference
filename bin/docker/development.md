# For development

- [For development](#for-development)
  - [Set up](#set-up)
  - [Running *docker-compose*](#running-docker-compose)
  - [Testing](#testing)
  - [Stop the container](#stop-the-container)

## Set up

Copy the files in the `bin/docker/config/development` folder to the root directory. Run the following command from the root directory:

```
cp -a bin/docker/config/development/. ./ #Linux & MacOS
xcopy /s bin\docker\config\development\. .\ #Windows
```

Or just copy the files with the file manager.

## Running *docker-compose*

From the terminal run the command:

```
docker-compose up -d --build
```

## Testing

Try both the unit and e2e tests.

```
docker-compose exec example ng test --watch=false
docker-compose exec example ng e2e --port 4202
```

## Stop the container

```
docker-compose stop
```