# user-service

build docker
docker build . -t acrwebdev/user-service

docker push
docker push acrwebdev/user-service

run docker
docker run -p 4000:4000 --env USER_BASIC_LOCATION=http://10.140.0.2:13000 --env SERVER_IP=34.81.209.11 --env SERVER_PORT=4000 --env SWAGGER_IP=35.201.152.0 --restart=always -d acrwebdev/user-service
