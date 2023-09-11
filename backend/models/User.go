package models

import (
	"auth-service-golang/Structures"
	"auth-service-golang/db/config"
	"fmt"
	"gorm.io/gorm"
)

func GetUserByEmail(email string, password string) (*Structures.User, error) {
	var user Structures.User

	if err := config.Db.Where("email = ?", email).First(&user).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			return nil, err
		}
	}

	if user.ID == 0 || user.Password != password {
		return nil, fmt.Errorf("invalid credentials")
	}

	return &user, nil
}
