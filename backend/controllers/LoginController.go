package controllers

import (
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
		http.Error(w, "Invalid request", http.StatusBadRequest)
	}

	user, _ := models.GetUserByEmail(loginRequest.Email, loginRequest.Password)

	if user == nil {
		http.Error(w, "User not found", http.StatusNotFound)
	}

	token, errToken := models.CreateToken(loginRequest.Email)
	if errToken != nil {
		http.Error(w, "Failed to create token", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"token": token})
}
