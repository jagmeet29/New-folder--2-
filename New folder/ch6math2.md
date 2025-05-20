
# Division Algorithm 
<p align="center">
    <img src="https://raw.githubusercontent.com/jagmeet29/New-folder--2-/main/2025/05/upgit_20250519_1747625349.png" alt="upgit_20250519_1747625349.png" width="200"/>
</p>

$$
a = b\ q+r
$$
where $a$ is the dividend, $b$ is the divisor, $q$ is the quotient, and $r$ is the remainder.

Remainder can not be negative

## Deferent Notation 

1. $q=a\ div \ b$

2. $r=a\ (mod \ b)$

> $a \equiv r\ (mod\ b)$

$\equiv$ is called congruence.

### Example

$101 = 11 \times 9 +2$

1. $9=101 \ div \ 11 $
2. $2=101 \ (mod \ 11)$

:: :question:

$$
13 \ (mod \ 3) =\ ?
$$


:: :

:: :ok_hand:

$$
r=1
$$

:: :


:: :question:

 What are the quotient and remainder when $−11$ is divided by $3$?

:: :

:: :ok_hand:

**Step 1: Understand the Problem**

We need to find the quotient and remainder when $-11$ is divided by $3$.

**Step 2: Set Up the Equation**

Using the division algorithm:
$$
-11 = 3q + r
$$

where $q$ is the quotient and $r$ is the remainder.

**Step 3: Remainder Constraints**

The remainder must satisfy:
$$
0 \leq r < 3
$$

**Step 4: Solve for $q$ and $r$**

Try $q = -4$:
$$
-11 = 3 \times (-4) + r \\
-11 = -12 + r \\
r = 1
$$

$r = 1$ is valid since $0 \leq 1 < 3$.

**Step 5: Verification**

$$
-11 = 3 \times (-4) + 1
$$

**Final Answer:**

- **Quotient:** $-4$
- **Remainder:** $1$

:: :

## Finding the Remainder When Dividing a Negative Number by a Positive Number

The standard approach for finding the remainder when a negative number is divided by a positive number is as follows:

1. **Perform the division** to get a decimal result.
2. **Round down** (take the floor) to get the quotient.
3. **Calculate the remainder** using the formula:
    $$
    \text{dividend} = \text{divisor} \times \text{quotient} + \text{remainder}
    $$

**Example:** Find the remainder when $-36$ is divided by $5$.

- Perform the division: $-36 \div 5 = -7.2$
- Round down: Quotient $q = -8$ (not $-7$)
- Calculate the remainder:
  $$
  \begin{aligned}
  \text{remainder} &= -36 - (5 \times -8) \\
                         &= -36 - (-40) \\
                         &= -36 + 40 \\
                         &= 4
  \end{aligned}
  $$

So, the remainder is $4$.

# Modular Arithmetic

> If $a \ \ b$ are integers and $m$ is a positive integer ; $a$ is congruent to $b$ modulo $m$ ;
>
> If $m$ divides $(a-b)$
> 
> $$
> a \equiv b\ (mod \ m)
> $$
> 

:: :question:

Find out if these are congruent 

$$
17 \equiv 5\ (mod \ 6)\\
24 \equiv 14 (mod \ 6)
$$

:: :

:: :ok_hand:

1. yes
2. No

:: :

## Theorem

> The theorem states that for integers \( a \) and \( b \), and a positive integer \( m \), \( a \equiv b \pmod{m} \) if and only if \( a \mod m = b \mod m \). This means that two integers are congruent modulo \( m \) exactly when they have the same remainder upon division by \( m \).

**Examples:**

1. **Positive Integers:**
   - Let \( a = 7 \), \( b = 12 \), and \( m = 5 \).
     - \( 7 \div 5 = 1 \) with a remainder of \( 2 \).
     - \( 12 \div 5 = 2 \) with a remainder of \( 2 \).
   - Both have the same remainder, so \( 7 \equiv 12 \pmod{5} \).

