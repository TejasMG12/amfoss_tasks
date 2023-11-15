import java.util.ArrayList;
import java.util.List;

public class primes {
    public static List<Integer> find_primes(int n) {
        boolean[] arr = new boolean[n - 1];
        for (int i = 0; i < n - 1; i++) {
            arr[i] = true;
        }

        for (int p = 2; p * p <= n; p++) {
            if (arr[p - 2]) {
                for (int i = p * p; i <= n; i += p) {
                    arr[i - 2] = false;
                }
            }
        }

        List<Integer> primes = new ArrayList<>();
        for (int i = 2; i <= n; i++) {
            if (arr[i - 2]) {
                primes.add(i);
            }
        }
        return primes;
    }

    public static void main(String[] args) {

        int num = 100;
        List<Integer> primeNumbers = find_primes(num);
        System.out.print("prime numbers less than or equal to" + num + " are:\n ");
        for (int i : primeNumbers) {
            System.out.print(i + ", ");
        }

    }
}
