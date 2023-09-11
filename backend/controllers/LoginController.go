package controllers

import (
	errorMessages "auth-service-golang/const"
	"auth-service-golang/models"
	"encoding/json"
	"net/http"
)

var loginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	errDec := json.NewDecoder(r.Body).Decode(&loginRequest)

	if errDec != nil {
		http.Error(w, errorMessages.InvalidRequest, http.StatusBadRequest)
	}

	user, _ := models.GetUserByEmail(loginRequest.Email, loginRequest.Password)

	if user == nil {
		http.Error(w, errorMessages.UserNotFound, http.StatusNotFound)
	}

	token, errToken := models.CreateToken(loginRequest.Email)
	if errToken != nil {
		http.Error(w, errorMessages.FailedToCreateToken, http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"token": token})
}

func VerifyTokenHandler(w http.ResponseWriter, r *http.Request) {
	tokenString := r.Header.Get("Authorization")
	if tokenString == "" {
		http.Error(w, errorMessages.TokenNotProvided, http.StatusUnauthorized)
		return
	}

	claims, err := models.VerifyToken(tokenString)
	if err != nil {
		http.Error(w, errorMessages.InvalidToken, http.StatusUnauthorized)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(claims)
}
