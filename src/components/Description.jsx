import img from "./../assets/deskripsi.jpg";

export default function Description() {
  return (
    <section className="container px-2 md:px-10 text-primary mb-24">
      <div className="w-full bg-fade mb-10 rounded-xl p-10">
        <div className="flex justify-between">
          <Headline />
          <Icon />
        </div>
        <Image />
      </div>
    </section>
  );
}


// Headline component ----------
function Headline() {
  return (
    <div className="headline w-2/3 mb-8">
      {/* arrow on tittle */}
      <svg
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
      <h1 className="text-5xl font-medium tracking-wide mt-5 mb-8">
        Made by local people who are experts in the clothing field
      </h1>
      <p className="opacity-80 text-sm">
        make good quality and also help the local company
      </p>
    </div>
  );
}


// Icon Component --------------
function Icon() {
  return (
    <div className="icon bg-primary w-24 h-24 rounded-full flex items-center justify-center ">
      <svg
        width="71"
        height="71"
        viewBox="0 0 71 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M62.125 35.5C62.125 42.5614 59.3199 49.3336 54.3267 54.3267C49.3336 59.3199 42.5614 62.125 35.5 62.125M62.125 35.5C62.125 28.4386 59.3199 21.6664 54.3267 16.6733C49.3336 11.6801 42.5614 8.875 35.5 8.875M62.125 35.5H8.875M35.5 62.125C28.4386 62.125 21.6664 59.3199 16.6733 54.3267C11.6801 49.3336 8.875 42.5614 8.875 35.5M35.5 62.125C41.2185 62.125 45.8542 50.2029 45.8542 35.5C45.8542 20.7971 41.2185 8.875 35.5 8.875M35.5 62.125C29.7815 62.125 25.1458 50.2029 25.1458 35.5C25.1458 20.7971 29.7815 8.875 35.5 8.875M35.5 8.875C28.4386 8.875 21.6664 11.6801 16.6733 16.6733C11.6801 21.6664 8.875 28.4386 8.875 35.5"
          stroke="#D9E1C2"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}


// image component
function Image() {
  return <img src={img} className="w-full  h-80 object-cover rounded-[2rem]" alt="worker" />;
}
