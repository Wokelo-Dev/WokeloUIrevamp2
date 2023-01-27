import LinkIcon from '../../../components/icons/Link';
import { CompanyModel } from '../../../models/company.model';

export type CompanyResultProps = {
	selected?: boolean;
	company?: CompanyModel;
	onClick?: (company: CompanyModel) => void;
};

const CompanyResult = ({ company, selected, onClick }: CompanyResultProps) => {
	return (
    <div
      className={`flex flex-col w-full p-4 transition-all border rounded-md shadow-sm cursor-pointer hover:bg-purpl-light hover:border-purpl shadow-gray-500/30 ${
        selected ? "bg-purpl/10 border-purpl" : "border-gray-300 bg-white"
      }`}
      onClick={() => onClick && onClick(company!)}
    >
      <div className="flex flex-row items-center justify-start gap-3 mb-5">
        {!company?.logo && (
          <img
            className="h-auto w-7"
            src={"https://wokelo.ai/static/media/placeholder_logo.png"}
            alt={`${company?.name} logo`}
          />
        )}
        {company?.logo && (
          <img
            className="h-auto w-7"
            src={`https://res.cloudinary.com/crunchbase-production/image/upload/${company?.logo}`}
            alt={`${company?.name} logo`}
          />
        )}
        <h4 className="text-base font-regular">{company?.name}</h4>
      </div>

      <p className="font-regular">{company?.short_description}</p>
    </div>
  );
};

export default CompanyResult;
