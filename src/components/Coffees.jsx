import kbbq from '../assets/6.korean-bbq.jpg'
import americano from '../assets/11.americano.jpg'
import coldbrew from '../assets/12.coldbrew.jpg'
import espresso from '../assets/10.espresso.jpg'
import '../styles/main.css'

export default function Coffee() {
  return (
    <section className="facilities">
      <h1>Coffees We Offer</h1>
      <p>Deciding what coffee to drink has never been easier</p>

      <div className="row">
        <div className="facilities-col">
          <img src={americano} alt="a11y-placeholder"></img>
          <h3>Coffees Americano</h3>
          <p>
            A Café Americano, or what we just call an Americano, combines freshly pulled shots of
            espresso with hot water to achieve the size of a standard cup of brewed coffee.
          </p>
        </div>
        <div className="facilities-col">
          <img src={espresso} alt="a11y-placeholder"></img>
          <h3>Espresso</h3>
          <p>
            Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly
            boiling water is forced under 9–10 bars of pressure through finely-ground coffee beans.
            Espresso can be made with a wide variety of coffee beans and roast degrees.
          </p>
        </div>
        <div className="facilities-col">
          <img src={coldbrew} alt="a11y-placeholder"></img>
          <h3>Cold Brew</h3>
          <p>
            Cold brew is not the same thing as iced coffee, which is hot-brewed and then chilled.
            Instead, it's made by steeping coarse-ground coffee beans in room-temperature water for
            10 to 20 hours.
          </p>
        </div>
      </div>
    </section>
  )
}
