export interface CustomBtn {
  btnType?: "button" | "submit";
  title: string;
  handelBtn?: React.MouseEventHandler<HTMLButtonElement>;
  classbtn: string;
  isDisable?: boolean;
  textStyles?: string;
  rightIcon?: string;
}

export interface SearchManufacture {
  manufacture: string;
  setmanufacture: (manufacture: string) => void;
}
export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
  city_mpg: number;
}
export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}
export interface OptionProps {
  title: string;
  value: string;
}
export interface customFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShoeMoreProps {
  pageNumber: number;
  isNext: boolean;
}
