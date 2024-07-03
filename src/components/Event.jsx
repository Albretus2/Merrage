export default function Event() {
  return (
    <section className="event bg-primary w-full  text-fade flex flex-col py-36">
      <div className="md:w-1/2  mx-auto">
        <svg
          width="104"
          height="16"
          viewBox="0 0 104 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M103.707 8.70711C104.098 8.31658 104.098 7.68342 103.707 7.29289L97.3431 0.928932C96.9526 0.538408 96.3195 0.538408 95.9289 0.928932C95.5384 1.31946 95.5384 1.95262 95.9289 2.34315L101.586 8L95.9289 13.6569C95.5384 14.0474 95.5384 14.6805 95.9289 15.0711C96.3195 15.4616 96.9526 15.4616 97.3431 15.0711L103.707 8.70711ZM0 9H103V7H0V9Z"
            fill="#C1CAA8"
          />
        </svg>
        <h1 className="title   mb-8">
          Special Event Promo !!
        </h1>
        {/* card discount 1 */}
        <Discount name="Discount up to 30%" />
        {/* card discount 2 */}
        <Discount
          name="Promo weekend !!"
          textPrimary="text-primary"
          bgFade="bg-fade "
        />
        {/* card discount 3 */}
        <Discount name="free minimun $30 shopping coupons" />
      </div>
    </section>
  );
}


// Discount component
function Discount({ name, textPrimary, bgFade }) {
  return (
    <div
      className={`w-full border-2 border-fade ${bgFade} ${textPrimary} px-5 py-2 rounded-xl flex justify-between items-center mb-6`}>
      <h3 className="font-semibold text-xl ">{name}</h3>
      <svg
        width="52"
        height="52"
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.88 33.9999C10.88 21.2159 21.216 10.8799 34 10.8799C46.784 10.8799 57.12 21.2159 57.12 33.9999C57.12 46.7839 46.784 57.1199 34 57.1199C21.216 57.1199 10.88 46.7839 10.88 33.9999ZM54.4 33.9999C54.4 22.7119 45.288 13.5999 34 13.5999C22.712 13.5999 13.6 22.7119 13.6 33.9999C13.6 45.2879 22.712 54.3999 34 54.3999C45.288 54.3999 54.4 45.2879 54.4 33.9999Z"
          fill={textPrimary ? "#353D21" : "#D9E1C2"}
        />
        <path
          d="M31.688 45.2881L42.976 34.0001L31.688 22.7121L33.592 20.8081L46.784 34.0001L33.592 47.1921L31.688 45.2881Z"
          fill={textPrimary ? "#353D21" : "#D9E1C2"}
        />
        <path
          d="M44.88 32.6399V35.3599H21.76V32.6399H44.88Z"
          fill={textPrimary ? "#353D21" : "#D9E1C2"}
        />
      </svg>
    </div>
  );
}
