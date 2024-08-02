# Имя Docker образа
$IMAGE_NAME = "my-vite-app"

# Порт на хосте, который будет использоваться для доступа к контейнеру
$HOST_PORT = 8085

# Порт в контейнере, который будет использоваться для доступа к приложению
$CONTAINER_PORT = 8085

# Запуск контейнера
docker run -d -p ${HOST_PORT}:${CONTAINER_PORT} --name ${IMAGE_NAME} ${IMAGE_NAME}
