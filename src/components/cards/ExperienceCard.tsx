import { WorkExperienceProps } from "../../app.types";

const ExperienceCard = ({
  company,
  endYear,
  role,
  startYear,
}: WorkExperienceProps) => {
  return (
    <div className="border border-gray-100 rounded-lg px-4 py-6 flex items-center gap-x-3">
      <img
        src={company?.logo}
        alt={`${company?.name}'s logo`}
        className="w-16 h-16 rounded-full border-[8px] border-gray-500 p-2"
      />

      <div>
        <p className="text-gray-400">{role}</p>
        <p className="text-lg">{company?.name}</p>

        <div className="flex items-center gap-x-2">
          <p className="text-xs text-gray-200">
            {startYear.month} {startYear?.year}
          </p>
          <span>-</span>
          <p className="text-xs text-gray-200">
            {typeof endYear === "undefined" ||
            endYear === null ||
            endYear === "present"
              ? "present"
              : `${endYear.month} ${endYear?.year}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
