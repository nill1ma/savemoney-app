export interface Login {
    id?: string
    email: string
    password: string
}

export interface Profile {
    id?: string
    name: string
    nickName?: string
    birthDay: Date
}