var obj = {
  name: "xionglp",
  _height: 200,
  _address: "深圳市",
  eatting: function() {
    console.log(this.name + "在吃东西")
  },
  set address(value) {
    this._address = value;
  },
  get address() {
    return this._address;
  }
}

Object.defineProperties(obj, {
  age: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 18
  },
  height: {
    configurable: true,
    enumerable: true,
    get: function() {
      return this._height;
    },
    set: function(value) {
      this._height = value;
    }
  }
})

obj.age = 20;

console.log(obj.address);
console.log(obj)