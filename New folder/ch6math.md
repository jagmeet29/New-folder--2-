# Chinese Remainder Theorem

:: :question:

Solve the following system by the Chinese Remainder theorem:

$$
\begin{cases}
x \equiv 2 \pmod{3} \\
x \equiv 3 \pmod{5} \\
x \equiv 2 \pmod{7}
\end{cases}
$$

:::

:: :ok_hand:

## Solution using the Chinese Remainder Theorem:

### Step 1: Identify the coefficients and moduli

$$
\begin{aligned}
a_1 &= 2, & m_1 &= 3 \\
a_2 &= 3, & m_2 &= 5 \\
a_3 &= 2, & m_3 &= 7
\end{aligned}
$$

### Step 2: Calculate the product of all moduli

$$
\begin{aligned}
M &= m_1 \times m_2 \times m_3 \\
&= 3 \times 5 \times 7 \\
&= 105
\end{aligned}
$$

### Step 3: Calculate $M_i = \frac{M}{m_i}$ for each modulus

$$
\begin{aligned}
M_1 &= \frac{M}{m_1} = \frac{105}{3} = 35 \\
M_2 &= \frac{M}{m_2} = \frac{105}{5} = 21 \\
M_3 &= \frac{M}{m_3} = \frac{105}{7} = 15
\end{aligned}
$$

### Step 4: Find the multiplicative inverses

We need to find $y_i$ such that $M_i \cdot y_i \equiv 1 \pmod{m_i}$ for each $i$.

For $y_1$: Solving $35y_1 \equiv 1 \pmod{3}$

$$
\begin{aligned}
35 &\equiv 2 \pmod{3} \\
\text{So } 2y_1 &\equiv 1 \pmod{3}
\end{aligned}
$$

Testing values:
- $y_1 = 2$ works because $2 \cdot 2 = 4 \equiv 1 \pmod{3}$ ✓

For $y_2$: Solving $21y_2 \equiv 1 \pmod{5}$

$$
\begin{aligned}
21 &\equiv 1 \pmod{5} \\
\text{So } y_2 &= 1 \text{ works} ✓
\end{aligned}
$$

For $y_3$: Solving $15y_3 \equiv 1 \pmod{7}$

$$
\begin{aligned}
15 &\equiv 1 \pmod{7} \\
\text{So } y_3 &= 1 \text{ works} ✓
\end{aligned}
$$

### Step 5: Calculate the solution

$$
\begin{aligned}
x &\equiv a_1M_1y_1 + a_2M_2y_2 + a_3M_3y_3  \\
&\equiv 2 \cdot 35 \cdot 2 + 3 \cdot 21 \cdot 1 + 2 \cdot 15 \cdot 1 \\
&\equiv 140 + 63 + 30 \\
&\equiv 233
\end{aligned}
$$

Since $233 = 2 \cdot 105 + 23$:

$$x \equiv 23 \pmod{105}$$

Therefore, the solution to the system of congruences is $x \equiv 23 \pmod{105}$.

:::

:: :question:

Solve the following system by the Chinese Remainder theorem:

$$
\begin{cases}
x \equiv 1 \pmod{2} \\
x \equiv 2 \pmod{3} \\
x \equiv 3 \pmod{5} \\
x \equiv 4 \pmod{11}
\end{cases}
$$

:: : 

:: :ok_hand:

## Solution using the Chinese Remainder Theorem:

### Step 1: Identify the coefficients and moduli [1]

$$
\begin{aligned}
a_1 &= 1, & m_1 &= 2 \\
a_2 &= 2, & m_2 &= 3 \\
a_3 &= 3, & m_3 &= 5 \\
a_4 &= 4, & m_4 &= 11
\end{aligned}
$$

### Step 2: Calculate the product of all moduli [1]

$$
\begin{aligned}
M &= m_1 \times m_2 \times m_3 \times m_4 \\
&= 2 \times 3 \times 5 \times 11 \\
&= 330
\end{aligned}
$$

### Step 3: Calculate $M_i = \frac{M}{m_i}$ for each modulus [2]

$$
\begin{aligned}
M_1 &= \frac{M}{m_1} = \frac{330}{2} = 165 \\
M_2 &= \frac{M}{m_2} = \frac{330}{3} = 110 \\
M_3 &= \frac{M}{m_3} = \frac{330}{5} = 66 \\
M_4 &= \frac{M}{m_4} = \frac{330}{11} = 30
\end{aligned}
$$

### Step 4: Find the multiplicative inverses [2][3]

We need to find $y_i$ such that $M_i \cdot y_i \equiv 1 \pmod{m_i}$ for each $i$.

For $y_1$: Solving $165y_1 \equiv 1 \pmod{2}$

$$
\begin{aligned}
165 &\equiv 1 \pmod{2} \\
\text{So } 1y_1 &\equiv 1 \pmod{2}
\end{aligned}
$$

$y_1 = 1$ works because $1 \cdot 1 = 1 \equiv 1 \pmod{2}$ ✓

For $y_2$: Solving $110y_2 \equiv 1 \pmod{3}$

