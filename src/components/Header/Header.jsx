import profile from "../../assets/Frame.svg";
import headerBg from "../../assets/banner.png"

const Header = () => {
  return (
    // header 
    <header>

    {/* navbar  */}
      <nav className="my-8">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <a className="text-3xl font-bold">Cooking Genious</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end space-x-4">    
            <label className="input lg:flex items-center gap-2 rounded-full bg-[#150B2B0D] hidden">
            <a href=""><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg></a>
              <input type="text" className="grow" placeholder="Search" />
              
            </label>
            <a className="cursor-pointer">
              <img src={profile} alt="" className="bg-[#0BE58A] rounded-full" />
            </a>
          </div>
        </div>
      </nav>

      {/* header hero section  */}
      <section className="mx-2">
        <div className="flex flex-col items-center justify-center text-center space-y-8 lg:min-h-[600px] px-3 py-5 bg-center rounded-3xl" 
        style={{
            backgroundImage: `url(${headerBg})`,
        }}>
            <h1 className="lg:text-5xl md:text-3xl text-2xl leading-snug font-bold text-white line-hei">Discover an exceptional cooking <br /> class tailored for you!</h1>
            <p className="text-lg text-white font-normal">Here you will get a house of learning matterials of cooking. Every recipe is made by professionals<br /> for authentic and traditional taste and healthy for human health.</p>
            <div className="flex gap-6">
                <button className="btn border-none bg-[#0BE58A] rounded-full">Explore now</button>
                <button className="btn text-white border border-white btn-outline rounded-full">Our Feedback</button>
            </div>
        </div>
     </section>
    </header>
  );
};

export default Header;
