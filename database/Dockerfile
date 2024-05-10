FROM mysql:8.0

COPY usuariosbd.sql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD=root

EXPOSE 3306

VOLUME /var/lib/mysql

#docker build -t userdb:latest .