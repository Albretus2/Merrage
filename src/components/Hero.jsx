export default function Hero() {
  return (
    <section className="container px-2 md:px-10 pt-36 mb-56 text-center text-primary">
      <Title />
      <Cta />
      <p className="text-center mt-10 font-medium">
        offers various types of clothes .
      </p>
      <svg
        className="mx-auto mt-[8rem] animate-bounce"
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25.5 38.25L25.5 10.625M25.5 38.25L17 29.75M25.5 38.25L34 29.75"
          stroke="#436840"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </section>
  );
}

function Title() {
  return (
    <div className="lg:w-[50rem] xl:w-[66rem] mx-auto ">
      <svg
        className="hidden md:block"
        width="104"
        height="16"
        viewBox="0 0 104 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M103.707 8.70711C104.098 8.31658 104.098 7.68342 103.707 7.29289L97.3431 0.928932C96.9526 0.538408 96.3195 0.538408 95.9289 0.928932C95.5384 1.31946 95.5384 1.95262 95.9289 2.34315L101.586 8L95.9289 13.6569C95.5384 14.0474 95.5384 14.6805 95.9289 15.0711C96.3195 15.4616 96.9526 15.4616 97.3431 15.0711L103.707 8.70711ZM0 9H103V7H0V9Z"
          fill="#436840"
        />
      </svg>
      <h1 className="text-[2rem]  md:text-[3rem] xl:text-[4rem]  font-semibold lg:leading-[6rem]">
        find <span className="text-accent">clothes</span> that match your style,
        without <span className="text-accent">concern</span> for others
      </h1>
    </div>
  );
}

function Cta() {
  return (
    <a
      href="#"
      className="px-2 py-[0.6rem] md:py-2 bg-fade rounded-full border-2 border-accent flex flex-wrap justify-between items-center w-[15rem] md:w-[25rem] mx-auto mt-10">
      <span className="font-semibold tracking-wide ms-3 text-sm">
        #OUR PRODUCTS
      </span>
      <div className="md:w-10 md:h-10 w-7 h-7 bg-accent rounded-full flex items-center justify-center">
        <svg
          className="w-2 h-2 md:w-4 md:h-4"
          viewBox="0 0 8 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.305919 0.374196C0.110039 0.613866 0 0.938885 0 1.27778C0 1.61667 0.110039 1.94169 0.305919 2.18136L5.47795 8.50772L0.305919 14.8341C0.115591 15.0751 0.0102754 15.398 0.0126557 15.7331C0.0150366 16.0682 0.124922 16.3887 0.318647 16.6257C0.512371 16.8626 0.774434 16.997 1.04839 17C1.32235 17.0029 1.58628 16.874 1.78334 16.6412L7.69408 9.4113C7.88996 9.17163 8 8.84661 8 8.50772C8 8.16882 7.88996 7.8438 7.69408 7.60413L1.78334 0.374196C1.5874 0.134599 1.32169 0 1.04463 0C0.767573 0 0.501858 0.134599 0.305919 0.374196Z"
            fill="#C1CAA8"
          />
        </svg>
      </div>
    </a>
  );
}
