import { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import Header from "../components/Header";
import { ExpenseContext } from "../context/expanseContext";
import { IExpense } from "../context/expanseContext";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarComponent = () => {
    const { expenses } = useContext(ExpenseContext) || { expenses: [] };

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filteredExpenses, setFilteredExpenses] = useState<IExpense[]>([]);

    const openModal = (date: Value) => {
        if (date instanceof Date) {
            setSelectedDate(date);
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDate(null);
    };

    useEffect(() => {
        if (selectedDate) {
            const filtered = expenses.filter(expense => {
                const expenseDate = new Date(expense.date.seconds * 1000); // Convert Firestore Timestamp
                return expenseDate.toDateString() === selectedDate.toDateString();
            });
            setFilteredExpenses(filtered);
        }
    }, [selectedDate, expenses]);

    return (
        <div>
            <Header />
            <div className="calendar-container">
            <h1>Select a Date to get the Expenses</h1>
            <h2>Expenses on {new Date().toLocaleDateString()}</h2>
                <Calendar
                    calendarType="islamic"
                    className="calendar"
                    locale="en-AR"
                    onClickDay={openModal}
                />

                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>&times;</span>
                            {filteredExpenses.length > 0 ? (
                                <ul>
                                    {filteredExpenses.map((expense, index) => (
                                        <li key={index}>
                                            <strong>{expense.title}</strong>: {expense.amount} EGP
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No expenses for this day.</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CalendarComponent;
