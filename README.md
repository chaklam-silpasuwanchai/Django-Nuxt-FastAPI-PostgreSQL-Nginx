<div align="center">

# React Django

![Python version](https://img.shields.io/badge/Python-3.11.0-4c566a?logo=python&&longCache=true&logoColor=white&colorB=pink&style=flat-square&colorA=4c566a) ![Django version](https://img.shields.io/badge/Django-5.0.0-4c566a?logo=django&&longCache=truelogoColor=white&colorB=pink&style=flat-square&colorA=4c566a) ![Django-RestFramework version](https://img.shields.io/badge/Django_Rest_Framework-3.14.0-red.svg?longCache=true&style=flat-square&logo=django&logoColor=white&colorA=4c566a&colorB=pink) ![PostgreSQL version](https://img.shields.io/badge/PostgreSQL-12.8-red.svg?longCache=true&style=flat-square&logo=postgresql&logoColor=white&colorA=4c566a&colorB=pink) ![React version](https://img.shields.io/badge/React-18.2.0-red.svg?longCache=true&style=flat-square&logo=react&logoColor=white&colorA=4c566a&colorB=pink)

</div>


<a name="tech_stack"></a>
## Tech Stack

- __Django:__ This is the backbone of the backend api, and has the following packages installed:
    - Django Rest Framework (For the Rest API)
    - Django-Cors-Headers (For the CORS config to allow React js to make calls)
    - Django-Environ (To Fetch the environment variables in the settings.py files)
    - Psycopg2-binary (To manage the PostgreSQL Database)
    - PyTest (To test)

    __Note:__ All this packages are specified in the _requirements.txt_ file inside the __django_backend__ folder.

- __React:__ The frontend library in use. This was created via ``npx create-react-app``. The only extra packages that were installed (ignoring the ones that are automatically pre-installed) are:
    - Bootstrap and React-Bootstrap (For styling)
    - Axios (To make calls to the Django Backend)
    - Hot reload

- __Nginx:__ This is the server for the Docker-Compose testing build. The default configuration in use can be found at the __nginx/nginx.conf__ file.  Serves Django's static and media files as well.  See conf for details.

- __PostgreSQL:__ This is the default configured database for this repository

## Architecture

![Architecture Image](./.readme_assets/Arch.png)


<a name="docker"></a>
## Install (Run) with Docker

1. Since I cannot share my `.env.dev` file with you guys, I have created an example. Rename `.env-example` to `.env.dev`

1. Run Docker-Compose:
    ```bash
    docker-compose up -d --build
    ```

    Congratulations !!! The app should be up and running. To access the __React__ frontend go to [localhost:8080](http://localhost:8080), and to access the __Django__ backend go to [localhost:80/api](http://localhost:8080/api).

2. To create a super user:
    ```bash
    docker exec -it [container id of the postgresql] python manage.py createsuperuser
    ```
    You can get container id from `docker container list`

    [localhost:8080/admin](http://localhost:8080/admin) is the url path that redirects to the Django Admin.  I highly recommends you to use this url, as it's very good for managing models.

<a name="structure"></a>
## Docker-Compose

This repository is divided into 3 main folders. These folders are:
- __backend:__ Has the Django project created with ``django-admin startproject``.
- __frontend:__ Has the React project create with ``npx create-react-app``.
- __nginx:__ Has the Dockerfile used in the docker-compose.yml file and the default config to run Django + React.

Enter shell for specified container (must be running)

```sh

$> docker exec -it <container-name> sh

```
Containers, Services and Ports

| Container  | Service | Host Port | Docker Port |
| ---------- | ------- | --------- | ----------- |
| dev-django | django  | 8001      | 8000        |
| dev-react  | react   | 3001      | 3000        |
| dev-db     | db      | 5432      | 5432        |
| dev-nginx  | nginx   | 8080      | 80          |


<a name="useful_links"></a>
## Useful Links

- Github repo of sunilale0: [sunilale0/django-postgresql-gunicorn-nginx-dockerized](https://github.com/sunilale0/django-postgresql-gunicorn-nginx-dockerized/blob/master/README.md#nginx)
- Github repo to Dockerize Django + MySQL + Nginx + React js: [Ceci-Aguilera/django-react-nginx-mysql-docker](https://github.com/Ceci-Aguilera/django-react-nginx-mysql-docker)
- Michael Herman article on testdriven.io: [dockerizing-django-with-postgres-gunicorn-and-nginx](https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx/)

## To-Do

- Deployment
- CI/CD
