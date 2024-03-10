
import { redirect } from "next/navigation";
import useAuth from "./useAuth";

interface ProtectedProps {
    children: React.ReactNode;
}


export default function Protected({ children }: ProtectedProps) {
    const isAuthenticated = useAuth()

    return isAuthenticated ? children : redirect("/")
}

