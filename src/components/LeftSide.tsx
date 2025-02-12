import { useContext } from "react"
import { ExpenseContext } from "../context/expanseContext"
import { useLanguage } from "../context/LanguageContext";

const LeftSide = () => {
    const {t} = useLanguage();
    const expenseContext = useContext(ExpenseContext);
    
    if (!expenseContext) {
        return <h1 className="left-side">Loading...⌛</h1>
    }
    
    const { expenses, deleteExpense, loading } = expenseContext;
    console.log(expenses);

    if (loading) {
        return <h1 className="left-side">Loading...⌛</h1>
    }

    const totalBalance = expenses.filter((eachExpense) => eachExpense.date.toDate().toDateString() === new Date().toDateString()).reduce((total, current) => total + current.amount, 0);
    const totalDeposit = expenses.filter((eachExpense) => eachExpense.amount > 0 && eachExpense.date.toDate().toDateString() === new Date().toDateString()).reduce((total, current) => total + current.amount, 0);
    const totalWithdraw = expenses.filter((eachExpense) => eachExpense.amount < 0 && eachExpense.date.toDate().toDateString() === new Date().toDateString()).reduce((total, current) => total + Math.abs(current.amount), 0);
    const todayExpanses = expenses.filter((eachExpense) => eachExpense.date.toDate().toDateString() === new Date().toDateString());
    

    return (
        <div className="left-side">
            <div className="topleft">
                <h2>{t("totalBalance")}<br/>{totalBalance}</h2>
                <ul>
                    <li>{t("deposit")}<br/>{totalDeposit}</li>
                    <li>{t("withdraw")}<br/>{totalWithdraw}</li>
                </ul>
            </div>
            <div className="transactions">
                <h2>{t("transactions")}</h2>
                {/* to be filled with transactions data */}
                {/* <ul>
                    <li>buttonTransaction 1</li>
                    <li>Transaction 2</li>
                    <li>Transaction 3</li>
                </ul> */}
                <table>
                    <thead>
                        <tr>
                            <th>{t("transaction")}</th>
                            <th>{t("amount")}</th>
                            <th>{t("cancel")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* 
                        <tr>
                            <td><button type="button">x</button></td>
                            <td>orders</td>
                            <td>50</td>
                        </tr>
                        */}
                        {
                            todayExpanses.map((eachExpense) => (
                            <tr key={eachExpense.id}>
                                <td>{eachExpense.title}</td>
                                <td>{eachExpense.amount}</td>
                                <td><button type="button" onClick={() => deleteExpense(eachExpense.id)}>x</button></td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>  
    )
}

export default LeftSide;