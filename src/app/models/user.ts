export type User = {
    id: string;
    email: string;
    name: string;
    imageUrl: string;
}

export type SignUpParams = {
    email: string;
    password: string;
    name: string;
    checkout?: boolean;
}

export type SignInParams = Omit<SignUpParams, 'name'>;