export interface cardDTO {
    key: number; // udemy =  id
    title: string;
    image: string // udemy :poster
}
export interface landingPageDTO {
    cardList?: cardDTO[]; //undefined, we load app we dont have the info
}