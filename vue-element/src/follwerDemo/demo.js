class Event{
  constructor() {
    /*首先定义一个事件容器，用以装事件数组（订阅者可能有多个）*/
  }
  handlers = {}

  /*事件添加方法，参数有事件名和事件方法*/
  addEventListener(type,handler){
  /*首先判断handler有没有type容器，没有则创建一个新数组容器*/
    if(!(type in this.handlers)){
      this.handlers[type] =[];
    }
    /*将事件存入*/
    this.handlers[type].push[handler];
  }
  /*触发事件的两个参数（事件名，参数）*/
  dispatchEvent(type,...params) {
    /*若没有注册事件则抛出错误*/
    if (!(type in this.handlers)){
      return new Error("未注册该事件")
    }
    /*遍历触发*/
    this.handlers[type].forEach(handler => {
      handler(...params)
    })
  }

  /*事件移除 参数（事件名，删除的事件，若无第二个参数则删除该事件的订阅和发布）*/
  removeEventListener(type,handler){
    //无效事件抛出
    if (!(type in this.handlers)){
      return new Error("无效事件")
    }
    if(!handler){
      //直接移除事件
      delete this.handlers[type];
    }else {
      const idx = this.handlers[type].findIndex(ele => ele === handler)
      //抛出异常事件
      if(idx === undefined){
        return new Error("无法绑定该事件")
      }
    //移除事件
      this.handlers[type].splice(idx,1)
      if(this.handlers.length ===0){
        delete this.handlers[type];
      }
    }
  }
}

var event =new Event();
//定义一个自定义事件： load
function load (params){
  console.log('load',params)
}
event.addEventListener('load',load);
//再定义一个load 事件
function load2 (params){
  console.log('load2',params)
}
event.addEventListener('load2',load2)
//触发该事件
event.dispatchEvent('load','load事件触发')

//移除load2事件
event.removeEventListener('load',load2)
//移除所有load事件
event.removeEventListener('load')
