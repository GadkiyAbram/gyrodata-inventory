import {
  action,
  makeAutoObservable, makeObservable,
  observable,
  reaction
} from 'mobx';
import axios from 'axios';
import {batteries} from '../DbData/batteryData';
import BatteriesService from '../services/BatteriesService';

class BatteryStore {
  batteries = [];
  total = 0;
  limit = 10;
  offset = 0;

  constructor() {
    makeAutoObservable(this, {
      batteries: observable
    });
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
      serialOne: id,
      condition
    };

    console.log(params);

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
      const response = await BatteriesService.batteriesAll({
        limit: 10
      });

      console.log(response?.data);
      this.setBatteries(response?.data);


    } catch (err) {
      this.setBatteries(batteries);
      console.log(err);
    }
  }

  // getBatteryData = async() => {
  //     try {
  //         const response = await axios.get(
  //             'http://localhost:8081/batteries/getall/',
  //             { params:
  //                     {
  //                         offset: this.offset,
  //                         limit: this.limit
  //                     }
  //                 });
  //         this.setBatteries(response?.data.data);
  //         this.setTotalRows(response?.data.total);


  //     } catch (err) {
  //         this.setBatteries(batteries);
  //         console.log(err);
  //     }
  // }
}

export default new BatteryStore();