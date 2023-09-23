class Request {
  constructor(base) {
    this.base = base || window.location.origin;
  }

  get = async(path, params = {}, options = {}) => {
    const requestUrl = this._getUrlWithParams(path, params);
    const response = await fetch(
      requestUrl,
      {
        signal: options.signal || null
      }
    );

    console.log(response);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  };

  post = async(path, params = {}, body = {}, options = {}) => {
    const requestUrl = this._getUrlWithParams(path, params);

    const response = await fetch(
      requestUrl,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
        signal: options.signal || null
      }
    );

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    if (response.status !== 204) {
      return response.json();
    }
  };

  _getUrlWithParams = (path, params = {}) => {
    const requestUrl = new URL(path, this.base);

    if (Object.entries(params).length) {
      Object.keys(params).forEach((param) => {
        requestUrl.searchParams.append(param, params[param]);
      });
    }

    return requestUrl;
  };
}

export default Request;