import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner }) => {
  return (
    <section className="section pb-[50px]" style={{paddingTop:0}}>
      <div className="container" style={{maxWidth:'100%', paddingLeft:0, paddingRight:0}}>
        <div className="row text-center">
          <div className="mx-auto">
            
            <Image
              className="mx-auto"
              src={banner.image}
              width={1900}
              height={390}
              alt="banner image"
              priority
            />
            <h1 className="font-primary font-bold pt-12">{banner.title}</h1>
            <p className="mt-4 lg:col-6 mx-auto">{markdownify(banner.content)}</p>
            {banner.button.enable && (
              <Link
                className="btn btn-primary mt-4"
                href={banner.button.link}
                rel={banner.button.rel}
              >
                {banner.button.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
