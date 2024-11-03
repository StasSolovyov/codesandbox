import { useState, useCallback, useMemo } from "react";
import { generatInitialCheckboxes } from "../utils/generateCheckboxes";

export function useCheckboxes(count: number) {
	const [checkboxes, setCheckboxes] = useState(generatInitialCheckboxes(count));

	const isAllSelected = useMemo(
		() => Object.values(checkboxes).every((checked) => checked),
		[checkboxes]
	);

	const changeValue = useCallback((key: string, value: boolean) => {
		setCheckboxes((prev) => ({ ...prev, [key]: value }));
	}, []);

	const toggleAll = useCallback(() => {
		setCheckboxes((prev) => {
			const newCheckboxes = { ...prev };
			for (const key in newCheckboxes) {
				newCheckboxes[key] = !isAllSelected;
			}
			return newCheckboxes;
		});
	}, [isAllSelected]);

	return { checkboxes, isAllSelected, changeValue, toggleAll };
}
