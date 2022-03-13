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
			"street": "Avenue 2"
		},
		"parents": []
	},
	{
		"firstName": "Hans",
		"lastName": "Schmidt",
		"age": 23,
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
		"age": 27,
		"gender": Gender.MALE,
		"adress": {
			"street": "Avenue 1"
		},
		"parents": []
	},
	{
		"firstName": "Victor",
		"lastName": "Schmidt",
		"age": 21,
		"gender": Gender.MALE,
		"adress": {
			"street": ""
		},
		"parents": []
	},
	{
		"firstName": "Hilda",
		"lastName": "Schmidt",
		"age": 21,
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
			"street": "Avenue 1"
		},
		"parents": []
	},
	{
		"firstName": "Peter",
		"lastName": "Schmidt",
		"age": 24,
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
	},
	{
		"firstName": "Hellen",
		"lastName": "Bush",
		"age": 32,
		"gender": Gender.FEMALE,
		"adress": {
			"street": "Avenue 1"
		},
		"parents": []
	},
	{
		"firstName": "Chris",
		"lastName": "Bush",
		"age": 22,
		"gender": Gender.MALE,
		"adress": {
			"street": ""
		},
		"parents": []
	},
	{
		"firstName": "Anna",
		"lastName": "Bush",
		"age": 29,
		"gender": Gender.FEMALE,
		"adress": {
			"street": ""
		},
		"parents": []
	}
]