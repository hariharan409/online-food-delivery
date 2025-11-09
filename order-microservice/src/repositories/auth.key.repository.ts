import db from "../db/db.ts";


const findOneAuthKeyByKeys = async (accessId: string, clientId: string) => {
    try {
        const authKey = await db.AuthKey.findOne({
            where: {
                access_id: accessId,
                client_id: clientId,
            },
            raw: true,
        });

        return authKey;
    } catch (error: any) {
        throw new Error(error.message || error);
    }
}

export default {
    findOneAuthKeyByKeys,
};