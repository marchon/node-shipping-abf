# shipping-abf

Use this module to connect with ABF Freight APIs

## Install

`npm install shipping-abf`

## Basic Usage

All calls utilize `q` promises. They will return a JSON object converted from XML.

```js
  var abfAPI = require('shipping-abf');

  var abf = new abfAPI({
    mode: 'test', // or live
    id: 'MY_ID_CODE',
  });

  abf.rate_quote({
    param1: 'value',
    param2: 'value'
  }).then(function(res) {
    // success
    console.log(res);
  }).catch(function(err) {
    // failure
    console.log(err);
  });
```

## API Methods

### rate_quote(params)

Get a Rate Quote request

### bill_of_lading(params)

Create a Bill of Lading request

### tracking(params)

Create a Tracking request

### pickup(params)

Schedule a Pickup request

### bill_of_lading_and_pickup(params)

Create a Bill of Lading and schedule a Pickup in the same request

### transit_time(params)

Get a list of Transit Times

### documents(params)

Retrieve documents from the API such as purchase orders, bills of lading, customer references, invoices, etc

See `example/index.js` for a working sample.

## License

(The MIT License)

Copyright 2014 uh-sem-blee, Co. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.