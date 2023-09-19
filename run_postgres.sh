#!/bin/bash

containerName="gyrodata-db"
password="mysecretpassword"
port=5434

if docker ps --format "{{.Names}}" | grep -q "^$containerName$"; then
	echo "Container '$containerName' is running"
	exit 0
else
	echo "Creating '$containerName'..."
  docker run --name "$containerName" -e POSTGRES_PASSWORD="$password" -p "$port":5432 -d postgres:latest
fi

if [ $? -eq 0 ]; then
	echo "PostgreSQL container '$containerName' started successfully on port '$port'"
else
  echo "Error: Failed to start PostgreSQL container"
fi
