import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Input from '../../../components/Input';
import EmptyIcon from '../../../components/icons/Empty';
import useDebounce from '../../../hooks/useDebounce';
import { CompanyModel } from '../../../models/company.model';
import {
	clearAll,
	clearCompany,
	getCompanies,
	selectCompany,
	setCompaniesLoading,
} from '../../../store/slices/companySlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import CompanyDetailsCard from './CompanyDetailsCard';
import CompanyResult from './CompanyResult';
import Spinner from '../../../components/Spinner';
import { useCompanyDeepDiveContext } from '.';
import { setSelectedCompany } from '../../../store/slices/companyDeepDiveSlice';
import EmptyResultsIcon from '../../../components/icons/EmptyResults';

const CompanySearch = () => {
	const { onAllowNext } = useCompanyDeepDiveContext();
	const dispatch = useAppDispatch();
	const { companies, companiesLoading, company, companyDetails } =
		useAppSelector((s) => s.company);

	const [search, setSearch] = useState('');
	const debouncedSearch = useDebounce(search, 1000);

	useEffect(() => {
		if (debouncedSearch.length > 0) {
			dispatch(getCompanies({ name: debouncedSearch }));
		}
	}, [debouncedSearch]);

	useEffect(() => {
		dispatch(setSelectedCompany(companyDetails));
		onAllowNext(companyDetails ? true : false);
	}, [companyDetails]);

	const handleOnCompanyClick = (company: CompanyModel) => {
		dispatch(selectCompany(company));
	};

	const handleClear = () => {
		dispatch(clearAll());
		setSearch('');
		if (companyDetails) {
			dispatch(clearCompany());
		}
	};

	const handleOnInput = (value: string) => {
		setSearch(value);
		if (value.length === 0) {
			dispatch(clearAll());
		} else {
			dispatch(setCompaniesLoading(true));
		}
	};

	return (
		<div className="flex flex-col items-center w-full">
			<h3 className="mb-2 text-xl font-medium">
				Add company for deep dive analysis
			</h3>
			<p className="mb-7">Wokelo covers 1M+ private and public companies</p>

			<Input
				className="w-full xs:w-full sm:w-full md:w-full lg:w-3/4 xl:3/4 mb-4"
				placeholder="Enter company name..."
				onInput={(e) => handleOnInput(e.currentTarget.value)}
				onClear={handleClear}
			/>

			<div className="w-full xs:w-full sm:w-full md:w-full lg:w-3/4 xl:3/4">
				<AnimatePresence presenceAffectsLayout>
					{/* Initial state */}
					{!company &&
					!companiesLoading &&
					search.length === 0 &&
					(!companies || companies.length === 0) ? (
						<motion.div
							className="flex flex-col items-center mt-20"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							layout
						>
							<EmptyIcon className="mb-10" />
							<h3 className="mb-3 text-xl font-medium">
								No companies selected
							</h3>
							<p className="text-base">
								Search and add companies for analysis
							</p>
						</motion.div>
					) : null}

					{/* Loading */}
					{companiesLoading ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="w-full flex flex-col items-center justify-center mt-7"
							layout
						>
							<Spinner className="mb-7" />
							<h4 className="text-base font-regular">
								Searching companies
							</h4>
						</motion.div>
					) : (
						<>
							{!company &&
							companies &&
							companies?.length == 0 &&
							search.length > 0 ? (
								<div className="flex flex-col items-center mt-16">
									<EmptyResultsIcon className="mb-10" />
									<h4 className="text-xl font-semibold mb-2">
										<span className="text-purpl">{search}</span> is
										not found
									</h4>
									<p className="text-sm font-medium">
										Try different company names
									</p>
								</div>
							) : (
								<>
									{/* Results */}
									<div className="flex flex-col w-full gap-4">
										{!company &&
											companies &&
											companies?.map((c) => (
												<motion.div
													key={c.permalink ?? c.name}
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													exit={{ opacity: 0 }}
													layout
												>
													<CompanyResult
														onClick={handleOnCompanyClick}
														company={c}
													/>
												</motion.div>
											))}
									</div>
								</>
							)}
						</>
					)}

					{company ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							layout
							className="w-full"
						>
							<CompanyDetailsCard company={company} />
						</motion.div>
					) : null}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default CompanySearch;
