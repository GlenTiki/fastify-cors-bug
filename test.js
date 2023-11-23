const headers = {
  "Accept": "*/*",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
  "Access-Control-Request-Headers": "content-type",
  "Access-Control-Request-Method": "POST",
  "Cache-Control": "no-cache",
  "Connection": "keep-alive",
  "Host": "localhost:3001",
  "Origin": "http://localhost:3000",
  "Pragma": "no-cache",
  "Referer": "http://localhost:3000/",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-site",
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0"
};

fetch("http://localhost:3000", {
  method: "OPTIONS",
  headers: headers,
})
  .then(res => { console.log(res.status) })
  .catch(err => { console.log(err) });