2. **Negative Numbers:**
   - Let \( a = -8 \), \( b = 2 \), and \( m = 5 \).
     - \( -8 \div 5 = -2 \) with a remainder of \( 2 \).
     - \( 2 \div 5 = 0 \) with a remainder of \( 2 \).
   - Both have the same remainder, so \( -8 \equiv 2 \pmod{5} \).

3. **Zero Remainder:**
   - Let \( a = 8 \), \( b = 12 \), and \( m = 4 \).
     - \( 8 \div 4 = 2 \) with a remainder of \( 0 \).
     - \( 12 \div 4 = 3 \) with a remainder of \( 0 \).
   - Both have the same remainder, so \( 8 \equiv 12 \pmod{4} \).

**Conclusion:**
The theorem asserts an equivalence between congruence modulo \( m \) and having the same remainder upon division by \( m \). This foundational concept in modular arithmetic is crucial for both theoretical mathematics and practical applications, such as cryptography and computer science. Understanding this theorem simplifies computations involving divisibility and ensures correctness in various algorithms and protocols.

:: :question:
Determine whether \( 17 \) is congruent to \( 5 \) modulo \( 6 \) and whether \( 24 \) and \( 14 \) are congruent modulo \( 6 \).
:: :

:: :ok_hand:
**Solution:**

1. For \( 17 \equiv 5 \pmod{6} \):
   - Calculate \( 17 \mod 6 \):
     - \( 17 \div 6 = 2 \) with a remainder of \( 5 \).
   - So, \( 17 \equiv 5 \pmod{6} \) is **true**.

2. For \( 24 \equiv 14 \pmod{6} \):
   - Calculate \( 24 \mod 6 \):
     - \( 24 \div 6 = 4 \) with a remainder of \( 0 \).
   - Calculate \( 14 \mod 6 \):
     - \( 14 \div 6 = 2 \) with a remainder of \( 2 \).
   - Since \( 0 \neq 2 \), \( 24 \equiv 14 \pmod{6} \) is **false**.

:: :

## Theorem

> Let $m$ be a positive integer. The integers $a$ and $b$ are **congruent modulo $m$** if and only if there exists an integer $k$ such that
$$
a = b + km.
$$

**Proof:**

- **($\Rightarrow$)** If $a \equiv b \pmod{m}$, by the definition of congruence, $m$ divides $(a - b)$. That is, there exists an integer $k$ such that
    $$
    a - b = km,
    $$
    so
    $$
    a = b + km.
    $$

- **($\Leftarrow$)** Conversely, if there exists an integer $k$ such that $a = b + km$, then
    $$
    a - b = km,
    $$
    which means $m$ divides $(a - b)$, so $a \equiv b \pmod{m}$.

The set of all integers congruent to an integer $a$ modulo $m$ is called the **congruence class** of $a$ modulo $m$.

## Theorem

> Let $m$ be a positive integer. If $a \equiv b \pmod{m}$ and $c \equiv d \pmod{m}$, then:
> - $a + c \equiv b + d \pmod{m}$
> - $ac \equiv bd \pmod{m}$

**Proof:** 

1. **Addition Property:**
    - Given: $a \equiv b \pmod{m}$ and $c \equiv d \pmod{m}$
    - Then $a = b + sm$ and $c = d + tm$ for some integers $s,t$
    - Adding these equations:
      $$a + c = (b + d) + m(s + t)$$
    - since $a+c$ differs by multiple of $m$
    - Therefore, $a + c \equiv b + d \pmod{m}$

2. **Multiplication Property:**
    - From above, $a = b + sm$ and $c = d + tm$
    - Multiplying:
      $$ac = (b + sm)(d + tm) = bd + m(bt + sd + stm)$$
    - Since $ac$ differs by multiple of $m$
    - Therefore, $ac \equiv bd \pmod{m}$

Thus modular congruence is preserved under addition and multiplication.
**Example:**

Because $7 \equiv 2 \pmod{5}$ and $11 \equiv 1 \pmod{5}$, it follows from Theorem 5 that:

