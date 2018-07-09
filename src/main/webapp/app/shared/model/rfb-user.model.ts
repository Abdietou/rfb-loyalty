export interface IRfbUser {
    id?: number;
    username?: string;
    rfbLocationId?: number;
}

export class RfbUser implements IRfbUser {
    constructor(public id?: number, public username?: string, public rfbLocationId?: number) {}
}
