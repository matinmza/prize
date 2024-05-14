export interface HttpResponseI<T = undefined> {
    data: T;
    isSuccess: boolean;
    statusCode: string;
    message: string;
    warnings: string[];
}
interface NotHaveAdditionI<T>
    extends HttpResponseI<{
        result: T[];
        totalRowCount: number;
    }> {}
interface HaveAdditionI<T, G>
    extends HttpResponseI<{
        result: T[];
        totalRowCount: number;
        additionalData: G;
    }> {}

export type HttpListResponseI<T, G = undefined> = G extends undefined
    ? NotHaveAdditionI<T>
    : HaveAdditionI<T, G>;
export interface HttpPagination {
    Size: number;
    Page: number;
    Sort?: string;
}
