import { Link } from 'react-router-dom';
import img1 from '../../assets/Works/img1.png';
import img2 from "../../assets/Works/img2.png";
import img3 from "../../assets/Works/img3.png";
import img4 from "../../assets/Works/img4.png";
function Works() {
  return (
    <div className='mb-12'>
      <div className="bg-primary-color p-8 max-w-[1440px] mx-auto px-4 lg:px-28 md:px-14">
        <h2 className="text-center font-bold text-4xl text-white mb-5">
          How it Works
        </h2>
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-5 ">
          <div className="bg-white flex gap-3 p-5 rounded">
            <img src={img1} alt="" className="w-1/4" />
            <div>
              <h1 className="font-bold mb-5 text-xl">
                Explore the Latest Content
              </h1>
              <p>
                Dive into our rich library of articles, reviews, and news
                updates. Our team of tech experts curates the most relevant and
                cutting-edge information
                <Link>
                  <span className="font-bold"> Read more</span>
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-white flex gap-3 p-5 rounded">
            <img src={img2} alt="" className="w-1/4" />
            <div>
              <h1 className="font-bold mb-5 text-xl">
                Personalized Recommendations
              </h1>
              <p>
                Create a free Techhub account to receive personalized
                recommendations based on your interests. Whether you’re into AI,
                cybersecurity, or consumer
                <Link>
                  <span className="font-bold"> Read more</span>
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-white flex gap-3 p-5 rounded">
            <img src={img3} alt="" className="w-1/4" />
            <div>
              <h1 className="font-bold mb-5 text-xl">Stay Updated</h1>
              <p>
                Subscribe to our newsletter and follow us on social media to
                receive regular updates. Get notified about new content,
                upcoming events, and special features
                <Link>
                  <span className="font-bold"> Read more</span>
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-white flex gap-3 p-5 rounded">
            <img src={img4} alt="" className="w-1/4" />
            <div>
              <h1 className="font-bold mb-5 text-xl">
                Engage with the Community
              </h1>
              <p>
                Join discussions, leave comments, and connect with fellow tech
                enthusiasts in our vibrant community forums. Share your
                thoughts, ask
                <Link>
                  <span className="font-bold"> Read more</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Works