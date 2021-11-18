# obj-prop

A clear and simple way to validate and manipulate properties of an object. All the methods are: 
* `hasNoProperties`
* `hasProperties`
* `hasTheseProperties`
* `deleteProperties`
* `nullProperties` and 
* `clearProperties`

## [Source Code](https://github.com/fireWizard23/obj-prop)

***

## Code Examples
### Example of using hasNoProperties method.

```javascript
const { hasNoProperties } = require("obj-prop");
const test = {}; 
console.log(hasNoProperties(test)) // true
```

### Using deleteProperties
```javascript
const { deleteProperties } = require("obj-prop");
const test = {
    deleteMe: "value",
    "doNotDeleteMe": 1,
    hello: "world"
}

deleteProperties(test, "deleteMe", "hello");

console.log(test) // { "doNotDeleteMe: 1 }

```
### Using hasTheseProperties 

```typescript
import {hasTheseProperties} from 'obj-prop';

const object = {test: ''};

console.log(hasTheseProperties(object, "test", "username")) // false


```


### Using nullProperties
```javascript
const { nullProperties } = require("obj-prop");
const test = {
    deleteMe: "value",
    "doNotDeleteMe": 1,
    hello: "world"
}

nullProperties(test, "deleteMe", "hello");

console.log(test); // { deleteMe: null, "doNotDeleteMe: 1, hello: null };

```

