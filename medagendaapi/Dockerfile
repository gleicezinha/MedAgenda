FROM maven:3.8-eclipse-temurin-17-alpine AS build
COPY src /home/app/src
COPY pom.xml /home/app
WORKDIR /home/app

# Executa o clean e o compile antes de fazer o package
RUN mvn clean compile -Pprod && mvn package -Pprod -Dmaven.test.skip=true

FROM eclipse-temurin:17-jre-alpine
COPY --from=build /home/app/target/medagendaapi-0.0.1-SNAPSHOT.jar /home/app/medagendaapi-0.0.1-SNAPSHOT.jar
