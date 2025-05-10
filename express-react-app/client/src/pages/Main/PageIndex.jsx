import App from '../../components/app/App'
import { Container, Typography } from '@mui/joy'

function PageIndex() {
    return (
        <App title="" desc="">
            <Container>
                <Typography level="h1">
                    Главная страница
                </Typography>
                <Typography level="body-md">
                    Отображаем главную страницу.
                </Typography>
            </Container>
        </App>
    )
}

export default PageIndex
