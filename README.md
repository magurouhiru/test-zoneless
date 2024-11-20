# TestZoneless

## 概要
Angular のZoneless を試すためのリポジトリです。  
通常(withZone) とZoneless とを比較することができます。  
Zoneless については以下を参照ください。  

https://angular.dev/guide/experimental/zoneless

## 使い方
### `npm run start`
withZone とZoneless の両方が`ng serve`されます。   
以下をブラウザで開いて比較してください。  
↓withZone  
http://localhost:4201

↓Zoneless  
http://localhost:4202

### `npm run build`
withZone とZoneless の両方が`ng build`されます。   
./dist/with-zone がwithZoneです。  
./dist/zoneless がZoneless です。  
両者を比較してください。  
また、docker compose の環境があれば、`docker-compose up`でサーブしてくれます。  

↓どちらにもいけるリンク付きのページ  
http://localhost:8080/test-zoneless/

### `npm run watch`
withZone とZoneless の両方が`ng build --watch`されます。   
docker compose の環境があれば、`docker-compose up`でサーブしてくれます。  
以下をブラウザで開いて比較してください。  
↓withZone  
http://localhost:4211

↓Zoneless  
http://localhost:4212
