package utils

import (
	"log"
	"strconv"
)

func ToInt(needle string) int {
	res, err := strconv.Atoi(needle)

	if err != nil {
		log.Fatalf("Failed to convert to Integer")
	}

	return res
}
