import { Organisation } from "../../model/Organisation";
import { CompanyType } from "./CompanyType";

class Company extends Organisation {
  est_date: Date;
  type: CompanyType;
  no_of_employees: number;
  turnover: number;
  board_of_directors: string[];
  // hr_details: {
  //   name: string;
  //   email: string;
  //   contact_no: number;

  // }[];
  about_us: string;
  gst_no: string;
  pan_no: string;
  cin_no: string;
  tan_no: string;
  corporate_address: string;
  // factory_address: string;
  logo: string;
  // brochure: string;
  // website: string;
  linkedin: string;
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
  blog: string;
  // wiki: string;
  // glassdoor: string;
  // crunchbase: string;
  // wiki_link: string;
  glassdoor_link: string;
  // crunchbase_link: string;

  constructor(
    name: string,
    address: string,
    contactNo: number,
    websiteUrl: string,
    location: string,
    constactEmail: string,
    est_date: Date,
    type: CompanyType,
    no_of_employees: number,
    turnover: number,
    board_of_directors: string[],
    about_us: string,
    gst_no: string,
    pan_no: string,
    cin_no: string,
    tan_no: string,
    corporate_address: string,
    logo: string,
    linkedin: string,
    facebook: string,
    twitter: string,
    instagram: string,
    youtube: string,
    blog: string,
    glassdoor_link: string
  ) {
    super(name, address, contactNo, websiteUrl, location, constactEmail);
    this.est_date = est_date;
    this.type = type;
    this.no_of_employees = no_of_employees;
    this.turnover = turnover;
    this.board_of_directors = board_of_directors;
    this.about_us = about_us;
    this.gst_no = gst_no;
    this.pan_no = pan_no;
    this.cin_no = cin_no;
    this.tan_no = tan_no;
    this.corporate_address = corporate_address;
    this.logo = logo;
    this.linkedin = linkedin;
    this.facebook = facebook;
    this.twitter = twitter;
    this.instagram = instagram;
    this.youtube = youtube;
    this.blog = blog;
    this.glassdoor_link = glassdoor_link;
  }

  // Getter and Setter methods

  getEstDate(): Date {
    return this.est_date;
  }
  setEstDate(est_date: Date): void {
    this.est_date = est_date;
  }

  getType(): CompanyType {
    return this.type;
  }
  setType(type: CompanyType): void {
    this.type = type;
  }

  getNoOfEmployees(): number {
    return this.no_of_employees;
  }
  setNoOfEmployees(no_of_employees: number): void {
    this.no_of_employees = no_of_employees;
  }

  getTurnover(): number {
    return this.turnover;
  }
  setTurnover(turnover: number): void {
    this.turnover = turnover;
  }

  getBoardOfDirectors(): string[] {
    return this.board_of_directors;
  }
  setBoardOfDirectors(board_of_directors: string[]): void {
    this.board_of_directors = board_of_directors;
  }

  getAboutUs(): string {
    return this.about_us;
  }
  setAboutUs(about_us: string): void {
    this.about_us = about_us;
  }

  getGstNo(): string {
    return this.gst_no;
  }
  setGstNo(gst_no: string): void {
    this.gst_no = gst_no;
  }

  getPanNo(): string {
    return this.pan_no;
  }
  setPanNo(pan_no: string): void {
    this.pan_no = pan_no;
  }

  getCinNo(): string {
    return this.cin_no;
  }
  setCinNo(cin_no: string): void {
    this.cin_no = cin_no;
  }

  getTanNo(): string {
    return this.tan_no;
  }
  setTanNo(tan_no: string): void {
    this.tan_no = tan_no;
  }

  getCorporateAddress(): string {
    return this.corporate_address;
  }
  setCorporateAddress(corporate_address: string): void {
    this.corporate_address = corporate_address;
  }

  getLogo(): string {
    return this.logo;
  }
  setLogo(logo: string): void {
    this.logo = logo;
  }

  getLinkedin(): string {
    return this.linkedin;
  }
  setLinkedin(linkedin: string): void {
    this.linkedin = linkedin;
  }

  getFacebook(): string {
    return this.facebook;
  }
  setFacebook(facebook: string): void {
    this.facebook = facebook;
  }

  getTwitter(): string {
    return this.twitter;
  }
  setTwitter(twitter: string): void {
    this.twitter = twitter;
  }

  getInstagram(): string {
    return this.instagram;
  }
  setInstagram(instagram: string): void {
    this.instagram = instagram;
  }

  getYoutube(): string {
    return this.youtube;
  }
  setYoutube(youtube: string): void {
    this.youtube = youtube;
  }

  getBlog(): string {
    return this.blog;
  }
  setBlog(blog: string): void {
    this.blog = blog;
  }

  getGlassdoorLink(): string {
    return this.glassdoor_link;
  }
  setGlassdoorLink(glassdoor_link: string): void {
    this.glassdoor_link = glassdoor_link;
  }
}
