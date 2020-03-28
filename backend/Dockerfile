FROM adoptopenjdk/openjdk11:alpine-jre
WORKDIR /home/backend
EXPOSE 8080
COPY target/backend-1.0-SNAPSHOT.jar app.jar
CMD ["java", "-jar", "app.jar"]

