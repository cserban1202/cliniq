export interface categ2CreationDTO {
    name: string;
    consultationDate?: Date;
    picture?: File;
    pictureURL? : string;
    description?: string;
}

export interface categ2DTO {
    id: number;
    name: string;
    consultationDate: Date;
    picture?: string;
}