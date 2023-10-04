def find_primes(n)
  arr = Array.new(n -1, true)



  p = 2
  while p**2 <= n
    if arr[p-2]
      for i in (p*p ).step((n+1),p)
         arr[i-2] = false
      end
    end
    p += 1
  end

  primes = (2..n).select { |i| arr[i-2] }
  return primes
end

n=gets.chomp
n = n.to_i
prime_numbers = find_primes(n)
puts ("Prime numbers up to #{limit} are: #{prime_numbers.join(', ')}")
