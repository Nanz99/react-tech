
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import TechHeader from './components/Header'
import TechFooter from './components/Footer'
import HomePage from './Pages/HomePage';


const { Header, Content,Footer } = Layout;

const App = () => {
   return (
      <Layout className="mainLayout">
         <Header>
            <TechHeader />
         </Header>
         <Content>
            <HomePage />
         </Content>
         <Footer >
            <TechFooter />
         </Footer>
      </Layout>

   )
}

export default App