$$
\begin{aligned}
18 = 7 + 11 &\equiv 2 + 1 \equiv 3 \pmod{5} \\
77 = 7 \cdot 11 &\equiv 2 \cdot 1 \equiv 2 \pmod{5}
\end{aligned}
$$
## Important Warnings About Modular Arithmetic

### Division is Not Always Valid
You cannot always divide both sides of a congruence by the same number! This differs from regular equation manipulation.

### Key Limitations:

1. If $ac \equiv bc \pmod{m}$:
    - We cannot necessarily conclude that $a \equiv b \pmod{m}$

2. If $a \equiv b \pmod{m}$ and $c \equiv d \pmod{m}$:
    - The congruence $a^c \equiv b^d \pmod{m}$ may not hold true

### Note
Corollary 2 provides methods to find modular values of:
- Sums 
- Products

using the modular values of individual integers.

# Euclidean Algorithm

> Divident = Divisor $\times$ Quotient + Remainder


**Step-by-Step Explanation and Proof of the Euclidean Algorithm:**

The Euclidean algorithm efficiently finds the greatest common divisor (GCD) of two integers, which is the largest integer that divides both without leaving a remainder. Here's how it works:

1. **Problem Statement:**
   Given two positive integers \( a \) and \( b \), where \( a > b \), find their GCD.

2. **Division Step:**
   Divide \( a \) by \( b \) to obtain:
   \[
   a = bq + r
   \]
   where:
   - \( q \) is the quotient,
   - \( r \) is the remainder, and \( 0 \leq r < b \).

3. **Reduction Step:**
   Replace \( a \) with \( b \), and \( b \) with \( r \). Now, find \( \gcd(b, r) \).

4. **Repeat:**
   Continue this process until the remainder becomes zero.

5. **Termination:**
   The last non-zero remainder in this sequence is the GCD of the original two numbers.

**Example Walkthrough:**

Let's apply the Euclidean algorithm to find \( \gcd(287, 91) \):

1. **First Step:**
   \[
   287 = 91 \times 3 + 14
   \]
   So, \( \gcd(287, 91) = \gcd(91, 14) \).

2. **Second Step:**
   \[
   91 = 14 \times 6 + 7
   \]
   So, \( \gcd(91, 14) = \gcd(14, 7) \).

3. **Third Step:**
   \[
   14 = 7 \times 2 + 0
   \]
   Since the remainder is now zero, the algorithm terminates.

4. **Conclusion:**
   The last non-zero remainder is \( 7 \), so:
   \[
   \gcd(287, 91) = 7
   \]

**Efficiency of the Euclidean Algorithm:**

The Euclidean algorithm is efficient because it reduces the problem size significantly in each step. Instead of dealing with large numbers directly, it breaks down the problem into smaller subproblems, making it feasible to compute the GCD even for very large integers.

:: :question:

Find the GCD of 91 and 287 using Euclidean Algorithm
:: :
:: :ok_hand:


