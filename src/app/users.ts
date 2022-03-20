export class Users {
    constructor(
        public name: string,
        public email: string,
        public admin: string
    ) {
        this.name=name;
        this.email=email;
        this.admin=admin;
    }
}
