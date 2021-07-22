import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './containers/Header'
import Footer from './containers/Footer'
import ProductList from './containers/ProductList'
import ProductDetail from './containers/ProductDetail'

const App = () => (
  <div className="app">
    <Router>
      <Header />
      <div
        className="content"
        style={{
          minHeight: '100vh'
        }}
      >
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 Not Found</Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  </div>
)

export default App
