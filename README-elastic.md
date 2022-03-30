# Logging to elastic stack

## Docker installation of elastic stack

An example of a content of a `docker-compose.yaml`-file configuring the container:

```yaml
version: '3.4'

services:

  elasticsearch:  
    container_name: elasticsearch
    image: docker.elastic.co/elasticsearch/elasticsearch:7.14.1
    ports:  
      - 9200:9200  
    volumes:  
      - elasticsearch-data:/usr/share/elasticsearch/data  
    environment:  
      - xpack.monitoring.enabled=true  
      - xpack.watcher.enabled=false  
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"  
      - discovery.type=single-node
      - http.cors.enabled=true
      - http.cors.allow-origin=*
    networks:  
      - elastic  
    
  kibana:  
    container_name: kibana  
    image: docker.elastic.co/kibana/kibana:7.14.1
    ports:  
      - 5601:5601  
    depends_on:  
      - elasticsearch  
    environment:  
      - ELASTICSEARCH_URL=http://localhost:9200  
    networks:  
      - elastic  
      
networks:  
  elastic:  
    driver: bridge  
  
volumes:  
  elasticsearch-data: 
```

In command line where the docker-compose file is placed execute the command:

```bash
docker compose up -d
```

You have to enable CORS for the elasticsearch container (see environment variables in the docker-compose file).

## Kibana

In kibana navigate to discovery and add another index ('book-monkey*')

## Links

* [Ngx-Logger: log to kibana](https://www.xavierbouclet.com/2018/01/17/Ngx-Logger-to-Kibana.html)
* [Ngx-Logger: log to ngx-logger from angular](https://www.xavierbouclet.com/2018/01/15/Log-in-angular-with-Ngx-Logger.html)
* [Ngx-Logger: on npmjs](https://www.npmjs.com/package/ngx-logger)
* [Elastic Home Page](https://www.elastic.co/elastic-stack/)
* [Short Elastic Stack Introduction - LinkedIn](https://www.linkedin.com/pulse/logging-elasticsearch-kibana-aspnet-core-docker-sudheesh-valathil)
* [Kibana - First Dashboards - Elastic Home Page](https://www.elastic.co/guide/en/kibana/current/create-a-dashboard-of-panels-with-web-server-data.html)