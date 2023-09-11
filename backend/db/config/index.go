package config

import (
	"auth-service-golang/Structures"
	"auth-service-golang/utils"
	_ "database/sql"
	"fmt"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
	"os"
)

var (
	Db   *gorm.DB
	Port string
)

func init() {
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	Db, _ = InitDb(NewDBConfig())
	Port = fmt.Sprintf(":%s", os.Getenv("PORT"))
}

func NewDBConfig() *Structures.DBConfig {
	return &Structures.DBConfig{
		Host:     os.Getenv("DB_HOST"),
		Port:     utils.ToInt(os.Getenv("DB_PORT")),
		User:     os.Getenv("DB_USER"),
		Password: os.Getenv("DB_PASSWORD"),
		DBName:   os.Getenv("DB_NAME"),
		SSLMode:  os.Getenv("SSL_MODE"),
	}
}

// InitDb creates a new database connection using the provided configuration.
func InitDb(cfg *Structures.DBConfig) (*gorm.DB, error) {
	dsn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=%s",
		cfg.Host, cfg.Port, cfg.User, cfg.Password, cfg.DBName, cfg.SSLMode)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
	}

	if err := db.Exec("SELECT 1").Error; err != nil {
		return nil, err
	}

	return db, nil
}
