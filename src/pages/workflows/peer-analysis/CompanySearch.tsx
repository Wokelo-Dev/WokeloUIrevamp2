import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Input from '../../../components/Input';
import EmptyIcon from '../../../components/icons/Empty';
import useDebounce from '../../../hooks/useDebounce';
import { CompanyModel } from '../../../models/company.model';
import {
	clearAll,
	clearCompany,
	getCompanies,
	setCompaniesLoading,
} from '../../../store/slices/companySlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import Spinner from '../../../components/Spinner';
import { usePeerAnalysisContext } from '.';
import {
	addCompany,
	removeCompany,
} from '../../../store/slices/peerAnalysisSlice';
import CompanyResult from './components/CompanyResult';
import Alert from '../../../components/Alert';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const CompanySearch = () => {
	const { onAllowNext } = usePeerAnalysisContext();
	const dispatch = useAppDispatch();
	const { companies, companiesLoading, companyDetails } = useAppSelector(
		(s) => s.company
	);
	const { selectedCompanies } = useAppSelector((s) => s.peerAnalysis);

	const [search, setSearch] = useState('');
	const debouncedSearch = useDebounce(search, 1000);
	const resultsRef = useRef(null);
	useOnClickOutside(resultsRef, () => {
		dispatch(clearCompany());
	});

	useEffect(() => {
		if (debouncedSearch.length > 0) {
			dispatch(getCompanies({ name: debouncedSearch }));
		}
	}, [debouncedSearch]);

	useEffect(() => {
		onAllowNext(
			selectedCompanies && selectedCompanies.length >= 2 ? true : false
		);
	}, [selectedCompanies]);

	const handleOnCompanyClick = (company: CompanyModel) => {
		dispatch(addCompany(company));
	};

	const handleClear = () => {
		dispatch(clearAll());
		setSearch('');
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
				Add companies for peer analysis
			</h3>

			<Input
				className="w-full xs:w-full sm:w-full md:w-full lg:w-3/4 xl:3/4 mb-4"
				placeholder="Enter company name..."
				onInput={(e) => handleOnInput(e.currentTarget.value)}
				onClear={handleClear}
			/>

			{selectedCompanies === null || selectedCompanies!.length < 2 ? (
				<Alert
					type="default"
					message="Please select at least 2 companies"
					className="w-full xs:w-full sm:w-full md:w-full lg:w-3/4 xl:3/4 mb-4"
				/>
			) : null}

			{selectedCompanies &&
			selectedCompanies.length > 0 &&
			(!companies || companies?.length === 0) &&
			!companiesLoading ? (
				<div className="w-full xs:w-full sm:w-full md:w-full lg:w-3/4 xl:3/4">
					<h2 className="text-xl font-semibold mb-5">
						Selected companies
					</h2>
					<div className="flex flex-col w-full gap-5">
						{selectedCompanies.map((c) => (
							<CompanyResult
								company={c}
								selected={true}
								onRemove={() => dispatch(removeCompany(c))}
							/>
						))}
					</div>
				</div>
			) : (
				<div className="w-full xs:w-full sm:w-full md:w-full lg:w-3/4 xl:3/4">
					<AnimatePresence presenceAffectsLayout>
						{/* Initial state */}
						{!companiesLoading &&
						(!selectedCompanies || selectedCompanies.length === 0) &&
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
								{/* Results */}
								<div
									className="flex flex-col w-full gap-4"
									ref={resultsRef}
								>
									{companies &&
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
													selected={Boolean(
														selectedCompanies?.find(
															(sc) =>
																sc.permalink === c.permalink
														)
													)}
													onAdd={() => dispatch(addCompany(c))}
													onRemove={() =>
														dispatch(removeCompany(c))
													}
												/>
											</motion.div>
										))}
								</div>
							</>
						)}
					</AnimatePresence>
				</div>
			)}
		</div>
	);
};

export default CompanySearch;
