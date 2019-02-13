export interface Image{
    imageId?:string;
    imageName: string;
    imageUrl: string;
    fkTProyProyId?: string;
    fkTProductoProdId?: string;
    fkTBlogPublId?: string;
}