import {
    action,
    computed,
    decorate,
    observable
} from 'mobx';
import Request from '../utils/Request';

class BatteryStore {
    batteries = [];

    constructor() {
    }

    setBatteries = (batteries) => {
        this.batteries = batteries;
    }

    getBatteryData = async() => {
        const response = await new Request().get(
            'http://localhost:5000/batteries/getall'
        );

        this.setBatteries(response);
    }
}

BatteryStore = decorate(BatteryStore, {
    batteries: observable
});

export default new BatteryStore();