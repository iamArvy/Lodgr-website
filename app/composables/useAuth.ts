import type { User } from "~/interfaces";

export const useAuth = () => {
  const user = useState<User | null>("user", () => null);
  const router = useRouter();

  const authenticate = (userData: User) => {
    user.value = userData;
    localStorage.setItem("user", JSON.stringify(userData));
  };
  return {
    user,
    authenticate
  }
}