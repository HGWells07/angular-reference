# For deployment

- [For deployment](#for-deployment)
  - [Setup](#setup)
  - [Running _docker-compose_](#running-docker-compose)
  - [Testing](#testing)
  - [Stop the container](#stop-the-container)

## Setup

Copy the files in the `bin/docker/config/deployment` folder to the root directory. Run the following command from the root directory:

```
cp -a bin/docker/config/deployment/. ./ #Linux & MacOS
xcopy /s bin\docker\config\deployment\. .\ #Windows
```

Or just copy the files with the file manager.

## Running _docker-compose_

From the terminal run the command:

```
docker-compose up -f ./docker-compose-prod.yml -d --build
```

## Testing

Delete the comment from the [_docker-compose-prod.yml_](./config/deployment/Dockerfile-prod) file

```
# run tests
RUN ng test --watch=false
RUN ng e2e --port 4202
```

This will run the container with testing enabled before the deployment. If the testing fails, the deployment exit with status code 1 and you should check what tests didn't pass.

## Stop the container

```
docker-compose -f ./docker-compose-prod.yml stop
```
