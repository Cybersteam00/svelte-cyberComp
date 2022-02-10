import type User from "./User";
import { Gender } from "./User";

export const users: User[] = [
	{
		"firstName": "Bob",
		"lastName": "Schmidt",
		"age": 22,
		"gender": Gender.MALE,
		"adress": {
			"street": ""
		},
		"parents": ["Hans"]
	},
	{
		"firstName": "Mario",
		"lastName": "Schmidt",
		"age": 21,
		"gender": Gender.MALE,
		"adress": {
			"street": ""
		},
		"parents": []
	},
	{
		"firstName": "Hans",
		"lastName": "Schmidt",
		"age": 22,
		"gender": Gender.MALE,
		"adress": {
			"street": ""
		},
		"parents": []
	},
	{
		"firstName": "Andy",
		"lastName": "Schmidt",
		"age": 22,
		"gender": Gender.MALE,
		"adress": {
			"street": ""
		},
		"parents": []
	},
	{
		"firstName": "Lea",
		"lastName": "Schmidt",
		"age": 22,
		"gender": Gender.FEMALE,
		"adress": {
			"street": ""
		},
		"parents": ["Luigi","Francisca"]
	},
	{
		"firstName": "Lukas",
		"lastName": "Schmidt",
		"age": 22,
		"gender": Gender.MALE,
		"adress": {
			"street": ""
		},
		"parents": []
	},
	{
		"firstName": "Victor",
		"lastName": "Schmidt",
		"age": 22,
		"gender": Gender.MALE,
		"adress": {
			"street": ""
		},
		"parents": []
	},
	{
		"firstName": "Hilda",
		"lastName": "Schmidt",
		"age": 22,
		"gender": Gender.FEMALE,
		"adress": {
			"street": ""
		},
		"parents": []
	},
	{
		"firstName": "Robin",
		"lastName": "Schmidt",
		"age": 22,
		"gender": Gender.FEMALE,
		"adress": {
			"street": ""
		},
		"parents": []
	},
	{
		"firstName": "Peter",
		"lastName": "Schmidt",
		"age": 22,
		"gender": Gender.MALE,
		"adress": {
			"street": ""
		},
		"parents": []
	},
	{
		"firstName": "Anna",
		"lastName": "Schmidt",
		"age": 22,
		"gender": Gender.FEMALE,
		"adress": {
			"street": ""
		},
		"parents": []
	},
	{
		"firstName": "Chris",
		"lastName": "Schmidt",
		"age": 22,
		"gender": Gender.MALE,
		"adress": {
			"street": ""
		},
		"parents": []
	}
]