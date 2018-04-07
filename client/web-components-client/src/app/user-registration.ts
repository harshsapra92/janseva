export class UserRegistration {
    constructor(
        public phoneNumber: string,
        public emailAddress: string,
        public createdDateTime: string,
        public address: string,
        public isVerified: boolean,
        public location: GeoPoint,
        public id?: number
    ) {}
}

export class GeoPoint {
    constructor(
        public lat: number,
        public lng: number
    ) {}
};
