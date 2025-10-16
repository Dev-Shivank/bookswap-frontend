import React from 'react';
import Footer from '../components/Footer';

const books = [
  {
    id: 1,
    title: "Old Classics Collection",
    author: "Various Authors",
    price: "$15.99",
    cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    id: 2,
    title: "Vintage Stories",
    author: "Harper Lee",
    price: "$12.99",
    cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
  },
  {
    id: 3,
    title: "Retro Sci-Fi",
    author: "Isaac Asimov",
    price: "$14.50",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Hero Section - reminiscent of old bookstore banners */}
      <section className="bg-yellow-100 py-20 px-5 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
          Welcome to Your Book Swap
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-700">
          Keeping the charm of old bookstores, now online!
        </p>
        <button className="bg-gray-800 text-yellow-100 font-semibold px-6 py-3 rounded shadow hover:bg-gray-700 transition">
          Browse Books
        </button>
      </section>

      {/* Featured Books - styled like classic book displays */}
      <section className="py-16 px-5 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden "
            >
              <img
                src={book.cover}
                alt={book.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">{book.title}</h3>
                <p className="text-gray-600 mb-2">{book.author}</p>
                {/* <p className="text-gray-800 font-bold">{book.price}</p> */}
                {/* <button className="mt-3 w-full bg-yellow-100 text-gray-800 py-2 rounded hover:bg-yellow-200 transition"> */}
                  {/* Buy Now */}
                {/* </button> */}
              </div>
            </div>
          ))}
        </div>
      </section>


{/* <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Our Store</h2>
          <p className="text-gray-700 text-lg">
            Our bookstore combines the charm of classic, old-school shops with
            the convenience of modern online browsing. Find timeless stories and
            hidden gems, just like in your favorite neighborhood bookstore.
          </p>
        </div> */}


      <section className="bg-gray-200 py-16 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Our Store</h2>
          <p className="text-gray-700 text-lg">
            Our bookstore combines the charm of classic, old-school shops with
            the convenience of modern online browsing. Find timeless stories and
            hidden gems, just like in your favorite neighborhood bookstore.
          </p>
        </div>
      </section>
<Footer/>
    </div>
  );
};

export default Home;
