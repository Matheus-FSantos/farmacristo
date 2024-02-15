interface IUserDTO {
	id: string
	tier: string
	name: string
	email: string
	password: string
}

interface IUserDTOWithImage {
	id: string
	tier: string
	name: string
	email: string
	password: string
	image: string	
}

interface INewUserDTO {
	name: string
	email: string
	password: string
}

interface ILoginDTO {
	email: string
	password: string
}

interface IUserReducedDTO {
	id: string
	email: string
	password: string
}
