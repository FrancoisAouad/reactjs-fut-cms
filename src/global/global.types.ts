export type Localization = {
  en: string;
  ar: string;
  fr: string;
};

type ComponentAction = {
  onClick?: () => void;
  onChange?: () => void;
  onSubmit?: () => void;
};

export interface GridHeaderProps {
  globalFilter: string;
  selectedItems: never[];
  addActions?: ComponentAction;
  deleteAction?: ComponentAction;
}
