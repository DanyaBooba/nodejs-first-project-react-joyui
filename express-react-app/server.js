const express = require('express')
const app = express()
const port = process.env.PORT || 8000

// Создание GET маршрутов

app.get('/', (req, res) => {
    const data = {
        route: '/',
        routeName: 'Главная страница',
        data: 'Вы получили данные с главной страницы'
    }

    res.send(data)
})

// Сообщение о том, что сервер запущен и прослушивает указанный порт
app.listen(port, () => console.log(`Слушаю порт ${port}`))