![image-20250516122832023](https://raw.githubusercontent.com/jagmeet29/New-folder--2-/main/2025/05/upgit_20250516_1747378713.png)



$$
\begin{aligned}
287 &= 91 \times 3 + 14 \\
91 &= 14 \times 6 + 7 \\
14 &= 7 \times 2 + 0
\end{aligned}
$$

The GCD is 7.

:: :

:: :question:
Find the GCD of 44 and 662 using Euclidean Algorithm
:: :

:: :ok_hand:

$$
\begin{aligned}
662 &= 44 \times 15 + 2 \\
44 &= 2 \times 22 + 0
\end{aligned}
$$

The GCD is 2.
:: :


Here's an educational explanation of the Caesar Cipher in discrete maths, along with Python code for encryption and decryption:

---

**Caesar Cipher: Encryption and Decryption**

**Summary:**  
The Caesar Cipher is a simple substitution cipher where each letter in the plaintext is shifted by a fixed number (key) to produce the ciphertext. This method was historically used by Julius Caesar with a shift of 3.

**Step-by-Step Explanation:**

1. **Character Substitution:**  
   Each letter is mapped to a numerical value, where 'A' = 0, 'B' = 1, ..., 'Z' = 25.

2. **Encryption Function:**  
   For encryption, apply the formula:  
   `E(x) = (x + key) % 26`  
   Here, `x` is the numerical value of the letter.

3. **Decryption Function:**  
   To decrypt, use:  
   `D(y) = (y - key) % 26`  
   Where `y` is the numerical value of the ciphertext letter.

4. **Modulo Operation:**  
   The modulo operation ensures letters wrap around if they exceed 'Z' or go below 'A'.

**Practical Examples:**

1. **Encryption Example:**  
   Encrypting "MEETYOU IN THE PARK" with a shift of 3 results in "PHHW BRX LQ WKH SDUN".

2. **Decryption Example:**  
   Decrypting "PHHW BRX LQ WKH SDUN" with a shift of 3 returns the original message.

   
Here's a detailed explanation of the **Extended Euclidean Algorithm** and its application in the example from the image:

---

### **1. What is the Extended Euclidean Algorithm?**  
The Extended Euclidean Algorithm is a method to:  
- **Find the GCD** of two integers \( a \) and \( b \).  
- **Find integers \( s \) and \( t \)** such that:  
  \[
  \text{gcd}(a, b) = s \cdot a + t \cdot b
  \]
  This is known as **Bezout's Identity**.  

The algorithm works by **repeatedly applying the Euclidean Algorithm** (which finds the GCD) and **back-substituting** to express the GCD as a linear combination of \( a \) and \( b \).

---

### **2. Example: Compute \( \text{gcd}(198, 102) \) and Find Coefficients \( s \) and \( t \)**  
We are given the equation:  
\[
\text{gcd}(198, 102) = s \cdot 198 + t \cdot 102
\]

#### **Step 1: Apply the Euclidean Algorithm**  
We divide the larger number by the smaller one and repeat:  
1. \( 198 = 1 \cdot 102 + 96 \) (remainder 96)  
2. \( 102 = 1 \cdot 96 + 6 \) (remainder 6)  
3. \( 96 = 16 \cdot 6 + 0 \) (remainder 0)  

**The GCD is the last non-zero remainder**: \( \text{gcd}(198, 102) = 6 \).

---

#### **Step 2: Back-Substitution to Find \( s \) and \( t \)**  
We now work backward through the equations to express \( 6 \) in terms of \( 198 \) and \( 102 \):

1. From Step 2:  
   \[
   6 = 102 - 1 \cdot 96
   \]

2. Substitute \( 96 \) from Step 1 (\( 96 = 198 - 1 \cdot 102 \)):  
   \[
   6 = 102 - 1 \cdot (198 - 1 \cdot 102)
   \]
   Simplify:  
   \[
   6 = 102 - 198 + 102 = 2 \cdot 102 - 1 \cdot 198
   \]

**Final Result**:  
\[
6 = -1 \cdot 198 + 2 \cdot 102
\]

Here:  
- \( s = -1 \) (coefficient of \( 198 \))  
- \( t = 2 \) (coefficient of \( 102 \))  

---

### **3. Key Takeaways**  
- **GCD**: The greatest common divisor of \( 198 \) and \( 102 \) is \( 6 \).  
- **Bezout's Identity**: The GCD can be expressed as a linear combination of the original numbers:  
  \[
  6 = -1 \cdot 198 + 2 \cdot 102
  \]
- **Applications**:  
  - Solving Diophantine equations (e.g., \( ax + by = c \)).  
  - Finding modular inverses (used in cryptography).  

---

### **4. Why This Matters**  
The Extended Euclidean Algorithm is a cornerstone in number theory and has practical uses in:  
- **Cryptography**: For example, in RSA encryption, finding modular inverses is critical.  
- **Computer Science**: Used in algorithms for simplifying fractions, solving systems of equations, etc.  

Let me know if you'd like to see another example or explore applications further! 😊