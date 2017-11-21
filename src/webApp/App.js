import React from 'react'
import faker from 'faker'
import './index.css'
import Jumbotron from './Jumbotron'
import NavigationBar from './Navigation'
import Section from './Section'
import ServicesCard from './ServicesCard'
import ProductCard from './ProductCard'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const App = () => {
  return (

    <Router>
      <div>
        <Route exact path='/' component={Jumbotron} />

        <NavigationBar />
        <Jumbotron
          title={faker.name.title()}
          desc={faker.lorem.sentence()}
        />
        <Section
          sectionStyle='about'
          title={'About'}
          content={'This is the best about section'}>
          <div>
            <h3> I am now children WooHoo!</h3>
          </div>
        </Section>

        <Section
          sectionStyle='services'
          title={'Services'}
          content={'Read about our servies'}
        >
          <div className='service-card-container'>
            <ServicesCard
              title={'Services'}
              details={'Ichiban Video Webinars'}
            />
            <ServicesCard
              title={'Services'}
              details={'Ichiban Video Webinars'}
            />
            <ServicesCard
              title={'Services'}
              details={'Ichiban Video Webinars'}
            />
            <ServicesCard
              title={'Services'}
              details={'Ichiban Video Webinars'}
            />
          </div>
        </Section>
        <Section
          sectionStyle='products'
          title={'Products'}
          content={'Best Selling products'}
        >

          <div className='product-card-container'>
            <ProductCard product={faker.commerce.product()}
              price={faker.commerce.price()}
              img={faker.random.image()}
            />
            <ProductCard product={faker.commerce.product()}
              price={faker.commerce.price()}
              img={faker.random.image()}
            />
            <ProductCard product={faker.commerce.product()}
              price={faker.commerce.price()}
              img={faker.random.image()}
            />
            <ProductCard product={faker.commerce.product()}
              price={faker.commerce.price()}
              img={faker.random.image()}
            />
          </div>
        </Section>
      </div>
    </Router>
  )
}

export default App
