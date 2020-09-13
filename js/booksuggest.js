function booksuggest(){
    var u=new Array(
        "https://www.amazon.co.jp/dp/4391146088",
        "https://www.amazon.co.jp/dp/4167557037",
        "https://www.amazon.co.jp/dp/4591125394",
        "https://www.amazon.co.jp/dp/B009727O2E",
        "https://www.amazon.co.jp/dp/B00COKM0YI",
        "https://www.amazon.co.jp/dp/0141025182",
        "https://www.amazon.co.jp/dp/459407894X",
        "https://www.amazon.co.jp/dp/4480687025"
    );
    location.href=(u[Math.floor(Math.random()*u.length)]);
    }
