import $api from '../http';

export default class BatteriesService {
  static async batteriesAll(body) {
    return $api.get('/batteries', {body})
      .then(response => response)
  }
}