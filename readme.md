### 学习资料

#### Promise

##### Promise 依次执行



#### 前端缓存

https://juejin.im/post/6844904105329033230

强缓存 vs 协商缓存

Cache-Control 比Expires比较要内涵，具备更多的属性，其中包括如下
• no-cache ：可以在本地缓存，可以在代理服务器缓存，需要先验证才可使用缓存
• no-store ： 禁止浏览器缓存，只能通过服务器获取
• max-age ： 设置资源的过期时间（效果与expires一样）

#### tcp vs udp

https://www.cnblogs.com/fundebug/p/differences-of-tcp-and-udp.html

UDP
1. UDP不需要三次握手，不会对数据报文进行任何拆分跟拼接操作，只是做数据报文的搬运工
2. UDP不止支持一对一 还支持一对多  多对多 多对一,也就是说支持 点播，多播，广播
3. UDP不可靠，收到什么数据就传递什么数据，以恒定的速度发送，在网络不好的情况下可能会丢包。对实现要求比较高的场景比较适合用UDP, (比如游戏，电话会议)
4. UDP的头部很短只有八个字节，2个十六位的端口，整个报文的长度和整个报文的校验

TCP
是面向连接的，可靠的，基于字节流的传输层通信协议

> TCP的三次握手
1. 客户端向服务端发送连接请求报文段
2. 服务端接收到连接请求报文段后，如果同意连接，则向客户端发送一个应答
3. 客户端收到同意连接的应答之后，给服务端发送确认报文，客户端在发送完这个报文后进入连接状态，服务端接受到改报文后也进入连接状态，此时连接建立成功

> TCP的四次挥手





#### 浏览器输入url后做了什么

https://www.jianshu.com/p/7eea6fbc5fcd

https://juejin.im/post/6844903922084085773







1. 先判断URL格式是否正确
2. 判断该URL是否有缓存
3. DNS解析URL获取IP
4. 根据IP建立TCP连接
5. HTTP发起请求
6. 服务端处理请求


#### 其他

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_Types