# Используем базовый образ Ubuntu
FROM ubuntu:20.04

# Обновление и установка зависимостей
RUN apt-get update && \
    apt-get install -y curl gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json в контейнер
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта в контейнер
COPY . .

# Сборка приложения
RUN npm run build

# Открываем порт 8085
EXPOSE 8085

# Команда запуска приложения
CMD ["npm", "run", "preview"]
