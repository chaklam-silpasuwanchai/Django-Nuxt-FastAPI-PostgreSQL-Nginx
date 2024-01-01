<div align="center">

# React Django

![Python version](https://img.shields.io/badge/Python-3.10.8-4c566a?logo=python&&longCache=true&logoColor=white&colorB=pink&style=flat-square&colorA=4c566a) ![Django version](https://img.shields.io/badge/Django-4.0.4-4c566a?logo=django&&longCache=truelogoColor=white&colorB=pink&style=flat-square&colorA=4c566a) ![Django-RestFramework version](https://img.shields.io/badge/Django_Rest_Framework-3.13.1-red.svg?longCache=true&style=flat-square&logo=django&logoColor=white&colorA=4c566a&colorB=pink) ![PostgreSQL version](https://img.shields.io/badge/PostgreSQL-12.8-red.svg?longCache=true&style=flat-square&logo=postgresql&logoColor=white&colorA=4c566a&colorB=pink) ![React version](https://img.shields.io/badge/React-18.0.0-red.svg?longCache=true&style=flat-square&logo=react&logoColor=white&colorA=4c566a&colorB=pink)

</div>


<a name="tech_stack"></a>
## Tech Stack

- __Django:__ This is the backbone of the backend api, and has the following packages installed:
    - Django Rest Framework (For the Rest API)
    - Pillow (For managing images uploading)
    - Django-Cors-Headers (For the CORS config to allow React js to make calls)
    - Django-Environ (To Fetch the environment variables in the settings.py files)
    - Psycopg2-binary (To manage the PostgreSQL Database)
    - Gunicorn (To manage the running instance of the django web app)

    __Note:__ All this packages are specified in the _requirements.txt_ file inside the __django_backend__ folder.

- __React:__ The frontend library in use. This was created via ``npx create-react-app``. The only extra packages that were installed (ignoring the ones that are automatically pre-installed) are:
    - Bootstrap and React-Bootstrap (For styling)
    - Axios (To make calls to the Django Backend)

    __Note:__ The bootstrap css link has been added to the `index.js` file that is inside the __react_frontend/src__ folder.

- __Nginx:__ This is the server for the Docker-Compose testing build. The default configuration in use can be found at the __nginx/nginx.conf__ file.

- __PostgreSQL:__ This is the default configured database for this repository

## Architecture

![Architecture Image](./.readme_assets/Arch.png)



<a name="docker"></a>
## Install (Run) with Docker

1. Since I cannot share my `.env` file with you guys, I have created an example.  Copy a default setup of the environment variables for the project:
    ```bash
    cp example_env .env
    cp django_backend/django_backend/settings/example_env django_backend/django_backend/settings/.env


1. Run Docker-Compose:
    ```bash
    docker-compose up -d --build
    ```

    Congratulations !!! The app should be up and running. To access the __React__ frontend go to [localhost:80](http://localhost:80), and to access the __Django__ backend go to [localhost:80/api](http://localhost:80/api). From now on, any call made to [localhost:80/api](http://localhost:80/api) will be redirected to __Django__ while every other path (localhost:80/*) will lead to the __React__ frontend.

2. To create a super user:
    ```bash
    docker exec -it [container id] python manage.py createsuperuser
    ```
    You can get container id from `docker container list`

    [localhost:80/admin](http://localhost:80/admin) is the url path that redirects to the Django Admin.  I highly recommends you to use this url, as it's very good for managing models.

<a name="structure"></a>
## Docker-Compose

This repository is divided into 3 main folders. These folders are:
- __django_backend:__ Has the Django project created with ``django-admin startproject``.
- __react_frontend:__ Has the React project create with ``npx create-react-app``.
- __nginx:__ Has the Dockerfile used in the docker-compose.yml file and the default config to run Django + React. When running the project locally without Docker this folder can be ignored.

Each project (Django and React as separate projects) is intended to be self contained, and so it can be separately tested  without the need of docker-compose.

When running with __Docker Compose__, there are 4 images that are created: A Django backend Image, a React frontend Image, a Nginx Image, and a PostgreSQL Image. The Dockerfiles for Django, React, and Nginx can be found in their respective folders, i.e, the Django Dockerfile is inside the django_backend folder, and so on. The PostgreSQL image has no custom Dockerfile, instead it is pulled from the Docker Hub, and the environment variables for the docker-compose file can be found at the .env file in the project root folder.

<a name="django"></a>
## Django
Note the settings folder inside the __django_backend/django_backend__ folder. This contains different `settings.py` files for different environment. For example, the `dev.py` file has the default settings to run in the development environment, while the `docker.py` file has the default settings to run when using docker-compose. All of these files has the `base.py` file as their parent file (the `base.py` file has the settings to be shared among the environments), and so they all should have

```python
from .base import *
```

as their first line. To change between environments, go to the __django_backend/django_backend/\_\_init\_\_.py__ file and edit its first line. By default it should be

```python
from .docker import *
```

To change to the environment ``x``, replace that line with

```python
from .x import *
```

Next, the __templates__, __static__, and __media__ folders have been created (and configured in the settings) to store the hml, css, ... files.

<a name="react"></a>
## React

The following structure was taken from the Next js workflow:
```text
    react_frontend
    |___ src 
          |____ components
          |____ pages
          |____ styles
          |____ assets
```

---

<a name="useful_links"></a>
## Useful Links

- Github repo of sunilale0: [sunilale0/django-postgresql-gunicorn-nginx-dockerized](https://github.com/sunilale0/django-postgresql-gunicorn-nginx-dockerized/blob/master/README.md#nginx)
- Github repo to Dockerize Django + MySQL + Nginx + React js: [Ceci-Aguilera/django-react-nginx-mysql-docker](https://github.com/Ceci-Aguilera/django-react-nginx-mysql-docker)
- Michael Herman article on testdriven.io: [dockerizing-django-with-postgres-gunicorn-and-nginx](https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx/)


# docker-django-react

## Project Status

**Dec 2023**
Although I do not use Django or React these days, I know someone who does.  Special thanks to @crhowell for helping me get this updated after three years of neglect.  Seems like a few people have found it useful, so we will try to give it a little more love.  Latest updates are mostly lessons learned, house keeping and version bumps.

## Basics

A slightly opinionated local dev full stack template using docker-compose with Django backend and React frontend; all served behind NGINX. Keeping the full stack in one repo for ease of use. Composed of ideas from multiple tutorials, forum threads and official docs. Nothing original here.

## Main Frameworks/Libraries/Packages

Please see requirements.txt and package.json for full details.

Django

- Django v5
- Django Rest Framework
- Django Rest Framework Simple JWT
- PyTest

React

- Create React App
- Node dev server via Docker LTS alpine image
- Hot reload

Postgress

- Docker v16.1 alpine image

Ngnix

- Docker stable alpine
- Serves Django's static and media files as well.  See conf for details.

## Notes

Django

- One app created/installed called core
- Custom user stubbed out in the Core app. No additional fields. Just a blank class that inherets AbstractUser. core.User is assigned as AUTH_USER_MODEL
- SimpleJWT is installed but not used.

## Fork or Template

Feel free to fork at will but it may be handier as template. The following are the steps I had in mind for using it as a project template:

1. Create a new repo on GitHub without ReadMe
2. On your local dev machine, and in your preferred parent directory:

```sh

$> git clone https://github.com/cglusky/docker-django-react.git <new-local-repo-dir>
$> cd <new-local-repo-dir>
$> git remote set-url origin <url-new-remote-repo-created-in-step-1>
$> git push -u origin master

```

### Edit And Rename .env-example

All services expect to read env variables from .env.dev file. Please make sure you review the example and change the name to env.dev. AND that your gitignore handles env files before you commit super secret stuff to a public repo.

### Useful Commands

Build containers. Add -up flag to bring services up after build.

```sh

$> docker compose build

```

Bring containers up. Add -d flag to run output detached from current shell.

```sh

$> docker compose up

```

Bring containers down. Add -v flag to also delete named volumes

```sh

$> docker compose down

```

View logs by service name.

```sh

$> docker compose logs <service-name>

```

Enter shell for specified container (must be running)

```sh

$> docker exec -it <container-name> sh

```

### Containers, Services and Ports

| Container  | Service | Host Port | Docker Port |
| ---------- | ------- | --------- | ----------- |
| dev-django | django  | 8001      | 8000        |
| dev-react  | react   | 3001      | 3000        |
| dev-db     | db      | 5432      | 5432        |
| dev-nginx  | nginx   | 8080      | 80          |

### Why NGINX for local dev?

Cross-Origin Resource Sharing(CORS) issues will make your browser sad when you serve your site from different ports as we do with this architecture. Using NGINX to proxy requests/responses to/from the correct container/service/ports helps make your browser happy. And it simulates real world infrastructure as a bonus. So...

Please make all requests from your browser through <http://localhost:8080> and NGINX will happily redirect the request and proxy all your services so your browser thinks it's all one and the same protocol/domain/port == CORS bliss.

### Can this be used for production?

This project is focused on making it easier to perform local full stack development.  However, it is possible to add new docker compose and docker files to also support production.  It's just out of scope for this project.  Please have a look in the archives folder for some old production docker files to give you an idea of what worked in the past.
