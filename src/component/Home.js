import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home(props) {
  const { products, loading } = props;
  return (
    <div>
      <section className="section1-header">
        <div className="col-6 p-5 section1-heading">
          <h1>Order Product</h1>
          <h1>Online in Jaipur</h1>
        </div>
        <div className="col-6">
          <img
            src="https://supplier.meesho.com/images/fact-1-p-500.png"
            alt=""
            width={"60%"}
          />
        </div>
      </section>

      <section className="mt-5 mb-5">
        <div className="container">
          <h2 className="mb-4">What's on your mind?</h2>
          {!loading?(products?.length>0?<Carousel
          // autoPlay={true}
          // width={'50%'}
          // dynamicHeight={true}
          // infiniteLoop={true}
          showArrows={true}
          swipeable={true}
          useKeyboardArrows={true}
          >
              {products.map((item, index) => {
                    // if (index < 9) {
                      return (
                          <img
                            class="w-25"
                            src={item.image}
                            alt="First slide"
                          />
                      );
                    // }
                  }
              )}
              </Carousel>:<h1>Sorry, no product found!</h1>):
              <div style={{height: "60vh",}}>
                <h1 >Loading...</h1>
                </div>
              }
        </div>
      </section>
    </div>
  );
}

export default Home;
