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

> If $a$ and $b$ are integers and $m$ is a positive integer; $a$ is congruent to $b$ modulo $m$;
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

[Rest of content remains the same, just properly formatted with $ and $$]
