<div align="center">

# Django-Nuxt-FastAPI-PostgreSQL-Nginx

A stack to quickly make web apps for AI-related applications.

![Python version](https://img.shields.io/badge/Python-3.11.0-4c566a?logo=python&&longCache=true&logoColor=white&colorB=pink&style=flat-square&colorA=4c566a) ![Django version](https://img.shields.io/badge/Django-5.0.0-4c566a?logo=django&&longCache=truelogoColor=white&colorB=pink&style=flat-square&colorA=4c566a) ![Django-RestFramework version](https://img.shields.io/badge/Django_Rest_Framework-3.14.0-red.svg?longCache=true&style=flat-square&logo=django&logoColor=white&colorA=4c566a&colorB=pink) ![Fastapi version](https://img.shields.io/badge/Fastapi-0.108.0-red.svg?longCache=true&style=flat-square&logo=fastapi&logoColor=white&colorA=4c566a&colorB=pink) ![PostgreSQL version](https://img.shields.io/badge/PostgreSQL-12.8-red.svg?longCache=true&style=flat-square&logo=postgresql&logoColor=white&colorA=4c566a&colorB=pink) ![Nuxt version](https://img.shields.io/badge/Nuxt-3.9.0-red.svg?longCache=true&style=flat-square&logo=nuxt&logoColor=white&colorA=4c566a&colorB=pink) ![Vuetify version](https://img.shields.io/badge/Vuetify-3.4.9-red.svg?longCache=true&style=flat-square&logo=vuetiffffffy&logoColor=white&colorA=4c566a&colorB=pink)

</div>

## Tech Stack

- **Django:** This is the backbone of the backend API, and the packages installed are specified in the _requirements.txt_ file inside the **backend** folder.

- **Nuxt**: The **frontend** library in use using **Nuxt.js** framework. **Nuxt.js** is Vue + Next and is a very popular framework in 2023 due to its simplicity. This was created via `npx nuxi@latest`. The things pre-installed can be found in **package.json**. **Vuetify** is used for styling.

  If you want to install more packages, simply `yarn add [pkg]` locally at the **frontend** directory. Then observe that **package.json** got changed. Docker will pick it up and install it on the container once you `docker compose build` again. If things do not install inside the container properly, simply delete all the associated volumes and images, delete the **node_modules** folders, and `docker compose build` from scratch. It works well for me.

- **Nginx:** This is the reverse proxy server.  The default configuration in use can be found at the **nginx/nginx.conf** file. Serves Django's static and media files as well. In the **Nginx**, I have set such that Django can be accessed via `api`, `admin`, and `ws`(websocket). See conf for details.

- **PostgreSQL:** This is the default configured database for this repository.

- **Fastapi:** Refers to the **model** folder for handling API access to deep learning models or large language models.

## Screenshot

![Architecture Image](./.readme_assets/Arch.jpg)

## Install (Run) with Docker

1. Since I cannot share my **.env.dev** file with you guys, I have created an example. Rename **.env-example** to **.env.dev**

1. Note for Window users: Ensure that the **entrypoint.sh** script in `Django-React\backend\entrypoint.sh` uses LF EOL format and not CRLF.

1. Run Docker-Compose:

   ```bash
   $> docker compose build
   $> docker compose up
   ```

   Congratulations !!! The app should be up and running. To access the **Nuxt** frontend go to [localhost:8080](http://localhost:8080), and to access the **Django** backend go to [localhost:8080/api](http://localhost:8080/api), and to access the **Fastapi** go to [localhost:8080/fastapi/docs](http://localhost:8080/fastapi/docs/). I have disabled all ports such as 3000, 8000, and 8001, so everything is managed by nginx.

1. To create a super user:

   ```bash
   $> docker exec -it [container id of the django] python manage.py createsuperuser
   ```

   You can get the container ID from `docker container list`

   [localhost:8080/admin](http://localhost:8080/admin) is the URL path that redirects to the Django Admin. I highly recommend you use this URL, as it's very good for managing models.

   You do the same way every time you create models in Django.

## Docker-Compose

This repository is divided into 4 main folders. These folders are:

- **backend:** Has the Django project created with `django-admin startproject`.

- **frontend:** Has the React project been created with `npx nuxt@latest`

- **nginx:** Has the Dockerfile used in the **docker-compose.yml** file and the nginx config.

- **model:** Has the Dockerfile installing uvicorn and Fastapi.

Enter shell for the specified container (must be running)

```bash
$> docker exec -it <container-name> bash
```

Containers, Services and Ports

| Container   | Service | Host Port | Docker Port |
| ----------- | ------- | --------- | ----------- |
| dev-django  | django  | 8000      | 8000        |
| dev-react   | react   | 3000      | 3000        |
| dev-db      | db      | 5432      | 5432        |
| dev-fastapi | fastapi | 8001      | 8001        |
| dev-nginx   | nginx   | 8080      | 80          |

## Deployment

### Approach 1: Deploy to Azure VM / AWS EC2

This is the most traditional way. The idea is that to deploy to some server/cloud, we only build the images in local machines, and push these images to Dockerhub and any registry. In the production machine (e.g., Azure), it should **only** have one **docker-compose.yml** file along with a **.env[.dev|.prod]** file. **You do not clone the GitHub repo in the production machine**. Every time we commit our GitHub, it executes **github actions** that:

1. pull the latest git repo,
2. call `docker-compose build`,
3. push these images to Dockerhub or any registry, and then
4. ssh into Azure, and tell Azure to `docker-compose pull` and `docker-compose up -d`.

For sample **docker-compose.yml** I used in the Azure VM, see the **archives** folder. Note that I removed all `.build` and `volumes` since both of them are not required in production.

For sample GitHub actions, see the repository workflow YML file.

### Approach 2: Deploy to Azure Container Apps / AWS ECS or the like

Another idea is to completely use all the cloud services available in Azure or AWS. You don't need **nginx** because Azure or AWS already handle networking by default.  You can use **dynamo db** or **cosmos db** instead of local DB.  For **fastapi**, you can instead use **Azure Functions** or **AWS Lambda** through their **api gateways**.  

The only thing you need to prepare is then the **frontend** and the **backend**.  I have created a separate branch called **frontend** and **backend**, which you can easily use to deploy to Azure and AWS.

Note that in the development machine, you will still used the docker compose technique for developing the web app.  The things I just talked about are only for deploying your app to production.

## Useful Links

There is nothing original here; I simply collect the best practices from the best. Some GitHubs are outdated so I have to update them.

- Github repo of sunilale0: [sunilale0/django-postgresql-gunicorn-nginx-dockerized](https://github.com/sunilale0/django-postgresql-gunicorn-nginx-dockerized/blob/master/README.md#nginx)

- Github repo to Dockerize Django + MySQL + Nginx + React js: [Ceci-Aguilera/django-react-nginx-mysql-docker](https://github.com/Ceci-Aguilera/django-react-nginx-mysql-docker)

- Michael Herman's article on testdriven.io: [dockerizing-django-with-postgres-gunicorn-and-nginx](https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx/)

- Coby's GitHub - [https://github.com/cglusky/docker-django-react](https://github.com/cglusky/docker-django-react)
