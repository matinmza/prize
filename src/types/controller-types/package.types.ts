export interface PackageI {
    id: string;
    title: string;
    fileUrl: string;
    type: "Subscription";
    description: string;
    duration: number;
    amount: number;
    discountPercent: number;
    createdOn: string;
}
