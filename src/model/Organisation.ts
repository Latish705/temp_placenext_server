export class Organisation {
  name: string;
  address: string;
  contactNo: number;
  websiteUrl: string;
  location: string;
  constactEmail: string;

  constructor(
    name: string,
    address: string,
    contactNo: number,
    websiteUrl: string,
    location: string,
    constactEmail: string
  ) {
    this.name = name;
    this.address = address;
    this.contactNo = contactNo;
    this.websiteUrl = websiteUrl;
    this.location = location;
    this.constactEmail = constactEmail;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string): void {
    this.address = address;
  }

  getContactNo(): number {
    return this.contactNo;
  }

  setContactNo(contactNo: number): void {
    this.contactNo = contactNo;
  }

  getWebsiteUrl(): string {
    return this.websiteUrl;
  }

  setWebsiteUrl(websiteUrl: string): void {
    this.websiteUrl = websiteUrl;
  }

  getLocation(): string {
    return this.location;
  }

  setLocation(location: string): void {
    this.location = location;
  }

  getConstactEmail(): string {
    return this.constactEmail;
  }

  setConstactEmail(constactEmail: string): void {
    this.constactEmail = constactEmail;
  }
}
