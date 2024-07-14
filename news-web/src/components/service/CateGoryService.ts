import {Category, categoryName} from "../define/Category";

export const toCategoryName = (category: Category): string => {
    return categoryName[category];
};