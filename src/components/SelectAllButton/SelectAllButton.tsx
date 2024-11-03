import React from "react";

interface SelectAllButtonProps {
	isAllSelected: boolean;
	onClick: () => void;
}

const SelectAllButton: React.FC<SelectAllButtonProps> = ({ isAllSelected, onClick }) => (
	<button onClick={onClick}>
		{isAllSelected ? "Unselect All" : "Select All"}
	</button>
);

export default SelectAllButton;
