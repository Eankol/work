import api from 'axios';
import constant from '@/config/urlConfig';
const { baseURL } = constant;

class dsmEnergyUseService{

    getDevs(){
        return api.get(baseURL+'/getDev?parentId=990006');
    }

    getVol(queryDate,ldId){
        return api.get(baseURL+'/getVol?ldId='+ldId+'&queryDate='+queryDate);
    }

    getMstaVol(startDate,endDate,ldId){
        return api.get(baseURL+'/getMstaVol?startDate='+startDate+'&endDate='+endDate+'&ldId='+ldId);
    }

    getAllVol(startDate,endDate,ldId){
        return api.get(baseURL+'/getAllVol?startDate='+startDate+'&endDate='+endDate+'&ldId='+ldId);
    }
}

export default new dsmEnergyUseService();