<br/>
<p text-align="center">
  <a href="banner.png">
    <img src="banner.png" alt="Logo" width="80" height="80">
  </a>
</p>
<h1 text-align="center">TEA Calendar</h1>

<p text-align="center">
    Pragmatically convert Gregorian calendar date of the period 1583-2100 to Chinese Calendar date
        <br/>
    <br/>
<a href="https://codepen.io/kws/pen/KKrjrEy">Demo</a>
  <br/>
</p>

## Table Of Contents

- [About the Project](#about-the-project)

- [Usage](#usage)

- [Limitations](#limitations)

- [License](#license)

- [Acknowledgements](#acknowledgements)

## About the Project

This pure JavaScript program converts any Gregorian calendar date of the period **1583-2100** to its corresponding Chinese calendar date. It is designed to be an alternative to the conversion via the JavaScript's standard built-in objects, which is not always reliable for the real-world usage (*cf.* the code example below or [this codepen](https://codepen.io/kws/pen/BaGjaPj)) and rather difficult to be adjusted to the existing Chinese calendar without loss of efficiency.  

```js
//conversion wiht the JavaScript's Standard built-in objects
const date = new Date('2018-11-08T12:00:00.000');
const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
const dateFormat = new Intl.DateTimeFormat('fr-CA-u-ca-chinese', options);
let output = dateFormat.format(date);
//output in Chrome as well as in Firefox: "2/10/35".
//In reality, the corresponding date is "1/10/35".
```

`Note` About the correct conversion of the date above, cf., for example, the [conversion table 2011-2020](https://web.archive.org/web/20230824102033/https://www-ws.gov.taipei/Download.ashx?u=LzAwMS9VcGxvYWQvNDM5L3JlbGZpbGUvNDc1NTcvNzk3MDY5OS9mODNkY2RmOC00NDY2LTQ5MzktYjQ2Mi1kMjg3N2JlNzQzOWQucGRm&n=5ZyL6L6y5puGMjAxMS0yMDIwLnBkZg%3D%3D&icon=..pdf) published by the Taipei Astronomical Museum or the [*Gregorian-Lunar Calendar Conversion Table 2018*](https://web.archive.org/web/20230824104025/https://www.hko.gov.hk/en/gts/time/calendar/pdf/files/2018e.pdf) of Hong Kong Observatory.

## Usage

### Installation

```shell
# npm
npm i tea-calendar
```

### Basic conversion

#### 1. import the core module:

- local import:

```js
import {Teac} from '/PATH/TO/teac.min.js'
```

- remote import from jsdelivr:

```js
 import {Teac} from 'https://cdn.jsdelivr.net/npm/tea-calendar/src/teac.min.js'
```

- remote import from unpkg:

```js
 import {Teac} from 'https://unpkg.com/tea-calendar/src/teac.min.js'
```

- remote import from esm.sh:

```js
 import {Teac} from 'https://esm.sh/tea-calendar'
```

- remote import from skypack:

```js
 import {Teac} from 'https://cdn.skypack.dev/pin/tea-calendar@v1.2.2-52FdYM1pHS1geiE67Q2Z/mode=imports,min/optimized/tea-calendar.js'
```

- remote import from deno.land:

```js
 import {Teac} from 'https://deno.land/x/tea_calendar/teac.min.js'
```

`Note` a [Deno version](https://deno.land/x/tea_calendar) with identical core codes is also [published in GitHub](https://github.com/uranus-aqua/tea-calendar-with-deno).

#### 2. input a Gregorian Calendar date `string` in "YYYY-MM-DD" format to get an `array` of four elements:

- number of the year in the sexagenary cycle,

- lunar month number,

- day number,

- Boolean value for leap month (`true`: leap month)

```js
const date = new Teac('2025-07-28').num();
// Expected output: [42, 6, 4, true] 
```

`Note` In order to avoid the impact of time zone setting of the device (or the network), this program uses the UTC and the 12:00:00 GMT+00:00 for each input date. For example, the string '2023-04-04' is converted to "2023-04-04T12:00:00.000Z" before the construction of the corresponding JavaScript Date object.

### i18n

##### 1. import the linguistic module `Lang` with the core module (for the CDN links, see above):

```js
import {Teac, Lang} from '/PATH/TO/Teac.js'
```

##### 2a. output the sexagenary years in string format

- in Chinese:

```js
const d = new Teac('2025-07-28').yearIn('zh');
// Expected output: ['乙巳', 6, 4, true] 
```

- in Korean:

```javascript
const d = new Teac('2025-07-28').yearIn('ko');
// Expected output: ['을사', 6, 4, true] 
```

- in Pinyin:

```javascript
const d = new Teac('2025-07-28').yearIn('en');
// Expected output: ['yi-si', 6, 4, true] 
```

`Note`  Any ISO 639-1 codes other than `ko` and `zh` could replace the `en` here. In other words, `de`, `fr`, `nl` are  valid and all produce the same output. 

##### 2b. Output entirely in text format

- in traditional Chinese:

```js
const d = new Teac('2025-07-28').sino(0)
// Expected output: ['乙巳年', '閏六月', '初四'] 
```

- in simplified Chinese:

```js
const d = new Teac('2025-07-28').sino(1)
// Expected output: ['乙巳年', "闰六月', '初四']
```

- without literal characters:

```js
const d = new Teac('2025-07-28').sino(0, false);
// Expected output: ['乙巳', "閏六', '初四']
```

## Limitations

Due to their closeness to the midnight, the 9th new moon of 2057, the 8th new moon of 2089 and the 7th one of 2097 may have a discrepancy of one day. Any prospective conversion concerning these dates is subject to adjustment and this program is of no exception.

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

## Author

* **Kuo Wei-Shiung**, [kws.baseed.net](http://kws.baseed.net).

## Acknowledgements

* Calendrical data from Professor Yuk Tung Liu's [Conversion between Western and Chinese Calendar (722 BCE — 2200 CE)](https://ytliu0.github.io/ChineseCalendar/index.html), one of the best, if not the best source now published.
