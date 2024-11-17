import  AnimatedTestimonials  from "@/components/ui/animated-testimonials";

export function Speaker() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sofiene Hemissi ",
      designation: "Ministre des Technologies de la Communication",
      src: "/speqkers/elwzir.png",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Jihene El Ouakdi ",
      designation: "Directrice de l'Ecole Supérieure d'Economie Numérique Manouba",
      src: "/speqkers/jihen.jpeg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "TakiEddine Ben Masoud",
      designation: "CEO de Takiacademy",
      src: "/speqkers/takieddine.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Mahjoub Langar",
      designation: "PDG Poulina Groupe",
      src: "/speqkers/Mahjoub.png",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Mohamed Salah Frad",
      designation: "Directeur Général UGFS North Africa",
      src: "/speqkers/mohamed-salah-2.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Houda Bakir",
      designation: "Historiar- ODC",
      src: "/speqkers/mra.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Youssef Boufaied",
      designation: "Coordinateur du projet Maken TIC DCE",
      src: "/speqkers/sayed.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Abdlkerim REZGUI",
      designation: "CEO BI4YOU",
      src: "/speqkers/Abdelkerim.jpg",
    },
  ];
  return (
    <div className="content-visibility-auto flex justify-center items-center flex-col bg-slate-50 py-14" >
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  Intervenants de l&apos;événement
</h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
