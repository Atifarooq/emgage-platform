import HttpService from 'Core/Http/http.service';
import { QueryTypeEnum, QueryKeyEnum } from "Types/Domain";
import * as bodybuilder from 'bodybuilder';

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

    fetchRoles = async payload => {
        try {

            const query = bodybuilder().from(payload.from).size(payload.size);

            if (payload.filter && payload.filter.length) {
                payload.filter.forEach(q => {
                    if (q.type == QueryTypeEnum.filter)
                        query.addFilter(q.key, q.modelfield, q.value)
                });
            }

            if (payload.query && payload.query.length) {
                payload.query.forEach(q => {
                    if (q.type == QueryTypeEnum.query && q.key == QueryKeyEnum.multi_match)
                        query.addQuery(q.key, q.modelfield, q.value, q.options)
                    else if (q.type == QueryTypeEnum.query && q.key !== QueryKeyEnum.multi_match)
                        query.addQuery(q.key, q.modelfield, q.value)
                });
            }

            const response = await this.client.get(`/searchRoles`, { params: query.build() });
            return response.data;
        } catch (error) {
            throw error.response || error.message;
        }
    };


}

const instance = new RoleService();
export default instance;
