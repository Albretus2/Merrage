export default function Footer() {
  return (
    <section className="w-full bg-fade">
      <div className="container px-2 md:px-10 py-20 md:py-32 text-primary">
        <div className="flex flex-wrap gap-20 xl:gap-60">
          <div className="md:w-1/2">
            <h2 className="title">
              prioritizing <span className="text-accent">quality</span> over
              quantity and <span className="text-accent">helping</span> the
              local economy
            </h2>
            <p className="mt-4">©2024 All right Reserved</p>
          </div>
          <div>
            <p className="text-lg font-medium  w-[20rem]">
              if you have any questions or want to know more about us.{" "}
              <span className="font-semibold">let&apos;s</span>
              talk .
            </p>
            <form action="">
              <label
                htmlFor="email"
                className="flex flex-warp bg-bg pe-4 items-center rounded-lg mt-5">
                <input
                  type="email"
                  id="email"
                  className="px-3 py-3 w-full bg-transparent placeholder-primary "
                  placeholder="Email Address"
                />
                <svg
                  width="34"
                  height="16"
                  viewBox="0 0 34 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M33.7071 8.7071C34.0976 8.31658 34.0976 7.68341 33.7071 7.29289L27.3431 0.92893C26.9526 0.538406 26.3195 0.538406 25.9289 0.92893C25.5384 1.31945 25.5384 1.95262 25.9289 2.34314L31.5858 8L25.9289 13.6569C25.5384 14.0474 25.5384 14.6805 25.9289 15.0711C26.3195 15.4616 26.9526 15.4616 27.3431 15.0711L33.7071 8.7071ZM8.74228e-08 9L33 9L33 7L-8.74228e-08 7L8.74228e-08 9Z"
                    fill="#436840"
                  />
                </svg>
              </label>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap  items-center justify-between px-8 py-5 bg-primary text-fade rounded-xl mt-20">
          <div className="">
            <h2 className="font-semibold text-2xl">merrage .</h2>
          </div>
          <div className=" flex flex-wrap gap-5 md:gap-16 items-center">
            <ul className="flex flex-wrap gap-5">
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twiter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ul>
            <div className="w-12 h-12 rounded-full bg-bg flex items-center justify-center">
              <svg
                className=" animate-pulse"
                width="24"
                height="24"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.7188 1.46484L21.875 6.54297V19.2383L11.7188 24.3042L1.5625 19.2383V6.54297L11.7188 1.46484ZM19.3481 7.03125L11.7188 3.22266L8.77686 4.6875L16.3574 8.52051L19.3481 7.03125ZM11.7188 10.8398L14.624 9.39941L7.03125 5.56641L4.08936 7.03125L11.7188 10.8398ZM3.125 8.30078V18.2617L10.9375 22.168V12.207L3.125 8.30078ZM12.5 22.168L20.3125 18.2617V8.30078L12.5 12.207V22.168Z"
                  fill="#353D21"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
