import shopnow from "../assets/shopnow.png";
import "../styles/shop.css";
import cards from "../assets/merch/cards.png";
import dog from "../assets/merch/dog_jumper.png";
import feather from "../assets/merch/feather_vinyl.png";
import glass from "../assets/merch/glass_espresso.png";
import shirt from "../assets/merch/manchild_shirt.png";
import vinyl from "../assets/merch/mansbestfriend_vinyl.png";
import mug from "../assets/merch/mugs.png";
import pajama from "../assets/merch/shortsweet_pajama.png";

function ShopNow() {
  return (
    <div className="shop-now-container">
      <div className="shop-now-images left">
        <img src={cards} alt="Cards" />
        <img src={feather} alt="Feather Vinyl" />
        <img src={glass} alt="Glass Espresso" />
        <img src={dog} alt="Dog Jumper" />
      </div>

      <div className="shop-now-content">
        <h2>
          Looking to snag some awesome merch? Visit the shop to find exclusive
          Sabrina Carpenter goofies, from stylish apparel to must-have
          accessories. Show your love and support in styles!
        </h2>
        <a
          href="https://store.sabrinacarpenter.com/collections/all-merch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={shopnow} alt="Shop Now" />
        </a>
        <h1>I know I have a good taste</h1>
      </div>

      <div className="shop-now-images right">
        <img src={shirt} alt="Shirt" />
        <img src={vinyl} alt="Vinyl" />
        <img src={pajama} alt="Pajama" />
        <img src={mug} alt="Mug" />
      </div>
    </div>
  );
}

export default ShopNow;
