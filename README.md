auth
notification
api-gateway
graphql
redis(session)
ScyllaDB(no-sql, casandra)
postgres(sql)
elasticsearch
grpc
minio(s3 poc)

rust
go
grpc

loki, elasticsearch (grafana)

typeorm
paging

rate limiting
autoscaling

locust

helm
jenkins
ansible
terraform
istio

hadoop (hdfs)

recommendation system

zipkin -> tracing
prometheus -> metrics
grafana -> visualization

nginx

kubernetes

kafka & zookeeper
rabbitmq

MELT -> Metrics, Events, Logging and Tracing

pnpm add @opentelemetry/core @opentelemetry/node @opentelemetry/plugin-http @opentelemetry/plugin-https @opentelemetry/exporter-zipkin @opentelemetry/tracing express @opentelemetry/plugin-express @opentelemetry/metrics @opentelemetry/exporter-prometheus

https://blog.space-cloud.io/posts/how-to-setup-monitoring-using-prometheus-and-grafana/

# Commands

```
helm completion fish | source
```

```
kubectl config get-contexts
```

1.

```
docker build .
```

```
docker tag [sha256] pushpakant/auth:latest
```

```
docker push pushpakant/auth:latest
```

```
docker pull pushpakant/auth:latest
```

```
helm create [name]
```

```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
```

```
helm install [release_name] prometheus-community/prometheus
```

```
kubectl expose service prometheus-server --type=NodePort --target-port=9090 --name=prometheus-server-ext
```

```
minikube service prometheus-server-ext
```

```
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
helm install grafana grafana/grafana
kubectl expose service grafana --type=NodePort --target-port=3000 --name=grafana-ext
kubectl get secret --namespace default grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
minikube service grafana-ext
```

```
helm list
```

```
kubectl --namespace=prometheus port-forward deploy/prometheus-server 9090
kubectl --namespace=default port-forward deploy/grafana 3000
```

used the http://prometheus-server / http://192.168.49.2:9100 in grafana

1.

```
docker build ./services/auth/ -t pushpakant/auth:latest
docker push pushpakant/auth:latest

docker build ./services/user/ -t pushpakant/user:latest
docker push pushpakant/user:latest
```

```
docker build ./services/nginx -t pushpakant/app-nginx:latest
docker push pushpakant/app-nginx:latest
```

```
minikube start --driver=docker
minikube dashboard
```

```
helm create metrics
```

```
kubectl create deployment metrics --image=pushpakant/auth --port 3000 --dry-run=client -o yaml > auth-deployment.yaml
kubectl create deployment metrics --image=pushpakant/user --port 4000 --dry-run=client -o yaml > user-deployment.yaml
```

copied annotations from https://artifacthub.io/packages/helm/prometheus-community/prometheus#scraping-pod-metrics-via-annotations

added dependencies to Chat.yaml and added values

```
helm dependency update (do in metrics folder)
helm install metrics . (helm install [name] [path] or use --generate-name)
helm list
```

```
helm template [resource-name] -f [values.yaml location] [charts location]
```

```
kubectl get pods
```

```
kubectl get svc
minikube service [metrics-grafana service name]
```

username -admin
password

```
kubectl get secret metrics-grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
```

11159 for nodejs application
1860 for nodeExporter
315 for kubernetes cluster monitoring

```
kubectl delete all --all
helm ls --all --short | xargs -L1 helm delete
```

# Terraform

helm release using terraform is not working

```
terraform init
terraform plan
terraform apply
terraform destroy
```

```
kubectl port-forward svc/kube-prometheus-stackr-prometheus 9090:9090 --namespace monitoring
```

```
kubectl delete namespace [name]
```
