export interface GenericTableInterface{
    itemsExceptions?: any[];
    data?: any[];
    onChangePage: (params?: any) => void;
    onDelete?: (params?: any) => void;
    onSearch: (params?: any) => void;
    selectFilter?: boolean;
    selectFilterArray?: any[];
    selectFilterItemKey?: string;
    keyItem?: string;
    readOnly?: boolean;
    singleDelete?: boolean;
    hasDashboardView?: boolean;
    hasManageView?: boolean;
    hasAchivement?: boolean;
    onEdit?: (params?: any) => void;
    mangeLink?: string;
    achivementLink?: string;
    selectFilterItemValue?: string;
    onSelectFilter?: (params: any) => void;
}