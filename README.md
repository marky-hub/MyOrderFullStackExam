# Fullstack Exam

## Exam
### 1. System Design
จงออกแบบระบบย่อ URL พร้อม demo
เช่น ย่อ http://my-order.ai/long-url/very-sub-path ให้เป็น http://shorturl.com/abcde
สามารถระบุรายละเอียด เช่น 
- database => mongoDB
- back-end => node.js
- front-end => angular
- deployment => heroku เลือกใช้เพราะ deploy ง่ายและไม่เสียค่าใช้จ่าย

### 2. Up To You
จงออกแบบข้อสอบเอง พร้อมเฉลย อย่างน้อย 1 ข้อ
=> ข้อสอบ logic จงหาผลลัพธ์จากรายการสินค้าใน Jewelry market โดยแยกตาม product และบอกว่ามีทั้งหมดกี่ชิ้น และราคารวมแต่ละ product เท่าไหร่
Example 1:
  testCase_1
    [
      { product: "gold", price: 20000 }, { product: "copper", price: 10000 }, { product: "silver", price: 15000 },
      { product: "gold", price: 22000 }, { product: "silver", price: 17000 }, { product: "emerald", price: 9999 },
    ]
  
Result: 
    - product:gold|amount:2|price:42000
    - product:copper|amount:1|price:10000
    - product:silver|amount:2|price:32000
    - product:emerald|amount:1|price:9999
---------------------------------------------------------------------------------------------------------------------    
Example 2:
  testCase_2
    [
      { product: "gold", price: 20000 }, { product: "copper", price: 10000 }, { product: "silver", price: 15000 },
      { product: "gold", price: 22000 }, { product: "silver", price: 17000 }, { product: "emerald", price: 9999 }, 
      { product: "gold", price: 24500 }, { product: "silver", price: 14000 }, { product: "emerald", price: 7777 },
      { product: "ruby", price: 8500 }, { product: "ruby", price: 7900 }, { product: "emerald", price: 8888 }, 
      { product: "gold", price: 23000 }, { product: "silver", price: 17000 }, { product: "emerald", price: 6666 },
      { product: "sapphire", price: 10000 }, { product: "silver", price: 17999 }, { product: "ruby", price: 9000 },
      { product: "jade", price: 3000 }, { product: "jade", price: 3500 }, { product: "sapphire", price: 9500 },
    ]
  
  Result:
    product:gold|amount:4|price:89500
    product:copper|amount:1|price:10000
    product:silver|amount:5|price:80999
    product:emerald|amount:4|price:33330
    product:ruby|amount:3|price:25400
    product:sapphire|amount:2|price:19500
    product:jade|amount:2|price:6500
---------------------------------------------------------------------------------------------------------------------    
เฉลย run ด้วย node uptoyouExam.js
