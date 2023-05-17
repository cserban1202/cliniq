export interface categ3DTO {
    id: number;
    category: string;
    type: string;
    price: number;
}

export interface categ3creation2DTO {
    id: number;
    category: string;
    type: string;
    price: number;
}

export interface categ3CreationDTO {
    name: string;
    consultationDate?: Date;
    picture?: File;
    pictureURL? : string;
    description?: string;
}
