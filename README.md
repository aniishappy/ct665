#   c t 6 6 5 

link หน้าเว็บ
http://20.247.210.65/
ลิ้ง docker image
https://hub.docker.com/repository/docker/anianima/ct665/general
ขั้นตอนการ Deploy
เตรียมไฟล์ใน github

# docker
1.docker login
2.run docker build -t anianima/ct665 .
3.run docker push anianima/ct665

# run terminal Power Shell
1 -> az login
2 -> az group create --name myResourceGroup1 --location southeastasia
3 -> az aks create --resource-group myResourceGroup1 --name myAKSCluster1 --node-count 2 --generate-ssh-keys

เข้า azure k8s cluster -> Apply yaml
 
 
