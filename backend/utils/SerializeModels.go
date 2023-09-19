package utils

import "reflect"

func SerializeModel(model interface{}, response interface{}) interface{} {
	valueType := reflect.ValueOf(model)
	valueType = reflect.Indirect(valueType)

	responseValue := reflect.ValueOf(response)
	responseValue = reflect.New(responseValue.Elem().Type()).Elem()

	if valueType.Kind() == reflect.Struct {
		for i := 0; i < valueType.NumField(); i++ {
			field := valueType.Type().Field(i)
			fieldName := field.Name
			fieldValue := valueType.Field(i).Interface()

			responseField := responseValue.FieldByName(fieldName)
			if responseField.IsValid() && responseField.CanSet() {
				responseField.Set(reflect.ValueOf(fieldValue))
			}
		}
	}

	return responseValue.Addr().Interface()
}
