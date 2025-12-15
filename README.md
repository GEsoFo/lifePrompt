适用于https://www.lifekline.cn/
排队，生成失败，等待时间长，统统搞定，只不过是手动的

第一步-准备提示词
在prompt.txt中填写基本信息
![alt text]({5DF8EBEA-D3C7-4A75-ABCB-FDCDB8587944}.png)

八字可以到这个网站输入生日排出，第一个大运下面的年龄就是起运时间
https://p.china95.com/bazi/
![alt text]({E33A20EA-4259-4E26-9AD0-5D42BDF0FD0D}.png)

第二部-处理返回结果
把得到的json,塞入app.js fakeReportJson= {“报告”}
![alt text]({4CD50B71-AF0D-4BA6-AEB5-80DCF6F4E600}.png)

大概是这样，很长
![alt text]({77967154-42BF-4D04-9EE2-A81BA123CF85}.png)

第三步-注入json
打开官网，按F12--控制台
复制app.js内容，粘贴到控制台

![alt text]({7229BB84-7FBC-451F-AC14-CABC1FA4D275}.png)

然后表单随便填不影响，点击生成就行了
会发现直接跳过等待时间，得到报告

这里还是推荐gemini 3pro 
准的吓人不要被ai搞破防
![alt text]({3106DD1F-61E6-4C65-BB87-377D68E0F7F1}.png)