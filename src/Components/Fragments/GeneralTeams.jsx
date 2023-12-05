import ManagementCard from "../Elements/ManagementCard";
import ManagementCardData from "../Elements/ManagementCardData";

const GeneralCardTeams = () => (
    <div className="GeneralTeam mx-auto container relative max-w-md mt-16 s:flex s:flex-wrap s:gap-6 s:justify-center sm:max-w-2xl sm:flex sm:flex-wrap sm:gap-6 sm:justify-center md:flex md:flex-wrap md:gap-6 md:justify-center md:max-w-3xl lg:max-w-5xl lg:flex lg:flex-wrap lg:gap-8 lg:justify-center xl:max-w-6xl xl:flex xl:flex-wrap xl:gap-8 xl:justify-center bg-red-500">
      {ManagementCardData.map((item, index) => (
        <ManagementCard key={index}>
          <div className="w-100">
            <img src={item.img} alt={item.nama} className="rounded-full object-cover s:my-3 s:h-20 s:w-20 sm:h-24 sm:w-24 sm:mt-1 md:h-24 md:w-24 md:mt-4 lg:h-32 lg:w-32 lg:my-1 xl:h-32 xl:w-32 xl:my-1 mx-auto outline outline-offset-1 outline-green-300" />
            <div className="p-3">
              <h2 className="font-bold s:text-sm s:pt-2 sm:text-sm lg:text-lg lg:pt-1 xl:text-lg xl:pt-1 text-center text-slate-700">{item.nama}</h2>
              <p className="text-xs lg:text-sm xl:text-sm text-center text-slate-600">{item.Jabatan}</p>
            </div>
          </div>
        </ManagementCard>
      ))}
    </div>
  );

export default GeneralCardTeams