import { useContext, useState } from "react"
import { ExpenseContext } from "../context/expanseContext";
import { Timestamp } from "firebase/firestore";

const RightSide = () => {
    const expenseContext = useContext(ExpenseContext);
    const [title, setTitle] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);

    // true => negative value, false => positive value
    const [isPaying, setIsPaying] = useState<boolean>(true);

    if (!expenseContext) {
        return <h1 className="right-side">Loading...</h1>;
    }

    const {addExpense, loading} = expenseContext;


    const addExpenseHandler = async () => {
        // console.log("The title will be: ",title, "and the amount will be: ", amount);
        if (title.trim() === '' || amount === 0) {
            alert("Please fill the form correctly");
            return;
        }

        const currentAmount = isPaying ? -Math.abs(amount) : Math.abs(amount);

        const newExpense = {
            title,
            amount: currentAmount,
            date: Timestamp.now(),
        };
        try {
            await addExpense(newExpense);
            console.log("Expense sent to Firestore successfully");
        } catch (error) {
            console.error("Firestore error: ", error);
        }
        setTitle('');
        setAmount(0);
        setIsPaying(true);
    }


    return (
        <div className="right-side">
            <h1>Today<br/>{new Date().toLocaleDateString()}</h1>
            <div className="addExpanse">
                <h2>Add Expanse</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="title">for What?</label>
                    <input type="text" id="title" placeholder="Expanse Name" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label htmlFor="amount">how much?</label>
                    {/* <label htmlFor="pay">Paying (-)</label>
                    <input type="radio" id="pay" name="pay" value={"Deposit"} onChange={e => setAmount(Number(e.target.value) || 0)} />
                    <label htmlFor="save">Saving (+)</label>
                    <input type="radio" id="save" name="save" value={"widthdraw"} onChange={e => setAmount(Number(e.target.value) || 0)} /> */}
                    <label htmlFor="pay">Paying (-)</label>
                    <input type="radio" id="pay" name="expenseType" checked={isPaying} onChange={() => setIsPaying(true)} />
                    <label htmlFor="save">Saving (+)</label>
                    <input type="radio" id="save" name="expenseType" checked={!isPaying} onChange={() => setIsPaying(false)} />
                    <input type="number" id="amount" placeholder="Expanse Value" value={amount} onChange={e => setAmount(Number(e.target.value) || 0)} />
                    <button type="submit" className="addButton" onClick={addExpenseHandler}>{loading ? "Adding📝" : "Add your Expense"}</button>
                </form>
            </div>
        </div>  
    )
}

export default RightSide