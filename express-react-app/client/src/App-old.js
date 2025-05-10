import { useEffect, useState } from 'react';

function App() {
    const [state, setState] = useState(null);

    const callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    // получение GET маршрута с сервера Express, который соответствует GET из server.js
    useEffect(() => {
        callBackendAPI()
            .then(res => setState(res.express))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="App">
            <p>
                Здесь мы выведем данные с сервера:
            </p>
            {/* вывод данных, полученных с сервера Express */}
            <div>
                {state}
            </div>
        </div>
    );
}

export default App;
