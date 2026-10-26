FROM php:8.3-fpm-alpine

RUN apk add --no-cache git unzip libpq-dev \
    && docker-php-ext-install pdo_pgsql
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
COPY . .
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

CMD ["php-fpm"]

