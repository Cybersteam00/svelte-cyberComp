export default class User{
	public firstName: string = "";
	public lastName: string = "";
	public age: number = 0;
	public gender: Gender = Gender.MALE;
	public adress: Adress;
	public parents: String[] = [];
}

export class Adress{
	public street: string = "";
}

export enum Gender{
	MALE,
	FEMALE
}