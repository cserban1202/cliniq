export interface categ3DTO {
    id: number;
    category: string;
    type: string;
    price: int;
}

export interface categ3CreationDTO {
    name: string;
    consultationDate?: Date;
    picture?: File;
    pictureURL? : string;
    description?: string;
}
