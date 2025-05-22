import type { Transaction } from '../types';

export function exportToCsv(
  transactions: Transaction[],
  filename = 'transactions.csv',
  onComplete?: () => void
) {
  const headers = ['Type', 'Amount', 'Category', 'Date', 'Notes'];
  const rows = transactions.map(tx => [
    tx.type,
    tx.amount,
    tx.category,
    tx.date,
    `"${tx.notes || ''}"`
  ]);

  const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  onComplete?.();
}
