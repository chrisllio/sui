define(function(){
    var equalObject = function(object1 ,object2){
        for (var propName in object1) {
            if (object1.hasOwnProperty(propName) !== object2.hasOwnProperty(propName)) {
                return false;
            } else if (object1.hasOwnProperty(propName) && typeof object1[propName] !== typeof object2[propName]) {
                return false;
            }
        }

        for(var propName in object2) {
            if (object1.hasOwnProperty(propName) !== object2.hasOwnProperty(propName)) {
                return false;
            } else if (typeof object1[propName] !== typeof object2[propName]) {
                return false;
            }
            if(!object1.hasOwnProperty(propName) || object1[propName] === object2[propName]) continue;
            if (object1[propName] instanceof Array && object2[propName] instanceof Array) {
                if (!equalArray(object1[propName],object2[propName])) return false;
            } else if (object1[propName] instanceof Object && object2[propName] instanceof Object) {
                if (!equalObject(object1[propName],object2[propName])) return false;
            } else if(object1[propName] !== object2[propName]) {
                return false;
            }
        }
        return true;
    },
    equalArray = function(array1, array2){
        if (array1.length != array2.length) return false;
        for (var i = 0, l = array1.length; i < l; i++) {
            if(array1[i] === array2[i]) continue;
            if (array1[i] instanceof Array && array2[i] instanceof Array) {
                if (!equalArray(array1[i],array2[i])) return false;
            }  else if (array1[i] instanceof Object && array2[i] instanceof Object) {
                if (!equalObject(array1[i],array2[i])) return false;
            }else if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true;
    };
    return {
        equals: function(obj1 ,obj2){
            if(typeof obj1 !== typeof obj2) {
                return false;
            } else if(obj1 instanceof Array && obj2 instanceof Array){
                return equalArray(obj1,obj2);
            } else if(obj1 instanceof Object && obj2 instanceof Object){
                return equalObject(obj1,obj2);
            } else {
                return obj1 === obj2;
            }
        },
        textLength: function(value){
            var str = undefined === null || value === null ? '': String(value),
                char = str.match(/[^\x00-\xff]/ig);
            return str.length + (char == null ? 0 : char.length);
        }
    }
});