// export default ..
export default function Products() {
  return (
    // container wrapper
    <section className="container px-2 md:px-10 pt-36 pb-10 mb-24 text-primary">
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
      {/* title  */}
      <h1 className="title mb-6">
        What <span className="text-accent">products</span> do we sell ?
      </h1>
      {/* prducts cards components */}
      <ProductCards />
    </section>
  );
}

// product cards component
function ProductCards() {
  const catalog = [
    {
      key: 1,
      quantity: 5,
      name: "accessories",
      bg: "card-model-1",
    },
    {
      key: 2,
      quantity: 23,
      name: "jacket",
      bg: "card-model-2",
    },
    {
      key: 3,
      quantity: 30,
      name: "t-shirt",
      bg: "card-model-3",
    },
  ];

  return (
    <div className="cards  flex flex-wrap  gap-3">
      {/* product */}
      {catalog.map((c) => (
        <Card key={c.key} bg={c.bg}>
          <Quantity quan={c.quantity} />
          <NameCatalog name={c.name} />
        </Card>
      ))}
    </div>
  );
}

// card components
function Card({ children, children2, bg }) {
  return (
    <div className={`card ${bg} `}>
      {/* quantity */}
      {children}
      {/* product catalog */}
      {children2}
    </div>
  );
}

// quantity components in card
function Quantity({ quan }) {
  return (
    <div className="quantity">
      <BoxIcon />
      {quan}
    </div>
  );
}

// name catalog in card
function NameCatalog({ name }) {
  return (
    <a
      href="#"
      className="name-catalog uppercase hover:bg-opacity-100  hover:tracking-widest  transition-all">
      #{name}
      <ArrowInCircle />
    </a>
  );
}

// component  svg icon ---------------------------------
function BoxIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.7188 1.46484L21.875 6.54297V19.2383L11.7188 24.3042L1.5625 19.2383V6.54297L11.7188 1.46484ZM19.3481 7.03125L11.7188 3.22266L8.77686 4.6875L16.3574 8.52051L19.3481 7.03125ZM11.7188 10.8398L14.624 9.39941L7.03125 5.56641L4.08936 7.03125L11.7188 10.8398ZM3.125 8.30078V18.2617L10.9375 22.168V12.207L3.125 8.30078ZM12.5 22.168L20.3125 18.2617V8.30078L12.5 12.207V22.168Z"
        fill="#D9E1C2"
      />
    </svg>
  );
}

function ArrowInCircle() {
  return (
    <svg
      width="63"
      height="63"
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.08 31.5C10.08 19.656 19.656 10.08 31.5 10.08C43.344 10.08 52.92 19.656 52.92 31.5C52.92 43.344 43.344 52.92 31.5 52.92C19.656 52.92 10.08 43.344 10.08 31.5ZM50.4 31.5C50.4 21.042 41.958 12.6 31.5 12.6C21.042 12.6 12.6 21.042 12.6 31.5C12.6 41.958 21.042 50.4 31.5 50.4C41.958 50.4 50.4 41.958 50.4 31.5Z"
        fill="white"
      />
      <path
        d="M29.358 41.958L39.816 31.5L29.358 21.042L31.122 19.278L43.344 31.5L31.122 43.722L29.358 41.958Z"
        fill="white"
      />
      <path
        d="M41.58 30.24V32.76L20.16 32.76V30.24L41.58 30.24Z"
        fill="white"
      />
    </svg>
  );
}
