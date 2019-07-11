#/bin/bash/
echo "Running docker image..."
docker-compose -f docker-compose.yml up
echo "Running images:"
docker-compose ps
