import React from 'react';
import Expenselist from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => {
    return (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <Expenselist />
    </div>
    )
};

export default ExpenseDashboardPage;