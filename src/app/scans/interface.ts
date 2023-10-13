export interface ScanData {
    id: string;
    last_name: string;
    validationMethod: string;
    client: string;
    first_name: string;
    documentNumber: string;
    documentType: string;
    img: string;
}
export type CardNoteProps = {
    categorie: any;
    title: string;
    first_name: string;
    lastName: string;
    documentNumber: string;
    img: string;
    id: number;
    setPetition: Function
    Categories_idCategories: number
    open: boolean
};
export const styleSpan = {
    color: "#FF6B00",
    fontFamily: "Nunito",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 800,
    lineHeight: "normal",
    textTransform: "none"
}