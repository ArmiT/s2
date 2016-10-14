[![Build Status](https://travis-ci.org/ArmiT/s2.svg?branch=master)](https://travis-ci.org/ArmiT/s2)
#### application

 port: 54321
 
#### rethinkDb 
 
 port: 54322
 
If you want a change password, use `htpasswd` for file: `src/config/.htpasswd`.
 
#### rabbitmq 

 port: 54323
 
 If you want change password, redefine env variables: `RABBITMQ_DEFAULT_USER`, `RABBITMQ_DEFAULT_PASS` in the 
 `docker-compose.override.yml`
