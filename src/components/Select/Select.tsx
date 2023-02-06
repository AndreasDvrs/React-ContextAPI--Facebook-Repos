import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/ContextWrapper";
import { GlobalContextApi } from "../../Context/types";
import expandPath from "../IconPaths/expand";
import { 
	PerPageOptions, PerPageOptionsValues, SelectType, SortByOptions, SortByOptionsValues 
} from "../types/types";

export interface SelectProps {
	selectType: SelectType;
	options: SortByOptions[]|PerPageOptions[];
	defaultSelectedOption?: PerPageOptions;
	defaultValue?: string;
}

const Select = ({ defaultValue, options, defaultSelectedOption, selectType}: SelectProps) => {

	const [selectedOption, setSelectedOption] = useState<any>(defaultSelectedOption ?? undefined);
	const [visibleDropdown, setVisibleDropdown] = useState<boolean>(false);

	const { updateSortBy, updatePerPage } = useContext<GlobalContextApi>(GlobalContext);

	const handleSelectChange = (option: SortByOptions|PerPageOptions) => {
		if (option) {
			if (selectType === "sortBy") {
				updateSortBy(option.value as SortByOptionsValues)
			}
			else if (selectType === "perPage"){
				updatePerPage(option.value as PerPageOptionsValues)
			}
		}
		setSelectedOption(option);
		setVisibleDropdown(false);
	}
	
  return (
	<div className="Select__Container">
		<button 
			className={`Select__Button ${visibleDropdown ? "Select__Dropdown__Visible" : ""}`}
			type="button" 
			aria-haspopup="listbox" 
			aria-expanded={visibleDropdown}
			onClick={() => setVisibleDropdown(!visibleDropdown)}
		>
			<span>{selectedOption?.label ?? defaultSelectedOption?.label ?? defaultValue }</span>
			<svg viewBox="0 0 24 24" className="Expand__Repo">
				<path d={expandPath}></path>
			</svg>
		</button>
		<ul role="listbox" className={`options ${visibleDropdown ? "visible" : ""}`} tabIndex={-1}> 
			{options.map((option: SortByOptions|PerPageOptions) => (
				<li 
					key={option.value}
					id={String(option.value)} 
					role="option" 
					aria-selected={selectedOption?.value === option.value } 
					tabIndex={0} 
					onClick={()=>{handleSelectChange(option)}}
				>
					{option.label}
				</li>
			))}
		</ul>
	</div>
  )
}

export default Select;
