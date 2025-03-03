<!DOCTYPE html>
<html lang="zh-TW">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>黑璃醬的網站</title>
<style>
    body {
    background-color: #f9f5d7; /* 背景顏色 */
    font-family: "Arial", sans-serif; /* 設定字型 */
    text-align: center; /* 文字置中 */
    padding: 50px;
}
    h1 {
    color: #ff6b6b; /* 標題顏色 */
}
    p {
    font-size: 20px; /* 文字大小 */
    color: #555;
}
    button {
    background-color: #ff6b6b;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
}
    button:hover {
    background-color: #d9534f;
}
</style>
</head>
<body>
<h1>歡迎來到黑璃醬的網站！</h1>
<p>點擊按鈕來跟我說哈囉吧！</p>
<button onclick="sayHello()">點我！</button>

<script>
    function sayHello() {
    alert("黑璃醬，今天也要開心哦！(⁎˃ᴗ˂⁎)");
}
</script>
</body>
</html>
