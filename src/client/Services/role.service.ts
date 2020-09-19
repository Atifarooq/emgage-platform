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

            debugger;
            console.dir(payload);

            const query = bodybuilder().from(payload.from).size(payload.size);

            payload.query.forEach(q => {
                if (q.type == QueryTypeEnum.filter)
                    query.addFilter(q.key, q.modelfield, q.value)
                else if (q.type == QueryTypeEnum.query && q.key == QueryKeyEnum.multi_match)
                    query.addQuery(q.type, q.modelfield, q.value, q.options)
                else if (q.type == QueryTypeEnum.query && q.key !== QueryKeyEnum.multi_match)
                    query.addQuery(q.type, q.modelfield, q.value)
            });
            // const query = bodybuilder()
            //     .from(0)
            //     .size(20)
            //     .filter('term', 'entityState.itemID', '5')
            //     .query('multi_match', 'fields', ["name", "description"], { 'query': 'int_role-name', 'type': 'phrase_prefix' })
            //     .build();

            // debugger;
            const response = await this.client.get(`/searchRoles`, { params: query.build() });
            return response.data;
        } catch (error) {
            throw error.response || error.message;
        }
    };


}

const instance = new RoleService();
export default instance;
