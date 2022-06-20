export function printOwing(invoice) {
    printBanner();
    let outstanding = calcOutstanding(invoice);
    recordDueDate(invoice);
    printDetails({invoice, outstanding});
}

const printBanner = () => {
    console.log('***********************');
    console.log('**** Customer Owes ****');
    console.log('***********************');
}

/**
 * 함수내부에서는 변수값 단순하게
 */
const calcOutstanding = (invoice) => {
    return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);
}

const recordDueDate = (invoice) => {
    const today = new Date();
    // 기한
    invoice.dueDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 30
    );
}

const printDetails = ({invoice, outstanding}) => {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
    orders: [{amount: 2}, {amount: 5}],
    customer: '지은',
};
printOwing(invoice);
