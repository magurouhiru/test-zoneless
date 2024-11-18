# TestZoneless

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.1.

## 概要
Angular のzoneless を試すためのリポジトリです。  
通常のzone ありとzoneless とを比較することができます。  
zoneless については以下を参照ください。  

https://angular.dev/guide/experimental/zoneless

## 実行方法
### development の比較
`npm run start`で通常とzoneless の両方が実行されます。   
以下をブラウザで開いて比較してください。  
↓通常(zone あり)  
http://localhost:4201

↓zoneless  
http://localhost:4202

### production の比較
`npm run build`でdist フォルダに出力されます。  
test-zoneless_zone が通常(zone あり)です。  
test-zoneless_zoneless がzoneless です。  
両者を比較してください。  
また、docker compose の環境があれば、`docker-compose up`でサーブしてくれます。  
以下をブラウザで開いて比較してください。  
↓通常(zone あり)  
http://localhost:4211

↓zoneless  
http://localhost:4212

↓どちらにもいけるリンク付きのページ  
http://localhost:8080
