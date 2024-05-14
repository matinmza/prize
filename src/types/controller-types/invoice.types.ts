export enum InvoiceStatusE {
    UnPaid = "UnPaid",
    Paid = "Paid",
}
export interface InvoiceI {
    id: string;
    packageId: string;
    packageTitle: string;
    packageFileUrl: string;
    status: InvoiceStatusE;
    transactionId: string;
    totalAmount: number;
    createdOn: string;
}
