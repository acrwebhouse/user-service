# user-service

build docker
docker build . -t acrwebdev/user-service:0.0.1

docker push
docker push acrwebdev/user-service:0.0.1

docker pull
docker pull acrwebdev/user-service:0.0.1

run docker
docker run -p 4000:4000 --env USER_BASIC_LOCATION=http://10.140.0.7:13000 --env SERVER_IP=104.199.204.162 --env SERVER_PORT=4000 --env SWAGGER_IP=104.199.204.162 --restart=always --name=user-service -d acrwebdev/user-service:0.0.1
