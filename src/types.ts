export type CategoryType = 'Income' | 'Expense';

export interface Transaction {
  id: string;
  amount: number;
  date: string;
  category: string;
  type: CategoryType;
  notes?: string;
}
