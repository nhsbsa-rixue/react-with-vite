import { Button } from "../ui/button";
import "./style.css";

export default () => {
  return (
    <section id="intro"> 
      <div className="flower-shop-layout1">
          <div className="flower-description-section">
            <p className="hero-text-with-flower-background">
              Flowers 
              never fade
              <br/>
              Forever crochet made
            </p>
            <p className="flower-description-text-style">Browse between hundreds of flowers and crafts</p>
            {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
            <Button className="browse-button-style">Browse</Button>
          </div>

          <div className="flower-container">
            <img src="/bouquets/amber.png" className="image-container-full-width" />
            <div className="vertical-spacer">
              <img src="/bouquets/blue.png" className="image-container-192x192-square" />
            </div>
          </div>
          <div className="flower-container">
            <img src="/bouquets/pink.png" className="image-container-full-width" />
            <div className="vertical-spacer">
              <img src="/bouquets/purple.png" className="image-container-192x192-square" />
            </div>
          </div>
          <div className="flower-container">
            <img src="/bouquets/amber.png" className="image-container-full-width" />
            <div className="image-container">
              <img src="/bouquets/amber.png" className="image-container-192x192-square" />
            </div>
          </div>
        </div>


    </section>
  );
}