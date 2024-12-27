import React from "react";

const products = [
  {
    id: 1,
    imgSrc: "https://smita.bonwic.cloud/file_upload/product/1734344254-ad04c5194d555cc0f2ff7f099b4b43ec-workshop-06.jpg",
    title: "Precious gemstones",
    buyLink: "#",
  },
  {
    id: 2,
    imgSrc: "https://smita.bonwic.cloud/file_upload/product/1734344197-0de585850afc614306b68216de4409f5-workshop-05.jpg",
    title: "Bach flower remedies",
    buyLink: "#",
  },
  {
    id: 3,
    imgSrc: "https://smita.bonwic.cloud/file_upload/product/1734344135-d7df8a3b26eefd0e3e8cfabd8536083b-workshop-04.jpg",
    title: "Healing products",
    buyLink: "#",
  },
  {
    id: 4,
    imgSrc: "https://smita.bonwic.cloud/file_upload/product/1734344091-6020583f53ac5d92712cd6fd171676cc-proTab-03.jpg",
    title: "Spiritual products",
    buyLink: "#",
  },
  {
    id: 5,
    imgSrc: "https://smita.bonwic.cloud/file_upload/product/1734343996-a3e465402a043e514dd1b26c445b254e-proTab-01.jpg",
    title: "Crystals",
    buyLink: "#",
  },
  {
    id: 6,
    imgSrc: "https://smita.bonwic.cloud/file_upload/product/1734331640-c384ea5b552042584a9c3c2127739ff4-proTab-02.jpg",
    title: "Crystal jewelleries",
    buyLink: "#",
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="col-xl-3 col-lg-3 col-sm-12 mb-2">
      <div className="position-relative product-card">
        <a href="#">
          <figure>
            <img
              src={product.imgSrc}
              className="img-fluid"
              alt={product.title}
              loading="lazy"
            />
          </figure>
          <div className="product-title text-center">
            <h4>{product.title}</h4>
            <a href={product.buyLink} className="btn btn-theme">
              Buy Now
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};

const HealingProducts = () => {
  return (
    <section className="w-100 position-relative pt-5 pb-5 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center">
            <h2 className="heading-h2 text-uppercase fw-700">Healing Products</h2>
          </div>
        </div>
        <div className="row mt-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealingProducts;
