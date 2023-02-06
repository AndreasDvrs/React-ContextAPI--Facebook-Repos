import { useState, forwardRef, useImperativeHandle } from "react";

const SearchInput = forwardRef((props, ref: any) => {
	
	const [inputValue, setInputValue] = useState("");

	useImperativeHandle(ref, () => {
		return {
			getCurrentInput: () => inputValue
		}
	});

	const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
		setInputValue(e?.currentTarget?.value ?? "");
	};

  return (
	<input placeholder="Search" className="Search__Input" value={inputValue} onChange={onInputChange} ref={ref}/>
  )
})

export default SearchInput;
