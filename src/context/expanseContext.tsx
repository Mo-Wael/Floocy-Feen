import { onAuthStateChanged } from "firebase/auth";
import { createContext, ReactNode, useState, useEffect, useCallback } from "react";
import { db, auth } from "../../firebase";
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
            const user = auth.currentUser;
            if (!user) {
                console.error("User not logged in.");
                return;
            }
    
            console.log("Fetching expenses for user:", user.uid);
            const querySnapshot = await getDocs(collection(db, `expenses/${user.uid}/items`));
    
            const expensesList: IExpense[] = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as IExpense[];
    
            setExpenses(expensesList);
            console.log("Expenses fetched successfully:", expensesList);
        } catch (error) {
            console.error("Error fetching expenses:", error);
        } finally {
            setLoading(false);
        }
    }, []);
    
    

    // Fetch expenses when provider mounts
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchExpenses();
            } else {
                console.error("User is not logged in");
                setExpenses([]);
            }
        });

        return () => unsubscribe();
    }, [fetchExpenses]);


    // Add a new expense
    const addExpense = useCallback(async (newExpense: Omit<IExpense, "id">) => {
        setLoading(true);
        try {
            const user = auth.currentUser;
            if (!user) {
                console.error("No authenticated user found.");
                return;
            }
    
            const expenseRef = collection(db, `expenses/${user.uid}/items`);
            const docRef = await addDoc(expenseRef, newExpense);
    
            setExpenses((prev) => [...prev, { ...newExpense, id: docRef.id }]);
            console.log("Expense successfully added:", docRef.id);
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
            const user = auth.currentUser;
            if (!user) {
                return;
            }
    
            await deleteDoc(doc(db, `expenses/${user.uid}/items`, id));
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
