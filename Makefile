build:
	docker build --no-cache -t node .
 
run:
	docker run -p 4001:80 --name oinker-api -a STDERR node

clean:
	docker stop oinker-api && docker rm oinker-api -v

dev:
	docker-compose up
