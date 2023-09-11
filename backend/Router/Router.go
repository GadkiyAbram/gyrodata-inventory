package Router

import (
	httpMethods "auth-service-golang/const"
	"auth-service-golang/controllers"
	"auth-service-golang/db/config"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"log"
	"net/http"
)

var routes = []struct {
	Path    string
	Method  string
	Handler http.HandlerFunc
}{
	{"/login", httpMethods.Post, controllers.LoginHandler},
	{"/verify", httpMethods.Get, controllers.VerifyTokenHandler},
}

func SetupRouter() {
	corsMiddleware := cors.New(cors.Options{
		AllowedMethods: httpMethods.HttpMethods,
		AllowedHeaders: []string{"*"},
	})

	router := mux.NewRouter()

	for _, route := range routes {
		router.HandleFunc(route.Path, route.Handler).Methods(route.Method)
	}

	http.Handle("/", corsMiddleware.Handler(router))

	fmt.Printf("Server is running on port %s...\n", config.Port)
	log.Fatal(http.ListenAndServe(config.Port, nil))
}
