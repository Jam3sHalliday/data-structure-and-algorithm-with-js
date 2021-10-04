## BREAK IT DOWN

### Explicitly write out the steps you need to take
```
function characterCount(str) {
    var result = {};

    for(var i = 0; i < str.length; i ++) {
        var char = str[i].toLowerCase();

        if (result[char] > 0) {
            result[char] ++;
        } else {
            result[char] = 1
        }
    }

    return result;
}
```