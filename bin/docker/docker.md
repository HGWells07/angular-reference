# Angular - Docker

- [Angular - Docker](#angular---docker)
  - [Docker installation](#docker-installation)
    - [For MacOS Users](#for-macos-users)
    - [For Windows users](#for-windows-users)
    - [For Ubuntu users](#for-ubuntu-users)
  - [For development](#for-development)
  - [For deployment](#for-deployment)

This file contains guides to run and deploy this application with Docker.

Commands shall be ran as administrator or superuser to avoid permission issues. 

To get an overview of the usage of Docker refer to this [guide](https://docs.docker.com/get-started/overview/)

## Docker installation

Follow the installation process for your OS from the [official docker documentation](https://docs.docker.com/get-docker/)

### For MacOS Users

Follow the installation process from the [official documentation](https://docs.docker.com/docker-for-mac/install/)

### For Windows users

Follow the installation profess from the [official documentation](https://docs.docker.com/docker-for-windows/install/)

### For Ubuntu users

First, update your existing list of packages:

```
sudo apt update
```

Next, install a few prerequisite packages which let apt use packages over HTTPS:

```
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

Then add the GPG key for the official Docker repository to your system:

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Add the Docker repository to APT sources:

```
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
```

Next, update the package database with the Docker packages from the newly added repo:

```
sudo apt update
```

Finally, install Docker:

```
sudo apt install docker-ce
```

Follow the [post-installation steps](https://docs.docker.com/engine/install/linux-postinstall/) to get more out of your docker install in linux (such as the Docker extension for VSCode).

## For development

See the [development instructions](development.md)

## For deployment

See the [development instructions](development.md)
