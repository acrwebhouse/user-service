# user-service

build docker
docker build . -t acrwebdev/user-service:0.0.2

docker push
docker push acrwebdev/user-service:0.0.2

docker pull
docker pull acrwebdev/user-service:0.0.2

docker pull acrwebdev/user-service:latest

run docker
docker run -p 4000:4000 --env USER_BASIC_LOCATION=http://10.140.0.2:13000 --env NOTIFICATION_BASIC_LOCATION=http://10.140.0.2:17000 --env SERVER_IP=34.80.78.75 --env SERVER_PORT=4000 --env SWAGGER_IP=34.80.78.75 --restart=always --name=user-service -d acrwebdev/user-service:0.0.2
