# Build stage - just build the binary file

# Use a minimal Golang image as the base image
FROM golang:1.17-alpine3.13 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Build the Go application
RUN go build -o main main.go

# Copy the Go module files and download dependencies (if using modules)
COPY go.mod go.sum ./
RUN go mod download

# Run stage
FROM alpine:3.13

# Set the working directory in the container
WORKDIR /app

# Copy the binary from the builder stage
COPY --from=builder /app/main .

# Copy environment variables file (if needed)
COPY .env .

# Expose the port your application listens on
EXPOSE 8080
# Define the command to run your application
CMD ["/app/main"]