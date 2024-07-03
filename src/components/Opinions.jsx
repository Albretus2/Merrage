export default function Opinion() {
  return (
    <section className="opinions w-full px-2 md:px-40 py-40 text-fade bg-opinionsImg bg-center bg-cover bg-opacity-20 bg-fixed">
      <TemplateFlex>
        <Title />
        <Comentar />
      </TemplateFlex>
      <TemplateFlex>
        <Comentar />
        <IconBox />
      </TemplateFlex>
    </section>
  );
}

// Template flex component
function TemplateFlex({ children }) {
  return (
    <div className="w-full flex flex-wrap  justify-between mb-20 items-center ">
      {children}
    </div>
  );
}

// Comentar component
function Comentar() {
  return (
    <div className="p-10 w-full md:w-1/2 bg-accent mt-5  backdrop-blur-lg bg-opacity-30 rounded-3xl">
      <h4 className="text-[1.5rem] mb-10">
        As someone who has bought here. i think the quality of the goods sold is
        very good, worth buying.
      </h4>
      <span className=" opacity-50 font-semibold">-- Tomodachi</span>
    </div>
  );
}

// title component
function Title() {
  return (
    <div className="md:w-1/3">
      <h1 className="text-[2rem]  md:text-[2rem] xl:text-[3rem] font-semibold ">
        What <span className="text-accent">others</span> say about us
      </h1>
    </div>
  );
}

// icon box component
function IconBox() {
  return (
    <span className="bg-accent backdrop-blur-xl mt-20 md:mt-0 mx-auto bg-opacity-40 h-40 w-40 rounded-full flex items-center justify-center">
      <svg
        className=" animate-pulse"
        width="60"
        height="60"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.7188 1.46484L21.875 6.54297V19.2383L11.7188 24.3042L1.5625 19.2383V6.54297L11.7188 1.46484ZM19.3481 7.03125L11.7188 3.22266L8.77686 4.6875L16.3574 8.52051L19.3481 7.03125ZM11.7188 10.8398L14.624 9.39941L7.03125 5.56641L4.08936 7.03125L11.7188 10.8398ZM3.125 8.30078V18.2617L10.9375 22.168V12.207L3.125 8.30078ZM12.5 22.168L20.3125 18.2617V8.30078L12.5 12.207V22.168Z"
          fill="#D9E1C2"
        />
      </svg>
    </span>
  );
}
