export type CreateUserParams = {
    username: string;
    pass: string;
}

export type UpdateUserParams = {
    username: string;
    pass: string;
}

export type CreateUserProfileParam = {
    firstName: string;
    lastName: string;
    age: number;
    dob: string;
}