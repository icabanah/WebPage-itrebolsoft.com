export interface Publish {
    publId?: string;
    publName: string;
    publDesc: string;
    publBody: string;
    publEtiq: string;
    publCalif?: number;
    publDate: Date;
    fkTUserUserId?: string;
}