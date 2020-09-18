import HttpService from 'Core/Http/http.service';

class RoleService extends HttpService {
    private static instance: RoleService;

    constructor() {
        super();
    }

    public static getInstance(): RoleService {
        if (!RoleService.instance) {
            RoleService.instance = new RoleService();
        }

        return RoleService.instance;
    }

    fetchRoles = async () => {
        try {
            const response = await this.client.get(`/searchRoles`);
            return response.data;
        } catch (error) {
            throw error.response || error.message;
        }
    };
}

const instance = new RoleService();
export default instance;
