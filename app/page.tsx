import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-primary-yellow min-h-screen flex items-center justify-center">
      <section
        className="bg-neutral-white max-w-4xl w-[300px] 
      rounded-2xl p-6 flex flex-col gap-4 border shadow-card"
      >
        <div className="relative w-full h-[200px]">
          <Image
            src={"/assets/images/illustration-article.svg"}
            alt="image"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="bg-primary-yellow font-extrabold text-sm w-fit px-4 py-1 rounded-sm">
          Learning
        </h3>
        <p className="text-xs">Published 21 Dec 2023</p>
        <h1 className="font-bold hover:text-primary-yellow cursor-pointer">HTML & CSS foundations</h1>
        <p className="text-sm opacity-50">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex justify-start items-center gap-3">
          <Image
            src={"/assets/images/image-avatar.webp"}
            alt="image"
            width={30}
            height={30}
            className="rounded-full"
          />
          <p className="text-xs font-bold">Greg Hooper</p>
        </div>
      </section>
    </main>
  );
}
