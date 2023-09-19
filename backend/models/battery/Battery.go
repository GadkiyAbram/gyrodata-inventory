package battery

import (
	"auth-service-golang/Structures"
	"auth-service-golang/db/config"
	"auth-service-golang/utils"
	"gorm.io/gorm"
)

func GetAllBatteries() ([]Structures.BatteryResponse, error) {
	var batteries []Structures.Battery

	if err := config.Db.
		Select(
			"serialone",
			"serialtwo",
			"container",
			"arrived",
			"invoice",
			"ccd",
			"container",
			"condition",
			"location",
		).
		Find(&batteries).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			return nil, err
		}
	}

	var serializedBatteries []Structures.BatteryResponse
	for _, battery := range batteries {
		serializedBattery := utils.SerializeModel(battery, &Structures.BatteryResponse{}).(*Structures.BatteryResponse)
		serializedBatteries = append(serializedBatteries, *serializedBattery)
	}

	return serializedBatteries, nil
}
