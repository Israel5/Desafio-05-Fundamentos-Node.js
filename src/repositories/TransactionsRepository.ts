import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const incomeValue = 0;
    const income = this.transactions.reduce((total, element) => {
      return element.type === 'income' ? total + element.value : total;
    }, incomeValue);

    const outcomeValue = 0;
    const outcome = this.transactions.reduce((total, element) => {
      return element.type === 'outcome' ? total + element.value : total;
    }, outcomeValue);

    return {
      income,
      outcome,
      total: income - outcome,
    };
  }

  public create({ title, type, value }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, type, value });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
