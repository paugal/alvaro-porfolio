import IconFooter from "../ui/IconFooter";

export interface FooterElement {
  image: string;
  type: string;
  data: string;
  fileName?: string;
  fileUrl?: string;
}

const footerElements: FooterElement[] = [
  {
    image: "/assets/icons/mail.svg",
    type: "EMAIL -",
    data: "alvaro.abba@gmail.com",
  },
  {
    image: "/assets/icons/linkedIn.svg",
    type: "LINKEDLN -",
    data: "www.linkedln.com/alvaroabba",
  },
  {
    image: "/assets/icons/CV.svg",
    type: "CV -",
    data: "Descargar",
    fileName: "CV_ALVARO_ABBA.pdf",
    fileUrl: "/assets/porfolio/PORTFOLIO.pdf",
  },
  {
    image: "/assets/icons/porfolio.svg",
    type: "PORFOLIO -",
    data: "Descargar",
    fileName: "Portfolio_ALVARO_ABBA.pdf",
    fileUrl: "/assets/porfolio/PORTFOLIO.pdf",
  },
];
const Footer = () => {
  return (
    <footer className="bg-footer text-text p-4 text-center">
      <div className="flex flex-row items-center gap-20 m-10 mb-20 justify-center">
        {footerElements.map((el: FooterElement, index: number) => (
          <div key={index}>
            {el.fileName && el.fileUrl ? (
              <IconFooter
                imageUrl={el.image}
                typeInfo={el.type}
                data={el.data}
                fileName={el.fileName}
                fileUrl={el.fileUrl}
              />
            ) : (
              <IconFooter
                imageUrl={el.image}
                typeInfo={el.type}
                data={el.data}
              />
            )}
          </div>
        ))}
      </div>
      <p className="txet-sm">
        © {new Date().getFullYear()} Alvaro Portfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
