import { createContext, ReactNode, useState, useEffect, useCallback } from "react";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp, deleteDoc, doc, getDocs } from "firebase/firestore";

// Expense Interface
export interface IExpense {
    id: string;
    title: string;
    amount: number;
    date: Timestamp;
}

// Context Type
interface ExpenseContextType {
    expenses: IExpense[];
    addExpense: (expense: Omit<IExpense, "id">) => Promise<void>;
    deleteExpense: (id: string) => Promise<void>;
    loading: boolean;
}

export const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider = ({ children }: { children: ReactNode }) => {
    const [expenses, setExpenses] = useState<IExpense[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    // Fetch expenses from Firestore
    const fetchExpenses = useCallback(async () => {
        setLoading(true);
        try {
            const querySnapshot = await getDocs(collection(db, "expenses"));
            const expensesList: IExpense[] = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as IExpense[];

            setExpenses(expensesList);
        } catch (error) {
            console.error("Error fetching expenses:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    // Fetch expenses when provider mounts
    useEffect(() => {
        fetchExpenses();
    }, [fetchExpenses]);

    // Add a new expense
    const addExpense = useCallback(async (newExpense: Omit<IExpense, "id">) => {
        setLoading(true);
        try {
            const docRef = await addDoc(collection(db, "expenses"), newExpense);
            setExpenses((prev) => [...prev, { ...newExpense, id: docRef.id }]);
            console.log("Expense added successfully with id: ", docRef.id);
        } catch (error) {
            console.error("Error adding expense:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    // Delete an expense
    const deleteExpense = useCallback(async (id: string) => {
        setLoading(true);
        try {
            await deleteDoc(doc(db, "expenses", id));
            setExpenses((prev) => prev.filter(expense => expense.id !== id));
        } catch (error) {
            console.error("Error deleting expense:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense, loading }}>
            {children}
        </ExpenseContext.Provider>
    );
};
