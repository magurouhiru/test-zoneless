# TestZoneless

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.1.

## 概要
Angular のzoneless を試すためのリポジトリです。  
通常のzone ありとzoneless とを比較することができます。  
zoneless については以下を参照ください。  

https://angular.dev/guide/experimental/zoneless

## 使い方
### `npm run start`
通常とzoneless の両方が`ng serve`されます。   
以下をブラウザで開いて比較してください。  
↓通常(zone あり)  
http://localhost:4201

↓zoneless  
http://localhost:4202

### `npm run build`
通常とzoneless の両方が`ng build`されます。   
./dist/zone が通常(zone あり)です。  
./dist/zoneless がzoneless です。  
両者を比較してください。  
また、docker compose の環境があれば、`docker-compose up`でサーブしてくれます。  

↓どちらにもいけるリンク付きのページ  
http://localhost:8080/test-zoneless/

### `npm run watch`
通常とzoneless の両方が`ng build --watch`されます。   
docker compose の環境があれば、`docker-compose up`でサーブしてくれます。  
以下をブラウザで開いて比較してください。  
↓通常(zone あり)  
http://localhost:4211

↓zoneless  
http://localhost:4212
