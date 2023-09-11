package main

import (
	"auth-service-golang/controllers"
	"fmt"
	"github.com/joho/godotenv"
	"github.com/rs/cors"
	"log"
	"net/http"
	"os"

	httpMethods "auth-service-golang/const"
	"github.com/gorilla/mux"
)

var (
	//jwtSecret = []byte("my-secret-key")
	port string
	//db        *gorm.DB
)

// Claims represents the JWT claims.
//type Claims struct {
//	Email string `json:"email"`
//	jwt.StandardClaims
//}

func init() {
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	//db, _ = config.InitDb(config.NewDBConfig())

	port = fmt.Sprintf(":%s", os.Getenv("PORT"))
}

func main() {
	corsMiddleware := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:3000"},
		AllowedMethods: []string{
			httpMethods.Get,
			httpMethods.Post,
			httpMethods.Put,
			httpMethods.Delete,
		},
		AllowedHeaders: []string{"*"},
	})

	router := mux.NewRouter()

	// Apply CORS middleware to specific routes or route groups
	//router.HandleFunc("/login", loginHandler).Methods("POST")
	//router.HandleFunc("/verify", verifyHandler).Methods("GET")

	router.HandleFunc("/login", controllers.LoginHandler).Methods("POST")

	// Use corsMiddleware.Handler to wrap only the routes that need CORS
	http.Handle("/", corsMiddleware.Handler(router))

	fmt.Printf("Server is running on port %s...\n", port)
	log.Fatal(http.ListenAndServe(port, nil))
}

//func loginHandler(w http.ResponseWriter, r *http.Request) {
//	var requestBody struct {
//		Email    string `json:"email"`
//		Password string `json:"password"`
//	}
//
//	err := json.NewDecoder(r.Body).Decode(&requestBody)
//
//	if err != nil {
//		http.Error(w, "Invalid request", http.StatusBadRequest)
//		return
//	}
//
//	var user Structures.User
//
//	if err := db.Where("email = ?", requestBody.Email).First(&user).Error; err != nil {
//		if err == gorm.ErrRecordNotFound {
//			// Handle the case where the user is not found
//			// You can return an error, display a message, etc.
//		} else {
//			// Handle other database-related errors
//			panic(err)
//		}
//	}
//
//	userExists := user != Structures.User{}
//	if !userExists || user.Password != requestBody.Password {
//		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
//		return
//	}
//
//	// Create a JWT token.
//	tokenString, err := createToken(requestBody.Email)
//	if err != nil {
//		http.Error(w, "Failed to create token", http.StatusInternalServerError)
//		return
//	}
//
//	// Return the JWT token to the client.
//	w.Header().Set("Content-Type", "application/json")
//	json.NewEncoder(w).Encode(map[string]string{"token": tokenString})
//}
//
//func verifyHandler(w http.ResponseWriter, r *http.Request) {
//	tokenString := r.Header.Get("Authorization")
//	if tokenString == "" {
//		http.Error(w, "Token not provided", http.StatusUnauthorized)
//		return
//	}
//
//	claims, err := verifyToken(tokenString)
//	if err != nil {
//		http.Error(w, "Invalid token", http.StatusUnauthorized)
//		return
//	}
//
//	w.Header().Set("Content-Type", "application/json")
//	json.NewEncoder(w).Encode(claims)
//}
//
//func createToken(email string) (string, error) {
//	claims := &Claims{
//		Email: email,
//		StandardClaims: jwt.StandardClaims{
//			ExpiresAt: time.Now().Add(1 * time.Hour).Unix(),
//			IssuedAt:  time.Now().Unix(),
//		},
//	}
//
//	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
//
//	return token.SignedString(jwtSecret)
//}
//
//func verifyToken(tokenString string) (*Claims, error) {
//	token, err := jwt.ParseWithClaims(tokenString, &Claims{}, func(token *jwt.Token) (interface{}, error) {
//		return jwtSecret, nil
//	})
//
//	if err != nil {
//		return nil, err
//	}
//
//	claims, ok := token.Claims.(*Claims)
//	if !ok || !token.Valid {
//		return nil, fmt.Errorf("invalid token")
//	}
//
//	return claims, nil
//}
