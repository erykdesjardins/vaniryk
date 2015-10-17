var _vanirykDOMObject = function(oObj) {
    this.oObj = oObj;
    this.originalDisplay = oObj.style.display;
    
    this.addClass = function(str) {
        oObj.classList.add(str);
        return this;
    };  
    
    this.removeClass = function(str) {
        oObj.classList.remove(str);   
        return this;
    };
    
    this.style = function(prop_Arr, val) {
        if (val) {
            if (typeof prop_Arr === "string") {
                oObj.style[prop_Arr] = val;   
            } else {
                for (var prop in prop_Arr) {
                    oObj.style[prop] = prop_Arr[prop];   
                }
            }
            return this;   
        } else {
            return oObj.style[prop_Arr];
        }
    };
    
    this.hide = function() {
        oObj.style.display = "none";   
        return this;
    };
    
    this.show = function() {
        oObj.style.display = this.originalDisplay || "block";
        return this;
    };
    
    this.data = function(prop, val) {
        if (val) {
            oObj.dataset[prop] = val;
            return this;
        } else {
            return oObj.dataset[prop];   
        }
    };
    
    this.html = function(val) {
        if (val) {
            oObj.innerHTML = val;
            return this;
        } else {
            return oObj.innerHTML;
        }
    }
}
var _v = function(sel, onlyone) {
    var domObjects = document.querySelectorAll(sel);
    var len = domObjects.length;
    
    var _vObj = new Object();
    _vObj.length = len;
    _vObj.all = function(cb) {
        for (var i = 0; i < len; i++) {
            cb(_vObj[i]); 
        }        
    };
    _vObj.do = function(cb) {
        cb(_vObj[0]);   
    }
    
    for (var i = 0; i < len; i++) {
        _vObj[i] = new _vanirykDOMObject(domObjects[i]);   
    }
    
    if (onlyone) {
        return _vObj[0];
    } else {
        return _vObj;
    }
}