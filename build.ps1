# Имя Docker образа
$IMAGE_NAME = "my-vite-app"

# Путь к текущей директории (где находится Dockerfile)
$BUILD_PATH = "."

# Сборка Docker образа
docker build -t $IMAGE_NAME $BUILD_PATH
