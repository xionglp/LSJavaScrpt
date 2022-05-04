class LSEventBus {
  constructor() {
    this.eventBus = {}
  }

  on(eventName, eventCallback, thisArg) {
    let handlers = this.eventBus[eventName]
    if (!handlers) {
      handlers = []
      this.eventBus[eventName] = handlers
    }
    handlers.push({
      eventCallback: eventCallback,
      thisArg: thisArg
    })
  }

  off(eventName, eventCallback) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return
    const newHandlers = [...handlers]
    for (let i = 0; i < newHandlers.length; i++) {
      const handler = newHandlers[i];
      if (handler.eventCallback === eventCallback) {
        const index = handlers.indexOf(handler)
        handlers.splice(index, 1)
      }
    } 
  }

  emit(eventName, ...payload) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return
    handlers.forEach(handler => {
      handler.eventCallback.apply(handler.thisArg, payload)
    })
  }
}

const eventBus = new LSEventBus()

// main.js
eventBus.on("abc", function(res) {
  console.log("监听abc111")
  console.log(res, this)
}, {name: "ls"})

const handleCallback = function() {
  console.log("监听abc222")
}
eventBus.on("abc", handleCallback, {name: "xionglp"})

// utils.js
eventBus.emit("abc", 333)

// 移除监听
eventBus.off("abc", handleCallback)
eventBus.emit("abc", "cccc")