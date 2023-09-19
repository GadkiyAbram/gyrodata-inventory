package controllers

import (
	"auth-service-golang/const/errorMessages"
	"auth-service-golang/const/headers"
	"auth-service-golang/models/battery"
	"encoding/json"
	"net/http"
)

func AllBatteriesHandler(w http.ResponseWriter, r *http.Request) {
	batteries, _ := battery.GetAllBatteries()

	if len(batteries) == 0 {
		http.Error(w, errorMessages.BatteriesNoFound, http.StatusNotFound)
	}

	w.Header().Set(headers.ContentType, headers.ApplicationJson)
	json.NewEncoder(w).Encode(batteries)
}
