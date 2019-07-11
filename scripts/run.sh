#/bin/bash/
echo "Running docker image..."
docker-compose -f ../docker-compose.yml up -d
echo "Running images:"
docker-compose ps
