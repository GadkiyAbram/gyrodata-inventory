import {
    action,
    computed,
    decorate,
    observable, toJS
} from 'mobx';
import axios from 'axios';

class BatteryStore {
    batteries = [];

    constructor() {
    }

    setBatteries = (batteries) => {
        this.batteries = batteries;
    }

    getBatteryData = async() => {
        try {
            const response = await axios.get(
                'http://localhost:5000/batteries/getall/'
            );
            this.setBatteries(response?.data);

        } catch (err) {
            console.log(err);
        }
    }
}

BatteryStore = decorate(BatteryStore, {
    batteries: observable,
});

export default new BatteryStore();