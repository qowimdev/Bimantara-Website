import Card1 from "../Fragments/Card1";

const GeneralCardsTeam = [
  {
    nama: "Deru Mustafa",
    Jabatan: "Team Leader",
    img: "/public/images/person.jpg",
  },
];

const HomeLayout = () => {
  return (    
    <div className="GeneralTeam mx-auto container relative max-w-md mt-16 s:flex s:flex-wrap s:gap-6 s:justify-center sm:max-w-2xl sm:flex sm:flex-wrap sm:gap-6 sm:justify-center md:flex md:flex-wrap md:gap-6 md:justify-center md:max-w-3xl lg:max-w-5xl lg:flex lg:flex-wrap lg:gap-8 lg:justify-center xl:max-w-6xl xl:flex xl:flex-wrap xl:gap-8 xl:justify-center bg-red-500">
      {GeneralCardsTeam.map((GeneralCardTeam) => (
        <Card1 key={GeneralCardTeam.nama}>
          <Card1.Header />
          <Card1.Footer />
        </Card1>
      ))}
    </div>
  );
};

export default HomeLayout; 