export interface IEmployee {
    name: string,
    email: string,
    phoneNumber: string | null,
    office: string,
    manager: string | null,
    orgUnit: string,
    mainText: string | null,
    gitHub: string | null,
    twitter: string | null,
    stackOverflow: string | null,
    linkedIn: string | null,
    imagePortraitUrl: string | null,
    imageWallOfLeetUrl: string | null,
    highlighted: boolean,
    published: boolean;
}
