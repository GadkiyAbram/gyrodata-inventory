import {
    action,
    computed,
    decorate,
    observable, reaction, toJS
} from 'mobx';
import axios from 'axios';

class BatteryStore {
    batteries = [];
    total = 0;
    limit = 5;
    offset = 0;

    constructor() {
        this.getBatteryData();

        reaction(() => this.offset, () => {
            this.getBatteryData();
        });
    }

    setOffset = (offset) => {
        this.offset = offset;
    }

    setBatteries = (batteries) => {
        this.batteries = batteries;
    }

    setTotalRows = (total) => {
        this.total = total;
    }

    updateCondition = async(id, condition) => {
        const params = {
            id: id,
            condition: condition
        };

        try {
            await axios.put(
                'http://localhost:5000/batteries/updateCondition/',
                { params: params
                });

            await this.getBatteryData();

        } catch (err) {
            console.log(err);
        }
    }

    getBatteryData = async() => {
        try {
            const response = await axios.get(
                'http://localhost:5000/batteries/getall/',
                { params:
                        {
                            offset: this.offset,
                            limit: this.limit
                        }
                    });
            this.setBatteries(response?.data.data);
            this.setTotalRows(response?.data.total);

        } catch (err) {
            console.log(err);
        }
    }
}

BatteryStore = decorate(BatteryStore, {
    batteries: observable,
    limit: observable,
    offset: observable,
    total: observable
});

export default new BatteryStore();