# pull official base image
FROM python:3.11-slim-bullseye

# set work directory
WORKDIR /src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
# COPY ./requirements.txt .

RUN apt-get update && apt-get install -y \
  gcc \
  netcat \
  libpq-dev \
  postgresql-client \
  && apt-get clean

RUN pip install --no-cache-dir uvicorn
RUN pip install fastapi
# copy project
COPY . .

CMD tail -f /dev/null

