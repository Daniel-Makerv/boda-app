# Usamos una imagen base de PHP con Composer
FROM php:8.3-fpm

# Instalamos las dependencias de PHP necesarias
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev zip git && \
    docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install gd

# Instalamos Node.js y npm para Vue.js
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

# Instalamos Composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Establecemos el directorio de trabajo
WORKDIR /var/www

# Copiamos el contenido de la aplicación
COPY . .

# Instalamos las dependencias de Laravel
RUN composer install --optimize-autoloader --no-dev

# Instalamos las dependencias de Vue.js
RUN npm install --prefix resources/js

# Creamos los archivos estáticos de Vue.js
RUN npm run prod --prefix resources/js

# Exponemos el puerto 8000 para acceder a la app de Laravel
EXPOSE 8000

CMD ["php-fpm"]
