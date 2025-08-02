import homeImg from "../assets/imgi_1_avataaars.svg";
import Star from "./star";
export default function Home() {
  return (
    <section className="bg-main text-white mb-0 light-star">
      <div className="container">
        <div className="homeContent flex flex-col items-center justify-center gap-2 py-32">
          <img
            src={homeImg}
            className="homeImg img-fluid object-fit-cover mb-3 rounded-full"
          ></img>
          <h2 className="uppercase text-4xl font-bold">start framework</h2>
          <Star />
          <p className="text-xl">Graphic Artist - Web Designer - Illustrator </p>
        </div>
      </div>
    </section>
  );
}
