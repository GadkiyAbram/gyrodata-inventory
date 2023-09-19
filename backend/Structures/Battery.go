package Structures

type Battery struct {
	SerialOne   string `gorm:"column:serialone"`
	SerialTwo   string `gorm:"column:serialtwo"`
	SerialThree string `gorm:"column:serialthree"`
	Arrived     string `gorm:"column:arrived"`
	Invoice     string `gorm:"column:invoice"`
	Ccd         string `gorm:"column:ccd"`
	Container   string `gorm:"column:container"`
	Condition   int    `gorm:"column:condition"`
	Location    string `gorm:"column:location"`
}

type BatteryResponse struct {
	SerialOne   string `json:"serialOne"`
	SerialTwo   string `json:"serialTwo"`
	SerialThree string `json:"serialThree"`
	Arrived     string `json:"arrived"`
	Invoice     string `json:"invoice"`
	Ccd         string `json:"ccd"`
	Container   string `json:"container"`
	Condition   int    `json:"condition"`
	Location    string `json:"location"`
}
