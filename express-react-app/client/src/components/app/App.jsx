import { useEffect } from 'react'

function App({ title, desc, children }) {
    const titlePage = title ? `${title} · Пет-проект` : `Пет-проект`
    const descPage = desc ? desc : 'Пет-проект на NodeJS + React + JoyUI'
    useEffect(() => {
        document.title = titlePage
        document.querySelector('head meta[name="description"]').setAttribute('content', descPage)
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default App
