export interface User {
    id: number
    name: string
    /**
     * Username at least 8 characters
     */
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}

type Credentials = Pick<User,'username' | 'address'> ;

export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

export interface Geo {
    lat: string
    lng: string
}

export interface Company {
    name: string
    catchPhrase: string
    bs: string
}
