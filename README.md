# NodeJS + React + JoyUI

Первый проект с данным стеком. Интересно, что получится.

## Архитектура

```
server.js
client/
├── src/
│   ├── App.js
│   ├── components/
│   ├── css/
│   ├── data/
│   ├── pages/
│   ├── routes/
│   ├── utils/
│   ├── App.css
```

`server.js` — запускает backend на NodeJS: `http://localhost:8000`

В папке `client` хранится frontend на React: `http://localhost:3000`

## Запуск

1. Установите зависимости: `cd express-react-app && npm i && cd client && npm i && cd ..` (для папки `express-react-app` и `express-react-app/client`)
2. Для запуска приложения: `cd express-react-app && npm run dev` в папке `express-react-app`
3. Для запуска frontend отдельно: `cd express-react-app && cd client && npm start`
4. Для запуска backend отдельно: `cd express-react-app && npm start`
