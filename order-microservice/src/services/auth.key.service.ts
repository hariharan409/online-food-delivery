import authKeyRepository from "../repositories/auth.key.repository.ts";


const findOneAuthKeyByKeys = async (accessId: string, clientId: string) => {
    try {
        return await authKeyRepository.findOneAuthKeyByKeys(accessId, clientId);
    } catch (error: any) {
        throw new Error(error.message || error);
    }
};

export default {
    findOneAuthKeyByKeys
};