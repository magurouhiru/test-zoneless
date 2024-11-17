echo hello
docker build -t test-zoneless-nginx-image .
docker run --rm -p 8080:80 --name test-zoneless-nginx-container test-zoneless-nginx-image
