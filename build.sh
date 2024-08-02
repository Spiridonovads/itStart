#!/bin/bash

# Имя Docker образа
IMAGE_NAME="my-vite-app"

# Сборка Docker образа
docker build -t $IMAGE_NAME .
