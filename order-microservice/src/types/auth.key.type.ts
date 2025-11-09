

export interface AuthKeyType {
    id: number;
    access_id: string;
    client_id: string;
    client_secret: string;
    client_name: string;
    description?: string;
    status?: "active" | "inactive" | "expired" | "revoked" | "rotated";
};