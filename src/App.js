import 'antd/dist/antd.css';
import {Col, Layout, Row} from "antd";
import "./index.css"
import Todos from "./components/Todos"


const {Header, Footer, Content} = Layout;


const App = () => {

  return <Layout>
    <Header> </Header>
    <Content>
      <Row>
        <Col span={12} offset={8} className="todo">
          <Todos/>
        </Col>
      </Row>
    </Content>
    <Footer></Footer>
  </Layout>
}

export default App;
