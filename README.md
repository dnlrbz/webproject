# Book store web app
## Springboot & Angular web project
### Technologies:
- java 11
- spring boot
- docker
- angular 9
- ngrx state management
- angular material
- hibernate
- mysql


![alt text](https://github.com/dnlrbz/webproject/blob/master/screenshots/home.png)

# deploy on amazon ec-2
1. Login to first instance: ssh -i <key-file> ec2-user@xx.xx.xxx.xx
Login to second instance: the same with other ip

2. Install docker on instance :
sudo yum install -y docker

3. Add me to the docker user group
sudo usermod -aG docker ec2-user

4. Start docker
sudo service docker start

5. Test if docker works
docker container run hello-world

6. Initiate a docker swarm
docker swarm init

7. Copy a docker star join command and paste it to the other pod to add it as a worker

8. Create a docker-compose file and copy it from docker-compose-prod.yaml

9. Create a subnet in the ec-instance, just add it to the docker-compose file (if not done yet):
    networks:
      app-network:
        ipam: 
          config:
           	- subnet: 172.28.0.0/16
10. Run a visualizer on a manager to overview all pods (add port 2377 for internal and 5000 for external to security settings): 
docker container run -d -p 5000:8080 -v /var/run/docker.sock:/var/run/docker.sock dockersamples/visualizer

11. Deploy a stack
docker stack deploy -c docker-compose.yaml bookstore-stack 

12. Allow TCP on port 2377, TCP & UDP on port 7946 and UDP on port 4789 for overlay network traffic
    	
