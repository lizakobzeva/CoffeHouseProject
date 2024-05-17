import "./CoffeePage.scss";
const CoffeePage = () => {
  return (
    <div className="device">
      <section>
        <form className="coffee-form">
          <input type="radio" name="coffeeType" id="espresso" />
          <input type="radio" name="coffeeType" id="doppio" />
          <input type="radio" name="coffeeType" id="macchiatto" />
          <input type="radio" name="coffeeType" id="cortado" />
          <input type="radio" name="coffeeType" id="cappuccino" />
          <input type="radio" name="coffeeType" id="americano" />
          <input type="radio" name="coffeeType" id="mocha" />
          <input type="radio" name="coffeeType" id="latte" />
          <input type="radio" name="coffeeType" id="breve" />
          <input type="radio" name="coffeeType" id="mochabreve" />
          <input type="radio" name="coffeeType" id="flatwhite" />
          <input type="radio" name="coffeeType" id="bombon" />
          <div className="coffee-title">
            <nav className="coffee-labels">
              <label htmlFor="doppio">
                <span>Doppio</span>
                <p>
                  Doppio in espresso is a double shot, extracted using a double
                  coffee filter in the portafilter.
                </p>
              </label>
              <label htmlFor="macchiatto">
                <span>Macchiatto</span>
                <p>
                  A caffè macchiato, sometimes called espresso macchiato, is an
                  espresso coffee drink with a small amount of milk added, today
                  usually foamed milk.
                </p>
              </label>
              <label htmlFor="cortado">
                <span>Cortado</span>
                <p>
                  A cortado (from the Spanish verb "cortar" - to cut) is an
                  espresso cut with a small amount of warm milk.
                </p>
              </label>
              <label htmlFor="cappuccino">
                <span>Cappuccino</span>
                <p>
                  A cappuccino (from the Capuchin friars) is an Italian coffee
                  drink which is traditionally prepared with espresso, hot milk
                  and steamed-milk foam.
                </p>
              </label>
              <label htmlFor="americano">
                <span>Americano</span>
                <p>
                  A caffè americano is a style of coffee prepared by adding hot
                  water to espresso, giving it a similar strength to, but
                  different flavor from, regular drip coffee.
                </p>
              </label>
              <label htmlFor="mocha">
                <span>Mocha</span>
                <p>
                  A caffè mocha is based on espresso and hot milk, but with
                  added chocolate, typically in the htmlForm of sweet cocoa
                  powder, although many varieties use chocolate syrup.
                </p>
              </label>
              <label htmlFor="latte">
                <span>Latte</span>
                <p>
                  A caffè latte is a coffee drink made with espresso and steamed
                  milk. The term is Italian htmlFor "milk coffee."
                </p>
              </label>
              <label htmlFor="breve">
                <span>Breve</span>
                <p>
                  A caffè breve is an American variation of a latte: a
                  milk-based espresso drink using steamed half-and-half mixture
                  of milk and cream instead of milk.
                </p>
              </label>
              <label htmlFor="mochabreve">
                <span>Mocha Breve</span>
                <p>
                  A mocha breve is similar to a caffè breve with an added ounce
                  of cocoa powder or chocolate syrup.
                </p>
              </label>
              <label htmlFor="flatwhite">
                <span>Flat White</span>
                <p>
                  A flat white is prepared by pouring microfoam (steamed milk
                  with small, fine bubbles and a glossy or velvety consistency)
                  over a single or double shot of espresso.
                </p>
              </label>
              <label htmlFor="bombon">
                <span>Café Bombón</span>
                <p>
                  A café bombón is a popular Spanish coffee drink made with
                  espresso served with sweetened condensed milk in a 1:1 ratio.
                </p>
              </label>
            </nav>
          </div>
          <a href="#" className="coffee-info" tabIndex={1}>
            <div className="coffee-recipe">
              <div className="recipe-foam">milk foam</div>
              <div className="recipe-steam">steamed milk</div>
              <div className="recipe-water">hot water</div>
              <div className="recipe-half">half &amp; half</div>
              <div className="recipe-chocolate">chocolate</div>
              <div className="recipe-crema"></div>
              <div className="recipe-espresso">espresso</div>
              <div className="recipe-condensed">condensed milk</div>
            </div>
            <div className="coffee-cup">
              <div className="coffee-steam">
                <div className="steam"></div>
                <div className="steam large"></div>
                <div className="steam"></div>
              </div>
              <div className="coffee-ingredients">
                <div className="ingredient-foam"></div>
                <div className="ingredient-steam"></div>
                <div className="ingredient-water"></div>
                <div className="ingredient-half"></div>
                <div className="ingredient-chocolate"></div>
                <div className="ingredient-crema"></div>
                <div className="ingredient-espresso"></div>
                <div className="ingredient-condensed"></div>
              </div>
            </div>
          </a>
          <div className="info-overlay"></div>
          <div className="coffee-controls">
            <button type="reset">Espresso Menu</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CoffeePage;
