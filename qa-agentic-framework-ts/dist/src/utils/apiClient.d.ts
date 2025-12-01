export declare class APIClient {
    private baseUrl;
    constructor(baseUrl: string);
    sendMessage(message: string): Promise<{
        status: number;
        data: any;
    }>;
}
//# sourceMappingURL=apiClient.d.ts.map