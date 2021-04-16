enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

interface Options {
  method: METHODS;
  data: any;
  headers: any;
  timeout: number;
}

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */

export class HTTPTransport {
  queryStringify(data: {[key: string]: any}) {
    // Можно делать трансформацию GET-параметров в отдельной функции
    let queryString = '';
    for (const [key, value] of Object.entries(data)) {
      const symb = queryString.length ? '&' : '?';
      queryString = `${queryString}${symb}${key}=${value}`;
    }
    return queryString;
  }

  get = (url: string, options: Options = {} as Options) => {
    const {data} = options;
    if (data) {
      url = `${url}${this.queryStringify(data)}`;
    }
    return this.request(url, {...options, method: METHODS.GET});
  };

  put = (url: string, options: Options = {} as Options) => this.request(url, {...options, method: METHODS.PUT});

  post = (url: string, options: Options = {} as Options) => this.request(url, {...options, method: METHODS.POST});

  delete = (url: string, options: Options = {} as Options) => this.request(url, {...options, method: METHODS.DELETE});

  request = (url: string, options: Options) => {
    const {
      method, data, headers, timeout = 5000,
    } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.timeout = timeout;

      if (headers && Object.keys(headers).length) {
        for (const [key, value] of Object.entries(headers)) {
          xhr.setRequestHeader(`${key}`, `${value}`);
        }
      }

      xhr.onload = () => {
        resolve(xhr);
      };
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.onloadend = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