$$
\begin{aligned}
110 &\equiv 2 \pmod{3} \\
\text{So } 2y_2 &\equiv 1 \pmod{3}
\end{aligned}
$$

Testing values:
- $y_2 = 2$ works because $2 \cdot 2 = 4 \equiv 1 \pmod{3}$ ✓

For $y_3$: Solving $66y_3 \equiv 1 \pmod{5}$

$$
\begin{aligned}
66 &\equiv 1 \pmod{5} \\
\text{So } 1y_3 &\equiv 1 \pmod{5}
\end{aligned}
$$

$y_3 = 1$ works because $1 \cdot 1 = 1 \equiv 1 \pmod{5}$ ✓

For $y_4$: Solving $30y_4 \equiv 1 \pmod{11}$

$$
\begin{aligned}
30 &\equiv 8 \pmod{11} \\
\text{So } 8y_4 &\equiv 1 \pmod{11}
\end{aligned}
$$

Testing values:
- $y_4 = 7$ works because $8 \cdot 7 = 56 \equiv 1 \pmod{11}$ ✓

### Step 5: Calculate the solution [3]

$$
\begin{aligned}
x &\equiv a_1M_1y_1 + a_2M_2y_2 + a_3M_3y_3 + a_4M_4y_4  \\
&\equiv 1 \cdot 165 \cdot 1 + 2 \cdot 110 \cdot 2 + 3 \cdot 66 \cdot 1 + 4 \cdot 30 \cdot 7 \\
&\equiv 165 + 440 + 198 + 840 \\
&\equiv 1643 
\end{aligned}
$$

Since $1643 = 4 \cdot 330 + 323$:

$$x \equiv 323 \pmod{330}$$

Therefore, the solution to the system of congruences is $x \equiv 323 \pmod{330}$.

:: :

:: :question:

Solve the following system by the Chinese Remainder theorem:

$$
\begin{cases}
x \equiv 2 \pmod{3} \\
x \equiv 3 \pmod{5} \\
x \equiv 2 \pmod{7}
\end{cases}
$$

:: :

:: :ok_hand:

## Solution using the Chinese Remainder Theorem:

### Step 1: Identify the coefficients and moduli

$$
\begin{aligned}
a_1 &= 2, & m_1 &= 3 \\
a_2 &= 3, & m_2 &= 5 \\
a_3 &= 2, & m_3 &= 7
\end{aligned}
$$

### Step 2: Calculate the product of all moduli

$$
\begin{aligned}
M &= m_1 \times m_2 \times m_3 \\
&= 3 \times 5 \times 7 \\
&= 105
\end{aligned}
$$

### Step 3: Calculate $M_i = \frac{M}{m_i}$ for each modulus

$$
\begin{aligned}
M_1 &= \frac{M}{m_1} = \frac{105}{3} = 35 \\
M_2 &= \frac{M}{m_2} = \frac{105}{5} = 21 \\
M_3 &= \frac{M}{m_3} = \frac{105}{7} = 15
\end{aligned}
$$

### Step 4: Find the multiplicative inverses

We need to find $y_i$ such that $M_i \cdot y_i \equiv 1 \pmod{m_i}$ for each $i$.

For $y_1$: Solving $35y_1 \equiv 1 \pmod{3}$

$$
\begin{aligned}
35 &\equiv 2 \pmod{3} \\
\text{So } 2y_1 &\equiv 1 \pmod{3}
\end{aligned}
$$

Testing values:
- $y_1 = 2$ works because $2 \cdot 2 = 4 \equiv 1 \pmod{3}$ ✓

For $y_2$: Solving $21y_2 \equiv 1 \pmod{5}$

$$
\begin{aligned}
21 &\equiv 1 \pmod{5} \\
\text{So } y_2 &= 1 \text{ works} ✓
\end{aligned}
$$

For $y_3$: Solving $15y_3 \equiv 1 \pmod{7}$

$$
\begin{aligned}
15 &\equiv 1 \pmod{7} \\
\text{So } y_3 &= 1 \text{ works} ✓
\end{aligned}
$$

### Step 5: Calculate the solution

$$
\begin{aligned}
x &\equiv a_1M_1y_1 + a_2M_2y_2 + a_3M_3y_3 \pmod{M} \\
&\equiv 2 \cdot 35 \cdot 2 + 3 \cdot 21 \cdot 1 + 2 \cdot 15 \cdot 1 \pmod{105} \\
&\equiv 140 + 63 + 30 \pmod{105} \\
&\equiv 233 \pmod{105}
\end{aligned}
$$

Since $233 = 2 \cdot 105 + 23$:

$$x \equiv 23 \pmod{105}$$

Therefore, the solution to the system of congruences is $x \equiv 23 \pmod{105}$.

:: :

---

# Division Algorithm 

$$
a = b\ q+r
$$

Remainder can not be negative

## Deferent Notation 

1. $q=a\ div \ b$

2. $r=a\ (mod \ b)$

> $a \equiv r\ (mod\ b)$

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

# Euclidean Algorithm

> Divident = Divisor $\times$ Quotient + Remainder

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


